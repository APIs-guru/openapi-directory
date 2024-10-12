# LeaseWorkItemRequest

Request to lease WorkItems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_worker_time** | **str** | The current timestamp at the worker. | [optional] 
**location** | **str** | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem&#39;s job. | [optional] 
**requested_lease_duration** | **str** | The initial lease period. | [optional] 
**unified_worker_request** | **Dict[str, object]** | Untranslated bag-of-bytes WorkRequest from UnifiedWorker. | [optional] 
**work_item_types** | **List[str]** | Filter for WorkItem type. | [optional] 
**worker_capabilities** | **List[str]** | Worker capabilities. WorkItems might be limited to workers with specific capabilities. | [optional] 
**worker_id** | **str** | Identifies the worker leasing work -- typically the ID of the virtual machine running the worker. | [optional] 

## Example

```python
from openapi_client.models.lease_work_item_request import LeaseWorkItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LeaseWorkItemRequest from a JSON string
lease_work_item_request_instance = LeaseWorkItemRequest.from_json(json)
# print the JSON string representation of the object
print(LeaseWorkItemRequest.to_json())

# convert the object into a dict
lease_work_item_request_dict = lease_work_item_request_instance.to_dict()
# create an instance of LeaseWorkItemRequest from a dict
lease_work_item_request_from_dict = LeaseWorkItemRequest.from_dict(lease_work_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


