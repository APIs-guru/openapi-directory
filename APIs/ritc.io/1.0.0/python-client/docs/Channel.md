# Channel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Channel description | [optional] 
**functions** | [**List[Function]**](Function.md) |  | [optional] 
**id** | **str** | Id of channel | [optional] 
**name** | **str** | Channel name | [optional] 
**type** | **object** | Type of channel. Choices are &#39;public&#39; or &#39;private&#39;. Private channels are only viewable within an account, while public channels are viewable to everyone in the system | [optional] 

## Example

```python
from openapi_client.models.channel import Channel

# TODO update the JSON string below
json = "{}"
# create an instance of Channel from a JSON string
channel_instance = Channel.from_json(json)
# print the JSON string representation of the object
print(Channel.to_json())

# convert the object into a dict
channel_dict = channel_instance.to_dict()
# create an instance of Channel from a dict
channel_from_dict = Channel.from_dict(channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


