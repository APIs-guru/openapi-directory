# BookingCalculateprice200ResponseAllOfDataItinerary

**summary results** for all itinerary items

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**booker_email** | **str** | ignore (Viator only) | [optional] 
**booking_date** | **str** | **date** of *this* booking | [optional] 
**booking_status** | [**BookingStatusItinerary**](BookingStatusItinerary.md) |  | [optional] 
**currency_code** | **str** | **specifier** of the currency in which pricing details are displayed | [optional] 
**distributor_ref** | **str** | ignore (Viator only) | [optional] 
**exchange_rate** | **int** | ignore (Viator only) | [optional] 
**has_voucher** | **bool** | ignore (Viator only) | [optional] 
**item_summaries** | [**List[BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInner]**](BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInner.md) | **array** of item summaries | [optional] 
**itinerary_id** | **int** | **numeric identifier** for *this* order | [optional] 
**omni_pre_rule_list** | **int** | ignore (Viator only) | [optional] 
**paypal_redirect_url** | **str** | ignore (Viator only) | [optional] 
**rules_applied** | **List[str]** | ignore (Viator only) | [optional] 
**security_token** | **str** | ignore (Viator only) | [optional] 
**sort_order** | **int** | **sort order** for *this* itinerary | [optional] 
**total_price** | **float** | **numeric total price (total)** for *this* order - For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)  | [optional] 
**total_price_formatted** | **str** | **currency-formatted total price (including transaction fee)** for *this* order - For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)  | [optional] 
**total_price_usd** | **float** | **numeric total price** of *this* order in USD | [optional] 
**user_id** | **int** | ignore (Viator only) | [optional] 
**voucher_key** | **str** | Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints | [optional] 
**voucher_url** | **str** | **URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher. | [optional] 

## Example

```python
from openapi_client.models.booking_calculateprice200_response_all_of_data_itinerary import BookingCalculateprice200ResponseAllOfDataItinerary

# TODO update the JSON string below
json = "{}"
# create an instance of BookingCalculateprice200ResponseAllOfDataItinerary from a JSON string
booking_calculateprice200_response_all_of_data_itinerary_instance = BookingCalculateprice200ResponseAllOfDataItinerary.from_json(json)
# print the JSON string representation of the object
print(BookingCalculateprice200ResponseAllOfDataItinerary.to_json())

# convert the object into a dict
booking_calculateprice200_response_all_of_data_itinerary_dict = booking_calculateprice200_response_all_of_data_itinerary_instance.to_dict()
# create an instance of BookingCalculateprice200ResponseAllOfDataItinerary from a dict
booking_calculateprice200_response_all_of_data_itinerary_from_dict = BookingCalculateprice200ResponseAllOfDataItinerary.from_dict(booking_calculateprice200_response_all_of_data_itinerary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


