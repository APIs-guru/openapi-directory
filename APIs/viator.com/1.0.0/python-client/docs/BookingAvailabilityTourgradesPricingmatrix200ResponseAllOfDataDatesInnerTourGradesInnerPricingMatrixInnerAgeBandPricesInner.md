# BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**band_id** | **int** | **unique numeric identifier** for the age band - See: [Working with age bands](#section/Appendices/Working-with-age-bands)  | [optional] 
**maximum_count_required** | **int** | **maximum number** of participants allowed for *this* tour grade | [optional] 
**minimum_count_required** | **int** | **minimum number** of participants required for *this* tour grade | [optional] 
**prices** | [**List[BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInnerPricesInner]**](BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInnerPricesInner.md) | **array** of pricing detail objects | [optional] 
**sort_order** | **int** | **sort order** for *this* tour grade | [optional] 

## Example

```python
from openapi_client.models.booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_age_band_prices_inner import BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInner from a JSON string
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_age_band_prices_inner_instance = BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInner.from_json(json)
# print the JSON string representation of the object
print(BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInner.to_json())

# convert the object into a dict
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_age_band_prices_inner_dict = booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_age_band_prices_inner_instance.to_dict()
# create an instance of BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInner from a dict
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_age_band_prices_inner_from_dict = BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInner.from_dict(booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_age_band_prices_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


