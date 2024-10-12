# AttachmentArchiveItemReadable

Metadata for an item in an attachment archive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **int** | The position of the item within the archive. | [optional] [readonly] 
**label** | **str** | The label for the archive item. | [optional] [readonly] 
**media_type** | **str** | The MIME type of the archive item. | [optional] [readonly] 
**path** | **str** | The path of the archive item. | [optional] [readonly] 
**size** | **str** | The size of the archive item. | [optional] [readonly] 

## Example

```python
from openapi_client.models.attachment_archive_item_readable import AttachmentArchiveItemReadable

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentArchiveItemReadable from a JSON string
attachment_archive_item_readable_instance = AttachmentArchiveItemReadable.from_json(json)
# print the JSON string representation of the object
print(AttachmentArchiveItemReadable.to_json())

# convert the object into a dict
attachment_archive_item_readable_dict = attachment_archive_item_readable_instance.to_dict()
# create an instance of AttachmentArchiveItemReadable from a dict
attachment_archive_item_readable_from_dict = AttachmentArchiveItemReadable.from_dict(attachment_archive_item_readable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


