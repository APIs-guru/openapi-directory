# CurrencyIssuertData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Issuer ID | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.currency_issuert_data import CurrencyIssuertData

# TODO update the JSON string below
json = "{}"
# create an instance of CurrencyIssuertData from a JSON string
currency_issuert_data_instance = CurrencyIssuertData.from_json(json)
# print the JSON string representation of the object
print(CurrencyIssuertData.to_json())

# convert the object into a dict
currency_issuert_data_dict = currency_issuert_data_instance.to_dict()
# create an instance of CurrencyIssuertData from a dict
currency_issuert_data_from_dict = CurrencyIssuertData.from_dict(currency_issuert_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


