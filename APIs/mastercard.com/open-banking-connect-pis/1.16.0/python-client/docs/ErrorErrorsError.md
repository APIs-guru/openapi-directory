# ErrorErrorsError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**details** | **str** |  | [optional] 
**reason_code** | **str** |  | [optional] 
**recoverable** | **bool** |  | [optional] 
**source** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.error_errors_error import ErrorErrorsError

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorErrorsError from a JSON string
error_errors_error_instance = ErrorErrorsError.from_json(json)
# print the JSON string representation of the object
print(ErrorErrorsError.to_json())

# convert the object into a dict
error_errors_error_dict = error_errors_error_instance.to_dict()
# create an instance of ErrorErrorsError from a dict
error_errors_error_from_dict = ErrorErrorsError.from_dict(error_errors_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


