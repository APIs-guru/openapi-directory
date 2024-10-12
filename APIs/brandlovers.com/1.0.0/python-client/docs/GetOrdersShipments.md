# GetOrdersShipments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**List[Metadata]**](Metadata.md) | Response payload | [optional] 
**shipments** | [**List[OrderShippmentStatus]**](OrderShippmentStatus.md) | Order Shippment Status | [optional] 

## Example

```python
from openapi_client.models.get_orders_shipments import GetOrdersShipments

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrdersShipments from a JSON string
get_orders_shipments_instance = GetOrdersShipments.from_json(json)
# print the JSON string representation of the object
print(GetOrdersShipments.to_json())

# convert the object into a dict
get_orders_shipments_dict = get_orders_shipments_instance.to_dict()
# create an instance of GetOrdersShipments from a dict
get_orders_shipments_from_dict = GetOrdersShipments.from_dict(get_orders_shipments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


