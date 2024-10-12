# LiveChatNewSponsorDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_upgrade** | **bool** | If the viewer just had upgraded from a lower level. For viewers that were not members at the time of purchase, this field is false. | [optional] 
**member_level_name** | **str** | The name of the Level that the viewer just had joined. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn&#39;t filled. | [optional] 

## Example

```python
from openapi_client.models.live_chat_new_sponsor_details import LiveChatNewSponsorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatNewSponsorDetails from a JSON string
live_chat_new_sponsor_details_instance = LiveChatNewSponsorDetails.from_json(json)
# print the JSON string representation of the object
print(LiveChatNewSponsorDetails.to_json())

# convert the object into a dict
live_chat_new_sponsor_details_dict = live_chat_new_sponsor_details_instance.to_dict()
# create an instance of LiveChatNewSponsorDetails from a dict
live_chat_new_sponsor_details_from_dict = LiveChatNewSponsorDetails.from_dict(live_chat_new_sponsor_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


