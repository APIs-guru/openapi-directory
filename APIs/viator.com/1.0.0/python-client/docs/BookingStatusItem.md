# BookingStatusItem

**object** containing item booking status information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amended** | **bool** | **indicator**: &#x60;true&#x60; if *this* item&#39;s booking has been amended | [optional] 
**cancelled** | **bool** | **indicator**: &#x60;true&#x60; if *this* item&#39;s booking has been cancelled | [optional] 
**confirmed** | **bool** | **indicator**: &#x60;true&#x60; if *this* item&#39;s booking is confirmed | [optional] 
**failed** | **bool** | **indicator**: &#x60;true&#x60; if *this* item&#39;s booking has failed | [optional] 
**level** | **str** | **level** of *this* item&#39;s booking status | [optional] 
**pending** | **bool** | **indicator**: &#x60;true&#x60; if *this* item&#39;s booking is pending | [optional] 
**status** | **int** | **numeric identifier** of *this* item&#39;s booking status | [optional] 
**text** | **str** | **natural-language description** of *this* item&#39;s booking status; e.g., &#39;Waiting to be booked&#39; | [optional] 
**type** | **str** | **specifier** of *this* item&#39;s booking status * See: [bookingStatus fields and meanings](#section/Appendices/bookingStatus-field-values-and-meanings)  | [optional] 

## Example

```python
from openapi_client.models.booking_status_item import BookingStatusItem

# TODO update the JSON string below
json = "{}"
# create an instance of BookingStatusItem from a JSON string
booking_status_item_instance = BookingStatusItem.from_json(json)
# print the JSON string representation of the object
print(BookingStatusItem.to_json())

# convert the object into a dict
booking_status_item_dict = booking_status_item_instance.to_dict()
# create an instance of BookingStatusItem from a dict
booking_status_item_from_dict = BookingStatusItem.from_dict(booking_status_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


