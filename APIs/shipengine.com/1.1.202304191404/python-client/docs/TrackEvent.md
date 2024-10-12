# TrackEvent

A track event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_detail_code** | **str** | Carrier detail code | [readonly] 
**carrier_occurred_at** | **datetime** | Carrier timestamp for the event, it is assumed to be the local time of where the event occurred. | [optional] 
**carrier_status_code** | **str** | Carrier status code | [readonly] 
**carrier_status_description** | **str** | carrier status description | [readonly] 
**city_locality** | **str** | City locality | [readonly] 
**company_name** | **str** | Company Name | [optional] [readonly] 
**country_code** | **str** | A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)  | [optional] 
**description** | **str** | Event description | [optional] [readonly] 
**event_code** | **str** | Event Code | [optional] 
**latitude** | **float** | Latitude coordinate of tracking event. | [optional] 
**longitude** | **float** | Longitude coordinate of tracking event. | [optional] 
**occurred_at** | **datetime** | Timestamp for carrier event | 
**postal_code** | **str** | Postal code | [readonly] 
**signer** | **str** | Signer information | [optional] [readonly] 
**state_province** | **str** | State province | [readonly] 
**status_code** | [**StatusCode**](StatusCode.md) |  | 
**status_description** | **str** | Event Status Description | [readonly] 

## Example

```python
from openapi_client.models.track_event import TrackEvent

# TODO update the JSON string below
json = "{}"
# create an instance of TrackEvent from a JSON string
track_event_instance = TrackEvent.from_json(json)
# print the JSON string representation of the object
print(TrackEvent.to_json())

# convert the object into a dict
track_event_dict = track_event_instance.to_dict()
# create an instance of TrackEvent from a dict
track_event_from_dict = TrackEvent.from_dict(track_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


