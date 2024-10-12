# IoTSecurityAggregatedAlertProperties

IoT Security solution aggregated alert details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_taken** | **str** | IoT Security solution alert response. | [optional] [readonly] 
**aggregated_date_utc** | **date** | Date of detection. | [optional] [readonly] 
**alert_display_name** | **str** | Display name of the alert type. | [optional] [readonly] 
**alert_type** | **str** | Name of the alert type. | [optional] [readonly] 
**count** | **int** | Number of alerts occurrences within the aggregated time window. | [optional] [readonly] 
**description** | **str** | Description of the suspected vulnerability and meaning. | [optional] [readonly] 
**effected_resource_type** | **str** | Azure resource ID of the resource that received the alerts. | [optional] [readonly] 
**log_analytics_query** | **str** | Log analytics query for getting the list of affected devices/alerts. | [optional] [readonly] 
**remediation_steps** | **str** | Recommended steps for remediation. | [optional] [readonly] 
**reported_severity** | **str** | Assessed alert severity. | [optional] [readonly] 
**system_source** | **str** | The type of the alerted resource (Azure, Non-Azure). | [optional] [readonly] 
**top_devices_list** | [**List[IoTSecurityAggregatedAlertPropertiesTopDevicesListInner]**](IoTSecurityAggregatedAlertPropertiesTopDevicesListInner.md) | 10 devices with the highest number of occurrences of this alert type, on this day. | [optional] [readonly] 
**vendor_name** | **str** | Name of the organization that raised the alert. | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_security_aggregated_alert_properties import IoTSecurityAggregatedAlertProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecurityAggregatedAlertProperties from a JSON string
io_t_security_aggregated_alert_properties_instance = IoTSecurityAggregatedAlertProperties.from_json(json)
# print the JSON string representation of the object
print(IoTSecurityAggregatedAlertProperties.to_json())

# convert the object into a dict
io_t_security_aggregated_alert_properties_dict = io_t_security_aggregated_alert_properties_instance.to_dict()
# create an instance of IoTSecurityAggregatedAlertProperties from a dict
io_t_security_aggregated_alert_properties_from_dict = IoTSecurityAggregatedAlertProperties.from_dict(io_t_security_aggregated_alert_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


