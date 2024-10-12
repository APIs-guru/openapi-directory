# IoTSecurityAlertedDevice

Statistical information about the number of alerts per device during last set number of days.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts_count** | **int** | Number of alerts raised for this device. | [optional] [readonly] 
**device_id** | **str** | Device identifier. | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_security_alerted_device import IoTSecurityAlertedDevice

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecurityAlertedDevice from a JSON string
io_t_security_alerted_device_instance = IoTSecurityAlertedDevice.from_json(json)
# print the JSON string representation of the object
print(IoTSecurityAlertedDevice.to_json())

# convert the object into a dict
io_t_security_alerted_device_dict = io_t_security_alerted_device_instance.to_dict()
# create an instance of IoTSecurityAlertedDevice from a dict
io_t_security_alerted_device_from_dict = IoTSecurityAlertedDevice.from_dict(io_t_security_alerted_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


