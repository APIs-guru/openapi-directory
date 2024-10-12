# BookingAvailabilityTourgradesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_bands** | [**List[BookingAvailabilityTourgradesRequestAgeBandsInner]**](BookingAvailabilityTourgradesRequestAgeBandsInner.md) | **array** of ageBand objects | [optional] 
**booking_date** | **str** | **date** to enquire about available tour grades for *this* product (must be in the future) | [optional] 
**currency_code** | **str** | **currency code** for the currency in which to display pricing information | [optional] 
**product_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.booking_availability_tourgrades_request import BookingAvailabilityTourgradesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BookingAvailabilityTourgradesRequest from a JSON string
booking_availability_tourgrades_request_instance = BookingAvailabilityTourgradesRequest.from_json(json)
# print the JSON string representation of the object
print(BookingAvailabilityTourgradesRequest.to_json())

# convert the object into a dict
booking_availability_tourgrades_request_dict = booking_availability_tourgrades_request_instance.to_dict()
# create an instance of BookingAvailabilityTourgradesRequest from a dict
booking_availability_tourgrades_request_from_dict = BookingAvailabilityTourgradesRequest.from_dict(booking_availability_tourgrades_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


