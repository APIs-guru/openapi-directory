# UrlChannels


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of this response for caching purposes. | [optional] 
**items** | [**List[UrlChannel]**](UrlChannel.md) | The URL channels returned in this list response. | [optional] 
**kind** | **str** | Kind of list this is, in this case adsensehost#urlChannels. | [optional] [default to 'adsensehost#urlChannels']
**next_page_token** | **str** | Continuation token used to page through URL channels. To retrieve the next page of results, set the next request&#39;s \&quot;pageToken\&quot; value to this. | [optional] 

## Example

```python
from openapi_client.models.url_channels import UrlChannels

# TODO update the JSON string below
json = "{}"
# create an instance of UrlChannels from a JSON string
url_channels_instance = UrlChannels.from_json(json)
# print the JSON string representation of the object
print(UrlChannels.to_json())

# convert the object into a dict
url_channels_dict = url_channels_instance.to_dict()
# create an instance of UrlChannels from a dict
url_channels_from_dict = UrlChannels.from_dict(url_channels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


