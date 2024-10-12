# ThresholdCheck


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** | An optional description of the check. | [optional] 
**id** | **str** |  | [optional] [readonly] 
**labels** | [**List[Label]**](Label.md) |  | [optional] 
**last_run_error** | **str** |  | [optional] [readonly] 
**last_run_status** | **str** |  | [optional] [readonly] 
**latest_completed** | **datetime** | Timestamp of latest scheduled, completed run, RFC3339. | [optional] [readonly] 
**links** | [**CheckBaseLinks**](CheckBaseLinks.md) |  | [optional] 
**name** | **str** |  | 
**org_id** | **str** | The ID of the organization that owns this check. | 
**owner_id** | **str** | The ID of creator used to create this check. | [optional] [readonly] 
**query** | [**DashboardQuery**](DashboardQuery.md) |  | 
**status** | [**TaskStatusType**](TaskStatusType.md) |  | [optional] 
**task_id** | **str** | The ID of the task associated with this check. | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**every** | **str** | Check repetition interval. | [optional] 
**offset** | **str** | Duration to delay after the schedule, before executing check. | [optional] 
**status_message_template** | **str** | The template used to generate and write a status message. | [optional] 
**tags** | [**List[DeadmanCheckAllOfTags]**](DeadmanCheckAllOfTags.md) | List of tags to write to each status. | [optional] 
**thresholds** | [**List[Threshold]**](Threshold.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.threshold_check import ThresholdCheck

# TODO update the JSON string below
json = "{}"
# create an instance of ThresholdCheck from a JSON string
threshold_check_instance = ThresholdCheck.from_json(json)
# print the JSON string representation of the object
print(ThresholdCheck.to_json())

# convert the object into a dict
threshold_check_dict = threshold_check_instance.to_dict()
# create an instance of ThresholdCheck from a dict
threshold_check_from_dict = ThresholdCheck.from_dict(threshold_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


