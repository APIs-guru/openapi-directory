# ErrorUnauthorizedInvalidApplication

Invalid Application Type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | [optional] 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_unauthorized_invalid_application import ErrorUnauthorizedInvalidApplication

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorUnauthorizedInvalidApplication from a JSON string
error_unauthorized_invalid_application_instance = ErrorUnauthorizedInvalidApplication.from_json(json)
# print the JSON string representation of the object
print(ErrorUnauthorizedInvalidApplication.to_json())

# convert the object into a dict
error_unauthorized_invalid_application_dict = error_unauthorized_invalid_application_instance.to_dict()
# create an instance of ErrorUnauthorizedInvalidApplication from a dict
error_unauthorized_invalid_application_from_dict = ErrorUnauthorizedInvalidApplication.from_dict(error_unauthorized_invalid_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


