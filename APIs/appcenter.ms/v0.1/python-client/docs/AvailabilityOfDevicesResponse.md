# AvailabilityOfDevicesResponse

The current device availability (registered, available and maxmimum) for iPhones, iPads, iPods and Watches from Apple Developer Portal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipads** | [**AvailabilityOfDevicesResponseIpads**](AvailabilityOfDevicesResponseIpads.md) |  | 
**iphones** | [**AvailabilityOfDevicesResponseIpads**](AvailabilityOfDevicesResponseIpads.md) |  | 
**ipods** | [**AvailabilityOfDevicesResponseIpads**](AvailabilityOfDevicesResponseIpads.md) |  | 
**watches** | [**AvailabilityOfDevicesResponseIpads**](AvailabilityOfDevicesResponseIpads.md) |  | 

## Example

```python
from openapi_client.models.availability_of_devices_response import AvailabilityOfDevicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilityOfDevicesResponse from a JSON string
availability_of_devices_response_instance = AvailabilityOfDevicesResponse.from_json(json)
# print the JSON string representation of the object
print(AvailabilityOfDevicesResponse.to_json())

# convert the object into a dict
availability_of_devices_response_dict = availability_of_devices_response_instance.to_dict()
# create an instance of AvailabilityOfDevicesResponse from a dict
availability_of_devices_response_from_dict = AvailabilityOfDevicesResponse.from_dict(availability_of_devices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


