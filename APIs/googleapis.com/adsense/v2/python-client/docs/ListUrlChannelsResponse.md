# ListUrlChannelsResponse

Response definition for the url channels list rpc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Continuation token used to page through url channels. To retrieve the next page of the results, set the next request&#39;s \&quot;page_token\&quot; value to this. | [optional] 
**url_channels** | [**List[UrlChannel]**](UrlChannel.md) | The url channels returned in this list response. | [optional] 

## Example

```python
from openapi_client.models.list_url_channels_response import ListUrlChannelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUrlChannelsResponse from a JSON string
list_url_channels_response_instance = ListUrlChannelsResponse.from_json(json)
# print the JSON string representation of the object
print(ListUrlChannelsResponse.to_json())

# convert the object into a dict
list_url_channels_response_dict = list_url_channels_response_instance.to_dict()
# create an instance of ListUrlChannelsResponse from a dict
list_url_channels_response_from_dict = ListUrlChannelsResponse.from_dict(list_url_channels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


