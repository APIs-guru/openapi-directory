# GetAlbumByID200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**photoset** | [**List[Photo]**](Photo.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_album_by_id200_response import GetAlbumByID200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAlbumByID200Response from a JSON string
get_album_by_id200_response_instance = GetAlbumByID200Response.from_json(json)
# print the JSON string representation of the object
print(GetAlbumByID200Response.to_json())

# convert the object into a dict
get_album_by_id200_response_dict = get_album_by_id200_response_instance.to_dict()
# create an instance of GetAlbumByID200Response from a dict
get_album_by_id200_response_from_dict = GetAlbumByID200Response.from_dict(get_album_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


