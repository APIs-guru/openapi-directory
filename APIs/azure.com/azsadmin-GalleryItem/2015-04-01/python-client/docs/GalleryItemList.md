# GalleryItemList

List of gallery items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[GalleryItem]**](GalleryItem.md) | List of gallery items. | [optional] 

## Example

```python
from openapi_client.models.gallery_item_list import GalleryItemList

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryItemList from a JSON string
gallery_item_list_instance = GalleryItemList.from_json(json)
# print the JSON string representation of the object
print(GalleryItemList.to_json())

# convert the object into a dict
gallery_item_list_dict = gallery_item_list_instance.to_dict()
# create an instance of GalleryItemList from a dict
gallery_item_list_from_dict = GalleryItemList.from_dict(gallery_item_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


