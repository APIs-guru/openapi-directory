# SandboxBankAccountInfo

General account information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_sub_type** | **str** | Account&#39;s sub-type (ChargeCard, CreditCard, CurrentAccount ...) | 
**account_type** | **str** | Account&#39;s type (Business, Personal) | 
**alias** | **str** | Account&#39;s alias | [optional] 
**available_balance** | **float** | Account&#39;s available balance | [optional] 
**currency** | **str** | Currency (EUR, USD ...) | 
**description** | **str** | Account&#39;s description | [optional] 
**iban** | **str** | Account&#39;s IBAN | 
**ledger_balance** | **float** | Account&#39;s ledger balance | [optional] 
**opening_date** | **datetime** | Account&#39;s opening date | [optional] 
**overdraft_limit** | **float** | Account&#39;s overdraft limit | [optional] 

## Example

```python
from openapi_client.models.sandbox_bank_account_info import SandboxBankAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SandboxBankAccountInfo from a JSON string
sandbox_bank_account_info_instance = SandboxBankAccountInfo.from_json(json)
# print the JSON string representation of the object
print(SandboxBankAccountInfo.to_json())

# convert the object into a dict
sandbox_bank_account_info_dict = sandbox_bank_account_info_instance.to_dict()
# create an instance of SandboxBankAccountInfo from a dict
sandbox_bank_account_info_from_dict = SandboxBankAccountInfo.from_dict(sandbox_bank_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


