# JobTargetGroupListResult

A list of target groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[JobTargetGroup]**](JobTargetGroup.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_target_group_list_result import JobTargetGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of JobTargetGroupListResult from a JSON string
job_target_group_list_result_instance = JobTargetGroupListResult.from_json(json)
# print the JSON string representation of the object
print(JobTargetGroupListResult.to_json())

# convert the object into a dict
job_target_group_list_result_dict = job_target_group_list_result_instance.to_dict()
# create an instance of JobTargetGroupListResult from a dict
job_target_group_list_result_from_dict = JobTargetGroupListResult.from_dict(job_target_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


