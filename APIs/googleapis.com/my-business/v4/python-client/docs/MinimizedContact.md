# MinimizedContact

Minimized contact measures implemented by the hotel during COVID-19.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactless_checkin_checkout** | **bool** | No-contact check-in and check-out. | [optional] 
**contactless_checkin_checkout_exception** | **str** | Contactless check-in check-out exception. | [optional] 
**digital_guest_room_keys** | **bool** | Keyless mobile entry to guest rooms. | [optional] 
**digital_guest_room_keys_exception** | **str** | Digital guest room keys exception. | [optional] 
**housekeeping_scheduled_request_only** | **bool** | Housekeeping scheduled by request only. | [optional] 
**housekeeping_scheduled_request_only_exception** | **str** | Housekeeping scheduled request only exception. | [optional] 
**no_high_touch_items_common_areas** | **bool** | High-touch items, such as magazines, removed from common areas. | [optional] 
**no_high_touch_items_common_areas_exception** | **str** | No high touch items common areas exception. | [optional] 
**no_high_touch_items_guest_rooms** | **bool** | High-touch items, such as decorative pillows, removed from guest rooms. | [optional] 
**no_high_touch_items_guest_rooms_exception** | **str** | No high touch items guest rooms exception. | [optional] 
**plastic_keycards_disinfected** | **bool** | Plastic key cards are disinfected or discarded. | [optional] 
**plastic_keycards_disinfected_exception** | **str** | Plastic keycards disinfected exception. | [optional] 
**room_bookings_buffer** | **bool** | Buffer maintained between room bookings. | [optional] 
**room_bookings_buffer_exception** | **str** | Room bookings buffer exception. | [optional] 

## Example

```python
from openapi_client.models.minimized_contact import MinimizedContact

# TODO update the JSON string below
json = "{}"
# create an instance of MinimizedContact from a JSON string
minimized_contact_instance = MinimizedContact.from_json(json)
# print the JSON string representation of the object
print(MinimizedContact.to_json())

# convert the object into a dict
minimized_contact_dict = minimized_contact_instance.to_dict()
# create an instance of MinimizedContact from a dict
minimized_contact_from_dict = MinimizedContact.from_dict(minimized_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


