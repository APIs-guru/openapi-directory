# BookingBook200ResponseAllOfDataItemSummariesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apple_pass_supported** | **bool** |  | [optional] 
**barcode_option** | **str** | Indicates whether a voucher is required for each passenger; or, whether the requirement is one voucher per group booking. | [optional] 
**barcode_type** | **str** | **alphanumeric code** specifying the type of barcode | [optional] 
**booking_engine_id** | [**BookingEngineIdResponse**](BookingEngineIdResponse.md) |  | [optional] 
**booking_status** | [**BookingStatusItem**](BookingStatusItem.md) |  | [optional] 
**currency_code** | **str** | **currency code** for the currency in which pricing is displayed for *this* item | [optional] 
**departs_from** | **str** | **natural-language description** of *this* item&#39;s departure location | [optional] 
**departure_point** | **str** | **natural-language description** of *this* item&#39;s departure point | [optional] 
**departure_point_address** | **str** | **HTML-formatted address** of *this* item&#39;s departure point | [optional] 
**departure_point_directions** | **str** | **natural-language description** of directions regarding *this* item&#39;s departure point | [optional] 
**dest_id** | **int** | **unique numeric identifer** of the destination of *this* item | [optional] 
**distributor_item_ref** | **str** | ignore (Viator only) | [optional] 
**hours_confirmed** | **str** | The &#x60;hoursConfirmed&#x60; field also indicates if the product is freesale or on request. The &#x60;hoursConfirmed&#x60; value is the approximate window for confirmation in hours, which can be presented to the customer. A value of &#x60;0&#x60; means that the product is **freesale**, and a value greater than &#x60;0&#x60; means that the product is **on-request**.  | [optional] 
**item_id** | **int** | **numeric identifer** of *this* item | [optional] 
**itinerary_id** | **int** | Ignore (Viator only) | [optional] 
**language_services_code** | **str** | **code** for the language that this product operates in | [optional] 
**last_retail_price** | **float** | **numeric merchant net rate** of *this* item | [optional] 
**last_retail_price_formatted** | **str** | **currency-formatted merchant net rate** of *this* item | [optional] 
**lead_traveller_firstname** | **str** | **first name** of the lead traveler | [optional] 
**lead_traveller_surname** | **str** | **surname** of the lead traveler | [optional] 
**lead_traveller_title** | **str** | **title** of the lead traveler&#39;s name | [optional] 
**merchant_cancellable** | **bool** | ignore (Viator only)  For cancellation information regarding the booking, please refer to the &#x60;merchantTermsAndConditions&#x60; object  | [optional] 
**merchant_net_price** | **float** | **numeric merchant net rate** for *this* item\&quot; - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**merchant_net_price_formatted** | **str** | **currency-formatted merchant net rate** for *this* item - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**merchant_terms_and_conditions** | [**BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditions**](BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditions.md) |  | [optional] 
**obfs_id** | **int** | ignore (Viator only) | [optional] 
**passbooks** | **str** | ignore (Viator only) | [optional] 
**pickup_hotel_id** | **str** | **identifer** for the pick-up hotel | [optional] 
**pickup_hotel_name** | **str** | **natural-language name** of the pick-up hotel | [optional] 
**price** | **float** | **numeric merchant total price** for *this* item - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**price_formatted** | **str** | **currency-formatted merchant total price** for *this* item - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**price_usd** | **float** | **numeric merchant total price** in USD | [optional] 
**product_code** | **str** | **unique alphanumeric identifier** of *this* product | [optional] 
**product_pulled_down** | **bool** | ignore (Viator only) | [optional] 
**product_title** | **str** | **natural-language title** of *this* product | [optional] 
**product_widget_list** | **str** | ignore (Viator only) | [optional] 
**rules_applied** | **str** | ignore (Viator only) | [optional] 
**saving_amount** | **str** | Ignore (Viator only)  | [optional] 
**saving_amount_formated** | **str** | Ignore (Viator only)  | [optional] 
**sort_order** | **int** | **sort order** of *this* item summary | [optional] 
**starting_time** | **str** | **starting time** of this product | [optional] 
**supplier_name** | **str** | **natural-language name** of *this* product&#39;s supplier | [optional] 
**supplier_phone_number** | **str** | **telephone number** of *this* product&#39;s supplier | [optional] 
**terms_and_conditions** | **object** | ignore (Viator only) | [optional] 
**tour_grade_code** | **str** | **identifer** of *this* tour grade | [optional] 
**tour_grade_description** | **str** | **natural-language description** of *this* tour grade | [optional] 
**travel_date** | **str** | **date** of travel | [optional] 
**traveller_age_bands** | [**List[BookingBook200ResponseAllOfDataItemSummariesInnerTravellerAgeBandsInner]**](BookingBook200ResponseAllOfDataItemSummariesInnerTravellerAgeBandsInner.md) | **array** of objects detailing the traveler age bands | [optional] 
**voucher_key** | **str** | Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints | [optional] 
**voucher_option** | **str** | ignore (Viator only) | [optional] 
**voucher_requirements** | **str** | **natural-language description** of the requirements pertaining to this voucher | [optional] 
**voucher_url** | **str** | **URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher. | [optional] 
**vouchers** | **str** | ignore (Viator only) | [optional] 

## Example

```python
from openapi_client.models.booking_book200_response_all_of_data_item_summaries_inner import BookingBook200ResponseAllOfDataItemSummariesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingBook200ResponseAllOfDataItemSummariesInner from a JSON string
booking_book200_response_all_of_data_item_summaries_inner_instance = BookingBook200ResponseAllOfDataItemSummariesInner.from_json(json)
# print the JSON string representation of the object
print(BookingBook200ResponseAllOfDataItemSummariesInner.to_json())

# convert the object into a dict
booking_book200_response_all_of_data_item_summaries_inner_dict = booking_book200_response_all_of_data_item_summaries_inner_instance.to_dict()
# create an instance of BookingBook200ResponseAllOfDataItemSummariesInner from a dict
booking_book200_response_all_of_data_item_summaries_inner_from_dict = BookingBook200ResponseAllOfDataItemSummariesInner.from_dict(booking_book200_response_all_of_data_item_summaries_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


