# ProductAddShippingDetailsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipping_cost** | **float** |  | [optional] 
**shipping_service** | **str** |  | [optional] 
**shipping_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_add_shipping_details_inner import ProductAddShippingDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductAddShippingDetailsInner from a JSON string
product_add_shipping_details_inner_instance = ProductAddShippingDetailsInner.from_json(json)
# print the JSON string representation of the object
print(ProductAddShippingDetailsInner.to_json())

# convert the object into a dict
product_add_shipping_details_inner_dict = product_add_shipping_details_inner_instance.to_dict()
# create an instance of ProductAddShippingDetailsInner from a dict
product_add_shipping_details_inner_from_dict = ProductAddShippingDetailsInner.from_dict(product_add_shipping_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


