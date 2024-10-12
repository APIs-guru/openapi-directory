# ContainerVolume

Describes how a volume is attached to a container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_path** | **str** | The path within the container at which the volume should be mounted. Only valid path characters are allowed. | 
**name** | **str** | Name of the volume. | 
**read_only** | **bool** | The flag indicating whether the volume is read only. Default is &#39;false&#39;. | [optional] 

## Example

```python
from openapi_client.models.container_volume import ContainerVolume

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerVolume from a JSON string
container_volume_instance = ContainerVolume.from_json(json)
# print the JSON string representation of the object
print(ContainerVolume.to_json())

# convert the object into a dict
container_volume_dict = container_volume_instance.to_dict()
# create an instance of ContainerVolume from a dict
container_volume_from_dict = ContainerVolume.from_dict(container_volume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


