# SpecsAutoCompleteResponse

Specs auto complete query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terms** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.specs_auto_complete_response import SpecsAutoCompleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SpecsAutoCompleteResponse from a JSON string
specs_auto_complete_response_instance = SpecsAutoCompleteResponse.from_json(json)
# print the JSON string representation of the object
print(SpecsAutoCompleteResponse.to_json())

# convert the object into a dict
specs_auto_complete_response_dict = specs_auto_complete_response_instance.to_dict()
# create an instance of SpecsAutoCompleteResponse from a dict
specs_auto_complete_response_from_dict = SpecsAutoCompleteResponse.from_dict(specs_auto_complete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


