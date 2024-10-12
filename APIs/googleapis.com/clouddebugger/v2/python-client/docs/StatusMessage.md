# StatusMessage

Represents a contextual status message. The message can indicate an error or informational status, and refer to specific parts of the containing object. For example, the `Breakpoint.status` field can indicate an error referring to the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | [**FormatMessage**](FormatMessage.md) |  | [optional] 
**is_error** | **bool** | Distinguishes errors from informational messages. | [optional] 
**refers_to** | **str** | Reference to which the message applies. | [optional] 

## Example

```python
from openapi_client.models.status_message import StatusMessage

# TODO update the JSON string below
json = "{}"
# create an instance of StatusMessage from a JSON string
status_message_instance = StatusMessage.from_json(json)
# print the JSON string representation of the object
print(StatusMessage.to_json())

# convert the object into a dict
status_message_dict = status_message_instance.to_dict()
# create an instance of StatusMessage from a dict
status_message_from_dict = StatusMessage.from_dict(status_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


