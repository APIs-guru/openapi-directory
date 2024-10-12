# Order


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cart_id** | **str** |  | [optional] 
**change_date** | **datetime** |  | 
**create_date** | **datetime** |  | 
**currency** | **str** |  | 
**customer** | [**Customer**](Customer.md) |  | 
**items** | [**List[OrderItem]**](OrderItem.md) |  | 
**order_date** | **datetime** |  | 
**order_number** | **str** |  | 
**previous_items** | [**List[OrderItem]**](OrderItem.md) |  | [optional] 
**status** | **str** |  | [default to 'accepted']
**subtotal** | **float** |  | 
**total** | **float** |  | 
**total_discounts** | **float** |  | 
**total_payment_cost** | **float** |  | 
**total_shipping** | **float** |  | 
**total_tax** | **float** |  | 

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


