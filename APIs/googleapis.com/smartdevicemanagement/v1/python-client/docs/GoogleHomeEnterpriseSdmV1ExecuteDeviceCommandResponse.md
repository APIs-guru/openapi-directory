# GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse

Response message for SmartDeviceManagementService.ExecuteDeviceCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | **Dict[str, object]** | The results of executing the command. | [optional] 

## Example

```python
from openapi_client.models.google_home_enterprise_sdm_v1_execute_device_command_response import GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse from a JSON string
google_home_enterprise_sdm_v1_execute_device_command_response_instance = GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse.to_json())

# convert the object into a dict
google_home_enterprise_sdm_v1_execute_device_command_response_dict = google_home_enterprise_sdm_v1_execute_device_command_response_instance.to_dict()
# create an instance of GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse from a dict
google_home_enterprise_sdm_v1_execute_device_command_response_from_dict = GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse.from_dict(google_home_enterprise_sdm_v1_execute_device_command_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


