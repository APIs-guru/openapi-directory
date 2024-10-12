# LiveChatPollDetailsPollMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | [**List[LiveChatPollDetailsPollMetadataPollOption]**](LiveChatPollDetailsPollMetadataPollOption.md) | The options will be returned in the order that is displayed in 1P | [optional] 
**question_text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.live_chat_poll_details_poll_metadata import LiveChatPollDetailsPollMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatPollDetailsPollMetadata from a JSON string
live_chat_poll_details_poll_metadata_instance = LiveChatPollDetailsPollMetadata.from_json(json)
# print the JSON string representation of the object
print(LiveChatPollDetailsPollMetadata.to_json())

# convert the object into a dict
live_chat_poll_details_poll_metadata_dict = live_chat_poll_details_poll_metadata_instance.to_dict()
# create an instance of LiveChatPollDetailsPollMetadata from a dict
live_chat_poll_details_poll_metadata_from_dict = LiveChatPollDetailsPollMetadata.from_dict(live_chat_poll_details_poll_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


