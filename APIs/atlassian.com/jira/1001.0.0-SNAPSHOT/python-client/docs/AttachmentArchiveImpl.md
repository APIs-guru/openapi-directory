# AttachmentArchiveImpl


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[AttachmentArchiveEntry]**](AttachmentArchiveEntry.md) | The list of the items included in the archive. | [optional] 
**total_entry_count** | **int** | The number of items in the archive. | [optional] 

## Example

```python
from openapi_client.models.attachment_archive_impl import AttachmentArchiveImpl

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentArchiveImpl from a JSON string
attachment_archive_impl_instance = AttachmentArchiveImpl.from_json(json)
# print the JSON string representation of the object
print(AttachmentArchiveImpl.to_json())

# convert the object into a dict
attachment_archive_impl_dict = attachment_archive_impl_instance.to_dict()
# create an instance of AttachmentArchiveImpl from a dict
attachment_archive_impl_from_dict = AttachmentArchiveImpl.from_dict(attachment_archive_impl_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


