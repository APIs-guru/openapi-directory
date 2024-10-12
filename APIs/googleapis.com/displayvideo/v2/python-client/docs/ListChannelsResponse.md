# ListChannelsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | [**List[Channel]**](Channel.md) | The list of channels. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListChannels&#x60; method to retrieve the next page of results. | [optional] 

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


