# Vertex3DList

3D vertex list used for modeled volumes. Each entry represents an offset from the previous one in local tile coordinates. The first coordinate is offset from (0, 0, 0).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x_offsets** | **List[int]** | List of x-offsets in local tile coordinates. | [optional] 
**y_offsets** | **List[int]** | List of y-offsets in local tile coordinates. | [optional] 
**z_offsets** | **List[int]** | List of z-offsets in local tile coordinates. | [optional] 

## Example

```python
from openapi_client.models.vertex3_d_list import Vertex3DList

# TODO update the JSON string below
json = "{}"
# create an instance of Vertex3DList from a JSON string
vertex3_d_list_instance = Vertex3DList.from_json(json)
# print the JSON string representation of the object
print(Vertex3DList.to_json())

# convert the object into a dict
vertex3_d_list_dict = vertex3_d_list_instance.to_dict()
# create an instance of Vertex3DList from a dict
vertex3_d_list_from_dict = Vertex3DList.from_dict(vertex3_d_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


