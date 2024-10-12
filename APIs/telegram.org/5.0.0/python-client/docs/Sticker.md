# Sticker

This object represents a sticker.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emoji** | **str** | *Optional*. Emoji associated with the sticker | [optional] 
**file_id** | **str** | Identifier for this file, which can be used to download or reuse the file | 
**file_size** | **int** | *Optional*. File size | [optional] 
**file_unique_id** | **str** | Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file. | 
**height** | **int** | Sticker height | 
**is_animated** | **bool** | *True*, if the sticker is [animated](https://telegram.org/blog/animated-stickers) | 
**mask_position** | [**MaskPosition**](MaskPosition.md) |  | [optional] 
**set_name** | **str** | *Optional*. Name of the sticker set to which the sticker belongs | [optional] 
**thumb** | [**PhotoSize**](PhotoSize.md) |  | [optional] 
**width** | **int** | Sticker width | 

## Example

```python
from openapi_client.models.sticker import Sticker

# TODO update the JSON string below
json = "{}"
# create an instance of Sticker from a JSON string
sticker_instance = Sticker.from_json(json)
# print the JSON string representation of the object
print(Sticker.to_json())

# convert the object into a dict
sticker_dict = sticker_instance.to_dict()
# create an instance of Sticker from a dict
sticker_from_dict = Sticker.from_dict(sticker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


