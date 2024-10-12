# ChannelBrandingSettings

Branding properties of a YouTube channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelSettings**](ChannelSettings.md) |  | [optional] 
**hints** | [**List[PropertyValue]**](PropertyValue.md) | Additional experimental branding properties. | [optional] 
**image** | [**ImageSettings**](ImageSettings.md) |  | [optional] 
**watch** | [**WatchSettings**](WatchSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.channel_branding_settings import ChannelBrandingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelBrandingSettings from a JSON string
channel_branding_settings_instance = ChannelBrandingSettings.from_json(json)
# print the JSON string representation of the object
print(ChannelBrandingSettings.to_json())

# convert the object into a dict
channel_branding_settings_dict = channel_branding_settings_instance.to_dict()
# create an instance of ChannelBrandingSettings from a dict
channel_branding_settings_from_dict = ChannelBrandingSettings.from_dict(channel_branding_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


