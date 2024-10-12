# ProprietaryBankTransactionCodeStructure1

Set of elements to fully identify a proprietary bank transaction code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Proprietary bank transaction code to identify the underlying transaction. | 
**issuer** | **str** | Identification of the issuer of the proprietary bank transaction code. | [optional] 

## Example

```python
from openapi_client.models.proprietary_bank_transaction_code_structure1 import ProprietaryBankTransactionCodeStructure1

# TODO update the JSON string below
json = "{}"
# create an instance of ProprietaryBankTransactionCodeStructure1 from a JSON string
proprietary_bank_transaction_code_structure1_instance = ProprietaryBankTransactionCodeStructure1.from_json(json)
# print the JSON string representation of the object
print(ProprietaryBankTransactionCodeStructure1.to_json())

# convert the object into a dict
proprietary_bank_transaction_code_structure1_dict = proprietary_bank_transaction_code_structure1_instance.to_dict()
# create an instance of ProprietaryBankTransactionCodeStructure1 from a dict
proprietary_bank_transaction_code_structure1_from_dict = ProprietaryBankTransactionCodeStructure1.from_dict(proprietary_bank_transaction_code_structure1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


