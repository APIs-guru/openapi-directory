# PhotoSize

This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_id** | **str** | Identifier for this file, which can be used to download or reuse the file | 
**file_size** | **int** | *Optional*. File size | [optional] 
**file_unique_id** | **str** | Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file. | 
**height** | **int** | Photo height | 
**width** | **int** | Photo width | 

## Example

```python
from openapi_client.models.photo_size import PhotoSize

# TODO update the JSON string below
json = "{}"
# create an instance of PhotoSize from a JSON string
photo_size_instance = PhotoSize.from_json(json)
# print the JSON string representation of the object
print(PhotoSize.to_json())

# convert the object into a dict
photo_size_dict = photo_size_instance.to_dict()
# create an instance of PhotoSize from a dict
photo_size_from_dict = PhotoSize.from_dict(photo_size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


