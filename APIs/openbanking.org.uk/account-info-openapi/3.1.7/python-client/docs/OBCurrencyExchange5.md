# OBCurrencyExchange5

Set of elements used to provide details on the currency exchange.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract_identification** | **str** | Unique identification to unambiguously identify the foreign exchange contract. | [optional] 
**exchange_rate** | **float** | Factor used to convert an amount from one currency into another. This reflects the price at which one currency was bought with another currency. Usage: ExchangeRate expresses the ratio between UnitCurrency and QuotedCurrency (ExchangeRate &#x3D; UnitCurrency/QuotedCurrency). | 
**instructed_amount** | [**OBCurrencyExchange5InstructedAmount**](OBCurrencyExchange5InstructedAmount.md) |  | [optional] 
**quotation_date** | **datetime** | Date and time at which an exchange rate is quoted.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**source_currency** | **str** | Currency from which an amount is to be converted in a currency conversion. | 
**target_currency** | **str** | Currency into which an amount is to be converted in a currency conversion. | [optional] 
**unit_currency** | **str** | Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP &#x3D; xxxCUR, the unit currency is GBP. | [optional] 

## Example

```python
from openapi_client.models.ob_currency_exchange5 import OBCurrencyExchange5

# TODO update the JSON string below
json = "{}"
# create an instance of OBCurrencyExchange5 from a JSON string
ob_currency_exchange5_instance = OBCurrencyExchange5.from_json(json)
# print the JSON string representation of the object
print(OBCurrencyExchange5.to_json())

# convert the object into a dict
ob_currency_exchange5_dict = ob_currency_exchange5_instance.to_dict()
# create an instance of OBCurrencyExchange5 from a dict
ob_currency_exchange5_from_dict = OBCurrencyExchange5.from_dict(ob_currency_exchange5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


