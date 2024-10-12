# RegionConfigurationResponse

Configuration response specific to a region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule_availability_response** | [**ScheduleAvailabilityResponse**](ScheduleAvailabilityResponse.md) |  | [optional] 
**transport_availability_response** | [**TransportAvailabilityResponse**](TransportAvailabilityResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.region_configuration_response import RegionConfigurationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RegionConfigurationResponse from a JSON string
region_configuration_response_instance = RegionConfigurationResponse.from_json(json)
# print the JSON string representation of the object
print(RegionConfigurationResponse.to_json())

# convert the object into a dict
region_configuration_response_dict = region_configuration_response_instance.to_dict()
# create an instance of RegionConfigurationResponse from a dict
region_configuration_response_from_dict = RegionConfigurationResponse.from_dict(region_configuration_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


