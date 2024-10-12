# AlertProperties

An alert created in alert management service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_state** | **str** | Alert object state | [optional] [readonly] 
**last_modified_date_time** | **datetime** | Last modification time(ISO-8601 format). | [optional] [readonly] 
**last_modified_user_name** | **str** | User who last modified the alert. | [optional] [readonly] 
**monitor_condition** | **str** | Condition of the rule at the monitor service | [optional] [readonly] 
**monitor_service** | **str** | Monitor service which is the source of the alert object. | [optional] [readonly] 
**payload** | **object** | More details which are contextual to the monitor service. | [optional] [readonly] 
**severity** | **str** | Severity of alert Sev1 being highest and Sev3 being lowest. | [optional] [readonly] 
**signal_type** | **str** | Log based alert or metric based alert | [optional] [readonly] 
**smart_group_id** | **str** | Unique Id of the smart group | [optional] [readonly] 
**smart_grouping_reason** | **str** | Reason for addition to a smart group | [optional] [readonly] 
**source_created_id** | **str** | Unique Id created by monitor service | [optional] [readonly] 
**start_date_time** | **datetime** | Creation time(ISO-8601 format). | [optional] [readonly] 
**target_resource** | **str** | Target ARM resource, on which alert got created. | [optional] 
**target_resource_group** | **str** | Resource group of target ARM resource. | [optional] 
**target_resource_name** | **str** | Target ARM resource name, on which alert got created. | [optional] 
**target_resource_type** | **str** | Resource type of target ARM resource | [optional] 

## Example

```python
from openapi_client.models.alert_properties import AlertProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AlertProperties from a JSON string
alert_properties_instance = AlertProperties.from_json(json)
# print the JSON string representation of the object
print(AlertProperties.to_json())

# convert the object into a dict
alert_properties_dict = alert_properties_instance.to_dict()
# create an instance of AlertProperties from a dict
alert_properties_from_dict = AlertProperties.from_dict(alert_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


