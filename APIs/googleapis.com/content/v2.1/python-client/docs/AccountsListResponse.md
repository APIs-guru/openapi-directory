# AccountsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#accountsListResponse&#x60;\&quot;. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of accounts. | [optional] 
**resources** | [**List[Account]**](Account.md) |  | [optional] 

## Example

```python
from openapi_client.models.accounts_list_response import AccountsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsListResponse from a JSON string
accounts_list_response_instance = AccountsListResponse.from_json(json)
# print the JSON string representation of the object
print(AccountsListResponse.to_json())

# convert the object into a dict
accounts_list_response_dict = accounts_list_response_instance.to_dict()
# create an instance of AccountsListResponse from a dict
accounts_list_response_from_dict = AccountsListResponse.from_dict(accounts_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


