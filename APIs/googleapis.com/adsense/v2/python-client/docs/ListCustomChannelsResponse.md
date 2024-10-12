# ListCustomChannelsResponse

Response definition for the custom channel list rpc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_channels** | [**List[CustomChannel]**](CustomChannel.md) | The custom channels returned in this list response. | [optional] 
**next_page_token** | **str** | Continuation token used to page through alerts. To retrieve the next page of the results, set the next request&#39;s \&quot;page_token\&quot; value to this. | [optional] 

## Example

```python
from openapi_client.models.list_custom_channels_response import ListCustomChannelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCustomChannelsResponse from a JSON string
list_custom_channels_response_instance = ListCustomChannelsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCustomChannelsResponse.to_json())

# convert the object into a dict
list_custom_channels_response_dict = list_custom_channels_response_instance.to_dict()
# create an instance of ListCustomChannelsResponse from a dict
list_custom_channels_response_from_dict = ListCustomChannelsResponse.from_dict(list_custom_channels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


