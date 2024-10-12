# PriceRecord

A price record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_price** | **float** | Base price. | [optional] 
**currency_code** | **str** | ISO 4217 currency code. | [optional] 
**taxes_and_fees** | **float** | Taxes and fees. | [optional] 
**time** | **str** | Timestamp of this price record. | [optional] 

## Example

```python
from openapi_client.models.price_record import PriceRecord

# TODO update the JSON string below
json = "{}"
# create an instance of PriceRecord from a JSON string
price_record_instance = PriceRecord.from_json(json)
# print the JSON string representation of the object
print(PriceRecord.to_json())

# convert the object into a dict
price_record_dict = price_record_instance.to_dict()
# create an instance of PriceRecord from a dict
price_record_from_dict = PriceRecord.from_dict(price_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


