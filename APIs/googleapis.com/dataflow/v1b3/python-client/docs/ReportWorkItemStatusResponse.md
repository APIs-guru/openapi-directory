# ReportWorkItemStatusResponse

Response from a request to report the status of WorkItems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unified_worker_response** | **Dict[str, object]** | Untranslated bag-of-bytes WorkProgressUpdateResponse for UnifiedWorker. | [optional] 
**work_item_service_states** | [**List[WorkItemServiceState]**](WorkItemServiceState.md) | A set of messages indicating the service-side state for each WorkItem whose status was reported, in the same order as the WorkItemStatus messages in the ReportWorkItemStatusRequest which resulting in this response. | [optional] 

## Example

```python
from openapi_client.models.report_work_item_status_response import ReportWorkItemStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReportWorkItemStatusResponse from a JSON string
report_work_item_status_response_instance = ReportWorkItemStatusResponse.from_json(json)
# print the JSON string representation of the object
print(ReportWorkItemStatusResponse.to_json())

# convert the object into a dict
report_work_item_status_response_dict = report_work_item_status_response_instance.to_dict()
# create an instance of ReportWorkItemStatusResponse from a dict
report_work_item_status_response_from_dict = ReportWorkItemStatusResponse.from_dict(report_work_item_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


