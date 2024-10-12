# ListAccountsResponse

List Accounts Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**List[Account]**](Account.md) | List of GTM Accounts that a user has access to. | [optional] 
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 

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


