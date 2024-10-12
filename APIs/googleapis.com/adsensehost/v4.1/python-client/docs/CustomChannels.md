# CustomChannels


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of this response for caching purposes. | [optional] 
**items** | [**List[CustomChannel]**](CustomChannel.md) | The custom channels returned in this list response. | [optional] 
**kind** | **str** | Kind of list this is, in this case adsensehost#customChannels. | [optional] [default to 'adsensehost#customChannels']
**next_page_token** | **str** | Continuation token used to page through custom channels. To retrieve the next page of results, set the next request&#39;s \&quot;pageToken\&quot; value to this. | [optional] 

## Example

```python
from openapi_client.models.custom_channels import CustomChannels

# TODO update the JSON string below
json = "{}"
# create an instance of CustomChannels from a JSON string
custom_channels_instance = CustomChannels.from_json(json)
# print the JSON string representation of the object
print(CustomChannels.to_json())

# convert the object into a dict
custom_channels_dict = custom_channels_instance.to_dict()
# create an instance of CustomChannels from a dict
custom_channels_from_dict = CustomChannels.from_dict(custom_channels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


