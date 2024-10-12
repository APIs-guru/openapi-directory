# BookingAvailabilityTourgrades200ResponseAllOfDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_bands** | **List[object]** | **array** of age band objects describing the age bands and respective passenger counts allowed to book *this* tour grade; &#x60;null&#x60; if &#x60;ageBandsRequired&#x60; is filled and &#x60;available&#x60; is &#x60;false&#x60; | [optional] 
**age_bands_required** | **List[List[BookingAvailabilityTourgrades200ResponseAllOfDataInnerAgeBandsRequiredInnerInner]]** | **array of arrays** of age band objects describing the traveler mixes eligible to book *this* tour grade; &#x60;null&#x60; if &#x60;ageBands&#x60; is filled and &#x60;available&#x60; is &#x60;true&#x60; - **note**: multiple objects; structure will depend on available tour grades – see response sample for an example, but the exact result you receive will differ  | [optional] 
**available** | **bool** | **indicator** - &#x60;true&#x60; if this tour grade is available to be booked according to the traveler mix specified | [optional] 
**booking_date** | **str** | **date** on which *this* tour grade operates | [optional] 
**currency_code** | **str** | **currency code for the specified currency** (will be &#x60;&#39;ERROR&#39;&#x60; if &#x60;available&#x60; is &#x60;false&#x60;) | [optional] 
**default_language_code** | **str** | **language code for standard langauge** for *this* product | [optional] 
**grade_code** | **str** | **alphanumeric identifier** of *this* tour grade | [optional] 
**grade_departure_time** | **str** | **time** of *this* product | [optional] 
**grade_description** | **str** | **natural-language description** of the tour grade | [optional] 
**grade_title** | **str** | **natural-language title** of the tour grade | [optional] 
**lang_services** | **object** | **object** detailing language services available for *this* product** (will be &#x60;null&#x60; if &#x60;available&#x60; is &#x60;false&#x60;) | [optional] 
**merchant_net_price** | **float** | **numeric merchant net rate** for *this* tour grade **Note**: will be &#x60;0&#x60; if &#x60;available&#x60; is &#x60;false&#x60; - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**merchant_net_price_formatted** | **str** | **currency-formatted merchant net rate** for *this* tour grade **Note**: will be empty if &#x60;available&#x60; is &#x60;false&#x60; - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**retail_price** | **float** | **numeric suggested retail price** for *this* tour grade **Note**: will be &#x60;0&#x60; if &#x60;available&#x60; is &#x60;false&#x60; - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**retail_price_formatted** | **str** | **currency-formatted suggested retail price** for *this* tour grade **Note**: (will be &#39;&#39; if &#x60;available&#x60; is &#x60;false&#x60;) - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**sort_order** | **int** | **sort order** for *this* tour grade availability object | [optional] 
**unavailable_reason** | **str** | **enum specifier of reason for product unavailability** (will be &#x60;null&#x60; if &#x60;available&#x60; is &#x60;true&#x60;) | [optional] 

## Example

```python
from openapi_client.models.booking_availability_tourgrades200_response_all_of_data_inner import BookingAvailabilityTourgrades200ResponseAllOfDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingAvailabilityTourgrades200ResponseAllOfDataInner from a JSON string
booking_availability_tourgrades200_response_all_of_data_inner_instance = BookingAvailabilityTourgrades200ResponseAllOfDataInner.from_json(json)
# print the JSON string representation of the object
print(BookingAvailabilityTourgrades200ResponseAllOfDataInner.to_json())

# convert the object into a dict
booking_availability_tourgrades200_response_all_of_data_inner_dict = booking_availability_tourgrades200_response_all_of_data_inner_instance.to_dict()
# create an instance of BookingAvailabilityTourgrades200ResponseAllOfDataInner from a dict
booking_availability_tourgrades200_response_all_of_data_inner_from_dict = BookingAvailabilityTourgrades200ResponseAllOfDataInner.from_dict(booking_availability_tourgrades200_response_all_of_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


