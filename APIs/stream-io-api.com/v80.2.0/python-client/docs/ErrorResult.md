# ErrorResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **object** |  | 
**stacktrace** | **str** |  | [optional] 
**type** | **str** |  | 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.error_result import ErrorResult

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorResult from a JSON string
error_result_instance = ErrorResult.from_json(json)
# print the JSON string representation of the object
print(ErrorResult.to_json())

# convert the object into a dict
error_result_dict = error_result_instance.to_dict()
# create an instance of ErrorResult from a dict
error_result_from_dict = ErrorResult.from_dict(error_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


