# Photo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**dates** | [**PhotoDates**](PhotoDates.md) |  | [optional] 
**dateuploaded** | **str** |  | [optional] 
**description** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**editability** | [**PhotoEditability**](PhotoEditability.md) |  | [optional] 
**farm** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**isfavorite** | **bool** |  | [optional] 
**license** | **str** |  | [optional] 
**media** | **str** |  | [optional] 
**notes** | [**PhotoNotes**](PhotoNotes.md) |  | [optional] 
**originalsecret** | **str** |  | [optional] 
**owner** | [**Owner**](Owner.md) |  | [optional] 
**people** | [**PhotoPeople**](PhotoPeople.md) |  | [optional] 
**permissions** | [**PhotoPermissions**](PhotoPermissions.md) |  | [optional] 
**publiceditability** | [**PhotoEditability**](PhotoEditability.md) |  | [optional] 
**rotation** | **str** |  | [optional] 
**safe** | **bool** |  | [optional] 
**safety_level** | **str** |  | [optional] 
**secret** | **str** |  | [optional] 
**server** | **str** |  | [optional] 
**tags** | [**PhotoTags**](PhotoTags.md) |  | [optional] 
**title** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**urls** | [**PhotoUrls**](PhotoUrls.md) |  | [optional] 
**usage** | [**PhotoUsage**](PhotoUsage.md) |  | [optional] 
**views** | **str** |  | [optional] 
**visibility** | [**PhotoVisibility**](PhotoVisibility.md) |  | [optional] 

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


