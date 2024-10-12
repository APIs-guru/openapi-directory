# GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesRequest

The request used for `ListInstances`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | Required. Resource name of the project. Format: &#x60;projects/[PROJECT_ID]&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_list_instances_request import GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesRequest from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_list_instances_request_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesRequest.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_list_instances_request_dict = google_devtools_remotebuildexecution_admin_v1alpha_list_instances_request_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesRequest from a dict
google_devtools_remotebuildexecution_admin_v1alpha_list_instances_request_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesRequest.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_list_instances_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


