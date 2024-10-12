# ListChannelsResponse

Response message for ListChannels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | [**List[Channel]**](Channel.md) | The list of channels. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_channels_response import ListChannelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListChannelsResponse from a JSON string
list_channels_response_instance = ListChannelsResponse.from_json(json)
# print the JSON string representation of the object
print(ListChannelsResponse.to_json())

# convert the object into a dict
list_channels_response_dict = list_channels_response_instance.to_dict()
# create an instance of ListChannelsResponse from a dict
list_channels_response_from_dict = ListChannelsResponse.from_dict(list_channels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


