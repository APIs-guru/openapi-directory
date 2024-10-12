# BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grade_code** | **str** | **alphanumeric identifier** of the tour grade | [optional] 
**grade_title** | **str** | **title of tour grade** | [optional] 
**pricing_matrix** | [**List[BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInner]**](BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInnerPricingMatrixInner.md) | **array of pricing objects** for *this* tour grade | [optional] 
**sort_order** | **int** | **sort order** for *this* tour grade pricing object | [optional] 

## Example

```python
from openapi_client.models.booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner import BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInner from a JSON string
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_instance = BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInner.from_json(json)
# print the JSON string representation of the object
print(BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInner.to_json())

# convert the object into a dict
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_dict = booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_instance.to_dict()
# create an instance of BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInner from a dict
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_from_dict = BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInnerTourGradesInner.from_dict(booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dates_inner_tour_grades_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


