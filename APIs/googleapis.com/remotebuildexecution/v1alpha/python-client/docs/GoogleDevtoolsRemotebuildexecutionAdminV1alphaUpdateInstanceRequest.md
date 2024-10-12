# GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateInstanceRequest

The request used for `UpdateInstance`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance.md) |  | [optional] 
**logging_enabled** | **bool** | Deprecated, use instance.logging_enabled instead. Whether to enable Stackdriver logging for this instance. | [optional] 
**name** | **str** | Deprecated, use instance.Name instead. Name of the instance to update. Format: &#x60;projects/[PROJECT_ID]/instances/[INSTANCE_ID]&#x60;. | [optional] 
**update_mask** | **str** | The update mask applies to instance. For the &#x60;FieldMask&#x60; definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If an empty update_mask is provided, only the non-default valued field in the worker pool field will be updated. Note that in order to update a field to the default value (zero, false, empty string) an explicit update_mask must be provided. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_update_instance_request import GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateInstanceRequest from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_update_instance_request_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateInstanceRequest.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_update_instance_request_dict = google_devtools_remotebuildexecution_admin_v1alpha_update_instance_request_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateInstanceRequest from a dict
google_devtools_remotebuildexecution_admin_v1alpha_update_instance_request_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateInstanceRequest.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_update_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


