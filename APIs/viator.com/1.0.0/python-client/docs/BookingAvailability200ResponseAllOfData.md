# BookingAvailability200ResponseAllOfData

**object** detailing available tourgrades for the specified age bands and date range for this product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | [**List[BookingAvailability200ResponseAllOfDataAvailabilityInner]**](BookingAvailability200ResponseAllOfDataAvailabilityInner.md) | **array** of tour grade availability objects | [optional] 
**first_available_date** | **str** | **first available date** (in plain text format) for the tour grade | [optional] 
**last_available_date** | **str** | **last available date** for the tour grade | [optional] 
**product_code** | **str** | **unique alphanumeric identifer** of the product that was specified in the request | [optional] 

## Example

```python
from openapi_client.models.booking_availability200_response_all_of_data import BookingAvailability200ResponseAllOfData

# TODO update the JSON string below
json = "{}"
# create an instance of BookingAvailability200ResponseAllOfData from a JSON string
booking_availability200_response_all_of_data_instance = BookingAvailability200ResponseAllOfData.from_json(json)
# print the JSON string representation of the object
print(BookingAvailability200ResponseAllOfData.to_json())

# convert the object into a dict
booking_availability200_response_all_of_data_dict = booking_availability200_response_all_of_data_instance.to_dict()
# create an instance of BookingAvailability200ResponseAllOfData from a dict
booking_availability200_response_all_of_data_from_dict = BookingAvailability200ResponseAllOfData.from_dict(booking_availability200_response_all_of_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


