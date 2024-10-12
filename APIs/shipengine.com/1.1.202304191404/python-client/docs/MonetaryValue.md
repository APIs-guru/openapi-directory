# MonetaryValue

A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The monetary amount, in the specified currency. | 
**currency** | **str** | The currencies that are supported by ShipEngine are the ones that specified by ISO 4217: https://www.iso.org/iso-4217-currency-codes.html  | 

## Example

```python
from openapi_client.models.monetary_value import MonetaryValue

# TODO update the JSON string below
json = "{}"
# create an instance of MonetaryValue from a JSON string
monetary_value_instance = MonetaryValue.from_json(json)
# print the JSON string representation of the object
print(MonetaryValue.to_json())

# convert the object into a dict
monetary_value_dict = monetary_value_instance.to_dict()
# create an instance of MonetaryValue from a dict
monetary_value_from_dict = MonetaryValue.from_dict(monetary_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


