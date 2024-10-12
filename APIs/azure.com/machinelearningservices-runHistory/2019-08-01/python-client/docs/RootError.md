# RootError

The root error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The service-defined error code. Supported error codes: ServiceError, UserError, ValidationError, AzureStorageError, TransientError, RequestThrottled. | [optional] 
**details** | [**List[ErrorDetails]**](ErrorDetails.md) | The related errors that occurred during the request. | [optional] 
**inner_error** | [**InnerErrorResponse**](InnerErrorResponse.md) |  | [optional] 
**message** | **str** | A human-readable representation of the error. | [optional] 
**target** | **str** | The target of the error (e.g., the name of the property in error). | [optional] 

## Example

```python
from openapi_client.models.root_error import RootError

# TODO update the JSON string below
json = "{}"
# create an instance of RootError from a JSON string
root_error_instance = RootError.from_json(json)
# print the JSON string representation of the object
print(RootError.to_json())

# convert the object into a dict
root_error_dict = root_error_instance.to_dict()
# create an instance of RootError from a dict
root_error_from_dict = RootError.from_dict(root_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


