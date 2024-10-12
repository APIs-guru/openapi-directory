# ChannelLocalization

Channel localization setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The localized strings for channel&#39;s description. | [optional] 
**title** | **str** | The localized strings for channel&#39;s title. | [optional] 

## Example

```python
from openapi_client.models.channel_localization import ChannelLocalization

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelLocalization from a JSON string
channel_localization_instance = ChannelLocalization.from_json(json)
# print the JSON string representation of the object
print(ChannelLocalization.to_json())

# convert the object into a dict
channel_localization_dict = channel_localization_instance.to_dict()
# create an instance of ChannelLocalization from a dict
channel_localization_from_dict = ChannelLocalization.from_dict(channel_localization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


