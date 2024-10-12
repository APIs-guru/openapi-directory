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
**name** | **str** | The name of the code package. | 
**resources** | [**ResourceRequirements**](ResourceRequirements.md) |  | 
**settings** | [**List[Setting]**](Setting.md) | The settings to set in this container. The setting file path can be fetched from environment variable \&quot;Fabric_SettingPath\&quot;. The path for Windows container is \&quot;C:\\\\secrets\&quot;. The path for Linux container is \&quot;/var/secrets\&quot;. | [optional] 
**volume_refs** | [**List[ContainerVolume]**](ContainerVolume.md) | The volumes to be attached to the container. | [optional] 

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


