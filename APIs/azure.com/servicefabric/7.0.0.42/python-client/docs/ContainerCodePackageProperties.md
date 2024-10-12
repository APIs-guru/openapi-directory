# ContainerCodePackageProperties

Describes a container and its runtime properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commands** | **List[str]** | Command array to execute within the container in exec form. | [optional] 
**diagnostics** | [**DiagnosticsRef**](DiagnosticsRef.md) |  | [optional] 
**endpoints** | [**List[EndpointProperties]**](EndpointProperties.md) | The endpoints exposed by this container. | [optional] 
**entrypoint** | **str** | Override for the default entry point in the container. | [optional] 
**environment_variables** | [**List[EnvironmentVariable]**](EnvironmentVariable.md) | The environment variables to set in this container | [optional] 
**image** | **str** | The Container image to use. | 
**image_registry_credential** | [**ImageRegistryCredential**](ImageRegistryCredential.md) |  | [optional] 
**instance_view** | [**ContainerInstanceView**](ContainerInstanceView.md) |  | [optional] 
**labels** | [**List[ContainerLabel]**](ContainerLabel.md) | The labels to set in this container. | [optional] 
**liveness_probe** | [**List[Probe]**](Probe.md) | An array of liveness probes for a code package. It determines when to restart a code package. | [optional] 
**name** | **str** | The name of the code package. | 
**readiness_probe** | [**List[Probe]**](Probe.md) | An array of readiness probes for a code package. It determines when to unpublish an endpoint. | [optional] 
**reliable_collections_refs** | [**List[ReliableCollectionsRef]**](ReliableCollectionsRef.md) | A list of ReliableCollection resources used by this particular code package. Please refer to ReliableCollectionsRef for more details. | [optional] 
**resources** | [**ResourceRequirements**](ResourceRequirements.md) |  | 
**settings** | [**List[Setting]**](Setting.md) | The settings to set in this container. The setting file path can be fetched from environment variable \&quot;Fabric_SettingPath\&quot;. The path for Windows container is \&quot;C:\\\\secrets\&quot;. The path for Linux container is \&quot;/var/secrets\&quot;. | [optional] 
**volume_refs** | [**List[VolumeReference]**](VolumeReference.md) | Volumes to be attached to the container. The lifetime of these volumes is independent of the application&#39;s lifetime. | [optional] 
**volumes** | [**List[ApplicationScopedVolume]**](ApplicationScopedVolume.md) | Volumes to be attached to the container. The lifetime of these volumes is scoped to the application&#39;s lifetime. | [optional] 

## Example

```python
from openapi_client.models.container_code_package_properties import ContainerCodePackageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerCodePackageProperties from a JSON string
container_code_package_properties_instance = ContainerCodePackageProperties.from_json(json)
# print the JSON string representation of the object
print(ContainerCodePackageProperties.to_json())

# convert the object into a dict
container_code_package_properties_dict = container_code_package_properties_instance.to_dict()
# create an instance of ContainerCodePackageProperties from a dict
container_code_package_properties_from_dict = ContainerCodePackageProperties.from_dict(container_code_package_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


