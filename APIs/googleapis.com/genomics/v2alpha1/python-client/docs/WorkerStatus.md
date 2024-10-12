# WorkerStatus

The status of the worker VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attached_disks** | [**Dict[str, DiskStatus]**](DiskStatus.md) | Status of attached disks. | [optional] 
**boot_disk** | [**DiskStatus**](DiskStatus.md) |  | [optional] 
**free_ram_bytes** | **str** | Free RAM. | [optional] 
**total_ram_bytes** | **str** | Total RAM. | [optional] 
**uptime_seconds** | **str** | System uptime. | [optional] 

## Example

```python
from openapi_client.models.worker_status import WorkerStatus

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerStatus from a JSON string
worker_status_instance = WorkerStatus.from_json(json)
# print the JSON string representation of the object
print(WorkerStatus.to_json())

# convert the object into a dict
worker_status_dict = worker_status_instance.to_dict()
# create an instance of WorkerStatus from a dict
worker_status_from_dict = WorkerStatus.from_dict(worker_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


