# ChannelConversionPings

The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pings** | [**List[ChannelConversionPing]**](ChannelConversionPing.md) | Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping. | [optional] 

## Example

```python
from openapi_client.models.channel_conversion_pings import ChannelConversionPings

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelConversionPings from a JSON string
channel_conversion_pings_instance = ChannelConversionPings.from_json(json)
# print the JSON string representation of the object
print(ChannelConversionPings.to_json())

# convert the object into a dict
channel_conversion_pings_dict = channel_conversion_pings_instance.to_dict()
# create an instance of ChannelConversionPings from a dict
channel_conversion_pings_from_dict = ChannelConversionPings.from_dict(channel_conversion_pings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


