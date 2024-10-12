# AccountListResult

The result of a request to list machine learning team accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next list of machine learning team accounts. | [optional] 
**value** | [**List[Account]**](Account.md) | The list of machine learning team accounts. Since this list may be incomplete, the nextLink field should be used to request the next list of machine learning team accounts. | [optional] 

## Example

```python
from openapi_client.models.account_list_result import AccountListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AccountListResult from a JSON string
account_list_result_instance = AccountListResult.from_json(json)
# print the JSON string representation of the object
print(AccountListResult.to_json())

# convert the object into a dict
account_list_result_dict = account_list_result_instance.to_dict()
# create an instance of AccountListResult from a dict
account_list_result_from_dict = AccountListResult.from_dict(account_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


