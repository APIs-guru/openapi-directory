# ScheduledMessagesResponseMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**ScheduledMessage**](ScheduledMessage.md) |  | [optional] 

## Example

```python
from openapi_client.models.scheduled_messages_response_message import ScheduledMessagesResponseMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledMessagesResponseMessage from a JSON string
scheduled_messages_response_message_instance = ScheduledMessagesResponseMessage.from_json(json)
# print the JSON string representation of the object
print(ScheduledMessagesResponseMessage.to_json())

# convert the object into a dict
scheduled_messages_response_message_dict = scheduled_messages_response_message_instance.to_dict()
# create an instance of ScheduledMessagesResponseMessage from a dict
scheduled_messages_response_message_from_dict = ScheduledMessagesResponseMessage.from_dict(scheduled_messages_response_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


