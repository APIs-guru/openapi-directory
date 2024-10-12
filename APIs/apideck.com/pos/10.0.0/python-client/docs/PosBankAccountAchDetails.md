# PosBankAccountAchDetails

ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number_suffix** | **str** | The last few digits of the bank account number. | [optional] 
**account_type** | **str** | The type of the bank account performing the transfer. The account type can be &#x60;CHECKING&#x60;, &#x60;SAVINGS&#x60;, or &#x60;UNKNOWN&#x60;. | [optional] 
**routing_number** | **str** | The routing number for the bank account. | [optional] 

## Example

```python
from openapi_client.models.pos_bank_account_ach_details import PosBankAccountAchDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PosBankAccountAchDetails from a JSON string
pos_bank_account_ach_details_instance = PosBankAccountAchDetails.from_json(json)
# print the JSON string representation of the object
print(PosBankAccountAchDetails.to_json())

# convert the object into a dict
pos_bank_account_ach_details_dict = pos_bank_account_ach_details_instance.to_dict()
# create an instance of PosBankAccountAchDetails from a dict
pos_bank_account_ach_details_from_dict = PosBankAccountAchDetails.from_dict(pos_bank_account_ach_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


