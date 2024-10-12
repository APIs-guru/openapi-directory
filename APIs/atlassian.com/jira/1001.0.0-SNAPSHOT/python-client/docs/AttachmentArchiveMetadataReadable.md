# AttachmentArchiveMetadataReadable

Metadata for an archive (for example a zip) and its contents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[AttachmentArchiveItemReadable]**](AttachmentArchiveItemReadable.md) | The list of the items included in the archive. | [optional] [readonly] 
**id** | **int** | The ID of the attachment. | [optional] [readonly] 
**media_type** | **str** | The MIME type of the attachment. | [optional] [readonly] 
**name** | **str** | The name of the archive file. | [optional] [readonly] 
**total_entry_count** | **int** | The number of items included in the archive. | [optional] [readonly] 

## Example

```python
from openapi_client.models.attachment_archive_metadata_readable import AttachmentArchiveMetadataReadable

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentArchiveMetadataReadable from a JSON string
attachment_archive_metadata_readable_instance = AttachmentArchiveMetadataReadable.from_json(json)
# print the JSON string representation of the object
print(AttachmentArchiveMetadataReadable.to_json())

# convert the object into a dict
attachment_archive_metadata_readable_dict = attachment_archive_metadata_readable_instance.to_dict()
# create an instance of AttachmentArchiveMetadataReadable from a dict
attachment_archive_metadata_readable_from_dict = AttachmentArchiveMetadataReadable.from_dict(attachment_archive_metadata_readable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


