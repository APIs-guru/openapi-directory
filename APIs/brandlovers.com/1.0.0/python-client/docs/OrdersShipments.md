# OrdersShipments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipments** | [**List[OrderShippment]**](OrderShippment.md) |  | [optional] 

## Example

```python
from openapi_client.models.orders_shipments import OrdersShipments

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersShipments from a JSON string
orders_shipments_instance = OrdersShipments.from_json(json)
# print the JSON string representation of the object
print(OrdersShipments.to_json())

# convert the object into a dict
orders_shipments_dict = orders_shipments_instance.to_dict()
# create an instance of OrdersShipments from a dict
orders_shipments_from_dict = OrdersShipments.from_dict(orders_shipments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


