# GetUsers200ResponseLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | [**GetUsers200ResponseLinksFirst**](GetUsers200ResponseLinksFirst.md) |  | [optional] 
**next** | [**GetUsers200ResponseLinksNext**](GetUsers200ResponseLinksNext.md) |  | [optional] 
**prev** | [**GetUsers200ResponseLinksPrev**](GetUsers200ResponseLinksPrev.md) |  | [optional] 
**var_self** | [**GetUsers200ResponseLinksSelf**](GetUsers200ResponseLinksSelf.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_users200_response_links import GetUsers200ResponseLinks

# TODO update the JSON string below
json = "{}"
# create an instance of GetUsers200ResponseLinks from a JSON string
get_users200_response_links_instance = GetUsers200ResponseLinks.from_json(json)
# print the JSON string representation of the object
print(GetUsers200ResponseLinks.to_json())

# convert the object into a dict
get_users200_response_links_dict = get_users200_response_links_instance.to_dict()
# create an instance of GetUsers200ResponseLinks from a dict
get_users200_response_links_from_dict = GetUsers200ResponseLinks.from_dict(get_users200_response_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


