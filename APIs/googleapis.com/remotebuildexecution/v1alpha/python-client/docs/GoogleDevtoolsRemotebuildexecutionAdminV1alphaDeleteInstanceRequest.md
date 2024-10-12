# GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteInstanceRequest

The request used for `DeleteInstance`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Name of the instance to delete. Format: &#x60;projects/[PROJECT_ID]/instances/[INSTANCE_ID]&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_delete_instance_request import GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteInstanceRequest from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_delete_instance_request_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteInstanceRequest.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_delete_instance_request_dict = google_devtools_remotebuildexecution_admin_v1alpha_delete_instance_request_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteInstanceRequest from a dict
google_devtools_remotebuildexecution_admin_v1alpha_delete_instance_request_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteInstanceRequest.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_delete_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


