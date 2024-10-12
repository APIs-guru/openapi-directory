# ChannelInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**last_message_sent_time** | **str** |  | [optional] 
**sent_message_count** | **int** |  | [optional] 
**start_time** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.channel_instance import ChannelInstance

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelInstance from a JSON string
channel_instance_instance = ChannelInstance.from_json(json)
# print the JSON string representation of the object
print(ChannelInstance.to_json())

# convert the object into a dict
channel_instance_dict = channel_instance_instance.to_dict()
# create an instance of ChannelInstance from a dict
channel_instance_from_dict = ChannelInstance.from_dict(channel_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


