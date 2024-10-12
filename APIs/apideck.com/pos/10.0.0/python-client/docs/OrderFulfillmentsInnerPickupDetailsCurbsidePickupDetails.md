# OrderFulfillmentsInnerPickupDetailsCurbsidePickupDetails

Specific details for curbside pickup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyer_arrived_at** | **datetime** | Indicating when the buyer arrived and is waiting for pickup. The timestamp must be in RFC 3339 format (for example, \&quot;2016-09-04T23:59:33.123Z\&quot;). | [optional] 
**curbside_details** | **str** | Specific details for curbside pickup, such as parking number and vehicle model. | [optional] 

## Example

```python
from openapi_client.models.order_fulfillments_inner_pickup_details_curbside_pickup_details import OrderFulfillmentsInnerPickupDetailsCurbsidePickupDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFulfillmentsInnerPickupDetailsCurbsidePickupDetails from a JSON string
order_fulfillments_inner_pickup_details_curbside_pickup_details_instance = OrderFulfillmentsInnerPickupDetailsCurbsidePickupDetails.from_json(json)
# print the JSON string representation of the object
print(OrderFulfillmentsInnerPickupDetailsCurbsidePickupDetails.to_json())

# convert the object into a dict
order_fulfillments_inner_pickup_details_curbside_pickup_details_dict = order_fulfillments_inner_pickup_details_curbside_pickup_details_instance.to_dict()
# create an instance of OrderFulfillmentsInnerPickupDetailsCurbsidePickupDetails from a dict
order_fulfillments_inner_pickup_details_curbside_pickup_details_from_dict = OrderFulfillmentsInnerPickupDetailsCurbsidePickupDetails.from_dict(order_fulfillments_inner_pickup_details_curbside_pickup_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


