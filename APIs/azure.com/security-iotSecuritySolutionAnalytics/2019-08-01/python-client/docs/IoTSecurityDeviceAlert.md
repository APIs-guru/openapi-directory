# IoTSecurityDeviceAlert

Statistical information about the number of alerts per alert type during last set number of days

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_display_name** | **str** | Display name of the alert | [optional] [readonly] 
**alerts_count** | **int** | Number of alerts raised for this alert type. | [optional] [readonly] 
**reported_severity** | **str** | Assessed Alert severity. | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_security_device_alert import IoTSecurityDeviceAlert

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecurityDeviceAlert from a JSON string
io_t_security_device_alert_instance = IoTSecurityDeviceAlert.from_json(json)
# print the JSON string representation of the object
print(IoTSecurityDeviceAlert.to_json())

# convert the object into a dict
io_t_security_device_alert_dict = io_t_security_device_alert_instance.to_dict()
# create an instance of IoTSecurityDeviceAlert from a dict
io_t_security_device_alert_from_dict = IoTSecurityDeviceAlert.from_dict(io_t_security_device_alert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


