# ErrorMessageType

Invalid message type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_message_type import ErrorMessageType

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorMessageType from a JSON string
error_message_type_instance = ErrorMessageType.from_json(json)
# print the JSON string representation of the object
print(ErrorMessageType.to_json())

# convert the object into a dict
error_message_type_dict = error_message_type_instance.to_dict()
# create an instance of ErrorMessageType from a dict
error_message_type_from_dict = ErrorMessageType.from_dict(error_message_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


