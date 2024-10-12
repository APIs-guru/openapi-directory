# OBWriteInternationalConsentResponse6DataExchangeRateInformation

Further detailed information on the exchange rate that has been used in the payment transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract_identification** | **str** | Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent. | [optional] 
**exchange_rate** | **float** | The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. | 
**expiration_date_time** | **datetime** | Specified date and time the exchange rate agreement will expire.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**rate_type** | **str** | Specifies the type used to complete the currency exchange. | 
**unit_currency** | **str** | Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP &#x3D; xxxCUR, the unit currency is GBP. | 

## Example

```python
from openapi_client.models.ob_write_international_consent_response6_data_exchange_rate_information import OBWriteInternationalConsentResponse6DataExchangeRateInformation

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteInternationalConsentResponse6DataExchangeRateInformation from a JSON string
ob_write_international_consent_response6_data_exchange_rate_information_instance = OBWriteInternationalConsentResponse6DataExchangeRateInformation.from_json(json)
# print the JSON string representation of the object
print(OBWriteInternationalConsentResponse6DataExchangeRateInformation.to_json())

# convert the object into a dict
ob_write_international_consent_response6_data_exchange_rate_information_dict = ob_write_international_consent_response6_data_exchange_rate_information_instance.to_dict()
# create an instance of OBWriteInternationalConsentResponse6DataExchangeRateInformation from a dict
ob_write_international_consent_response6_data_exchange_rate_information_from_dict = OBWriteInternationalConsentResponse6DataExchangeRateInformation.from_dict(ob_write_international_consent_response6_data_exchange_rate_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


