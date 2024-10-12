# SuperStickerMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alt_text** | **str** | Internationalized alt text that describes the sticker image and any animation associated with it. | [optional] 
**alt_text_language** | **str** | Specifies the localization language in which the alt text is returned. | [optional] 
**sticker_id** | **str** | Unique identifier of the Super Sticker. This is a shorter form of the alt_text that includes pack name and a recognizable characteristic of the sticker. | [optional] 

## Example

```python
from openapi_client.models.super_sticker_metadata import SuperStickerMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SuperStickerMetadata from a JSON string
super_sticker_metadata_instance = SuperStickerMetadata.from_json(json)
# print the JSON string representation of the object
print(SuperStickerMetadata.to_json())

# convert the object into a dict
super_sticker_metadata_dict = super_sticker_metadata_instance.to_dict()
# create an instance of SuperStickerMetadata from a dict
super_sticker_metadata_from_dict = SuperStickerMetadata.from_dict(super_sticker_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


