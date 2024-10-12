# SettlementTransactionIdentifiers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustment_id** | **str** | The identifier of the adjustments, if it&#39;s available. | [optional] 
**merchant_order_id** | **str** | The merchant provided order ID. | [optional] 
**order_item_id** | **str** | The identifier of the item. | [optional] 
**settlement_entry_id** | **str** | The unique ID of the settlement transaction entry. | [optional] 
**shipment_ids** | **List[str]** | The shipment ids for the item. | [optional] 
**transaction_id** | **str** | The Google transaction ID. | [optional] 

## Example

```python
from openapi_client.models.settlement_transaction_identifiers import SettlementTransactionIdentifiers

# TODO update the JSON string below
json = "{}"
# create an instance of SettlementTransactionIdentifiers from a JSON string
settlement_transaction_identifiers_instance = SettlementTransactionIdentifiers.from_json(json)
# print the JSON string representation of the object
print(SettlementTransactionIdentifiers.to_json())

# convert the object into a dict
settlement_transaction_identifiers_dict = settlement_transaction_identifiers_instance.to_dict()
# create an instance of SettlementTransactionIdentifiers from a dict
settlement_transaction_identifiers_from_dict = SettlementTransactionIdentifiers.from_dict(settlement_transaction_identifiers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


