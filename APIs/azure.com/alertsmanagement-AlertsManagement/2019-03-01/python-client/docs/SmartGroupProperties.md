# SmartGroupProperties

Properties of smart group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_severities** | [**List[SmartGroupAggregatedProperty]**](SmartGroupAggregatedProperty.md) | Summary of alertSeverities in the smart group | [optional] 
**alert_states** | [**List[SmartGroupAggregatedProperty]**](SmartGroupAggregatedProperty.md) | Summary of alertStates in the smart group | [optional] 
**alerts_count** | **int** | Total number of alerts in smart group | [optional] 
**last_modified_date_time** | **datetime** | Last updated time of smart group. Date-Time in ISO-8601 format. | [optional] [readonly] 
**last_modified_user_name** | **str** | Last modified by user name. | [optional] [readonly] 
**monitor_conditions** | [**List[SmartGroupAggregatedProperty]**](SmartGroupAggregatedProperty.md) | Summary of monitorConditions in the smart group | [optional] 
**monitor_services** | [**List[SmartGroupAggregatedProperty]**](SmartGroupAggregatedProperty.md) | Summary of monitorServices in the smart group | [optional] 
**next_link** | **str** | The URI to fetch the next page of alerts. Call ListNext() with this URI to fetch the next page alerts. | [optional] 
**resource_groups** | [**List[SmartGroupAggregatedProperty]**](SmartGroupAggregatedProperty.md) | Summary of target resource groups in the smart group | [optional] 
**resource_types** | [**List[SmartGroupAggregatedProperty]**](SmartGroupAggregatedProperty.md) | Summary of target resource types in the smart group | [optional] 
**resources** | [**List[SmartGroupAggregatedProperty]**](SmartGroupAggregatedProperty.md) | Summary of target resources in the smart group | [optional] 
**severity** | **str** | Severity of smart group is the highest(Sev0 &gt;... &gt; Sev4) severity of all the alerts in the group. | [optional] [readonly] 
**smart_group_state** | **str** | Smart group state | [optional] [readonly] 
**start_date_time** | **datetime** | Creation time of smart group. Date-Time in ISO-8601 format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.smart_group_properties import SmartGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SmartGroupProperties from a JSON string
smart_group_properties_instance = SmartGroupProperties.from_json(json)
# print the JSON string representation of the object
print(SmartGroupProperties.to_json())

# convert the object into a dict
smart_group_properties_dict = smart_group_properties_instance.to_dict()
# create an instance of SmartGroupProperties from a dict
smart_group_properties_from_dict = SmartGroupProperties.from_dict(smart_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


