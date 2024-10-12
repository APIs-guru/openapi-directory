# BookingAvailabilityTourgrades200ResponseAllOfDataInnerAgeBandsRequiredInnerInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**band_id** | **int** | **unique numeric identifier** for the age band - See: [Working with age bands](#section/Appendices/Working-with-age-bands)  | [optional] 
**maximum_count_required** | **int** | **maximum number** of passengers from *this* age band allowable for *this* tour grade | [optional] 
**minimum_count_required** | **int** | **minimum number** of passengers from *this* age band required for *this* tour grade | [optional] 

## Example

```python
from openapi_client.models.booking_availability_tourgrades200_response_all_of_data_inner_age_bands_required_inner_inner import BookingAvailabilityTourgrades200ResponseAllOfDataInnerAgeBandsRequiredInnerInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingAvailabilityTourgrades200ResponseAllOfDataInnerAgeBandsRequiredInnerInner from a JSON string
booking_availability_tourgrades200_response_all_of_data_inner_age_bands_required_inner_inner_instance = BookingAvailabilityTourgrades200ResponseAllOfDataInnerAgeBandsRequiredInnerInner.from_json(json)
# print the JSON string representation of the object
print(BookingAvailabilityTourgrades200ResponseAllOfDataInnerAgeBandsRequiredInnerInner.to_json())

# convert the object into a dict
booking_availability_tourgrades200_response_all_of_data_inner_age_bands_required_inner_inner_dict = booking_availability_tourgrades200_response_all_of_data_inner_age_bands_required_inner_inner_instance.to_dict()
# create an instance of BookingAvailabilityTourgrades200ResponseAllOfDataInnerAgeBandsRequiredInnerInner from a dict
booking_availability_tourgrades200_response_all_of_data_inner_age_bands_required_inner_inner_from_dict = BookingAvailabilityTourgrades200ResponseAllOfDataInnerAgeBandsRequiredInnerInner.from_dict(booking_availability_tourgrades200_response_all_of_data_inner_age_bands_required_inner_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


