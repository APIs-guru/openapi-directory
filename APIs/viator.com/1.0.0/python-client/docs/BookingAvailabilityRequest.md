# BookingAvailabilityRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_bands** | [**List[BookingAvailabilityRequestAgeBandsInner]**](BookingAvailabilityRequestAgeBandsInner.md) | **array of objects** specifying the age bands by which to to filter search results | [optional] 
**currency_code** | **str** | **currency code** for the currency in which to display tour grade pricing information | [optional] 
**month** | **str** | **month component** (text format) of the start of the date range for which to retrieve tour grade availability information (must be in the future) | [optional] 
**product_code** | **str** | **unique alphanumeric identifier** of the product for which you wish to retrieve tour grade availability information | [optional] 
**year** | **str** | **year component** (text format) of the start of the date range for which to retrieve tour grade availability information (must be in the future) | [optional] 

## Example

```python
from openapi_client.models.booking_availability_request import BookingAvailabilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BookingAvailabilityRequest from a JSON string
booking_availability_request_instance = BookingAvailabilityRequest.from_json(json)
# print the JSON string representation of the object
print(BookingAvailabilityRequest.to_json())

# convert the object into a dict
booking_availability_request_dict = booking_availability_request_instance.to_dict()
# create an instance of BookingAvailabilityRequest from a dict
booking_availability_request_from_dict = BookingAvailabilityRequest.from_dict(booking_availability_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


