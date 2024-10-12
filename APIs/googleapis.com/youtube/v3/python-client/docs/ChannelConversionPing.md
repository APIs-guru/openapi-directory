# ChannelConversionPing

Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **str** | Defines the context of the ping. | [optional] 
**conversion_url** | **str** | The url (without the schema) that the player shall send the ping to. It&#39;s at caller&#39;s descretion to decide which schema to use (http vs https) Example of a returned url: //googleads.g.doubleclick.net/pagead/ viewthroughconversion/962985656/?data&#x3D;path%3DtHe_path%3Btype%3D cview%3Butuid%3DGISQtTNGYqaYl4sKxoVvKA&amp;labe&#x3D;default The caller must append biscotti authentication (ms param in case of mobile, for example) to this ping. | [optional] 

## Example

```python
from openapi_client.models.channel_conversion_ping import ChannelConversionPing

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelConversionPing from a JSON string
channel_conversion_ping_instance = ChannelConversionPing.from_json(json)
# print the JSON string representation of the object
print(ChannelConversionPing.to_json())

# convert the object into a dict
channel_conversion_ping_dict = channel_conversion_ping_instance.to_dict()
# create an instance of ChannelConversionPing from a dict
channel_conversion_ping_from_dict = ChannelConversionPing.from_dict(channel_conversion_ping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


