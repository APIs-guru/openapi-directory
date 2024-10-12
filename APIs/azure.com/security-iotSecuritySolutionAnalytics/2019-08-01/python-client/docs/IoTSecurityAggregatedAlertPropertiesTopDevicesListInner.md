# IoTSecurityAggregatedAlertPropertiesTopDevicesListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts_count** | **int** | Number of alerts raised for this device. | [optional] [readonly] 
**device_id** | **str** | Name of the device. | [optional] [readonly] 
**last_occurrence** | **str** | Most recent time this alert was raised for this device, on this day. | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_security_aggregated_alert_properties_top_devices_list_inner import IoTSecurityAggregatedAlertPropertiesTopDevicesListInner

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecurityAggregatedAlertPropertiesTopDevicesListInner from a JSON string
io_t_security_aggregated_alert_properties_top_devices_list_inner_instance = IoTSecurityAggregatedAlertPropertiesTopDevicesListInner.from_json(json)
# print the JSON string representation of the object
print(IoTSecurityAggregatedAlertPropertiesTopDevicesListInner.to_json())

# convert the object into a dict
io_t_security_aggregated_alert_properties_top_devices_list_inner_dict = io_t_security_aggregated_alert_properties_top_devices_list_inner_instance.to_dict()
# create an instance of IoTSecurityAggregatedAlertPropertiesTopDevicesListInner from a dict
io_t_security_aggregated_alert_properties_top_devices_list_inner_from_dict = IoTSecurityAggregatedAlertPropertiesTopDevicesListInner.from_dict(io_t_security_aggregated_alert_properties_top_devices_list_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


