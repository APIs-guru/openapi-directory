# LedgerAccountParentAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_id** | **str** | The human readable display ID used when displaying the parent account | [optional] 
**id** | **str** | The ID of the parent account. | [optional] 
**name** | **str** | The name of the parent account. | [optional] 

## Example

```python
from openapi_client.models.ledger_account_parent_account import LedgerAccountParentAccount

# TODO update the JSON string below
json = "{}"
# create an instance of LedgerAccountParentAccount from a JSON string
ledger_account_parent_account_instance = LedgerAccountParentAccount.from_json(json)
# print the JSON string representation of the object
print(LedgerAccountParentAccount.to_json())

# convert the object into a dict
ledger_account_parent_account_dict = ledger_account_parent_account_instance.to_dict()
# create an instance of LedgerAccountParentAccount from a dict
ledger_account_parent_account_from_dict = LedgerAccountParentAccount.from_dict(ledger_account_parent_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


