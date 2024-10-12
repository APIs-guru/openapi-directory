# ItemContent

Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as inlineContent. If the content is uploaded and not binary, it must be UTF-8 encoded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_data_ref** | [**UploadItemRef**](UploadItemRef.md) |  | [optional] 
**content_format** | **str** |  | [optional] 
**hash** | **str** | Hashing info calculated and provided by the API client for content. Can be used with the items.push method to calculate modified state. The maximum length is 2048 characters. | [optional] 
**inline_content** | **bytearray** | Content that is supplied inlined within the update method. The maximum length is 102400 bytes (100 KiB). | [optional] 

## Example

```python
from openapi_client.models.item_content import ItemContent

# TODO update the JSON string below
json = "{}"
# create an instance of ItemContent from a JSON string
item_content_instance = ItemContent.from_json(json)
# print the JSON string representation of the object
print(ItemContent.to_json())

# convert the object into a dict
item_content_dict = item_content_instance.to_dict()
# create an instance of ItemContent from a dict
item_content_from_dict = ItemContent.from_dict(item_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


