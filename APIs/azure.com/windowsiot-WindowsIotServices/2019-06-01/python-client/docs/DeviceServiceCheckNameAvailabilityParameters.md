# DeviceServiceCheckNameAvailabilityParameters

Input values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the Windows IoT Device Service to check. | 

## Example

```python
from openapi_client.models.device_service_check_name_availability_parameters import DeviceServiceCheckNameAvailabilityParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceServiceCheckNameAvailabilityParameters from a JSON string
device_service_check_name_availability_parameters_instance = DeviceServiceCheckNameAvailabilityParameters.from_json(json)
# print the JSON string representation of the object
print(DeviceServiceCheckNameAvailabilityParameters.to_json())

# convert the object into a dict
device_service_check_name_availability_parameters_dict = device_service_check_name_availability_parameters_instance.to_dict()
# create an instance of DeviceServiceCheckNameAvailabilityParameters from a dict
device_service_check_name_availability_parameters_from_dict = DeviceServiceCheckNameAvailabilityParameters.from_dict(device_service_check_name_availability_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


