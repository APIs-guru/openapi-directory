# FluxSuggestion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**params** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.flux_suggestion import FluxSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of FluxSuggestion from a JSON string
flux_suggestion_instance = FluxSuggestion.from_json(json)
# print the JSON string representation of the object
print(FluxSuggestion.to_json())

# convert the object into a dict
flux_suggestion_dict = flux_suggestion_instance.to_dict()
# create an instance of FluxSuggestion from a dict
flux_suggestion_from_dict = FluxSuggestion.from_dict(flux_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


