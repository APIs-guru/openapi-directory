# PriceAmount

The price represented as a number and currency.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The currency of the price. | [optional] 
**value** | **str** | The price represented as a number. | [optional] 

## Example

```python
from openapi_client.models.price_amount import PriceAmount

# TODO update the JSON string below
json = "{}"
# create an instance of PriceAmount from a JSON string
price_amount_instance = PriceAmount.from_json(json)
# print the JSON string representation of the object
print(PriceAmount.to_json())

# convert the object into a dict
price_amount_dict = price_amount_instance.to_dict()
# create an instance of PriceAmount from a dict
price_amount_from_dict = PriceAmount.from_dict(price_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


