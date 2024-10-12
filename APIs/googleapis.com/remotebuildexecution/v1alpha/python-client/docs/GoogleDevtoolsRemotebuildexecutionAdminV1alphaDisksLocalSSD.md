# GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksLocalSSD

LocalSSD specifies how to attach local SSD to the workers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Optional. The number of Local SSDs to be attached. | [optional] 
**size_gb** | **str** | Output only. The size of the local SSD in gb. Intended for informational purposes only. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_disks_local_ssd import GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksLocalSSD

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksLocalSSD from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_disks_local_ssd_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksLocalSSD.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksLocalSSD.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_disks_local_ssd_dict = google_devtools_remotebuildexecution_admin_v1alpha_disks_local_ssd_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksLocalSSD from a dict
google_devtools_remotebuildexecution_admin_v1alpha_disks_local_ssd_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksLocalSSD.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_disks_local_ssd_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


