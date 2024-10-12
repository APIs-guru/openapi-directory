# LinkedLedgerAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code assigned to the account. | [optional] 
**id** | **str** | The unique identifier for the account. | [optional] 
**name** | **str** | The name of the account. | [optional] [readonly] 
**nominal_code** | **str** | The nominal code of the account. | [optional] 

## Example

```python
from openapi_client.models.linked_ledger_account import LinkedLedgerAccount

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedLedgerAccount from a JSON string
linked_ledger_account_instance = LinkedLedgerAccount.from_json(json)
# print the JSON string representation of the object
print(LinkedLedgerAccount.to_json())

# convert the object into a dict
linked_ledger_account_dict = linked_ledger_account_instance.to_dict()
# create an instance of LinkedLedgerAccount from a dict
linked_ledger_account_from_dict = LinkedLedgerAccount.from_dict(linked_ledger_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


