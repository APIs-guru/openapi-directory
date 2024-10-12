# GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetInstanceRequest

The request used for `GetInstance`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Name of the instance to retrieve. Format: &#x60;projects/[PROJECT_ID]/instances/[INSTANCE_ID]&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_get_instance_request import GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetInstanceRequest from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_get_instance_request_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetInstanceRequest.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_get_instance_request_dict = google_devtools_remotebuildexecution_admin_v1alpha_get_instance_request_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetInstanceRequest from a dict
google_devtools_remotebuildexecution_admin_v1alpha_get_instance_request_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetInstanceRequest.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_get_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


