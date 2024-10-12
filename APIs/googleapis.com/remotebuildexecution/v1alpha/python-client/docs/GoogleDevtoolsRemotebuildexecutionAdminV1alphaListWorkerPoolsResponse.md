# GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**worker_pools** | [**List[GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool]**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool.md) | The list of worker pools in a given instance. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_list_worker_pools_response import GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_list_worker_pools_response_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_list_worker_pools_response_dict = google_devtools_remotebuildexecution_admin_v1alpha_list_worker_pools_response_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse from a dict
google_devtools_remotebuildexecution_admin_v1alpha_list_worker_pools_response_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_list_worker_pools_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


