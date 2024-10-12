# BankAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | The name which you used in opening your bank account. | [optional] 
**account_number** | **str** | A bank account number is a number that is tied to your bank account. If you have several bank accounts, such as personal, joint, business (and so on), each account will have a different account number. | [optional] 
**account_type** | **str** | The type of bank account. | [optional] 
**bank_code** | **str** | A bank code is a code assigned by a central bank, a bank supervisory body or a Bankers Association in a country to all its licensed member banks or financial institutions. | [optional] 
**bank_name** | **str** | The name of the bank | [optional] 
**bic** | **str** | The Bank Identifier Code (BIC). | [optional] 
**branch_identifier** | **str** | A branch identifier is a unique identifier for a branch of a bank or financial institution. | [optional] 
**bsb_number** | **str** | A BSB is a 6 digit numeric code used for identifying the branch of an Australian or New Zealand bank or financial institution. | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**iban** | **str** | The International Bank Account Number (IBAN). | [optional] 
**routing_number** | **str** | A routing number is a nine-digit code used to identify a financial institution in the United States. | [optional] 

## Example

```python
from openapi_client.models.bank_account import BankAccount

# TODO update the JSON string below
json = "{}"
# create an instance of BankAccount from a JSON string
bank_account_instance = BankAccount.from_json(json)
# print the JSON string representation of the object
print(BankAccount.to_json())

# convert the object into a dict
bank_account_dict = bank_account_instance.to_dict()
# create an instance of BankAccount from a dict
bank_account_from_dict = BankAccount.from_dict(bank_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


