# OrderPickupDetailsCollector


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the person picking up the shipment. | [optional] 
**phone_number** | **str** | Phone number of the person picking up the shipment. | [optional] 

## Example

```python
from openapi_client.models.order_pickup_details_collector import OrderPickupDetailsCollector

# TODO update the JSON string below
json = "{}"
# create an instance of OrderPickupDetailsCollector from a JSON string
order_pickup_details_collector_instance = OrderPickupDetailsCollector.from_json(json)
# print the JSON string representation of the object
print(OrderPickupDetailsCollector.to_json())

# convert the object into a dict
order_pickup_details_collector_dict = order_pickup_details_collector_instance.to_dict()
# create an instance of OrderPickupDetailsCollector from a dict
order_pickup_details_collector_from_dict = OrderPickupDetailsCollector.from_dict(order_pickup_details_collector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


