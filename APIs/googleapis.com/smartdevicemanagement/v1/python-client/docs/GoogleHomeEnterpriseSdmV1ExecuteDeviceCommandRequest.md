# GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest

Request message for SmartDeviceManagementService.ExecuteDeviceCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** | The command name to execute, represented by the fully qualified protobuf message name. | [optional] 
**params** | **Dict[str, object]** | The command message to execute, represented as a Struct. | [optional] 

## Example

```python
from openapi_client.models.google_home_enterprise_sdm_v1_execute_device_command_request import GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest from a JSON string
google_home_enterprise_sdm_v1_execute_device_command_request_instance = GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest.to_json())

# convert the object into a dict
google_home_enterprise_sdm_v1_execute_device_command_request_dict = google_home_enterprise_sdm_v1_execute_device_command_request_instance.to_dict()
# create an instance of GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest from a dict
google_home_enterprise_sdm_v1_execute_device_command_request_from_dict = GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest.from_dict(google_home_enterprise_sdm_v1_execute_device_command_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


