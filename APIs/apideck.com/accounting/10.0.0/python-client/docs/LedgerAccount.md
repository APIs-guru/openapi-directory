# LedgerAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether the account is active or not. | [optional] 
**bank_account** | [**BankAccount**](BankAccount.md) |  | [optional] 
**categories** | [**List[CategoriesInner]**](CategoriesInner.md) | The categories of the account. | [optional] [readonly] 
**classification** | **str** | The classification of account. | [optional] 
**code** | **str** | The code assigned to the account. | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**current_balance** | **float** | The current balance of the account. | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**description** | **str** | The description of the account. | [optional] 
**display_id** | **str** | The human readable display ID used when displaying the account | [optional] 
**fully_qualified_name** | **str** | The fully qualified name of the account. | [optional] 
**header** | **bool** | Whether the account is a header or not. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**last_reconciliation_date** | **date** | Reconciliation Date means the last calendar day of each Reconciliation Period. | [optional] 
**level** | **float** |  | [optional] 
**name** | **str** | The name of the account. | [optional] 
**nominal_code** | **str** | The nominal code of the ledger account. | [optional] 
**opening_balance** | **float** | The opening balance of the account. | [optional] 
**parent_account** | [**LedgerAccountParentAccount**](LedgerAccountParentAccount.md) |  | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**status** | **str** | The status of the account. | [optional] 
**sub_account** | **bool** | Whether the account is a sub account or not. | [optional] 
**sub_accounts** | [**List[SubAccountsInner]**](SubAccountsInner.md) | The sub accounts of the account. | [optional] [readonly] 
**sub_type** | **str** | The sub type of account. | [optional] 
**tax_rate** | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
**tax_type** | **str** | The tax type of the account. | [optional] 
**type** | **str** | The type of account. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ledger_account import LedgerAccount

# TODO update the JSON string below
json = "{}"
# create an instance of LedgerAccount from a JSON string
ledger_account_instance = LedgerAccount.from_json(json)
# print the JSON string representation of the object
print(LedgerAccount.to_json())

# convert the object into a dict
ledger_account_dict = ledger_account_instance.to_dict()
# create an instance of LedgerAccount from a dict
ledger_account_from_dict = LedgerAccount.from_dict(ledger_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


