# DeviceServiceNameAvailabilityInfo

The properties indicating whether a given Windows IoT Device Service name is available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The detailed reason message. | [optional] 
**name_available** | **bool** | The value which indicates whether the provided name is available. | [optional] [readonly] 
**reason** | **str** | The reason for unavailability. | [optional] [readonly] 

## Example

```python
from openapi_client.models.device_service_name_availability_info import DeviceServiceNameAvailabilityInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceServiceNameAvailabilityInfo from a JSON string
device_service_name_availability_info_instance = DeviceServiceNameAvailabilityInfo.from_json(json)
# print the JSON string representation of the object
print(DeviceServiceNameAvailabilityInfo.to_json())

# convert the object into a dict
device_service_name_availability_info_dict = device_service_name_availability_info_instance.to_dict()
# create an instance of DeviceServiceNameAvailabilityInfo from a dict
device_service_name_availability_info_from_dict = DeviceServiceNameAvailabilityInfo.from_dict(device_service_name_availability_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


