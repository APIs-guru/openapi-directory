# AvailabilityOfDevicesRequest

Apple credentials needed to log into the Apple Developer Portal and access provisioning profiles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The password for the Apple Developer account. | [optional] 
**service_connection_id** | **str** | The service_connection_id of the stored Apple credentials instad of username, password. | [optional] 
**username** | **str** | The username for the Apple Developer account. | [optional] 

## Example

```python
from openapi_client.models.availability_of_devices_request import AvailabilityOfDevicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilityOfDevicesRequest from a JSON string
availability_of_devices_request_instance = AvailabilityOfDevicesRequest.from_json(json)
# print the JSON string representation of the object
print(AvailabilityOfDevicesRequest.to_json())

# convert the object into a dict
availability_of_devices_request_dict = availability_of_devices_request_instance.to_dict()
# create an instance of AvailabilityOfDevicesRequest from a dict
availability_of_devices_request_from_dict = AvailabilityOfDevicesRequest.from_dict(availability_of_devices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


