# WorkItemDetails

Information about an individual work item execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_id** | **str** | Attempt ID of this work item | [optional] 
**end_time** | **str** | End time of this work item attempt. If the work item is completed, this is the actual end time of the work item. Otherwise, it is the predicted end time. | [optional] 
**metrics** | [**List[MetricUpdate]**](MetricUpdate.md) | Metrics for this work item. | [optional] 
**progress** | [**ProgressTimeseries**](ProgressTimeseries.md) |  | [optional] 
**start_time** | **str** | Start time of this work item attempt. | [optional] 
**state** | **str** | State of this work item. | [optional] 
**straggler_info** | [**StragglerInfo**](StragglerInfo.md) |  | [optional] 
**task_id** | **str** | Name of this work item. | [optional] 

## Example

```python
from openapi_client.models.work_item_details import WorkItemDetails

# TODO update the JSON string below
json = "{}"
# create an instance of WorkItemDetails from a JSON string
work_item_details_instance = WorkItemDetails.from_json(json)
# print the JSON string representation of the object
print(WorkItemDetails.to_json())

# convert the object into a dict
work_item_details_dict = work_item_details_instance.to_dict()
# create an instance of WorkItemDetails from a dict
work_item_details_from_dict = WorkItemDetails.from_dict(work_item_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


