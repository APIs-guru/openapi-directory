# ChannelResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Channel description | [optional] 
**functions** | [**List[Function5]**](Function5.md) |  | [optional] 
**id** | **str** | Id of channel | [optional] 
**name** | **str** | Channel name | [optional] 
**type** | **object** | Type of channel. Choices are &#39;public&#39; or &#39;private&#39;. Private channels are only viewable within an account, while public channels are viewable to everyone | [optional] 

## Example

```python
from openapi_client.models.channel_response import ChannelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelResponse from a JSON string
channel_response_instance = ChannelResponse.from_json(json)
# print the JSON string representation of the object
print(ChannelResponse.to_json())

# convert the object into a dict
channel_response_dict = channel_response_instance.to_dict()
# create an instance of ChannelResponse from a dict
channel_response_from_dict = ChannelResponse.from_dict(channel_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


