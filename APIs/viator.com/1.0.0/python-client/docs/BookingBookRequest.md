# BookingBookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**booker** | [**BookingBookRequestBooker**](BookingBookRequestBooker.md) |  | [optional] 
**currency_code** | **str** | **currency code** for the currency the booking will be submitted in (you will be billed in this currency) | [optional] 
**demo** | **bool** | **specifier**: &#x60;true&#x60; if this is a *demo* booking only (demos do not send any notifications, are automatically confirmed and OnRequest products become freesale products. Default value is true. Production must have &#x60;demo&#x60; set to &#x60;false&#x60;. | [optional] 
**items** | [**List[BookingBookRequestItemsInner]**](BookingBookRequestItemsInner.md) | **array** of items to be booked | [optional] 
**partner_detail** | [**BookingBookRequestPartnerDetail**](BookingBookRequestPartnerDetail.md) |  | [optional] 

## Example

```python
from openapi_client.models.booking_book_request import BookingBookRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BookingBookRequest from a JSON string
booking_book_request_instance = BookingBookRequest.from_json(json)
# print the JSON string representation of the object
print(BookingBookRequest.to_json())

# convert the object into a dict
booking_book_request_dict = booking_book_request_instance.to_dict()
# create an instance of BookingBookRequest from a dict
booking_book_request_from_dict = BookingBookRequest.from_dict(booking_book_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


