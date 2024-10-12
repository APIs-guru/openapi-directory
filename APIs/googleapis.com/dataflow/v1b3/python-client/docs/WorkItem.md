# WorkItem

WorkItem represents basic information about a WorkItem to be executed in the cloud.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | **str** | Work item-specific configuration as an opaque blob. | [optional] 
**id** | **str** | Identifies this WorkItem. | [optional] 
**initial_report_index** | **str** | The initial index to use when reporting the status of the WorkItem. | [optional] 
**job_id** | **str** | Identifies the workflow job this WorkItem belongs to. | [optional] 
**lease_expire_time** | **str** | Time when the lease on this Work will expire. | [optional] 
**map_task** | [**MapTask**](MapTask.md) |  | [optional] 
**packages** | [**List[Package]**](Package.md) | Any required packages that need to be fetched in order to execute this WorkItem. | [optional] 
**project_id** | **str** | Identifies the cloud project this WorkItem belongs to. | [optional] 
**report_status_interval** | **str** | Recommended reporting interval. | [optional] 
**seq_map_task** | [**SeqMapTask**](SeqMapTask.md) |  | [optional] 
**shell_task** | [**ShellTask**](ShellTask.md) |  | [optional] 
**source_operation_task** | [**SourceOperationRequest**](SourceOperationRequest.md) |  | [optional] 
**streaming_computation_task** | [**StreamingComputationTask**](StreamingComputationTask.md) |  | [optional] 
**streaming_config_task** | [**StreamingConfigTask**](StreamingConfigTask.md) |  | [optional] 
**streaming_setup_task** | [**StreamingSetupTask**](StreamingSetupTask.md) |  | [optional] 

## Example

```python
from openapi_client.models.work_item import WorkItem

# TODO update the JSON string below
json = "{}"
# create an instance of WorkItem from a JSON string
work_item_instance = WorkItem.from_json(json)
# print the JSON string representation of the object
print(WorkItem.to_json())

# convert the object into a dict
work_item_dict = work_item_instance.to_dict()
# create an instance of WorkItem from a dict
work_item_from_dict = WorkItem.from_dict(work_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


