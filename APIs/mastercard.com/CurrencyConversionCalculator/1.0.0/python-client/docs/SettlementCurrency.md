# SettlementCurrency


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencies** | [**List[Currency]**](Currency.md) |  | [optional] 

## Example

```python
from openapi_client.models.settlement_currency import SettlementCurrency

# TODO update the JSON string below
json = "{}"
# create an instance of SettlementCurrency from a JSON string
settlement_currency_instance = SettlementCurrency.from_json(json)
# print the JSON string representation of the object
print(SettlementCurrency.to_json())

# convert the object into a dict
settlement_currency_dict = settlement_currency_instance.to_dict()
# create an instance of SettlementCurrency from a dict
settlement_currency_from_dict = SettlementCurrency.from_dict(settlement_currency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


