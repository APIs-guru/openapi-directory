# ChannelStatistics

Statistics about a channel: number of subscribers, number of videos in the channel, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment_count** | **str** | The number of comments for the channel. | [optional] 
**hidden_subscriber_count** | **bool** | Whether or not the number of subscribers is shown for this user. | [optional] 
**subscriber_count** | **str** | The number of subscribers that the channel has. | [optional] 
**video_count** | **str** | The number of videos uploaded to the channel. | [optional] 
**view_count** | **str** | The number of times the channel has been viewed. | [optional] 

## Example

```python
from openapi_client.models.channel_statistics import ChannelStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelStatistics from a JSON string
channel_statistics_instance = ChannelStatistics.from_json(json)
# print the JSON string representation of the object
print(ChannelStatistics.to_json())

# convert the object into a dict
channel_statistics_dict = channel_statistics_instance.to_dict()
# create an instance of ChannelStatistics from a dict
channel_statistics_from_dict = ChannelStatistics.from_dict(channel_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


