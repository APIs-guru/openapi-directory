# GetGalleryPhotosByID200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**photos** | [**List[Photo]**](Photo.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_gallery_photos_by_id200_response import GetGalleryPhotosByID200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetGalleryPhotosByID200Response from a JSON string
get_gallery_photos_by_id200_response_instance = GetGalleryPhotosByID200Response.from_json(json)
# print the JSON string representation of the object
print(GetGalleryPhotosByID200Response.to_json())

# convert the object into a dict
get_gallery_photos_by_id200_response_dict = get_gallery_photos_by_id200_response_instance.to_dict()
# create an instance of GetGalleryPhotosByID200Response from a dict
get_gallery_photos_by_id200_response_from_dict = GetGalleryPhotosByID200Response.from_dict(get_gallery_photos_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


