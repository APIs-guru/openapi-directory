# BookingBookRequestPartnerDetail

Applicable only for extra partner detail for either partner or merchant partner for sending partner specific information 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distributor_ref** | **str** | **unique alphanumeric reference code** for the distributor - Merchant API partners must pass a &#x60;distributorRef&#x60; at the order (A.K.A. &#39;itinerary&#39;) level in the &#x60;partnerDetail&#x60; object. The &#x60;distributorRef&#x60; passed must be alphanumeric and unique to bookings made by the merchant. - Passing an existing &#x60;distributorRef&#x60;: If an existing &#x60;distributorRef&#x60; is passed, the booking with the matching &#x60;distributorRef&#x60; will be returned in the response and a new booking will not be made. The fields in the response are identical to the response for a new booking.  | [optional] 

## Example

```python
from openapi_client.models.booking_book_request_partner_detail import BookingBookRequestPartnerDetail

# TODO update the JSON string below
json = "{}"
# create an instance of BookingBookRequestPartnerDetail from a JSON string
booking_book_request_partner_detail_instance = BookingBookRequestPartnerDetail.from_json(json)
# print the JSON string representation of the object
print(BookingBookRequestPartnerDetail.to_json())

# convert the object into a dict
booking_book_request_partner_detail_dict = booking_book_request_partner_detail_instance.to_dict()
# create an instance of BookingBookRequestPartnerDetail from a dict
booking_book_request_partner_detail_from_dict = BookingBookRequestPartnerDetail.from_dict(booking_book_request_partner_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


