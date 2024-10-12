# ChannelProperties

The EngagementFabric channel properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_functions** | **List[str]** | The functions to be enabled for the channel | [optional] 
**channel_type** | **str** | The channel type | 
**credentials** | **Dict[str, str]** | The channel credentials | [optional] 

## Example

```python
from openapi_client.models.channel_properties import ChannelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelProperties from a JSON string
channel_properties_instance = ChannelProperties.from_json(json)
# print the JSON string representation of the object
print(ChannelProperties.to_json())

# convert the object into a dict
channel_properties_dict = channel_properties_instance.to_dict()
# create an instance of ChannelProperties from a dict
channel_properties_from_dict = ChannelProperties.from_dict(channel_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


