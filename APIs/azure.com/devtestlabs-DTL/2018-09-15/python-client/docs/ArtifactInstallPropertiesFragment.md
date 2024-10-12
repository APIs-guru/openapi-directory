# ArtifactInstallPropertiesFragment

Properties of an artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_id** | **str** | The artifact&#39;s identifier. | [optional] 
**artifact_title** | **str** | The artifact&#39;s title. | [optional] 
**deployment_status_message** | **str** | The status message from the deployment. | [optional] 
**install_time** | **datetime** | The time that the artifact starts to install on the virtual machine. | [optional] 
**parameters** | [**List[ArtifactParameterPropertiesFragment]**](ArtifactParameterPropertiesFragment.md) | The parameters of the artifact. | [optional] 
**status** | **str** | The status of the artifact. | [optional] 
**vm_extension_status_message** | **str** | The status message from the virtual machine extension. | [optional] 

## Example

```python
from openapi_client.models.artifact_install_properties_fragment import ArtifactInstallPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactInstallPropertiesFragment from a JSON string
artifact_install_properties_fragment_instance = ArtifactInstallPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(ArtifactInstallPropertiesFragment.to_json())

# convert the object into a dict
artifact_install_properties_fragment_dict = artifact_install_properties_fragment_instance.to_dict()
# create an instance of ArtifactInstallPropertiesFragment from a dict
artifact_install_properties_fragment_from_dict = ArtifactInstallPropertiesFragment.from_dict(artifact_install_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


