# GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest

The request used for UpdateWorkerPool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**update_mask** | **str** | The update mask applies to worker_pool. For the &#x60;FieldMask&#x60; definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If an empty update_mask is provided, only the non-default valued field in the worker pool field will be updated. Note that in order to update a field to the default value (zero, false, empty string) an explicit update_mask must be provided. | [optional] 
**worker_pool** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_update_worker_pool_request import GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_update_worker_pool_request_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_update_worker_pool_request_dict = google_devtools_remotebuildexecution_admin_v1alpha_update_worker_pool_request_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest from a dict
google_devtools_remotebuildexecution_admin_v1alpha_update_worker_pool_request_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_update_worker_pool_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


