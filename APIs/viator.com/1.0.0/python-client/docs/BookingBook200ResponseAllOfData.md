# BookingBook200ResponseAllOfData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**booker_email** | **str** | **email address** of the entity that made *this* booking | [optional] 
**booking_date** | **str** | **date** of *this* booking | [optional] 
**booking_status** | [**BookingStatusItinerary**](BookingStatusItinerary.md) |  | [optional] 
**currency_code** | **str** | **currency code** of the currency in which *this* booking was made | [optional] 
**distributor_ref** | **str** | ignore (Viator only) | [optional] 
**exchange_rate** | **int** | ignore (Viator only) | [optional] 
**has_voucher** | **bool** | ignore (Viator only) | [optional] 
**item_summaries** | [**List[BookingBook200ResponseAllOfDataItemSummariesInner]**](BookingBook200ResponseAllOfDataItemSummariesInner.md) | **array** of item summaries | [optional] 
**itinerary_id** | **int** | ignore (Viator only) | [optional] 
**omni_pre_rule_list** | **str** | ignore (Viator only) | [optional] 
**paypal_redirect_url** | **str** | ignore (Viator only) | [optional] 
**rules_applied** | **str** | ignore (Viator only) | [optional] 
**security_token** | **str** | ignore (Viator only) | [optional] 
**sort_order** | **int** | **sort order** for *this* object | [optional] 
**total_price** | **float** | **numeric merchant total price** for *this* booking - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**total_price_formatted** | **str** | **currency-formatted merchant total price** for *this* booking - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**total_price_usd** | **float** | **numeric merchant total price** of *this* booking in USD | [optional] 
**user_id** | **str** | ignore (Viator only) | [optional] 
**voucher_key** | **str** | Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints | [optional] 
**voucher_url** | **str** | **URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher. | [optional] 

## Example

```python
from openapi_client.models.booking_book200_response_all_of_data import BookingBook200ResponseAllOfData

# TODO update the JSON string below
json = "{}"
# create an instance of BookingBook200ResponseAllOfData from a JSON string
booking_book200_response_all_of_data_instance = BookingBook200ResponseAllOfData.from_json(json)
# print the JSON string representation of the object
print(BookingBook200ResponseAllOfData.to_json())

# convert the object into a dict
booking_book200_response_all_of_data_dict = booking_book200_response_all_of_data_instance.to_dict()
# create an instance of BookingBook200ResponseAllOfData from a dict
booking_book200_response_all_of_data_from_dict = BookingBook200ResponseAllOfData.from_dict(booking_book200_response_all_of_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


