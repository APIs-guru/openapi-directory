# HybridRunbookWorker

Definition of hybrid runbook worker.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **str** | Gets or sets the assigned machine IP address. | [optional] 
**last_seen_date_time** | **datetime** | Last Heartbeat from the Worker | [optional] 
**name** | **str** | Gets or sets the worker machine name. | [optional] 
**registration_time** | **datetime** | Gets or sets the registration time of the worker machine. | [optional] 

## Example

```python
from openapi_client.models.hybrid_runbook_worker import HybridRunbookWorker

# TODO update the JSON string below
json = "{}"
# create an instance of HybridRunbookWorker from a JSON string
hybrid_runbook_worker_instance = HybridRunbookWorker.from_json(json)
# print the JSON string representation of the object
print(HybridRunbookWorker.to_json())

# convert the object into a dict
hybrid_runbook_worker_dict = hybrid_runbook_worker_instance.to_dict()
# create an instance of HybridRunbookWorker from a dict
hybrid_runbook_worker_from_dict = HybridRunbookWorker.from_dict(hybrid_runbook_worker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


