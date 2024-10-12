# ChannelContentOwnerDetails

The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_owner** | **str** | The ID of the content owner linked to the channel. | [optional] 
**time_linked** | **datetime** | The date and time when the channel was linked to the content owner. | [optional] 

## Example

```python
from openapi_client.models.channel_content_owner_details import ChannelContentOwnerDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelContentOwnerDetails from a JSON string
channel_content_owner_details_instance = ChannelContentOwnerDetails.from_json(json)
# print the JSON string representation of the object
print(ChannelContentOwnerDetails.to_json())

# convert the object into a dict
channel_content_owner_details_dict = channel_content_owner_details_instance.to_dict()
# create an instance of ChannelContentOwnerDetails from a dict
channel_content_owner_details_from_dict = ChannelContentOwnerDetails.from_dict(channel_content_owner_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


