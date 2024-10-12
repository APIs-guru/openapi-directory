# BookingStatusItinerary

**object** containing itinerary booking status information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amended** | **bool** | **indicator**: &#x60;true&#x60; if *this* itinerary&#39;s booking has been amended | [optional] 
**cancelled** | **bool** | **indicator**: &#x60;true&#x60; if *this* itinerary&#39;s booking has been cancelled | [optional] 
**confirmed** | **bool** | **indicator**: &#x60;true&#x60; if *this* itinerary&#39;s booking is confirmed | [optional] 
**failed** | **bool** | **indicator**: &#x60;true&#x60; if *this* itinerary&#39;s booking has failed | [optional] 
**level** | **str** | **level** of *this* itinerary&#39;s booking status | [optional] 
**pending** | **bool** | **indicator**: &#x60;true&#x60; if *this* itinerary&#39;s booking is pending | [optional] 
**status** | **int** | **numeric identifier** of *this* itinerary&#39;s booking status | [optional] 
**text** | **str** | **natural-language description** of *this* itinerary&#39;s booking status | [optional] 
**type** | **str** | **specifier** of *this* itinerary&#39;s booking status * See: [bookingStatus fields and meanings](#section/Appendices/bookingStatus-field-values-and-meanings)  | [optional] 

## Example

```python
from openapi_client.models.booking_status_itinerary import BookingStatusItinerary

# TODO update the JSON string below
json = "{}"
# create an instance of BookingStatusItinerary from a JSON string
booking_status_itinerary_instance = BookingStatusItinerary.from_json(json)
# print the JSON string representation of the object
print(BookingStatusItinerary.to_json())

# convert the object into a dict
booking_status_itinerary_dict = booking_status_itinerary_instance.to_dict()
# create an instance of BookingStatusItinerary from a dict
booking_status_itinerary_from_dict = BookingStatusItinerary.from_dict(booking_status_itinerary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


