# UrlChannel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. | [optional] 
**kind** | **str** | Kind of resource this is, in this case adsense#urlChannel. | [optional] [default to 'adsense#urlChannel']
**url_pattern** | **str** | URL Pattern of this URL channel. Does not include \&quot;http://\&quot; or \&quot;https://\&quot;. Example: www.example.com/home | [optional] 

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


