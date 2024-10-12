# ListAccountsResponse

Response message for Accounts.ListAccounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**List[Account]**](Account.md) | A collection of accounts to which the user has access. The personal account of the user doing the query will always be the first item of the result, unless it is filtered out. | [optional] 
**next_page_token** | **str** | If the number of accounts exceeds the requested page size, this field is populated with a token to fetch the next page of accounts on a subsequent call to &#x60;accounts.list&#x60;. If there are no more accounts, this field is not present in the response. | [optional] 

## Example

```python
from openapi_client.models.list_accounts_response import ListAccountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAccountsResponse from a JSON string
list_accounts_response_instance = ListAccountsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAccountsResponse.to_json())

# convert the object into a dict
list_accounts_response_dict = list_accounts_response_instance.to_dict()
# create an instance of ListAccountsResponse from a dict
list_accounts_response_from_dict = ListAccountsResponse.from_dict(list_accounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


