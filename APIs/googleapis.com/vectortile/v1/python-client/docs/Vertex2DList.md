# Vertex2DList

2D vertex list used for lines and areas. Each entry represents an offset from the previous one in local tile coordinates. The first entry is offset from (0, 0). For example, the list of vertices [(1,1), (2, 2), (1, 2)] would be encoded in vertex offsets as [(1, 1), (1, 1), (-1, 0)].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x_offsets** | **List[int]** | List of x-offsets in local tile coordinates. | [optional] 
**y_offsets** | **List[int]** | List of y-offsets in local tile coordinates. | [optional] 

## Example

```python
from openapi_client.models.vertex2_d_list import Vertex2DList

# TODO update the JSON string below
json = "{}"
# create an instance of Vertex2DList from a JSON string
vertex2_d_list_instance = Vertex2DList.from_json(json)
# print the JSON string representation of the object
print(Vertex2DList.to_json())

# convert the object into a dict
vertex2_d_list_dict = vertex2_d_list_instance.to_dict()
# create an instance of Vertex2DList from a dict
vertex2_d_list_from_dict = Vertex2DList.from_dict(vertex2_d_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


