# BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInnerPricesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | **currency code** of the currency in which pricing details are displayed | [optional] 
**merchant_net_price** | **float** | **numeric merchant net rate** for *this* age band - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**merchant_net_price_formatted** | **str** | **currency-formatted merchant net rate** for *this* age band - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**min_no_of_travellers_required_for_price** | **int** |  | [optional] 
**price** | **float** | **numeric suggested retail price** for *this* age band - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**price_formatted** | **str** | **currency-formatted suggested retail price** for *this* age band - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**sort_order** | **int** | **sort order** *this* pricing detail object | [optional] 

## Example

```python
from openapi_client.models.booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_age_band_prices_inner_prices_inner import BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInnerPricesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInnerPricesInner from a JSON string
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_age_band_prices_inner_prices_inner_instance = BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInnerPricesInner.from_json(json)
# print the JSON string representation of the object
print(BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInnerPricesInner.to_json())

# convert the object into a dict
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_age_band_prices_inner_prices_inner_dict = booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_age_band_prices_inner_prices_inner_instance.to_dict()
# create an instance of BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInnerPricesInner from a dict
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_age_band_prices_inner_prices_inner_from_dict = BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInnerAgeBandPricesInnerPricesInner.from_dict(booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_pricing_matrix_inner_age_band_prices_inner_prices_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


