# LiveChatPollDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**LiveChatPollDetailsPollMetadata**](LiveChatPollDetailsPollMetadata.md) |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.live_chat_poll_details import LiveChatPollDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatPollDetails from a JSON string
live_chat_poll_details_instance = LiveChatPollDetails.from_json(json)
# print the JSON string representation of the object
print(LiveChatPollDetails.to_json())

# convert the object into a dict
live_chat_poll_details_dict = live_chat_poll_details_instance.to_dict()
# create an instance of LiveChatPollDetails from a dict
live_chat_poll_details_from_dict = LiveChatPollDetails.from_dict(live_chat_poll_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


