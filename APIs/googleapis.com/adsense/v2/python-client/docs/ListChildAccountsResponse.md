# ListChildAccountsResponse

Response definition for the child account list rpc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**List[Account]**](Account.md) | The accounts returned in this list response. | [optional] 
**next_page_token** | **str** | Continuation token used to page through accounts. To retrieve the next page of the results, set the next request&#39;s \&quot;page_token\&quot; value to this. | [optional] 

## Example

```python
from openapi_client.models.list_child_accounts_response import ListChildAccountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListChildAccountsResponse from a JSON string
list_child_accounts_response_instance = ListChildAccountsResponse.from_json(json)
# print the JSON string representation of the object
print(ListChildAccountsResponse.to_json())

# convert the object into a dict
list_child_accounts_response_dict = list_child_accounts_response_instance.to_dict()
# create an instance of ListChildAccountsResponse from a dict
list_child_accounts_response_from_dict = ListChildAccountsResponse.from_dict(list_child_accounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


