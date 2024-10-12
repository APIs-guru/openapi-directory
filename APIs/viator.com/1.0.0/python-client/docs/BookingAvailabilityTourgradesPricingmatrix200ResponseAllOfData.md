# BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**booking_month** | **str** | **month of year** (as text) by which to filter results | [optional] 
**dates** | [**List[BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInner]**](BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfDataDatesInner.md) | **array of tour grade pricing objects** each detailing availability on a single day | [optional] 
**pricing_unit** | **str** | **natural-language label** for the pricing terms of this tour grade - see [Understanding the pricingUnit field](#section/Using-the-API/Understanding-the-pricingUnit-field) for more information  | [optional] 

## Example

```python
from openapi_client.models.booking_availability_tourgrades_pricingmatrix200_response_all_of_data import BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfData

# TODO update the JSON string below
json = "{}"
# create an instance of BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfData from a JSON string
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_instance = BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfData.from_json(json)
# print the JSON string representation of the object
print(BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfData.to_json())

# convert the object into a dict
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dict = booking_availability_tourgrades_pricingmatrix200_response_all_of_data_instance.to_dict()
# create an instance of BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfData from a dict
booking_availability_tourgrades_pricingmatrix200_response_all_of_data_from_dict = BookingAvailabilityTourgradesPricingmatrix200ResponseAllOfData.from_dict(booking_availability_tourgrades_pricingmatrix200_response_all_of_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


