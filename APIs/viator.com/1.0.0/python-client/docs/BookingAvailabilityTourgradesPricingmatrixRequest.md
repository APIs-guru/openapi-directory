# BookingAvailabilityTourgradesPricingmatrixRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | **currency code** for the currency in which to display pricing details | [optional] 
**month** | **str** | **month of year** (as text) by which to filter results (must be in the future) | [optional] 
**product_code** | **str** | **alphanumeric identifier** of product about which to retrieve tour grade and pricing information | [optional] 
**year** | **str** | **year** (as text) by which to filter results (must be in the future) | [optional] 

## Example

```python
from openapi_client.models.booking_availability_tourgrades_pricingmatrix_request import BookingAvailabilityTourgradesPricingmatrixRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BookingAvailabilityTourgradesPricingmatrixRequest from a JSON string
booking_availability_tourgrades_pricingmatrix_request_instance = BookingAvailabilityTourgradesPricingmatrixRequest.from_json(json)
# print the JSON string representation of the object
print(BookingAvailabilityTourgradesPricingmatrixRequest.to_json())

# convert the object into a dict
booking_availability_tourgrades_pricingmatrix_request_dict = booking_availability_tourgrades_pricingmatrix_request_instance.to_dict()
# create an instance of BookingAvailabilityTourgradesPricingmatrixRequest from a dict
booking_availability_tourgrades_pricingmatrix_request_from_dict = BookingAvailabilityTourgradesPricingmatrixRequest.from_dict(booking_availability_tourgrades_pricingmatrix_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


