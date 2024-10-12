# Order

An order contains all of the relevant information about a confirmed order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_contact_email** | **str** | Customer&#39;s email address. | [optional] 
**customer_name** | **str** | Customer&#39;s name. | [optional] 
**id** | **int** | Unique identifier for this order. Reference should be displayed and used for lookups instead of this field. | [optional] 
**notes** | **str** | The notes field that was submitted with this order. | [optional] 
**prints** | [**List[OrderPrint]**](OrderPrint.md) |  | [optional] 
**reference** | **str** | Unique identifier for this order. Used to retrieve info for a specific order from /order/{order_id}. | [optional] 
**ship_by** | **str** | Planned ship date for this order. | [optional] 
**shipping_address** | [**ShippingAddress**](ShippingAddress.md) |  | [optional] 

## Example

```python
from openapi_client.models.order import Order

# TODO update the JSON string below
json = "{}"
# create an instance of Order from a JSON string
order_instance = Order.from_json(json)
# print the JSON string representation of the object
print(Order.to_json())

# convert the object into a dict
order_dict = order_instance.to_dict()
# create an instance of Order from a dict
order_from_dict = Order.from_dict(order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


