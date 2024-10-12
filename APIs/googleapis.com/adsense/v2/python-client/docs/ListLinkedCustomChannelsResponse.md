# ListLinkedCustomChannelsResponse

Response definition for the custom channels linked to an adunit list rpc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_channels** | [**List[CustomChannel]**](CustomChannel.md) | The custom channels returned in this list response. | [optional] 
**next_page_token** | **str** | Continuation token used to page through alerts. To retrieve the next page of the results, set the next request&#39;s \&quot;page_token\&quot; value to this. | [optional] 

## Example

```python
from openapi_client.models.list_linked_custom_channels_response import ListLinkedCustomChannelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLinkedCustomChannelsResponse from a JSON string
list_linked_custom_channels_response_instance = ListLinkedCustomChannelsResponse.from_json(json)
# print the JSON string representation of the object
print(ListLinkedCustomChannelsResponse.to_json())

# convert the object into a dict
list_linked_custom_channels_response_dict = list_linked_custom_channels_response_instance.to_dict()
# create an instance of ListLinkedCustomChannelsResponse from a dict
list_linked_custom_channels_response_from_dict = ListLinkedCustomChannelsResponse.from_dict(list_linked_custom_channels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


