# CurrencyIssuer

Currency Issuer. 'Only for virtual currency' 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CurrencyIssuertData**](CurrencyIssuertData.md) |  | [optional] 
**links** | [**CurrencyIssuerLinks**](CurrencyIssuerLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.currency_issuer import CurrencyIssuer

# TODO update the JSON string below
json = "{}"
# create an instance of CurrencyIssuer from a JSON string
currency_issuer_instance = CurrencyIssuer.from_json(json)
# print the JSON string representation of the object
print(CurrencyIssuer.to_json())

# convert the object into a dict
currency_issuer_dict = currency_issuer_instance.to_dict()
# create an instance of CurrencyIssuer from a dict
currency_issuer_from_dict = CurrencyIssuer.from_dict(currency_issuer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


