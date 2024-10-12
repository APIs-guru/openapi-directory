# GetAllAccounts200ResponseLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | [**GetAllAccounts200ResponseLinksFirst**](GetAllAccounts200ResponseLinksFirst.md) |  | [optional] 
**last** | [**GetAllAccounts200ResponseLinksLast**](GetAllAccounts200ResponseLinksLast.md) |  | [optional] 
**next** | [**GetAllAccounts200ResponseLinksNext**](GetAllAccounts200ResponseLinksNext.md) |  | [optional] 
**prev** | [**GetAllAccounts200ResponseLinksFirst**](GetAllAccounts200ResponseLinksFirst.md) |  | [optional] 
**var_self** | [**GetAllAccounts200ResponseLinksFirst**](GetAllAccounts200ResponseLinksFirst.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_all_accounts200_response_links import GetAllAccounts200ResponseLinks

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllAccounts200ResponseLinks from a JSON string
get_all_accounts200_response_links_instance = GetAllAccounts200ResponseLinks.from_json(json)
# print the JSON string representation of the object
print(GetAllAccounts200ResponseLinks.to_json())

# convert the object into a dict
get_all_accounts200_response_links_dict = get_all_accounts200_response_links_instance.to_dict()
# create an instance of GetAllAccounts200ResponseLinks from a dict
get_all_accounts200_response_links_from_dict = GetAllAccounts200ResponseLinks.from_dict(get_all_accounts200_response_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


