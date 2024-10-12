# ContainerRegistryProperties

Properties of Azure Container Registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **str** | ARM resource ID of the Azure Container Registry used to store Docker images for web services in the cluster. If not provided one will be created. This cannot be changed once the cluster is created. | [optional] 

## Example

```python
from openapi_client.models.container_registry_properties import ContainerRegistryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerRegistryProperties from a JSON string
container_registry_properties_instance = ContainerRegistryProperties.from_json(json)
# print the JSON string representation of the object
print(ContainerRegistryProperties.to_json())

# convert the object into a dict
container_registry_properties_dict = container_registry_properties_instance.to_dict()
# create an instance of ContainerRegistryProperties from a dict
container_registry_properties_from_dict = ContainerRegistryProperties.from_dict(container_registry_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


