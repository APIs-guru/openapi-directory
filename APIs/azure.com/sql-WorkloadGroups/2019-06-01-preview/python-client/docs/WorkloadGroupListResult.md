# WorkloadGroupListResult

A list of workload groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[WorkloadGroup]**](WorkloadGroup.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workload_group_list_result import WorkloadGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadGroupListResult from a JSON string
workload_group_list_result_instance = WorkloadGroupListResult.from_json(json)
# print the JSON string representation of the object
print(WorkloadGroupListResult.to_json())

# convert the object into a dict
workload_group_list_result_dict = workload_group_list_result_instance.to_dict()
# create an instance of WorkloadGroupListResult from a dict
workload_group_list_result_from_dict = WorkloadGroupListResult.from_dict(workload_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


