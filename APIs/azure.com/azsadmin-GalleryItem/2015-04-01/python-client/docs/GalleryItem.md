# GalleryItem

Properties of a gallery item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GalleryItemProperties**](GalleryItemProperties.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | [optional] [readonly] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] [readonly] 
**type** | **str** | Type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gallery_item import GalleryItem

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryItem from a JSON string
gallery_item_instance = GalleryItem.from_json(json)
# print the JSON string representation of the object
print(GalleryItem.to_json())

# convert the object into a dict
gallery_item_dict = gallery_item_instance.to_dict()
# create an instance of GalleryItem from a dict
gallery_item_from_dict = GalleryItem.from_dict(gallery_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


