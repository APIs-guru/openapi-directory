# OrderInfo

This object represents information about an order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | *Optional*. User email | [optional] 
**name** | **str** | *Optional*. User name | [optional] 
**phone_number** | **str** | *Optional*. User&#39;s phone number | [optional] 
**shipping_address** | [**ShippingAddress**](ShippingAddress.md) |  | [optional] 

## Example

```python
from openapi_client.models.order_info import OrderInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OrderInfo from a JSON string
order_info_instance = OrderInfo.from_json(json)
# print the JSON string representation of the object
print(OrderInfo.to_json())

# convert the object into a dict
order_info_dict = order_info_instance.to_dict()
# create an instance of OrderInfo from a dict
order_info_from_dict = OrderInfo.from_dict(order_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


