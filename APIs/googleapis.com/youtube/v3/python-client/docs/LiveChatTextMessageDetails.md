# LiveChatTextMessageDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_text** | **str** | The user&#39;s message. | [optional] 

## Example

```python
from openapi_client.models.live_chat_text_message_details import LiveChatTextMessageDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatTextMessageDetails from a JSON string
live_chat_text_message_details_instance = LiveChatTextMessageDetails.from_json(json)
# print the JSON string representation of the object
print(LiveChatTextMessageDetails.to_json())

# convert the object into a dict
live_chat_text_message_details_dict = live_chat_text_message_details_instance.to_dict()
# create an instance of LiveChatTextMessageDetails from a dict
live_chat_text_message_details_from_dict = LiveChatTextMessageDetails.from_dict(live_chat_text_message_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


