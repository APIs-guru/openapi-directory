# OBActiveOrHistoricCurrencyAndAmount11

The amount of the last (most recent) Standing Order instruction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217. | 
**currency** | **str** | A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 \&quot;Codes for the representation of currencies and funds\&quot;. | 

## Example

```python
from openapi_client.models.ob_active_or_historic_currency_and_amount11 import OBActiveOrHistoricCurrencyAndAmount11

# TODO update the JSON string below
json = "{}"
# create an instance of OBActiveOrHistoricCurrencyAndAmount11 from a JSON string
ob_active_or_historic_currency_and_amount11_instance = OBActiveOrHistoricCurrencyAndAmount11.from_json(json)
# print the JSON string representation of the object
print(OBActiveOrHistoricCurrencyAndAmount11.to_json())

# convert the object into a dict
ob_active_or_historic_currency_and_amount11_dict = ob_active_or_historic_currency_and_amount11_instance.to_dict()
# create an instance of OBActiveOrHistoricCurrencyAndAmount11 from a dict
ob_active_or_historic_currency_and_amount11_from_dict = OBActiveOrHistoricCurrencyAndAmount11.from_dict(ob_active_or_historic_currency_and_amount11_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


