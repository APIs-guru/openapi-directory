# ChannelPriceInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sms_per_message** | **int** |  | [optional] 
**voice_per_minute** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.channel_price_info import ChannelPriceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelPriceInfo from a JSON string
channel_price_info_instance = ChannelPriceInfo.from_json(json)
# print the JSON string representation of the object
print(ChannelPriceInfo.to_json())

# convert the object into a dict
channel_price_info_dict = channel_price_info_instance.to_dict()
# create an instance of ChannelPriceInfo from a dict
channel_price_info_from_dict = ChannelPriceInfo.from_dict(channel_price_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


