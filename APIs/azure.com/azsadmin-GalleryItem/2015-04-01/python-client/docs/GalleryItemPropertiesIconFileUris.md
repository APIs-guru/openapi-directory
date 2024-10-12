# GalleryItemPropertiesIconFileUris

URIs to icon files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hero** | **str** | URI to the hero icon. | [optional] 
**large** | **str** | URI to the large icon. | [optional] 
**medium** | **str** | URI to the medium icon. | [optional] 
**small** | **str** | URI to the small icon. | [optional] 
**wide** | **str** | URI to the wide icon. | [optional] 

## Example

```python
from openapi_client.models.gallery_item_properties_icon_file_uris import GalleryItemPropertiesIconFileUris

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryItemPropertiesIconFileUris from a JSON string
gallery_item_properties_icon_file_uris_instance = GalleryItemPropertiesIconFileUris.from_json(json)
# print the JSON string representation of the object
print(GalleryItemPropertiesIconFileUris.to_json())

# convert the object into a dict
gallery_item_properties_icon_file_uris_dict = gallery_item_properties_icon_file_uris_instance.to_dict()
# create an instance of GalleryItemPropertiesIconFileUris from a dict
gallery_item_properties_icon_file_uris_from_dict = GalleryItemPropertiesIconFileUris.from_dict(gallery_item_properties_icon_file_uris_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


