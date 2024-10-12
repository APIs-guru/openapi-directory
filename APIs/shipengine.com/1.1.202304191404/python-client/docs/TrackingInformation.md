# TrackingInformation

A tracking information resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual_delivery_date** | **datetime** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.  | [optional] 
**carrier_code** | **str** | A [shipping carrier](https://www.shipengine.com/docs/carriers/setup/), such as &#x60;fedex&#x60;, &#x60;dhl_express&#x60;, &#x60;stamps_com&#x60;, etc.  | [optional] 
**carrier_detail_code** | **str** | Carrier detail code | [optional] [readonly] 
**carrier_id** | **str** | A string that uniquely identifies a ShipEngine resource, such as a carrier, label, shipment, etc. | [optional] 
**carrier_status_code** | **str** | Carrier status code | [optional] [readonly] 
**carrier_status_description** | **str** | carrier status description | [optional] [readonly] 
**estimated_delivery_date** | **datetime** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.  | [optional] 
**events** | [**List[TrackEvent]**](TrackEvent.md) | The events that have occured during the lifetime of this tracking number. | [optional] [readonly] 
**exception_description** | **str** | Exception description | [optional] [readonly] 
**ship_date** | **datetime** | An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.  | [optional] 
**status_code** | [**StatusCode**](StatusCode.md) |  | [optional] 
**status_description** | **str** | Status description | [optional] [readonly] 
**tracking_number** | **str** | A tracking number for a package. The format depends on the carrier. | [optional] 
**tracking_url** | **str** | Carrier Tracking Url, if available | [optional] [readonly] 

## Example

```python
from openapi_client.models.tracking_information import TrackingInformation

# TODO update the JSON string below
json = "{}"
# create an instance of TrackingInformation from a JSON string
tracking_information_instance = TrackingInformation.from_json(json)
# print the JSON string representation of the object
print(TrackingInformation.to_json())

# convert the object into a dict
tracking_information_dict = tracking_information_instance.to_dict()
# create an instance of TrackingInformation from a dict
tracking_information_from_dict = TrackingInformation.from_dict(tracking_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


