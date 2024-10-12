# GetTrackingLogFromLabelResponseBody

A get tracking log from label response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual_delivery_date** | **datetime** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.  | [optional] 
**carrier_code** | **str** | A [shipping carrier](https://www.shipengine.com/docs/carriers/setup/), such as &#x60;fedex&#x60;, &#x60;dhl_express&#x60;, &#x60;stamps_com&#x60;, etc.  | [optional] 
**carrier_detail_code** | **str** | Carrier detail code | [optional] [readonly] 
**carrier_id** | **str** | A string that uniquely identifies a ShipEngine resource, such as a carrier, label, shipment, etc. | [optional] 
**carrier_status_code** | **str** | Carrier status code | [readonly] 
**carrier_status_description** | **str** | carrier status description | [optional] [readonly] 
**estimated_delivery_date** | **datetime** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.  | 
**events** | [**List[TrackEvent]**](TrackEvent.md) | The events that have occured during the lifetime of this tracking number. | [readonly] 
**exception_description** | **str** | Exception description | [optional] [readonly] 
**ship_date** | **datetime** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.  | [optional] 
**status_code** | [**StatusCode**](StatusCode.md) |  | 
**status_description** | **str** | Status description | [optional] [readonly] 
**tracking_number** | **str** | A tracking number for a package. The format depends on the carrier. | 
**tracking_url** | **str** | Carrier Tracking Url, if available | [optional] [readonly] 

## Example

```python
from openapi_client.models.get_tracking_log_from_label_response_body import GetTrackingLogFromLabelResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of GetTrackingLogFromLabelResponseBody from a JSON string
get_tracking_log_from_label_response_body_instance = GetTrackingLogFromLabelResponseBody.from_json(json)
# print the JSON string representation of the object
print(GetTrackingLogFromLabelResponseBody.to_json())

# convert the object into a dict
get_tracking_log_from_label_response_body_dict = get_tracking_log_from_label_response_body_instance.to_dict()
# create an instance of GetTrackingLogFromLabelResponseBody from a dict
get_tracking_log_from_label_response_body_from_dict = GetTrackingLogFromLabelResponseBody.from_dict(get_tracking_log_from_label_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


