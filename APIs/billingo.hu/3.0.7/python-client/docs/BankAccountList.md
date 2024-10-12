# BankAccountList

A object with a data property that contains an array of up to limit bank accounts. Each entry in the array is a separate bank account object. If no more bank accounts are available, the resulting array will be empty.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_page** | **int** |  | [optional] 
**data** | [**List[BankAccount]**](BankAccount.md) |  | [optional] 
**last_page** | **int** |  | [optional] 
**next_page_url** | **str** |  | [optional] 
**per_page** | **int** |  | [optional] 
**prev_page_url** | **str** |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.bank_account_list import BankAccountList

# TODO update the JSON string below
json = "{}"
# create an instance of BankAccountList from a JSON string
bank_account_list_instance = BankAccountList.from_json(json)
# print the JSON string representation of the object
print(BankAccountList.to_json())

# convert the object into a dict
bank_account_list_dict = bank_account_list_instance.to_dict()
# create an instance of BankAccountList from a dict
bank_account_list_from_dict = BankAccountList.from_dict(bank_account_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


