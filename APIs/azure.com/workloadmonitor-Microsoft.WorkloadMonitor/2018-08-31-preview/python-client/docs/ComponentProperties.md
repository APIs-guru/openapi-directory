# ComponentProperties

Model for properties of a component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_properties** | **Dict[str, str]** | Properties requested in aggregation queries. | [optional] [readonly] 
**children** | [**List[Component]**](Component.md) | component children. | [optional] [readonly] 
**component_name** | **str** | Name of the component. | [optional] [readonly] 
**component_type_group_category** | **str** | Component type group category. Classification of component type groups into a logical category. e.g. Network, Disk, Memory, CPU. | [optional] [readonly] 
**component_type_id** | **str** | ID of the component type. | [optional] [readonly] 
**component_type_name** | **str** | Name of the component type. Qualifies the type of component such as whether it is a SQL database, logical disk, website, etc. | [optional] [readonly] 
**health_state** | **str** | Health state of the component. | [optional] [readonly] 
**health_state_category** | **str** | Category of component&#39;s health state. | [optional] [readonly] 
**health_state_changes_end_time** | **datetime** | End time for health state changes. | [optional] [readonly] 
**health_state_changes_start_time** | **datetime** | Start time for health state changes. | [optional] [readonly] 
**last_health_state_change_time** | **datetime** | Time of last health state change. | [optional] [readonly] 
**solution_id** | **str** | ID of the OMS solution this component belong to. | [optional] [readonly] 
**vm_id** | **str** | ID of the VM this component belongs to. | [optional] [readonly] 
**vm_name** | **str** | Name of the VM this component belongs to. | [optional] [readonly] 
**vm_tags** | **Dict[str, str]** | Tags on the VM this component belongs to. | [optional] [readonly] 
**workload_type** | **str** | Type of the workload. | [optional] [readonly] 
**workspace_id** | **str** | ID of the workspace. | [optional] [readonly] 

## Example

```python
from openapi_client.models.component_properties import ComponentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ComponentProperties from a JSON string
component_properties_instance = ComponentProperties.from_json(json)
# print the JSON string representation of the object
print(ComponentProperties.to_json())

# convert the object into a dict
component_properties_dict = component_properties_instance.to_dict()
# create an instance of ComponentProperties from a dict
component_properties_from_dict = ComponentProperties.from_dict(component_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


