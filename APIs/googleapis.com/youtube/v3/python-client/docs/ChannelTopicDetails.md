# ChannelTopicDetails

Freebase topic information related to the channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic_categories** | **List[str]** | A list of Wikipedia URLs that describe the channel&#39;s content. | [optional] 
**topic_ids** | **List[str]** | A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the Freebase Topic API. | [optional] 

## Example

```python
from openapi_client.models.channel_topic_details import ChannelTopicDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelTopicDetails from a JSON string
channel_topic_details_instance = ChannelTopicDetails.from_json(json)
# print the JSON string representation of the object
print(ChannelTopicDetails.to_json())

# convert the object into a dict
channel_topic_details_dict = channel_topic_details_instance.to_dict()
# create an instance of ChannelTopicDetails from a dict
channel_topic_details_from_dict = ChannelTopicDetails.from_dict(channel_topic_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


