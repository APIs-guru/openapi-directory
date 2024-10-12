# FoundFaces

Request object the contains found faces.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_info** | [**List[KeyValuePair]**](KeyValuePair.md) | The advanced info. | [optional] 
**cache_id** | **str** | The cache id. | [optional] 
**count** | **int** | Number of faces found. | [optional] 
**faces** | [**List[Face]**](Face.md) | The list of faces. | [optional] 
**result** | **bool** | True if result was found. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**tracking_id** | **str** | The tracking id. | [optional] 

## Example

```python
from openapi_client.models.found_faces import FoundFaces

# TODO update the JSON string below
json = "{}"
# create an instance of FoundFaces from a JSON string
found_faces_instance = FoundFaces.from_json(json)
# print the JSON string representation of the object
print(FoundFaces.to_json())

# convert the object into a dict
found_faces_dict = found_faces_instance.to_dict()
# create an instance of FoundFaces from a dict
found_faces_from_dict = FoundFaces.from_dict(found_faces_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


