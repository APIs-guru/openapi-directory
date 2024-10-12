# Instance

An Instance resource is the computing unit that App Engine uses to automatically scale an application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_engine_release** | **str** | Output only. App Engine release this instance is running on. | [optional] [readonly] 
**availability** | **str** | Output only. Availability of the instance. | [optional] [readonly] 
**average_latency** | **int** | Output only. Average latency (ms) over the last minute. | [optional] [readonly] 
**errors** | **int** | Output only. Number of errors since this instance was started. | [optional] [readonly] 
**id** | **str** | Output only. Relative name of the instance within the version. Example: instance-1. | [optional] [readonly] 
**memory_usage** | **str** | Output only. Total memory in use (bytes). | [optional] [readonly] 
**name** | **str** | Output only. Full path to the Instance resource in the API. Example: apps/myapp/services/default/versions/v1/instances/instance-1. | [optional] [readonly] 
**qps** | **float** | Output only. Average queries per second (QPS) over the last minute. | [optional] [readonly] 
**requests** | **int** | Output only. Number of requests since this instance was started. | [optional] [readonly] 
**start_time** | **str** | Output only. Time that this instance was started.@OutputOnly | [optional] [readonly] 
**vm_debug_enabled** | **bool** | Output only. Whether this instance is in debug mode. Only applicable for instances in App Engine flexible environment. | [optional] [readonly] 
**vm_id** | **str** | Output only. Virtual machine ID of this instance. Only applicable for instances in App Engine flexible environment. | [optional] [readonly] 
**vm_ip** | **str** | Output only. The IP address of this instance. Only applicable for instances in App Engine flexible environment. | [optional] [readonly] 
**vm_liveness** | **str** | Output only. The liveness health check of this instance. Only applicable for instances in App Engine flexible environment. | [optional] [readonly] 
**vm_name** | **str** | Output only. Name of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment. | [optional] [readonly] 
**vm_status** | **str** | Output only. Status of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment. | [optional] [readonly] 
**vm_zone_name** | **str** | Output only. Zone where the virtual machine is located. Only applicable for instances in App Engine flexible environment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance import Instance

# TODO update the JSON string below
json = "{}"
# create an instance of Instance from a JSON string
instance_instance = Instance.from_json(json)
# print the JSON string representation of the object
print(Instance.to_json())

# convert the object into a dict
instance_dict = instance_instance.to_dict()
# create an instance of Instance from a dict
instance_from_dict = Instance.from_dict(instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


