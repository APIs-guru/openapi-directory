# OrderPickupDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**OrderAddress**](OrderAddress.md) |  | [optional] 
**collectors** | [**List[OrderPickupDetailsCollector]**](OrderPickupDetailsCollector.md) | Collectors authorized to pick up shipment from the pickup location. | [optional] 
**location_id** | **str** | ID of the pickup location. | [optional] 

## Example

```python
from openapi_client.models.order_pickup_details import OrderPickupDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OrderPickupDetails from a JSON string
order_pickup_details_instance = OrderPickupDetails.from_json(json)
# print the JSON string representation of the object
print(OrderPickupDetails.to_json())

# convert the object into a dict
order_pickup_details_dict = order_pickup_details_instance.to_dict()
# create an instance of OrderPickupDetails from a dict
order_pickup_details_from_dict = OrderPickupDetails.from_dict(order_pickup_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


