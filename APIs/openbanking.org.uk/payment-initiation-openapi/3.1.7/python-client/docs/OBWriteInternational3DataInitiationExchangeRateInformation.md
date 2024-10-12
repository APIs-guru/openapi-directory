# OBWriteInternational3DataInitiationExchangeRateInformation

Provides details on the currency exchange rate and contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract_identification** | **str** | Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent. | [optional] 
**exchange_rate** | **float** | The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. | [optional] 
**rate_type** | **str** | Specifies the type used to complete the currency exchange. | 
**unit_currency** | **str** | Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP &#x3D; xxxCUR, the unit currency is GBP. | 

## Example

```python
from openapi_client.models.ob_write_international3_data_initiation_exchange_rate_information import OBWriteInternational3DataInitiationExchangeRateInformation

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteInternational3DataInitiationExchangeRateInformation from a JSON string
ob_write_international3_data_initiation_exchange_rate_information_instance = OBWriteInternational3DataInitiationExchangeRateInformation.from_json(json)
# print the JSON string representation of the object
print(OBWriteInternational3DataInitiationExchangeRateInformation.to_json())

# convert the object into a dict
ob_write_international3_data_initiation_exchange_rate_information_dict = ob_write_international3_data_initiation_exchange_rate_information_instance.to_dict()
# create an instance of OBWriteInternational3DataInitiationExchangeRateInformation from a dict
ob_write_international3_data_initiation_exchange_rate_information_from_dict = OBWriteInternational3DataInitiationExchangeRateInformation.from_dict(ob_write_international3_data_initiation_exchange_rate_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


