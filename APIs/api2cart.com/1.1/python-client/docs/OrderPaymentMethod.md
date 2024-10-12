# OrderPaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_payment_method import OrderPaymentMethod

# TODO update the JSON string below
json = "{}"
# create an instance of OrderPaymentMethod from a JSON string
order_payment_method_instance = OrderPaymentMethod.from_json(json)
# print the JSON string representation of the object
print(OrderPaymentMethod.to_json())

# convert the object into a dict
order_payment_method_dict = order_payment_method_instance.to_dict()
# create an instance of OrderPaymentMethod from a dict
order_payment_method_from_dict = OrderPaymentMethod.from_dict(order_payment_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


