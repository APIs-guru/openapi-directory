# IoTSecurityAlertedDevicesList

List of devices with the count of raised alerts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[IoTSecurityAlertedDevice]**](IoTSecurityAlertedDevice.md) | List of aggregated alerts data | 

## Example

```python
from openapi_client.models.io_t_security_alerted_devices_list import IoTSecurityAlertedDevicesList

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecurityAlertedDevicesList from a JSON string
io_t_security_alerted_devices_list_instance = IoTSecurityAlertedDevicesList.from_json(json)
# print the JSON string representation of the object
print(IoTSecurityAlertedDevicesList.to_json())

# convert the object into a dict
io_t_security_alerted_devices_list_dict = io_t_security_alerted_devices_list_instance.to_dict()
# create an instance of IoTSecurityAlertedDevicesList from a dict
io_t_security_alerted_devices_list_from_dict = IoTSecurityAlertedDevicesList.from_dict(io_t_security_alerted_devices_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


