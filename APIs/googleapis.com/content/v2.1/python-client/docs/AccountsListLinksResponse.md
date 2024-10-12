# AccountsListLinksResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#accountsListLinksResponse&#x60;\&quot;. | [optional] 
**links** | [**List[LinkedAccount]**](LinkedAccount.md) | The list of available links. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of links. | [optional] 

## Example

```python
from openapi_client.models.accounts_list_links_response import AccountsListLinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsListLinksResponse from a JSON string
accounts_list_links_response_instance = AccountsListLinksResponse.from_json(json)
# print the JSON string representation of the object
print(AccountsListLinksResponse.to_json())

# convert the object into a dict
accounts_list_links_response_dict = accounts_list_links_response_instance.to_dict()
# create an instance of AccountsListLinksResponse from a dict
accounts_list_links_response_from_dict = AccountsListLinksResponse.from_dict(accounts_list_links_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


