# BookingAvailabilityRequestAgeBandsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**band_id** | **int** | **unique numeric identifier** for the age band - See: [Working with age bands](#section/Appendices/Working-with-age-bands)  | [optional] 
**count** | **int** | **number of people** in *this* age band | [optional] 

## Example

```python
from openapi_client.models.booking_availability_request_age_bands_inner import BookingAvailabilityRequestAgeBandsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingAvailabilityRequestAgeBandsInner from a JSON string
booking_availability_request_age_bands_inner_instance = BookingAvailabilityRequestAgeBandsInner.from_json(json)
# print the JSON string representation of the object
print(BookingAvailabilityRequestAgeBandsInner.to_json())

# convert the object into a dict
booking_availability_request_age_bands_inner_dict = booking_availability_request_age_bands_inner_instance.to_dict()
# create an instance of BookingAvailabilityRequestAgeBandsInner from a dict
booking_availability_request_age_bands_inner_from_dict = BookingAvailabilityRequestAgeBandsInner.from_dict(booking_availability_request_age_bands_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


