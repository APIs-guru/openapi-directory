# CurrencyAttributes

Array of currencies attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Currency category | [optional] 
**code** | **str** | Currency system code | [optional] 
**code_estandards_alpha** | **str** |  | [optional] 
**code_iso_alpha3** | **str** | Currency ISO code | [optional] 
**code_iso_numeric3** | **int** | Currency ISO numeric code | [optional] 
**code_json_alpha** | **str** |  | [optional] 
**created** | **str** | Created date in system (in Unixtime) | [optional] 
**currency_type** | **str** | Type of currencies [national, digital, virtual, metal, energy] | [optional] 
**decimal_e** | **str** | Number of digits after the decimal separator | [optional] 
**icon** | [**CurrencyAttributesIcon**](CurrencyAttributesIcon.md) |  | [optional] 
**issuer** | **str** | Currency&#x60;s issuer | [optional] 
**name** | **str** | Currency description | [optional] 
**native_symbol** | **str** | Currencyâ€™s symbol. In general, only for nationals currencies | [optional] 
**symbol** | **str** | Currencyâ€™s symbol. In general, only for nationals currencies | [optional] 

## Example

```python
from openapi_client.models.currency_attributes import CurrencyAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CurrencyAttributes from a JSON string
currency_attributes_instance = CurrencyAttributes.from_json(json)
# print the JSON string representation of the object
print(CurrencyAttributes.to_json())

# convert the object into a dict
currency_attributes_dict = currency_attributes_instance.to_dict()
# create an instance of CurrencyAttributes from a dict
currency_attributes_from_dict = CurrencyAttributes.from_dict(currency_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


