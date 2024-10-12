# WorkerHealthReport

WorkerHealthReport contains information about the health of a worker. The VM should be identified by the labels attached to the WorkerMessage that this health ping belongs to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**msg** | **str** | Message describing any unusual health reports. | [optional] 
**pods** | **List[Dict[str, object]]** | The pods running on the worker. See: http://kubernetes.io/v1.1/docs/api-reference/v1/definitions.html#_v1_pod This field is used by the worker to send the status of the indvidual containers running on each worker. | [optional] 
**report_interval** | **str** | The interval at which the worker is sending health reports. The default value of 0 should be interpreted as the field is not being explicitly set by the worker. | [optional] 
**vm_broken_code** | **str** | Code to describe a specific reason, if known, that a VM has reported broken state. | [optional] 
**vm_is_broken** | **bool** | Whether the VM is in a permanently broken state. Broken VMs should be abandoned or deleted ASAP to avoid assigning or completing any work. | [optional] 
**vm_is_healthy** | **bool** | Whether the VM is currently healthy. | [optional] 
**vm_startup_time** | **str** | The time the VM was booted. | [optional] 

## Example

```python
from openapi_client.models.worker_health_report import WorkerHealthReport

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerHealthReport from a JSON string
worker_health_report_instance = WorkerHealthReport.from_json(json)
# print the JSON string representation of the object
print(WorkerHealthReport.to_json())

# convert the object into a dict
worker_health_report_dict = worker_health_report_instance.to_dict()
# create an instance of WorkerHealthReport from a dict
worker_health_report_from_dict = WorkerHealthReport.from_dict(worker_health_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


