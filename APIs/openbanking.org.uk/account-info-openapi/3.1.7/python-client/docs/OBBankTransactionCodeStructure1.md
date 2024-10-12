# OBBankTransactionCodeStructure1

Set of elements used to fully identify the type of underlying transaction resulting in an entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Specifies the family within a domain. | 
**sub_code** | **str** | Specifies the sub-product family within a specific family. | 

## Example

```python
from openapi_client.models.ob_bank_transaction_code_structure1 import OBBankTransactionCodeStructure1

# TODO update the JSON string below
json = "{}"
# create an instance of OBBankTransactionCodeStructure1 from a JSON string
ob_bank_transaction_code_structure1_instance = OBBankTransactionCodeStructure1.from_json(json)
# print the JSON string representation of the object
print(OBBankTransactionCodeStructure1.to_json())

# convert the object into a dict
ob_bank_transaction_code_structure1_dict = ob_bank_transaction_code_structure1_instance.to_dict()
# create an instance of OBBankTransactionCodeStructure1 from a dict
ob_bank_transaction_code_structure1_from_dict = OBBankTransactionCodeStructure1.from_dict(ob_bank_transaction_code_structure1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


