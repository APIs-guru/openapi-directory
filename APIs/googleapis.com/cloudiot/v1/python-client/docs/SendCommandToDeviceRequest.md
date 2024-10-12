# SendCommandToDeviceRequest

Request for `SendCommandToDevice`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary_data** | **bytearray** | Required. The command data to send to the device. | [optional] 
**subfolder** | **str** | Optional subfolder for the command. If empty, the command will be delivered to the /devices/{device-id}/commands topic, otherwise it will be delivered to the /devices/{device-id}/commands/{subfolder} topic. Multi-level subfolders are allowed. This field must not have more than 256 characters, and must not contain any MQTT wildcards (\&quot;+\&quot; or \&quot;#\&quot;) or null characters. | [optional] 

## Example

```python
from openapi_client.models.send_command_to_device_request import SendCommandToDeviceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendCommandToDeviceRequest from a JSON string
send_command_to_device_request_instance = SendCommandToDeviceRequest.from_json(json)
# print the JSON string representation of the object
print(SendCommandToDeviceRequest.to_json())

# convert the object into a dict
send_command_to_device_request_dict = send_command_to_device_request_instance.to_dict()
# create an instance of SendCommandToDeviceRequest from a dict
send_command_to_device_request_from_dict = SendCommandToDeviceRequest.from_dict(send_command_to_device_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


