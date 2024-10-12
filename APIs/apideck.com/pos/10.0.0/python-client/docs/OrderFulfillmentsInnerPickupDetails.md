# OrderFulfillmentsInnerPickupDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted_at** | **datetime** |  | [optional] [readonly] 
**auto_complete_duration** | **str** | The duration of time after which an open and accepted pickup fulfillment is automatically moved to the COMPLETED state. The duration must be in RFC 3339 format (for example, &#39;P1W3D&#39;). | [optional] 
**cancel_reason** | **str** | A description of why the pickup was canceled. | [optional] 
**canceled_at** | **datetime** | Indicating when the fulfillment was canceled. The timestamp must be in RFC 3339 format (for example, \&quot;2016-09-04T23:59:33.123Z\&quot;). | [optional] 
**curbside_pickup_details** | [**OrderFulfillmentsInnerPickupDetailsCurbsidePickupDetails**](OrderFulfillmentsInnerPickupDetailsCurbsidePickupDetails.md) |  | [optional] 
**expired_at** | **datetime** | Indicating when the fulfillment expired. The timestamp must be in RFC 3339 format (for example, \&quot;2016-09-04T23:59:33.123Z\&quot;). | [optional] 
**expires_at** | **datetime** | Indicating when this fulfillment expires if it is not accepted. The timestamp must be in RFC 3339 format (for example, \&quot;2016-09-04T23:59:33.123Z\&quot;). The expiration time can only be set up to 7 days in the future. If &#x60;expires_at&#x60; is not set, this pickup fulfillment is automatically accepted when  placed. | [optional] 
**is_curbside_pickup** | **bool** | If set to &#x60;true&#x60;, indicates that this pickup order is for curbside pickup, not in-store pickup. | [optional] 
**note** | **str** | A note meant to provide additional instructions about the pickup fulfillment displayed in the Square Point of Sale application and set by the API. | [optional] 
**picked_up_at** | **datetime** | Indicating when the fulfillment was picked up by the recipient. The timestamp must be in RFC 3339 format (for example, \&quot;2016-09-04T23:59:33.123Z\&quot;). | [optional] 
**pickup_at** | **datetime** | The timestamp that represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g.,  \&quot;2016-09-04T23:59:33.123Z\&quot;.  For fulfillments with the schedule type &#x60;ASAP&#x60;, this is automatically set to the current time plus the expected duration to prepare the fulfillment. | [optional] 
**pickup_window_duration** | **str** | The window of time in which the order should be picked up after the &#x60;pickup_at&#x60; timestamp. Must be in RFC 3339 duration format, e.g., \&quot;P1W3D\&quot;. Can be used as an informational guideline for merchants. | [optional] 
**placed_at** | **datetime** | Indicating when the fulfillment was placed. The timestamp must be in RFC 3339 format (for example, \&quot;2016-09-04T23:59:33.123Z\&quot;). | [optional] 
**prep_time_duration** | **str** | The duration of time it takes to prepare this fulfillment. The duration must be in RFC 3339 format (for example, \&quot;P1W3D\&quot;). | [optional] 
**ready_at** | **datetime** | Indicating when the fulfillment is marked as ready for pickup. The timestamp must be in RFC 3339 format (for example, \&quot;2016-09-04T23:59:33.123Z\&quot;). | [optional] 
**recipient** | [**OrderFulfillmentsInnerPickupDetailsRecipient**](OrderFulfillmentsInnerPickupDetailsRecipient.md) |  | [optional] 
**rejected_at** | **datetime** | Indicating when the fulfillment was rejected. The timestamp must be in RFC 3339 format (for example, \&quot;2016-09-04T23:59:33.123Z\&quot;). | [optional] 
**schedule_type** | **str** | The schedule type of the pickup fulfillment. | [optional] 

## Example

```python
from openapi_client.models.order_fulfillments_inner_pickup_details import OrderFulfillmentsInnerPickupDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFulfillmentsInnerPickupDetails from a JSON string
order_fulfillments_inner_pickup_details_instance = OrderFulfillmentsInnerPickupDetails.from_json(json)
# print the JSON string representation of the object
print(OrderFulfillmentsInnerPickupDetails.to_json())

# convert the object into a dict
order_fulfillments_inner_pickup_details_dict = order_fulfillments_inner_pickup_details_instance.to_dict()
# create an instance of OrderFulfillmentsInnerPickupDetails from a dict
order_fulfillments_inner_pickup_details_from_dict = OrderFulfillmentsInnerPickupDetails.from_dict(order_fulfillments_inner_pickup_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


