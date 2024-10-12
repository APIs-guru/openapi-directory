# BookingBookRequestItemsInnerTravellersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**band_id** | **int** | **unique numeric identifier** for the age band - See: [Working with age bands](#section/Appendices/Working-with-age-bands)  | [optional] 
**firstname** | **str** | **first name** of *this* traveller | [optional] 
**lead_traveller** | **bool** | **indicator**: &#x60;true&#x60; if this traveler is the lead traveler | [optional] 
**surname** | **str** | **surname** of *this* traveler | [optional] 
**title** | **str** | **title** of the traveler (e.g &#x60;&#39;Mr&#39;&#x60;, &#x60;&#39;Mrs&#39;&#x60;, &#x60;&#39;Ms&#39;&#x60;, &#x60;&#39;Miss&#39;&#x60;, &#x60;&#39;Mstr&#39;&#x60;, &#x60;&#39;Dr&#39;&#x60;) | [optional] 

## Example

```python
from openapi_client.models.booking_book_request_items_inner_travellers_inner import BookingBookRequestItemsInnerTravellersInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingBookRequestItemsInnerTravellersInner from a JSON string
booking_book_request_items_inner_travellers_inner_instance = BookingBookRequestItemsInnerTravellersInner.from_json(json)
# print the JSON string representation of the object
print(BookingBookRequestItemsInnerTravellersInner.to_json())

# convert the object into a dict
booking_book_request_items_inner_travellers_inner_dict = booking_book_request_items_inner_travellers_inner_instance.to_dict()
# create an instance of BookingBookRequestItemsInnerTravellersInner from a dict
booking_book_request_items_inner_travellers_inner_from_dict = BookingBookRequestItemsInnerTravellersInner.from_dict(booking_book_request_items_inner_travellers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


