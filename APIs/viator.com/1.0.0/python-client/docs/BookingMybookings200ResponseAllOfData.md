# BookingMybookings200ResponseAllOfData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**booker_email** | **str** | **email address** of the entity that booked the tour | [optional] 
**booking_date** | **str** | **date** on which the booking was made | [optional] 
**booking_status** | [**BookingStatusItinerary**](BookingStatusItinerary.md) |  | [optional] 
**currency_code** | **str** | **currency code** for the currency in which pricing is displayed | [optional] 
**distributor_ref** | **str** | **reference code** for the distributor | [optional] 
**exchange_rate** | **int** | **exchange rate** applied to the pricing | [optional] 
**has_voucher** | **bool** | **indicator**: &#x60;true&#x60; if a voucher exists | [optional] 
**item_summaries** | [**List[BookingMybookings200ResponseAllOfDataItemSummariesInner]**](BookingMybookings200ResponseAllOfDataItemSummariesInner.md) | **array** of item summary objects | [optional] 
**itinerary_id** | **int** | ignore (Viator only) | [optional] 
**rules_applied** | **str** | ignore (Viator only) | [optional] 
**sort_order** | **int** | **sort order** for the booking object | [optional] 
**total_price** | **float** | **numeric merchant total price** for *this* booking For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**total_price_formatted** | **str** | **currency-formatted merchant total price** of *this* booking - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**total_price_usd** | **float** | **numeric merchant total price** of this booking in USD | [optional] 
**user_id** | **str** | ignore (Viator only) | [optional] 
**voucher_key** | **str** | Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints | [optional] 
**voucher_url** | **str** | **URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher. | [optional] 

## Example

```python
from openapi_client.models.booking_mybookings200_response_all_of_data import BookingMybookings200ResponseAllOfData

# TODO update the JSON string below
json = "{}"
# create an instance of BookingMybookings200ResponseAllOfData from a JSON string
booking_mybookings200_response_all_of_data_instance = BookingMybookings200ResponseAllOfData.from_json(json)
# print the JSON string representation of the object
print(BookingMybookings200ResponseAllOfData.to_json())

# convert the object into a dict
booking_mybookings200_response_all_of_data_dict = booking_mybookings200_response_all_of_data_instance.to_dict()
# create an instance of BookingMybookings200ResponseAllOfData from a dict
booking_mybookings200_response_all_of_data_from_dict = BookingMybookings200ResponseAllOfData.from_dict(booking_mybookings200_response_all_of_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


