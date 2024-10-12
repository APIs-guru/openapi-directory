# OrderShippmentStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[Error]**](Error.md) |  | [optional] 
**items** | [**List[OrderItemReference]**](OrderItemReference.md) |  | [optional] 
**shipment_id** | **str** | Shippment unique Id | [optional] 
**status** | **str** | Shipment status | [optional] 
**tracking_url** | **str** | Courier tracking URL | [optional] 

## Example

```python
from openapi_client.models.order_shippment_status import OrderShippmentStatus

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShippmentStatus from a JSON string
order_shippment_status_instance = OrderShippmentStatus.from_json(json)
# print the JSON string representation of the object
print(OrderShippmentStatus.to_json())

# convert the object into a dict
order_shippment_status_dict = order_shippment_status_instance.to_dict()
# create an instance of OrderShippmentStatus from a dict
order_shippment_status_from_dict = OrderShippmentStatus.from_dict(order_shippment_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


