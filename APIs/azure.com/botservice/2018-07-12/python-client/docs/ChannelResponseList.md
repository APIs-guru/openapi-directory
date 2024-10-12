# ChannelResponseList

The list of bot service channel operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of bot service channel resources. | [optional] 
**value** | [**List[BotChannel]**](BotChannel.md) | Gets the list of bot service channel results and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.channel_response_list import ChannelResponseList

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelResponseList from a JSON string
channel_response_list_instance = ChannelResponseList.from_json(json)
# print the JSON string representation of the object
print(ChannelResponseList.to_json())

# convert the object into a dict
channel_response_list_dict = channel_response_list_instance.to_dict()
# create an instance of ChannelResponseList from a dict
channel_response_list_from_dict = ChannelResponseList.from_dict(channel_response_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


