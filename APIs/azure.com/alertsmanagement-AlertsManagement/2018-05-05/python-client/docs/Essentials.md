# Essentials

This object contains consistent fields across different monitor services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_rule** | **str** | Rule(monitor) which fired alert instance. Depending on the monitor service,  this would be ARM id or name of the rule. | [optional] [readonly] 
**alert_state** | **str** | Alert object state, which can be modified by the user. | [optional] [readonly] 
**last_modified_date_time** | **datetime** | Last modification time(ISO-8601 format) of alert instance. | [optional] [readonly] 
**last_modified_user_name** | **str** | User who last modified the alert, in case of monitor service updates user would be &#39;system&#39;, otherwise name of the user. | [optional] [readonly] 
**monitor_condition** | **str** | Can be &#39;Fired&#39; or &#39;Resolved&#39;, which represents whether the underlying conditions have crossed the defined alert rule thresholds. | [optional] [readonly] 
**monitor_condition_resolved_date_time** | **datetime** | Resolved time(ISO-8601 format) of alert instance. This will be updated when monitor service resolves the alert instance because the rule condition is no longer met. | [optional] [readonly] 
**monitor_service** | **str** | Monitor service on which the rule(monitor) is set. | [optional] [readonly] 
**severity** | **str** | Severity of alert Sev0 being highest and Sev4 being lowest. | [optional] [readonly] 
**signal_type** | **str** | The type of signal the alert is based on, which could be metrics, logs or activity logs. | [optional] [readonly] 
**smart_group_id** | **str** | Unique Id of the smart group | [optional] [readonly] 
**smart_grouping_reason** | **str** | Verbose reason describing the reason why this alert instance is added to a smart group | [optional] [readonly] 
**source_created_id** | **str** | Unique Id created by monitor service for each alert instance. This could be used to track the issue at the monitor service, in case of Nagios, Zabbix, SCOM etc. | [optional] [readonly] 
**start_date_time** | **datetime** | Creation time(ISO-8601 format) of alert instance. | [optional] [readonly] 
**target_resource** | **str** | Target ARM resource, on which alert got created. | [optional] 
**target_resource_group** | **str** | Resource group of target ARM resource, on which alert got created. | [optional] 
**target_resource_name** | **str** | Name of the target ARM resource name, on which alert got created. | [optional] 
**target_resource_type** | **str** | Resource type of target ARM resource, on which alert got created. | [optional] 

## Example

```python
from openapi_client.models.essentials import Essentials

# TODO update the JSON string below
json = "{}"
# create an instance of Essentials from a JSON string
essentials_instance = Essentials.from_json(json)
# print the JSON string representation of the object
print(Essentials.to_json())

# convert the object into a dict
essentials_dict = essentials_instance.to_dict()
# create an instance of Essentials from a dict
essentials_from_dict = Essentials.from_dict(essentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


