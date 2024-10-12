# BooleanResolutionResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_class** | **str** |  | [optional] 
**confirmation_required** | **object** |  | [optional] 
**success** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.boolean_resolution_result import BooleanResolutionResult

# TODO update the JSON string below
json = "{}"
# create an instance of BooleanResolutionResult from a JSON string
boolean_resolution_result_instance = BooleanResolutionResult.from_json(json)
# print the JSON string representation of the object
print(BooleanResolutionResult.to_json())

# convert the object into a dict
boolean_resolution_result_dict = boolean_resolution_result_instance.to_dict()
# create an instance of BooleanResolutionResult from a dict
boolean_resolution_result_from_dict = BooleanResolutionResult.from_dict(boolean_resolution_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


