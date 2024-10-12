# GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest

The request used for `CreateInstance`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance.md) |  | [optional] 
**instance_id** | **str** | Required. ID of the created instance. A valid &#x60;instance_id&#x60; must: be 6-50 characters long, contain only lowercase letters, digits, hyphens and underscores, start with a lowercase letter, and end with a lowercase letter or a digit. | [optional] 
**parent** | **str** | Required. Resource name of the project containing the instance. Format: &#x60;projects/[PROJECT_ID]&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_create_instance_request import GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_create_instance_request_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_create_instance_request_dict = google_devtools_remotebuildexecution_admin_v1alpha_create_instance_request_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest from a dict
google_devtools_remotebuildexecution_admin_v1alpha_create_instance_request_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_create_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


