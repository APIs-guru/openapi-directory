# ChannelList

The list of the EngagementFabric channels

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Channel]**](Channel.md) | EngagementFabric channels | [optional] 

## Example

```python
from openapi_client.models.channel_list import ChannelList

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelList from a JSON string
channel_list_instance = ChannelList.from_json(json)
# print the JSON string representation of the object
print(ChannelList.to_json())

# convert the object into a dict
channel_list_dict = channel_list_instance.to_dict()
# create an instance of ChannelList from a dict
channel_list_from_dict = ChannelList.from_dict(channel_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


