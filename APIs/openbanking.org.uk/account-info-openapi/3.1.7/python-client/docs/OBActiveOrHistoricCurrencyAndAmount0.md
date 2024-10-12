# OBActiveOrHistoricCurrencyAndAmount0

The amount of the most recent direct debit collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217. | 
**currency** | **str** | A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 \&quot;Codes for the representation of currencies and funds\&quot;. | 

## Example

```python
from openapi_client.models.ob_active_or_historic_currency_and_amount0 import OBActiveOrHistoricCurrencyAndAmount0

# TODO update the JSON string below
json = "{}"
# create an instance of OBActiveOrHistoricCurrencyAndAmount0 from a JSON string
ob_active_or_historic_currency_and_amount0_instance = OBActiveOrHistoricCurrencyAndAmount0.from_json(json)
# print the JSON string representation of the object
print(OBActiveOrHistoricCurrencyAndAmount0.to_json())

# convert the object into a dict
ob_active_or_historic_currency_and_amount0_dict = ob_active_or_historic_currency_and_amount0_instance.to_dict()
# create an instance of OBActiveOrHistoricCurrencyAndAmount0 from a dict
ob_active_or_historic_currency_and_amount0_from_dict = OBActiveOrHistoricCurrencyAndAmount0.from_dict(ob_active_or_historic_currency_and_amount0_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


