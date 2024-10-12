# GetMembers200ResponseLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | [**GetMembers200ResponseLinksFirst**](GetMembers200ResponseLinksFirst.md) |  | [optional] 
**next** | [**GetMembers200ResponseLinksNext**](GetMembers200ResponseLinksNext.md) |  | [optional] 
**prev** | [**GetMembers200ResponseLinksPrev**](GetMembers200ResponseLinksPrev.md) |  | [optional] 
**var_self** | [**GetMembers200ResponseLinksSelf**](GetMembers200ResponseLinksSelf.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_members200_response_links import GetMembers200ResponseLinks

# TODO update the JSON string below
json = "{}"
# create an instance of GetMembers200ResponseLinks from a JSON string
get_members200_response_links_instance = GetMembers200ResponseLinks.from_json(json)
# print the JSON string representation of the object
print(GetMembers200ResponseLinks.to_json())

# convert the object into a dict
get_members200_response_links_dict = get_members200_response_links_instance.to_dict()
# create an instance of GetMembers200ResponseLinks from a dict
get_members200_response_links_from_dict = GetMembers200ResponseLinks.from_dict(get_members200_response_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


