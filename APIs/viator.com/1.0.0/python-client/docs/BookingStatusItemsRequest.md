# BookingStatusItemsRequest

**note**: all items are optional, but at least one needs to be included

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**booking_date_from** | **str** | **earliest date** for when the booking(s) in question were made (must be in the future) | [optional] 
**booking_date_to** | **str** | **latest date** for when the booking(s) in question were made (must be in the future) | [optional] 
**distributor_item_refs** | **List[str]** | **array** of partner-defined distributor item reference identifiers e.g. &#x60;[&#39;refItem1&#39;,&#39;refItem2&#39;,&#39;refItem3&#39;]&#x60; | [optional] 
**distributor_refs** | **List[str]** | **array** of partner-defined distributor reference identifiers | [optional] 
**item_ids** | **List[int]** | **array** of booking-reference numbers to check   &#x60;itemId&#x60; (booking-reference provided by Viator). For more information, see [Booking references](#section/Key-concepts/Booking-references)  | [optional] 
**lead_first_name** | **str** | **first name** of the lead traveler | [optional] 
**lead_surname** | **str** | **surname** of the lead traveler | [optional] 
**test** | **bool** | **specifier**: - &#x60;true&#x60;: bypass the poll limit in the prelive environment only - &#x60;false&#x60;: (default) make a *real* booking, not a test  | [optional] 

## Example

```python
from openapi_client.models.booking_status_items_request import BookingStatusItemsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BookingStatusItemsRequest from a JSON string
booking_status_items_request_instance = BookingStatusItemsRequest.from_json(json)
# print the JSON string representation of the object
print(BookingStatusItemsRequest.to_json())

# convert the object into a dict
booking_status_items_request_dict = booking_status_items_request_instance.to_dict()
# create an instance of BookingStatusItemsRequest from a dict
booking_status_items_request_from_dict = BookingStatusItemsRequest.from_dict(booking_status_items_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


