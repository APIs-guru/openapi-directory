# GetPhotoExifByID200ResponsePhoto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**camera** | **str** |  | [optional] 
**exif** | [**List[GetPhotoExifByID200ResponsePhotoExifInner]**](GetPhotoExifByID200ResponsePhotoExifInner.md) |  | [optional] 
**farm** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**secret** | **str** |  | [optional] 
**server** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_photo_exif_by_id200_response_photo import GetPhotoExifByID200ResponsePhoto

# TODO update the JSON string below
json = "{}"
# create an instance of GetPhotoExifByID200ResponsePhoto from a JSON string
get_photo_exif_by_id200_response_photo_instance = GetPhotoExifByID200ResponsePhoto.from_json(json)
# print the JSON string representation of the object
print(GetPhotoExifByID200ResponsePhoto.to_json())

# convert the object into a dict
get_photo_exif_by_id200_response_photo_dict = get_photo_exif_by_id200_response_photo_instance.to_dict()
# create an instance of GetPhotoExifByID200ResponsePhoto from a dict
get_photo_exif_by_id200_response_photo_from_dict = GetPhotoExifByID200ResponsePhoto.from_dict(get_photo_exif_by_id200_response_photo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


