# SettlementTransaction

Settlement transactions give a detailed breakdown of the settlement report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**SettlementTransactionAmount**](SettlementTransactionAmount.md) |  | [optional] 
**identifiers** | [**SettlementTransactionIdentifiers**](SettlementTransactionIdentifiers.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#settlementTransaction&#x60;\&quot; | [optional] 
**transaction** | [**SettlementTransactionTransaction**](SettlementTransactionTransaction.md) |  | [optional] 

## Example

```python
from openapi_client.models.settlement_transaction import SettlementTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of SettlementTransaction from a JSON string
settlement_transaction_instance = SettlementTransaction.from_json(json)
# print the JSON string representation of the object
print(SettlementTransaction.to_json())

# convert the object into a dict
settlement_transaction_dict = settlement_transaction_instance.to_dict()
# create an instance of SettlementTransaction from a dict
settlement_transaction_from_dict = SettlementTransaction.from_dict(settlement_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


