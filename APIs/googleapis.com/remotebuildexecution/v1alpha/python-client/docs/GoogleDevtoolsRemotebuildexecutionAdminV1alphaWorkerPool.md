# GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool

A worker pool resource in the Remote Build Execution API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoscale** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale.md) |  | [optional] 
**channel** | **str** | Channel specifies the release channel of the pool. | [optional] 
**host_os** | **str** | HostOS specifies the OS version of the image for the worker VMs. | [optional] 
**name** | **str** | WorkerPool resource name formatted as: &#x60;projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]&#x60;. name should not be populated when creating a worker pool since it is provided in the &#x60;poolId&#x60; field. | [optional] 
**state** | **str** | Output only. State of the worker pool. | [optional] 
**worker_config** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig.md) |  | [optional] 
**worker_count** | **str** | The desired number of workers in the worker pool. Must be a value between 0 and 15000. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_worker_pool import GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_worker_pool_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_worker_pool_dict = google_devtools_remotebuildexecution_admin_v1alpha_worker_pool_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool from a dict
google_devtools_remotebuildexecution_admin_v1alpha_worker_pool_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_worker_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


