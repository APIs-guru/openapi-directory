# OBCurrencyExchange5InstructedAmount

Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217. | 
**currency** | **str** | A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 \&quot;Codes for the representation of currencies and funds\&quot;. | 

## Example

```python
from openapi_client.models.ob_currency_exchange5_instructed_amount import OBCurrencyExchange5InstructedAmount

# TODO update the JSON string below
json = "{}"
# create an instance of OBCurrencyExchange5InstructedAmount from a JSON string
ob_currency_exchange5_instructed_amount_instance = OBCurrencyExchange5InstructedAmount.from_json(json)
# print the JSON string representation of the object
print(OBCurrencyExchange5InstructedAmount.to_json())

# convert the object into a dict
ob_currency_exchange5_instructed_amount_dict = ob_currency_exchange5_instructed_amount_instance.to_dict()
# create an instance of OBCurrencyExchange5InstructedAmount from a dict
ob_currency_exchange5_instructed_amount_from_dict = OBCurrencyExchange5InstructedAmount.from_dict(ob_currency_exchange5_instructed_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


