# LiveChatMessageDeletedDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_message_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.live_chat_message_deleted_details import LiveChatMessageDeletedDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatMessageDeletedDetails from a JSON string
live_chat_message_deleted_details_instance = LiveChatMessageDeletedDetails.from_json(json)
# print the JSON string representation of the object
print(LiveChatMessageDeletedDetails.to_json())

# convert the object into a dict
live_chat_message_deleted_details_dict = live_chat_message_deleted_details_instance.to_dict()
# create an instance of LiveChatMessageDeletedDetails from a dict
live_chat_message_deleted_details_from_dict = LiveChatMessageDeletedDetails.from_dict(live_chat_message_deleted_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


