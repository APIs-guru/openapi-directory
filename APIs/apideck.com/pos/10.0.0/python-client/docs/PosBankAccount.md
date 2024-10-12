# PosBankAccount

Card details for this payment. This field is currently not available. Reach out to our team for more info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_ownership_type** | **str** | The ownership type of the bank account performing the transfer. The type can be &#x60;INDIVIDUAL&#x60;, &#x60;COMPANY&#x60;, or &#x60;UNKNOWN&#x60;. | [optional] 
**ach_details** | [**PosBankAccountAchDetails**](PosBankAccountAchDetails.md) |  | [optional] 
**bank_name** | **str** | The name of the bank associated with the bank account. | [optional] 
**country** | **str** | Country code according to ISO 3166-1 alpha-2. | [optional] 
**fingerprint** | **str** | Uniquely identifies the bank account for this seller and can be used to determine if payments are from the same bank account. | [optional] 
**statement_description** | **str** | The statement description as sent to the bank. | [optional] 
**transfer_type** | **str** | The type of the bank transfer. The type can be &#x60;ACH&#x60; or &#x60;UNKNOWN&#x60;. | [optional] 

## Example

```python
from openapi_client.models.pos_bank_account import PosBankAccount

# TODO update the JSON string below
json = "{}"
# create an instance of PosBankAccount from a JSON string
pos_bank_account_instance = PosBankAccount.from_json(json)
# print the JSON string representation of the object
print(PosBankAccount.to_json())

# convert the object into a dict
pos_bank_account_dict = pos_bank_account_instance.to_dict()
# create an instance of PosBankAccount from a dict
pos_bank_account_from_dict = PosBankAccount.from_dict(pos_bank_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


