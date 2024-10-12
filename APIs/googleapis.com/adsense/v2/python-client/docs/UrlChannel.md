# UrlChannel

Representation of a URL channel. URL channels allow you to track the performance of particular pages in your site; see [URL channels](https://support.google.com/adsense/answer/2923836) for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. Resource name of the URL channel. Format: accounts/{account}/adclients/{adclient}/urlchannels/{urlchannel} | [optional] [readonly] 
**reporting_dimension_id** | **str** | Output only. Unique ID of the custom channel as used in the &#x60;URL_CHANNEL_ID&#x60; reporting dimension. | [optional] [readonly] 
**uri_pattern** | **str** | URI pattern of the channel. Does not include \&quot;http://\&quot; or \&quot;https://\&quot;. Example: www.example.com/home | [optional] 

## Example

```python
from openapi_client.models.url_channel import UrlChannel

# TODO update the JSON string below
json = "{}"
# create an instance of UrlChannel from a JSON string
url_channel_instance = UrlChannel.from_json(json)
# print the JSON string representation of the object
print(UrlChannel.to_json())

# convert the object into a dict
url_channel_dict = url_channel_instance.to_dict()
# create an instance of UrlChannel from a dict
url_channel_from_dict = UrlChannel.from_dict(url_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


