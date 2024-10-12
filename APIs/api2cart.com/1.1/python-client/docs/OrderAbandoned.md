# OrderAbandoned


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**basket_id** | **str** |  | [optional] 
**basket_url** | **str** |  | [optional] 
**created_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**customer** | [**BaseCustomer**](BaseCustomer.md) |  | [optional] 
**id** | **str** |  | [optional] 
**modified_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**order_products** | [**List[OrderItem]**](OrderItem.md) |  | [optional] 
**totals** | [**OrderTotals**](OrderTotals.md) |  | [optional] 

## Example

```python
from openapi_client.models.order_abandoned import OrderAbandoned

# TODO update the JSON string below
json = "{}"
# create an instance of OrderAbandoned from a JSON string
order_abandoned_instance = OrderAbandoned.from_json(json)
# print the JSON string representation of the object
print(OrderAbandoned.to_json())

# convert the object into a dict
order_abandoned_dict = order_abandoned_instance.to_dict()
# create an instance of OrderAbandoned from a dict
order_abandoned_from_dict = OrderAbandoned.from_dict(order_abandoned_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


