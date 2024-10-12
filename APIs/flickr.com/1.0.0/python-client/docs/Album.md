# Album


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_comment** | **bool** |  | [optional] 
**count_comments** | **float** |  | [optional] 
**count_views** | **float** |  | [optional] 
**date_create** | **float** |  | [optional] 
**date_update** | **float** |  | [optional] 
**description** | **str** |  | [optional] 
**farm** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**photos** | **float** |  | [optional] 
**primary** | **str** |  | [optional] 
**secret** | **str** |  | [optional] 
**server** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**videos** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.album import Album

# TODO update the JSON string below
json = "{}"
# create an instance of Album from a JSON string
album_instance = Album.from_json(json)
# print the JSON string representation of the object
print(Album.to_json())

# convert the object into a dict
album_dict = album_instance.to_dict()
# create an instance of Album from a dict
album_from_dict = Album.from_dict(album_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


