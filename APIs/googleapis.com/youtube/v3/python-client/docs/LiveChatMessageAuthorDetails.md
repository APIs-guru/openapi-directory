# LiveChatMessageAuthorDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** | The YouTube channel ID. | [optional] 
**channel_url** | **str** | The channel&#39;s URL. | [optional] 
**display_name** | **str** | The channel&#39;s display name. | [optional] 
**is_chat_moderator** | **bool** | Whether the author is a moderator of the live chat. | [optional] 
**is_chat_owner** | **bool** | Whether the author is the owner of the live chat. | [optional] 
**is_chat_sponsor** | **bool** | Whether the author is a sponsor of the live chat. | [optional] 
**is_verified** | **bool** | Whether the author&#39;s identity has been verified by YouTube. | [optional] 
**profile_image_url** | **str** | The channels&#39;s avatar URL. | [optional] 

## Example

```python
from openapi_client.models.live_chat_message_author_details import LiveChatMessageAuthorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatMessageAuthorDetails from a JSON string
live_chat_message_author_details_instance = LiveChatMessageAuthorDetails.from_json(json)
# print the JSON string representation of the object
print(LiveChatMessageAuthorDetails.to_json())

# convert the object into a dict
live_chat_message_author_details_dict = live_chat_message_author_details_instance.to_dict()
# create an instance of LiveChatMessageAuthorDetails from a dict
live_chat_message_author_details_from_dict = LiveChatMessageAuthorDetails.from_dict(live_chat_message_author_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


