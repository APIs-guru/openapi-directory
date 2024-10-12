# ChannelStatus

JSON template for the status part of a channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_linked** | **bool** | If true, then the user is linked to either a YouTube username or G+ account. Otherwise, the user doesn&#39;t have a public YouTube identity. | [optional] 
**long_uploads_status** | **str** | The long uploads status of this channel. See https://support.google.com/youtube/answer/71673 for more information. | [optional] 
**made_for_kids** | **bool** |  | [optional] 
**privacy_status** | **str** | Privacy status of the channel. | [optional] 
**self_declared_made_for_kids** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.channel_status import ChannelStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelStatus from a JSON string
channel_status_instance = ChannelStatus.from_json(json)
# print the JSON string representation of the object
print(ChannelStatus.to_json())

# convert the object into a dict
channel_status_dict = channel_status_instance.to_dict()
# create an instance of ChannelStatus from a dict
channel_status_from_dict = ChannelStatus.from_dict(channel_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


