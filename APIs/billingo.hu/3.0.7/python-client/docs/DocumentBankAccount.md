# DocumentBankAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** |  | 
**account_number_iban** | **str** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**swift** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.document_bank_account import DocumentBankAccount

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentBankAccount from a JSON string
document_bank_account_instance = DocumentBankAccount.from_json(json)
# print the JSON string representation of the object
print(DocumentBankAccount.to_json())

# convert the object into a dict
document_bank_account_dict = document_bank_account_instance.to_dict()
# create an instance of DocumentBankAccount from a dict
document_bank_account_from_dict = DocumentBankAccount.from_dict(document_bank_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


