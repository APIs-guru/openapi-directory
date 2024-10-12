# GetConversations200ResponseLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | [**GetConversations200ResponseLinksFirst**](GetConversations200ResponseLinksFirst.md) |  | [optional] 
**next** | [**GetConversations200ResponseLinksNext**](GetConversations200ResponseLinksNext.md) |  | [optional] 
**prev** | [**GetConversations200ResponseLinksPrev**](GetConversations200ResponseLinksPrev.md) |  | [optional] 
**var_self** | [**GetConversations200ResponseLinksSelf**](GetConversations200ResponseLinksSelf.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_conversations200_response_links import GetConversations200ResponseLinks

# TODO update the JSON string below
json = "{}"
# create an instance of GetConversations200ResponseLinks from a JSON string
get_conversations200_response_links_instance = GetConversations200ResponseLinks.from_json(json)
# print the JSON string representation of the object
print(GetConversations200ResponseLinks.to_json())

# convert the object into a dict
get_conversations200_response_links_dict = get_conversations200_response_links_instance.to_dict()
# create an instance of GetConversations200ResponseLinks from a dict
get_conversations200_response_links_from_dict = GetConversations200ResponseLinks.from_dict(get_conversations200_response_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


