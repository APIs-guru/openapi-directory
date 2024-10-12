# GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig

AcceleratorConfig defines the accelerator cards to attach to the VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_count** | **str** | The number of guest accelerator cards exposed to each VM. | [optional] 
**accelerator_type** | **str** | The type of accelerator to attach to each VM, e.g. \&quot;nvidia-tesla-k80\&quot; for nVidia Tesla K80. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_accelerator_config import GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_accelerator_config_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_accelerator_config_dict = google_devtools_remotebuildexecution_admin_v1alpha_accelerator_config_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig from a dict
google_devtools_remotebuildexecution_admin_v1alpha_accelerator_config_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_accelerator_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


