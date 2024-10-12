# WorkItemServiceState

The Dataflow service's idea of the current state of a WorkItem being processed by a worker.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_work_status** | [**Status**](Status.md) |  | [optional] 
**harness_data** | **Dict[str, object]** | Other data returned by the service, specific to the particular worker harness. | [optional] 
**hot_key_detection** | [**HotKeyDetection**](HotKeyDetection.md) |  | [optional] 
**lease_expire_time** | **str** | Time at which the current lease will expire. | [optional] 
**metric_short_id** | [**List[MetricShortId]**](MetricShortId.md) | The short ids that workers should use in subsequent metric updates. Workers should strive to use short ids whenever possible, but it is ok to request the short_id again if a worker lost track of it (e.g. if the worker is recovering from a crash). NOTE: it is possible that the response may have short ids for a subset of the metrics. | [optional] 
**next_report_index** | **str** | The index value to use for the next report sent by the worker. Note: If the report call fails for whatever reason, the worker should reuse this index for subsequent report attempts. | [optional] 
**report_status_interval** | **str** | New recommended reporting interval. | [optional] 
**split_request** | [**ApproximateSplitRequest**](ApproximateSplitRequest.md) |  | [optional] 
**suggested_stop_point** | [**ApproximateProgress**](ApproximateProgress.md) |  | [optional] 
**suggested_stop_position** | [**Position**](Position.md) |  | [optional] 

## Example

```python
from openapi_client.models.work_item_service_state import WorkItemServiceState

# TODO update the JSON string below
json = "{}"
# create an instance of WorkItemServiceState from a JSON string
work_item_service_state_instance = WorkItemServiceState.from_json(json)
# print the JSON string representation of the object
print(WorkItemServiceState.to_json())

# convert the object into a dict
work_item_service_state_dict = work_item_service_state_instance.to_dict()
# create an instance of WorkItemServiceState from a dict
work_item_service_state_from_dict = WorkItemServiceState.from_dict(work_item_service_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


