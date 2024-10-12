# ErrorSender

Invalid sender

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_sender import ErrorSender

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorSender from a JSON string
error_sender_instance = ErrorSender.from_json(json)
# print the JSON string representation of the object
print(ErrorSender.to_json())

# convert the object into a dict
error_sender_dict = error_sender_instance.to_dict()
# create an instance of ErrorSender from a dict
error_sender_from_dict = ErrorSender.from_dict(error_sender_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


