# Photo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blurhash** | **str** | A blurhash of the photo that can be used as a placeholder while the photo is loading (see: https://github.com/woltapp/blurhash). May be null if no blurhash is available and the length of the blurhash can vary based on the photo.  | [optional] 
**images** | [**List[PhotoImagesInner]**](PhotoImagesInner.md) | All the versions of this photo ordered from smallest to largest.  This list is guaranteed to include the photos specified by the above thumbnail and url properties. | [optional] 
**photo_id** | **str** |  | [optional] 
**thumbnail** | **str** | A URL to a thumbnail of this photo.  The size of the thumbnail depends on the device_pixel_ratio parameter and it is not guaranteed to be square. | [optional] 
**url** | **str** | A URL to a large version of this photo (but not necessarily the largest size available). | [optional] 

## Example

```python
from openapi_client.models.photo import Photo

# TODO update the JSON string below
json = "{}"
# create an instance of Photo from a JSON string
photo_instance = Photo.from_json(json)
# print the JSON string representation of the object
print(Photo.to_json())

# convert the object into a dict
photo_dict = photo_instance.to_dict()
# create an instance of Photo from a dict
photo_from_dict = Photo.from_dict(photo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


