# ListMeshesResponse

Response returned by the ListMeshes method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meshes** | [**List[Mesh]**](Mesh.md) | List of Mesh resources. | [optional] 
**next_page_token** | **str** | If there might be more results than those appearing in this response, then &#x60;next_page_token&#x60; is included. To get the next set of results, call this method again using the value of &#x60;next_page_token&#x60; as &#x60;page_token&#x60;. | [optional] 

## Example

```python
from openapi_client.models.list_meshes_response import ListMeshesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMeshesResponse from a JSON string
list_meshes_response_instance = ListMeshesResponse.from_json(json)
# print the JSON string representation of the object
print(ListMeshesResponse.to_json())

# convert the object into a dict
list_meshes_response_dict = list_meshes_response_instance.to_dict()
# create an instance of ListMeshesResponse from a dict
list_meshes_response_from_dict = ListMeshesResponse.from_dict(list_meshes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


