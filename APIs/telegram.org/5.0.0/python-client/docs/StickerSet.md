# StickerSet

This object represents a sticker set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contains_masks** | **bool** | *True*, if the sticker set contains masks | 
**is_animated** | **bool** | *True*, if the sticker set contains [animated stickers](https://telegram.org/blog/animated-stickers) | 
**name** | **str** | Sticker set name | 
**stickers** | [**List[Sticker]**](Sticker.md) | List of all set stickers | 
**thumb** | [**PhotoSize**](PhotoSize.md) |  | [optional] 
**title** | **str** | Sticker set title | 

## Example

```python
from openapi_client.models.sticker_set import StickerSet

# TODO update the JSON string below
json = "{}"
# create an instance of StickerSet from a JSON string
sticker_set_instance = StickerSet.from_json(json)
# print the JSON string representation of the object
print(StickerSet.to_json())

# convert the object into a dict
sticker_set_dict = sticker_set_instance.to_dict()
# create an instance of StickerSet from a dict
sticker_set_from_dict = StickerSet.from_dict(sticker_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


