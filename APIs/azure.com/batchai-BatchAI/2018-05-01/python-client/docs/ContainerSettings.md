# ContainerSettings

Docker container settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_source_registry** | [**ImageSourceRegistry**](ImageSourceRegistry.md) |  | 
**shm_size** | **str** | Size of /dev/shm. Please refer to docker documentation for supported argument formats. | [optional] 

## Example

```python
from openapi_client.models.container_settings import ContainerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerSettings from a JSON string
container_settings_instance = ContainerSettings.from_json(json)
# print the JSON string representation of the object
print(ContainerSettings.to_json())

# convert the object into a dict
container_settings_dict = container_settings_instance.to_dict()
# create an instance of ContainerSettings from a dict
container_settings_from_dict = ContainerSettings.from_dict(container_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


