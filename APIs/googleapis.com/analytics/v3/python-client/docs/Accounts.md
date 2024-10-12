# Accounts

An account collection provides a list of Analytics accounts to which a user has access. The account collection is the entry point to all management information. Each resource in the collection corresponds to a single Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Account]**](Account.md) | A list of accounts. | [optional] 
**items_per_page** | **int** | The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. | [optional] 
**kind** | **str** | Collection type. | [optional] [default to 'analytics#accounts']
**next_link** | **str** | Next link for this account collection. | [optional] 
**previous_link** | **str** | Previous link for this account collection. | [optional] 
**start_index** | **int** | The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. | [optional] 
**total_results** | **int** | The total number of results for the query, regardless of the number of results in the response. | [optional] 
**username** | **str** | Email ID of the authenticated user | [optional] 

## Example

```python
from openapi_client.models.accounts import Accounts

# TODO update the JSON string below
json = "{}"
# create an instance of Accounts from a JSON string
accounts_instance = Accounts.from_json(json)
# print the JSON string representation of the object
print(Accounts.to_json())

# convert the object into a dict
accounts_dict = accounts_instance.to_dict()
# create an instance of Accounts from a dict
accounts_from_dict = Accounts.from_dict(accounts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


