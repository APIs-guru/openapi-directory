# CustomChannel

Representation of a custom channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether the custom channel is active and collecting data. See https://support.google.com/adsense/answer/10077192. | [optional] 
**display_name** | **str** | Required. Display name of the custom channel. | [optional] 
**name** | **str** | Output only. Resource name of the custom channel. Format: accounts/{account}/adclients/{adclient}/customchannels/{customchannel} | [optional] [readonly] 
**reporting_dimension_id** | **str** | Output only. Unique ID of the custom channel as used in the &#x60;CUSTOM_CHANNEL_ID&#x60; reporting dimension. | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_channel import CustomChannel

# TODO update the JSON string below
json = "{}"
# create an instance of CustomChannel from a JSON string
custom_channel_instance = CustomChannel.from_json(json)
# print the JSON string representation of the object
print(CustomChannel.to_json())

# convert the object into a dict
custom_channel_dict = custom_channel_instance.to_dict()
# create an instance of CustomChannel from a dict
custom_channel_from_dict = CustomChannel.from_dict(custom_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


