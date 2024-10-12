# MonitorProperties

Model for properties of a Monitor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_generation** | **str** | Generates alerts or not | [optional] [readonly] 
**component_type_display_name** | **str** | Component Type Display Name of the monitor | [optional] [readonly] 
**component_type_id** | **str** | Component Type Id of monitor | [optional] [readonly] 
**component_type_name** | **str** | Component Type Name of monitor | [optional] [readonly] 
**criteria** | [**List[MonitorCriteria]**](MonitorCriteria.md) | Collection of MonitorCriteria. For PATCH calls, instead of partial list, complete list of expected criteria should be passed for proper updating. | [optional] [readonly] 
**description** | **str** | Description of the monitor | [optional] [readonly] 
**documentation_url** | **str** | URL pointing to the documentation of the monitor | [optional] [readonly] 
**frequency** | **int** | Frequency at which monitor condition is evaluated | [optional] [readonly] 
**lookback_duration** | **int** | The duration in minutes in the past during which the monitor is evaluated | [optional] [readonly] 
**monitor_category** | **str** | Category of the monitor | [optional] [readonly] 
**monitor_display_name** | **str** | User friendly display name of the monitor | [optional] [readonly] 
**monitor_id** | **str** | ID of the monitor | [optional] [readonly] 
**monitor_name** | **str** | Name of the monitor | [optional] [readonly] 
**monitor_state** | **str** | Is the monitor state enabled or disabled | [optional] [readonly] 
**monitor_type** | **str** | Type of the monitor | [optional] [readonly] 
**parent_monitor_display_name** | **str** | User friendly display name of the parent monitor | [optional] [readonly] 
**parent_monitor_name** | **str** | Name of the parent monitor | [optional] [readonly] 
**signal_name** | **str** | Name of the signal on which this monitor is configured. | [optional] [readonly] 
**signal_type** | **str** | Type of the signal on which this monitor is configured. | [optional] [readonly] 

## Example

```python
from openapi_client.models.monitor_properties import MonitorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorProperties from a JSON string
monitor_properties_instance = MonitorProperties.from_json(json)
# print the JSON string representation of the object
print(MonitorProperties.to_json())

# convert the object into a dict
monitor_properties_dict = monitor_properties_instance.to_dict()
# create an instance of MonitorProperties from a dict
monitor_properties_from_dict = MonitorProperties.from_dict(monitor_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


