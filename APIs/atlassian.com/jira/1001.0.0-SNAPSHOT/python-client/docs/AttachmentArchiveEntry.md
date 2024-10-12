# AttachmentArchiveEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abbreviated_name** | **str** |  | [optional] 
**entry_index** | **int** |  | [optional] 
**media_type** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**size** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.attachment_archive_entry import AttachmentArchiveEntry

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentArchiveEntry from a JSON string
attachment_archive_entry_instance = AttachmentArchiveEntry.from_json(json)
# print the JSON string representation of the object
print(AttachmentArchiveEntry.to_json())

# convert the object into a dict
attachment_archive_entry_dict = attachment_archive_entry_instance.to_dict()
# create an instance of AttachmentArchiveEntry from a dict
attachment_archive_entry_from_dict = AttachmentArchiveEntry.from_dict(attachment_archive_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


