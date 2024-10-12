# VolumeContainer

The volume container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VolumeContainerProperties**](VolumeContainerProperties.md) |  | 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.volume_container import VolumeContainer

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeContainer from a JSON string
volume_container_instance = VolumeContainer.from_json(json)
# print the JSON string representation of the object
print(VolumeContainer.to_json())

# convert the object into a dict
volume_container_dict = volume_container_instance.to_dict()
# create an instance of VolumeContainer from a dict
volume_container_from_dict = VolumeContainer.from_dict(volume_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


