# BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apple_pass_supported** | **bool** | ignore (Viator only) | [optional] 
**barcode_option** | **str** | Indicates whether a voucher is required for each passenger; or, whether the requirement is one voucher per group booking. | [optional] 
**barcode_type** | **str** | **alphanumeric specifier** of the barcode type | [optional] 
**booking_engine_id** | [**BookingEngineIdResponse**](BookingEngineIdResponse.md) |  | [optional] 
**booking_status** | [**BookingStatusItem**](BookingStatusItem.md) |  | [optional] 
**currency_code** | **str** | **currency code** for the currency in which pricing details are displayed | [optional] 
**departs_from** | **str** | **natural-language description** of *this* item&#39;s general departure location | [optional] 
**departure_point** | **str** | **HTML-formatted description** of *this* product&#39;s departure location(s) | [optional] 
**departure_point_address** | **str** | **HTML-formatted description** of *this* product&#39;s departure address | [optional] 
**departure_point_directions** | **str** | **HTML-formatted descriptive notes** about *this* product&#39;s departure location | [optional] 
**dest_id** | **int** | **unique numeric id** of the destination associated with *this* product | [optional] 
**distributor_item_ref** | **str** | ignore (Viator only) | [optional] 
**hours_confirmed** | **int** | The &#x60;hoursConfirmed&#x60; field also indicates if the product is freesale or on request. The &#x60;hoursConfirmed&#x60; value is the approximate window for confirmation in hours, which can be presented to the customer. A value of &#x60;0&#x60; means that the product is **freesale**, and a value greater than &#x60;0&#x60; means that the product is **on-request**.  | [optional] 
**item_id** | **int** | ignore (Viator only) | [optional] 
**itinerary_id** | **int** | ignore (Viator only) | [optional] 
**language_services_language_code** | **str** | ignore (Viator only) | [optional] 
**last_retail_price** | **float** | ignore (Viator only) | [optional] 
**last_retail_price_formatted** | **str** | **currency-formatted most recent retail price** for *this* item | [optional] 
**lead_traveller_firstname** | **str** | ignore (Viator only) | [optional] 
**lead_traveller_surname** | **str** | ignore (Viator only) | [optional] 
**lead_traveller_title** | **str** | **title** of the lead traveler&#39;s name | [optional] 
**merchant_cancellable** | **bool** | ignore (Viator only)  For cancellation information regarding the booking, please refer to the &#x60;merchantTermsAndConditions&#x60; object  | [optional] 
**merchant_net_price** | **float** | **numeric merchant net rate** for *this* product - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**merchant_net_price_formatted** | **str** | **currency-formatted merchant net rate** for *this* product - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**obfs_id** | **int** | ignore (Viator only) | [optional] 
**passbooks** | **str** | ignore (Viator only) | [optional] 
**pickup_hotel_id** | **int** | ignore (Viator only) | [optional] 
**pickup_hotel_name** | **str** | ignore (Viator only) | [optional] 
**price** | **float** | **numeric suggested retail price** for *this* product - For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)  | [optional] 
**price_formatted** | **str** | **currency-formatted suggested retail price** for *this* product - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**price_usd** | **float** | **numeric price of *this* product** in USD | [optional] 
**product_code** | **str** | **unique alphanumeric identifier** of *this* product | [optional] 
**product_pulled_down** | **bool** | ignore (Viator only) | [optional] 
**product_title** | **str** | **natural-language title** of *this* product | [optional] 
**product_widget_list** | **str** | ignore (Viator only) | [optional] 
**rules_applied** | **List[str]** | **array** of rules applied to *this* item | [optional] 
**saving_amount** | **str** | Ignore (Viator only)  | [optional] 
**saving_amount_formated** | **str** | Ignore (Viator only)  | [optional] 
**sort_order** | **int** | **sort-order** of *this* item summary | [optional] 
**starting_time** | **str** | **starting time** of the tour in the supplier&#39;s local time zone | [optional] 
**supplier_name** | **str** | **natural-language name** of *this* product&#39;s supplier | [optional] 
**supplier_phone_number** | **str** | **telephone number** of the supplier | [optional] 
**terms_and_conditions** | **str** | ignore (Viator only) | [optional] 
**tour_grade_code** | **str** | **alphanumeric specifier** of the tour grade | [optional] 
**tour_grade_description** | **str** | **natural-language description** of *this* item&#39;s tour grade | [optional] 
**travel_date** | **str** | **date** on which *this* product will operate (in the supplier&#39;s local time zone) | [optional] 
**traveller_age_bands** | [**List[BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInnerTravellerAgeBandsInner]**](BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInnerTravellerAgeBandsInner.md) | **array** of age-band objects | [optional] 
**voucher_key** | **str** | Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints | [optional] 
**voucher_option** | **str** | **alphanumeric specifier** of the relevant voucher option | [optional] 
**voucher_requirements** | **str** | **natural-language description** of the voucher requirements for this tour (**note:** Should agree with value in &#x60;voucherOption&#x60; field) | [optional] 
**voucher_url** | **str** | **URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher. | [optional] 
**vouchers** | **str** | ignore (Viator only) | [optional] 

## Example

```python
from openapi_client.models.booking_calculateprice200_response_all_of_data_itinerary_item_summaries_inner import BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInner from a JSON string
booking_calculateprice200_response_all_of_data_itinerary_item_summaries_inner_instance = BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInner.from_json(json)
# print the JSON string representation of the object
print(BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInner.to_json())

# convert the object into a dict
booking_calculateprice200_response_all_of_data_itinerary_item_summaries_inner_dict = booking_calculateprice200_response_all_of_data_itinerary_item_summaries_inner_instance.to_dict()
# create an instance of BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInner from a dict
booking_calculateprice200_response_all_of_data_itinerary_item_summaries_inner_from_dict = BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInner.from_dict(booking_calculateprice200_response_all_of_data_itinerary_item_summaries_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


