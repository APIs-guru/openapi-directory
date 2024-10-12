# ListChannelsResponse

The response message for the `ListChannels` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | [**List[Channel]**](Channel.md) | The requested channels, up to the number specified in &#x60;page_size&#x60;. | [optional] 
**next_page_token** | **str** | A page token that can be sent to &#x60;ListChannels&#x60; to request the next page. If this is empty, then there are no more pages. | [optional] 
**unreachable** | **List[str]** | Unreachable resources, if any. | [optional] 

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


