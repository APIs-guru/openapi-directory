# MediaFilesAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**MediaFilesAllOfEmbeddedItemsInnerAllOfLinks**](MediaFilesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | Media file code | [optional] 
**extension** | **str** | Extension of the media file | [optional] 
**mime_type** | **str** | Mime type of the media file | [optional] 
**original_filename** | **str** | Original filename of the media file | [optional] 
**size** | **int** | Size of the media file | [optional] 

## Example

```python
from openapi_client.models.media_files_all_of_embedded_items_inner import MediaFilesAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of MediaFilesAllOfEmbeddedItemsInner from a JSON string
media_files_all_of_embedded_items_inner_instance = MediaFilesAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(MediaFilesAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
media_files_all_of_embedded_items_inner_dict = media_files_all_of_embedded_items_inner_instance.to_dict()
# create an instance of MediaFilesAllOfEmbeddedItemsInner from a dict
media_files_all_of_embedded_items_inner_from_dict = MediaFilesAllOfEmbeddedItemsInner.from_dict(media_files_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


