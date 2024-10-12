# VolumeContainerList

The collection of volume container entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[VolumeContainer]**](VolumeContainer.md) | The value. | 

## Example

```python
from openapi_client.models.volume_container_list import VolumeContainerList

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeContainerList from a JSON string
volume_container_list_instance = VolumeContainerList.from_json(json)
# print the JSON string representation of the object
print(VolumeContainerList.to_json())

# convert the object into a dict
volume_container_list_dict = volume_container_list_instance.to_dict()
# create an instance of VolumeContainerList from a dict
volume_container_list_from_dict = VolumeContainerList.from_dict(volume_container_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


