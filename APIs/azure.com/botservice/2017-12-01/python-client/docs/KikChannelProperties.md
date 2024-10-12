# KikChannelProperties

The parameters to provide for the Kik channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | Kik API key. Value only returned through POST to the action Channel List API, otherwise empty. | 
**is_enabled** | **bool** | Whether this channel is enabled for the bot | 
**is_validated** | **bool** | Whether this channel is validated for the bot | [optional] 
**user_name** | **str** | The Kik user name | 

## Example

```python
from openapi_client.models.kik_channel_properties import KikChannelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of KikChannelProperties from a JSON string
kik_channel_properties_instance = KikChannelProperties.from_json(json)
# print the JSON string representation of the object
print(KikChannelProperties.to_json())

# convert the object into a dict
kik_channel_properties_dict = kik_channel_properties_instance.to_dict()
# create an instance of KikChannelProperties from a dict
kik_channel_properties_from_dict = KikChannelProperties.from_dict(kik_channel_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


