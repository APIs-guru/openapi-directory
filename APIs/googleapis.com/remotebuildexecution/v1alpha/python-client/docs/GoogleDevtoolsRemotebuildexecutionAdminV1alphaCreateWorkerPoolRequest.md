# GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest

The request used for `CreateWorkerPool`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | Resource name of the instance in which to create the new worker pool. Format: &#x60;projects/[PROJECT_ID]/instances/[INSTANCE_ID]&#x60;. | [optional] 
**pool_id** | **str** | ID of the created worker pool. A valid pool ID must: be 6-50 characters long, contain only lowercase letters, digits, hyphens and underscores, start with a lowercase letter, and end with a lowercase letter or a digit. | [optional] 
**worker_pool** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_create_worker_pool_request import GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_create_worker_pool_request_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_create_worker_pool_request_dict = google_devtools_remotebuildexecution_admin_v1alpha_create_worker_pool_request_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest from a dict
google_devtools_remotebuildexecution_admin_v1alpha_create_worker_pool_request_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_create_worker_pool_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


