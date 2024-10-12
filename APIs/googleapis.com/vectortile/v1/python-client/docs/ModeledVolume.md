# ModeledVolume

Represents a modeled volume in 3D space. Used to represent 3D buildings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strips** | [**List[TriangleStrip]**](TriangleStrip.md) | The triangle strips present in this mesh. | [optional] 
**vertex_offsets** | [**Vertex3DList**](Vertex3DList.md) |  | [optional] 

## Example

```python
from openapi_client.models.modeled_volume import ModeledVolume

# TODO update the JSON string below
json = "{}"
# create an instance of ModeledVolume from a JSON string
modeled_volume_instance = ModeledVolume.from_json(json)
# print the JSON string representation of the object
print(ModeledVolume.to_json())

# convert the object into a dict
modeled_volume_dict = modeled_volume_instance.to_dict()
# create an instance of ModeledVolume from a dict
modeled_volume_from_dict = ModeledVolume.from_dict(modeled_volume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


