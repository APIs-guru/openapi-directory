# RegionConfigurationRequest

Request body to get the configuration for the region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule_availability_request** | [**ScheduleAvailabilityRequest**](ScheduleAvailabilityRequest.md) |  | [optional] 
**transport_availability_request** | [**TransportAvailabilityRequest**](TransportAvailabilityRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.region_configuration_request import RegionConfigurationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RegionConfigurationRequest from a JSON string
region_configuration_request_instance = RegionConfigurationRequest.from_json(json)
# print the JSON string representation of the object
print(RegionConfigurationRequest.to_json())

# convert the object into a dict
region_configuration_request_dict = region_configuration_request_instance.to_dict()
# create an instance of RegionConfigurationRequest from a dict
region_configuration_request_from_dict = RegionConfigurationRequest.from_dict(region_configuration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


