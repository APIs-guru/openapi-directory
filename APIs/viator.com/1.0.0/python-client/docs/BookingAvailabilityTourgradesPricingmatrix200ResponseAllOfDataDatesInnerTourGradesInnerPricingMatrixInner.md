# BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_band_prices** | [**List[BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInner]**](BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInner.md) | **array** of pricing objects by age band | [optional] 
**booking_date** | **str** | **date** on which *this* product operates | [optional] 
**pricing_unit** | **str** | **natural-language description** of the pricing mode - see [Understanding the pricingUnit field](#section/Using-the-API/Understanding-the-pricingUnit-field) for more information  | [optional] 
**sort_order** | **int** | **sort order** for *this* pricing object | [optional] 

## Example

```python
from openapi_client.models.booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner import BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInner from a JSON string
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_instance = BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInner.from_json(json)
# print the JSON string representation of the object
print(BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInner.to_json())

# convert the object into a dict
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_dict = booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_instance.to_dict()
# create an instance of BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInner from a dict
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_from_dict = BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInner.from_dict(booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


