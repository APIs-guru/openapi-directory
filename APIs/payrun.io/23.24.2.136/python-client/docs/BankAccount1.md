# BankAccount1

The employers' bank account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | The bank accounts&#39; account name | [optional] 
**account_number** | **str** | The bank accounts&#39; account number | [optional] 
**branch_name** | **str** | The bank accounts&#39; branch name | [optional] 
**reference** | **str** | The bank accounts&#39; reference | [optional] 
**sort_code** | **str** | The bank accounts&#39; sort code | [optional] 

## Example

```python
from openapi_client.models.bank_account1 import BankAccount1

# TODO update the JSON string below
json = "{}"
# create an instance of BankAccount1 from a JSON string
bank_account1_instance = BankAccount1.from_json(json)
# print the JSON string representation of the object
print(BankAccount1.to_json())

# convert the object into a dict
bank_account1_dict = bank_account1_instance.to_dict()
# create an instance of BankAccount1 from a dict
bank_account1_from_dict = BankAccount1.from_dict(bank_account1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


