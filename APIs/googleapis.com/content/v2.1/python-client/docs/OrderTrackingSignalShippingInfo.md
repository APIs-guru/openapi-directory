# OrderTrackingSignalShippingInfo

The shipping information for the order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual_delivery_time** | **datetime** |  | [optional] 
**carrier_name** | **str** | The name of the shipping carrier for the delivery. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time. | [optional] 
**carrier_service_name** | **str** | The service type for fulfillment, e.g., GROUND, FIRST_CLASS, etc. | [optional] 
**earliest_delivery_promise_time** | **datetime** |  | [optional] 
**latest_delivery_promise_time** | **datetime** |  | [optional] 
**origin_postal_code** | **str** | The origin postal code, as a continuous string without spaces or dashes, e.g. \&quot;95016\&quot;. This field will be anonymized in returned OrderTrackingSignal creation response. | [optional] 
**origin_region_code** | **str** | The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping origin. | [optional] 
**shipment_id** | **str** | Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response. | [optional] 
**shipped_time** | **datetime** |  | [optional] 
**shipping_status** | **str** | The status of the shipment. | [optional] 
**tracking_id** | **str** | The tracking ID of the shipment. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time. | [optional] 

## Example

```python
from openapi_client.models.order_tracking_signal_shipping_info import OrderTrackingSignalShippingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OrderTrackingSignalShippingInfo from a JSON string
order_tracking_signal_shipping_info_instance = OrderTrackingSignalShippingInfo.from_json(json)
# print the JSON string representation of the object
print(OrderTrackingSignalShippingInfo.to_json())

# convert the object into a dict
order_tracking_signal_shipping_info_dict = order_tracking_signal_shipping_info_instance.to_dict()
# create an instance of OrderTrackingSignalShippingInfo from a dict
order_tracking_signal_shipping_info_from_dict = OrderTrackingSignalShippingInfo.from_dict(order_tracking_signal_shipping_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


