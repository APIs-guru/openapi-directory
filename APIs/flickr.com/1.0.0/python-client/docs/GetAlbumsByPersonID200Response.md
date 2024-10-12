# GetAlbumsByPersonID200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **float** |  | [optional] 
**pages** | **float** |  | [optional] 
**perpage** | **float** |  | [optional] 
**photosets** | [**List[Album]**](Album.md) |  | [optional] 
**total** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.get_albums_by_person_id200_response import GetAlbumsByPersonID200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAlbumsByPersonID200Response from a JSON string
get_albums_by_person_id200_response_instance = GetAlbumsByPersonID200Response.from_json(json)
# print the JSON string representation of the object
print(GetAlbumsByPersonID200Response.to_json())

# convert the object into a dict
get_albums_by_person_id200_response_dict = get_albums_by_person_id200_response_instance.to_dict()
# create an instance of GetAlbumsByPersonID200Response from a dict
get_albums_by_person_id200_response_from_dict = GetAlbumsByPersonID200Response.from_dict(get_albums_by_person_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


