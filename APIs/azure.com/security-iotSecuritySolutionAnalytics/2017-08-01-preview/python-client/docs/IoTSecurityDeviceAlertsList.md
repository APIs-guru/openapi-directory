# IoTSecurityDeviceAlertsList

List of alerts with the count of raised alerts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[IoTSecurityDeviceAlert]**](IoTSecurityDeviceAlert.md) | List of top alerts data | 

## Example

```python
from openapi_client.models.io_t_security_device_alerts_list import IoTSecurityDeviceAlertsList

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecurityDeviceAlertsList from a JSON string
io_t_security_device_alerts_list_instance = IoTSecurityDeviceAlertsList.from_json(json)
# print the JSON string representation of the object
print(IoTSecurityDeviceAlertsList.to_json())

# convert the object into a dict
io_t_security_device_alerts_list_dict = io_t_security_device_alerts_list_instance.to_dict()
# create an instance of IoTSecurityDeviceAlertsList from a dict
io_t_security_device_alerts_list_from_dict = IoTSecurityDeviceAlertsList.from_dict(io_t_security_device_alerts_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


