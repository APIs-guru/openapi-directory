# EcommerceDiscount

An object representing a discount applied to an ecommerce order or product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | The fixed amount of the discount. | [optional] 
**code** | **str** | The code used to apply the discount. | [optional] 
**percentage** | **str** | The percentage of the discount. | [optional] 

## Example

```python
from openapi_client.models.ecommerce_discount import EcommerceDiscount

# TODO update the JSON string below
json = "{}"
# create an instance of EcommerceDiscount from a JSON string
ecommerce_discount_instance = EcommerceDiscount.from_json(json)
# print the JSON string representation of the object
print(EcommerceDiscount.to_json())

# convert the object into a dict
ecommerce_discount_dict = ecommerce_discount_instance.to_dict()
# create an instance of EcommerceDiscount from a dict
ecommerce_discount_from_dict = EcommerceDiscount.from_dict(ecommerce_discount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


