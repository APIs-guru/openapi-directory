# MonitorInstanceProperties

Model for properties of a monitor instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_properties** | **Dict[str, str]** | Properties requested in aggregation queries. | [optional] [readonly] 
**alert_generation** | **str** | Generates alert or not. | [optional] [readonly] 
**children** | [**List[MonitorInstance]**](MonitorInstance.md) | Health instance children. | [optional] [readonly] 
**component_id** | **str** | ID of the component. | [optional] [readonly] 
**component_name** | **str** | Name of the component. | [optional] [readonly] 
**component_type_id** | **str** | ID of the component type. | [optional] [readonly] 
**component_type_name** | **str** | Name of the component type. Qualifies the type of component such as whether it is a SQL database, logical disk, website, etc. | [optional] [readonly] 
**health_state** | **str** | Health state of monitor instance. | [optional] [readonly] 
**health_state_category** | **str** | Category of monitor instance&#39;s health state. | [optional] [readonly] 
**health_state_changes** | [**List[HealthStateChange]**](HealthStateChange.md) | Health state changes. | [optional] [readonly] 
**health_state_changes_end_time** | **datetime** | End time for health state changes. | [optional] [readonly] 
**health_state_changes_start_time** | **datetime** | Start time for health state changes. | [optional] [readonly] 
**last_health_state_change_time** | **datetime** | Time of last health state change. | [optional] [readonly] 
**monitor_category** | **str** | Monitor type category. Indicates the attribute of the component that the health criteria monitors such as Performance, Availability, etc. | [optional] [readonly] 
**monitor_id** | **str** | ID of the monitor instance. | [optional] [readonly] 
**monitor_name** | **str** | Name of the monitor. | [optional] [readonly] 
**monitor_type** | **str** | Type of the monitor. The qualifier for the health criteria depending on the functionality it performs such as Unit, Aggregate, Dependency. | [optional] [readonly] 
**solution_id** | **str** | ID of the OMS solution this health instance belong to. | [optional] [readonly] 
**workload_type** | **str** | Type of the workload. | [optional] [readonly] 
**workspace_id** | **str** | ID of the workspace. | [optional] [readonly] 

## Example

```python
from openapi_client.models.monitor_instance_properties import MonitorInstanceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorInstanceProperties from a JSON string
monitor_instance_properties_instance = MonitorInstanceProperties.from_json(json)
# print the JSON string representation of the object
print(MonitorInstanceProperties.to_json())

# convert the object into a dict
monitor_instance_properties_dict = monitor_instance_properties_instance.to_dict()
# create an instance of MonitorInstanceProperties from a dict
monitor_instance_properties_from_dict = MonitorInstanceProperties.from_dict(monitor_instance_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


