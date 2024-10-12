# WorkItemStatus

Conveys a worker's progress through the work described by a WorkItem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed** | **bool** | True if the WorkItem was completed (successfully or unsuccessfully). | [optional] 
**counter_updates** | [**List[CounterUpdate]**](CounterUpdate.md) | Worker output counters for this WorkItem. | [optional] 
**dynamic_source_split** | [**DynamicSourceSplit**](DynamicSourceSplit.md) |  | [optional] 
**errors** | [**List[Status]**](Status.md) | Specifies errors which occurred during processing. If errors are provided, and completed &#x3D; true, then the WorkItem is considered to have failed. | [optional] 
**metric_updates** | [**List[MetricUpdate]**](MetricUpdate.md) | DEPRECATED in favor of counter_updates. | [optional] 
**progress** | [**ApproximateProgress**](ApproximateProgress.md) |  | [optional] 
**report_index** | **str** | The report index. When a WorkItem is leased, the lease will contain an initial report index. When a WorkItem&#39;s status is reported to the system, the report should be sent with that report index, and the response will contain the index the worker should use for the next report. Reports received with unexpected index values will be rejected by the service. In order to preserve idempotency, the worker should not alter the contents of a report, even if the worker must submit the same report multiple times before getting back a response. The worker should not submit a subsequent report until the response for the previous report had been received from the service. | [optional] 
**reported_progress** | [**ApproximateReportedProgress**](ApproximateReportedProgress.md) |  | [optional] 
**requested_lease_duration** | **str** | Amount of time the worker requests for its lease. | [optional] 
**source_fork** | [**SourceFork**](SourceFork.md) |  | [optional] 
**source_operation_response** | [**SourceOperationResponse**](SourceOperationResponse.md) |  | [optional] 
**stop_position** | [**Position**](Position.md) |  | [optional] 
**total_throttler_wait_time_seconds** | **float** | Total time the worker spent being throttled by external systems. | [optional] 
**work_item_id** | **str** | Identifies the WorkItem. | [optional] 

## Example

```python
from openapi_client.models.work_item_status import WorkItemStatus

# TODO update the JSON string below
json = "{}"
# create an instance of WorkItemStatus from a JSON string
work_item_status_instance = WorkItemStatus.from_json(json)
# print the JSON string representation of the object
print(WorkItemStatus.to_json())

# convert the object into a dict
work_item_status_dict = work_item_status_instance.to_dict()
# create an instance of WorkItemStatus from a dict
work_item_status_from_dict = WorkItemStatus.from_dict(work_item_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


