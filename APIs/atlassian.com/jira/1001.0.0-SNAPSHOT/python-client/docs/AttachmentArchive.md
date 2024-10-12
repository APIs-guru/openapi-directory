# AttachmentArchive


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[AttachmentArchiveEntry]**](AttachmentArchiveEntry.md) |  | [optional] 
**more_available** | **bool** |  | [optional] 
**total_entry_count** | **int** |  | [optional] 
**total_number_of_entries_available** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.attachment_archive import AttachmentArchive

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentArchive from a JSON string
attachment_archive_instance = AttachmentArchive.from_json(json)
# print the JSON string representation of the object
print(AttachmentArchive.to_json())

# convert the object into a dict
attachment_archive_dict = attachment_archive_instance.to_dict()
# create an instance of AttachmentArchive from a dict
attachment_archive_from_dict = AttachmentArchive.from_dict(attachment_archive_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


