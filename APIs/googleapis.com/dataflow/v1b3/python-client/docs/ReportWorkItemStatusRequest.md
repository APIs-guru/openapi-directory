# ReportWorkItemStatusRequest

Request to report the status of WorkItems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_worker_time** | **str** | The current timestamp at the worker. | [optional] 
**location** | **str** | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem&#39;s job. | [optional] 
**unified_worker_request** | **Dict[str, object]** | Untranslated bag-of-bytes WorkProgressUpdateRequest from UnifiedWorker. | [optional] 
**work_item_statuses** | [**List[WorkItemStatus]**](WorkItemStatus.md) | The order is unimportant, except that the order of the WorkItemServiceState messages in the ReportWorkItemStatusResponse corresponds to the order of WorkItemStatus messages here. | [optional] 
**worker_id** | **str** | The ID of the worker reporting the WorkItem status. If this does not match the ID of the worker which the Dataflow service believes currently has the lease on the WorkItem, the report will be dropped (with an error response). | [optional] 

## Example

```python
from openapi_client.models.report_work_item_status_request import ReportWorkItemStatusRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReportWorkItemStatusRequest from a JSON string
report_work_item_status_request_instance = ReportWorkItemStatusRequest.from_json(json)
# print the JSON string representation of the object
print(ReportWorkItemStatusRequest.to_json())

# convert the object into a dict
report_work_item_status_request_dict = report_work_item_status_request_instance.to_dict()
# create an instance of ReportWorkItemStatusRequest from a dict
report_work_item_status_request_from_dict = ReportWorkItemStatusRequest.from_dict(report_work_item_status_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


