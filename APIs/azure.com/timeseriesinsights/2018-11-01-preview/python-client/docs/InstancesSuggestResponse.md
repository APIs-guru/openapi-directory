# InstancesSuggestResponse

Response of getting suggestions for search for time series instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suggestions** | [**List[InstancesSearchStringSuggestion]**](InstancesSearchStringSuggestion.md) | List of instance suggestions for searching time series models. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instances_suggest_response import InstancesSuggestResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesSuggestResponse from a JSON string
instances_suggest_response_instance = InstancesSuggestResponse.from_json(json)
# print the JSON string representation of the object
print(InstancesSuggestResponse.to_json())

# convert the object into a dict
instances_suggest_response_dict = instances_suggest_response_instance.to_dict()
# create an instance of InstancesSuggestResponse from a dict
instances_suggest_response_from_dict = InstancesSuggestResponse.from_dict(instances_suggest_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


