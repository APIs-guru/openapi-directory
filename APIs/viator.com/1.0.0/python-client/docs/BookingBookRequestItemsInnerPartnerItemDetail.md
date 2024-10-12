# BookingBookRequestItemsInnerPartnerItemDetail

**object** containing partner details at a per-item level

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distributor_item_ref** | **str** | **unique alphanumeric code** for the order (&#39;itinerary&#39;) (merchant API partners must pass a &#x60;distributorItemRef&#x60; into the &#x60;partnerItemDetails&#x60; object for each item in *this* object - this code can be any alphanumeric string and is defined by the distributor  | [optional] 

## Example

```python
from openapi_client.models.booking_book_request_items_inner_partner_item_detail import BookingBookRequestItemsInnerPartnerItemDetail

# TODO update the JSON string below
json = "{}"
# create an instance of BookingBookRequestItemsInnerPartnerItemDetail from a JSON string
booking_book_request_items_inner_partner_item_detail_instance = BookingBookRequestItemsInnerPartnerItemDetail.from_json(json)
# print the JSON string representation of the object
print(BookingBookRequestItemsInnerPartnerItemDetail.to_json())

# convert the object into a dict
booking_book_request_items_inner_partner_item_detail_dict = booking_book_request_items_inner_partner_item_detail_instance.to_dict()
# create an instance of BookingBookRequestItemsInnerPartnerItemDetail from a dict
booking_book_request_items_inner_partner_item_detail_from_dict = BookingBookRequestItemsInnerPartnerItemDetail.from_dict(booking_book_request_items_inner_partner_item_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


