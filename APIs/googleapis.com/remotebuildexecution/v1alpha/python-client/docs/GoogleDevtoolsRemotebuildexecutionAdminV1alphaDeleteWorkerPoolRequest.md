# GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteWorkerPoolRequest

The request used for DeleteWorkerPool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the worker pool to delete. Format: &#x60;projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_delete_worker_pool_request import GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteWorkerPoolRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteWorkerPoolRequest from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_delete_worker_pool_request_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteWorkerPoolRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteWorkerPoolRequest.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_delete_worker_pool_request_dict = google_devtools_remotebuildexecution_admin_v1alpha_delete_worker_pool_request_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteWorkerPoolRequest from a dict
google_devtools_remotebuildexecution_admin_v1alpha_delete_worker_pool_request_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteWorkerPoolRequest.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_delete_worker_pool_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


