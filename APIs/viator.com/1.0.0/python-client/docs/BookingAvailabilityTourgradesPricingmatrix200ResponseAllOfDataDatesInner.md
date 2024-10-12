# BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**booking_date** | **str** | **date** on which *this* product operates | [optional] 
**call_for_last_min_availability** | **bool** | ignore (Viator only) | [optional] 
**sort_order** | **int** | **sort order** for *this* tour grade pricing object | [optional] 
**tour_grades** | [**List[BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInner]**](BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInner.md) | **array** of tour grade pricing information objects | [optional] 

## Example

```python
from openapi_client.models.booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner import BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInner from a JSON string
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_instance = BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInner.from_json(json)
# print the JSON string representation of the object
print(BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInner.to_json())

# convert the object into a dict
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_dict = booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_instance.to_dict()
# create an instance of BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInner from a dict
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_from_dict = BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInner.from_dict(booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


