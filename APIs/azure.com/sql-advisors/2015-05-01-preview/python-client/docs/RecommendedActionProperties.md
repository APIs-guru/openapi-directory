# RecommendedActionProperties

Properties for a Database, Server or Elastic Pool Recommended Action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **Dict[str, object]** | Gets additional details specific to this recommended action. | [optional] [readonly] 
**error_details** | [**RecommendedActionErrorInfo**](RecommendedActionErrorInfo.md) |  | [optional] 
**estimated_impact** | [**List[RecommendedActionImpactRecord]**](RecommendedActionImpactRecord.md) | Gets the estimated impact info for this recommended action e.g., Estimated CPU gain, Estimated Disk Space change | [optional] [readonly] 
**execute_action_duration** | **str** | Gets the time taken for applying this recommended action on user resource. e.g., time taken for index creation | [optional] [readonly] 
**execute_action_initiated_by** | **str** | Gets if approval for applying this recommended action was given by user/system. | [optional] [readonly] 
**execute_action_initiated_time** | **datetime** | Gets the time when this recommended action was approved for execution. | [optional] [readonly] 
**execute_action_start_time** | **datetime** | Gets the time when system started applying this recommended action on the user resource. e.g., index creation start time | [optional] [readonly] 
**implementation_details** | [**RecommendedActionImplementationInfo**](RecommendedActionImplementationInfo.md) |  | [optional] 
**is_archived_action** | **bool** | Gets if this recommended action was suggested some time ago but user chose to ignore this and system added a new recommended action again. | [optional] [readonly] 
**is_executable_action** | **bool** | Gets if this recommended action is actionable by user | [optional] [readonly] 
**is_revertable_action** | **bool** | Gets if changes applied by this recommended action can be reverted by user | [optional] [readonly] 
**last_refresh** | **datetime** | Gets time when this recommended action was last refreshed. | [optional] [readonly] 
**linked_objects** | **List[str]** | Gets the linked objects, if any. | [optional] [readonly] 
**observed_impact** | [**List[RecommendedActionImpactRecord]**](RecommendedActionImpactRecord.md) | Gets the observed/actual impact info for this recommended action e.g., Actual CPU gain, Actual Disk Space change | [optional] [readonly] 
**recommendation_reason** | **str** | Gets the reason for recommending this action. e.g., DuplicateIndex | [optional] [readonly] 
**revert_action_duration** | **str** | Gets the time taken for reverting changes of this recommended action on user resource. e.g., time taken for dropping the created index. | [optional] [readonly] 
**revert_action_initiated_by** | **str** | Gets if approval for reverting this recommended action was given by user/system. | [optional] [readonly] 
**revert_action_initiated_time** | **datetime** | Gets the time when this recommended action was approved for revert. | [optional] [readonly] 
**revert_action_start_time** | **datetime** | Gets the time when system started reverting changes of this recommended action on user resource. e.g., time when index drop is executed. | [optional] [readonly] 
**score** | **int** | Gets the impact of this recommended action. Possible values are 1 - Low impact, 2 - Medium Impact and 3 - High Impact | [optional] [readonly] 
**state** | [**RecommendedActionStateInfo**](RecommendedActionStateInfo.md) |  | 
**time_series** | [**List[RecommendedActionMetricInfo]**](RecommendedActionMetricInfo.md) | Gets the time series info of metrics for this recommended action e.g., CPU consumption time series | [optional] [readonly] 
**valid_since** | **datetime** | Gets the time since when this recommended action is valid. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommended_action_properties import RecommendedActionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedActionProperties from a JSON string
recommended_action_properties_instance = RecommendedActionProperties.from_json(json)
# print the JSON string representation of the object
print(RecommendedActionProperties.to_json())

# convert the object into a dict
recommended_action_properties_dict = recommended_action_properties_instance.to_dict()
# create an instance of RecommendedActionProperties from a dict
recommended_action_properties_from_dict = RecommendedActionProperties.from_dict(recommended_action_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


