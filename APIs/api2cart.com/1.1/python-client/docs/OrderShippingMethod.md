# OrderShippingMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_shipping_method import OrderShippingMethod

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShippingMethod from a JSON string
order_shipping_method_instance = OrderShippingMethod.from_json(json)
# print the JSON string representation of the object
print(OrderShippingMethod.to_json())

# convert the object into a dict
order_shipping_method_dict = order_shipping_method_instance.to_dict()
# create an instance of OrderShippingMethod from a dict
order_shipping_method_from_dict = OrderShippingMethod.from_dict(order_shipping_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


