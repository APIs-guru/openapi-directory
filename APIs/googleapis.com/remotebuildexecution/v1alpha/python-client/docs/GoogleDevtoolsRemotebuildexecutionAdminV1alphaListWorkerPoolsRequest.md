# GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Optional. A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. String values are case-insensitive. The comparison operator must be either &#x60;:&#x60;, &#x60;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; or &#x60;&lt;&#x60;. The &#x60;:&#x60; operator can be used with string fields to match substrings. For non-string fields it is equivalent to the &#x60;&#x3D;&#x60; operator. The &#x60;:*&#x60; comparison can be used to test whether a key has been defined. You can also filter on nested fields. To filter on multiple expressions, you can separate expression using &#x60;AND&#x60; and &#x60;OR&#x60; operators, using parentheses to specify precedence. If neither operator is specified, &#x60;AND&#x60; is assumed. Examples: Include only pools with more than 100 reserved workers: &#x60;(worker_count &gt; 100) (worker_config.reserved &#x3D; true)&#x60; Include only pools with a certain label or machines of the e2-standard family: &#x60;worker_config.labels.key1 : * OR worker_config.machine_type: e2-standard&#x60; | [optional] 
**parent** | **str** | Resource name of the instance. Format: &#x60;projects/[PROJECT_ID]/instances/[INSTANCE_ID]&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_list_worker_pools_request import GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsRequest from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_list_worker_pools_request_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsRequest.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_list_worker_pools_request_dict = google_devtools_remotebuildexecution_admin_v1alpha_list_worker_pools_request_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsRequest from a dict
google_devtools_remotebuildexecution_admin_v1alpha_list_worker_pools_request_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsRequest.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_list_worker_pools_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


