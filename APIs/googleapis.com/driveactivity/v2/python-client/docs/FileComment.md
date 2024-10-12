# FileComment

A comment on a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legacy_comment_id** | **str** | The comment in the discussion thread. This identifier is an opaque string compatible with the Drive API; see https://developers.google.com/drive/v3/reference/comments/get | [optional] 
**legacy_discussion_id** | **str** | The discussion thread to which the comment was added. This identifier is an opaque string compatible with the Drive API and references the first comment in a discussion; see https://developers.google.com/drive/v3/reference/comments/get | [optional] 
**link_to_discussion** | **str** | The link to the discussion thread containing this comment, for example, &#x60;https://docs.google.com/DOCUMENT_ID/edit?disco&#x3D;THREAD_ID&#x60;. | [optional] 
**parent** | [**DriveItem**](DriveItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.file_comment import FileComment

# TODO update the JSON string below
json = "{}"
# create an instance of FileComment from a JSON string
file_comment_instance = FileComment.from_json(json)
# print the JSON string representation of the object
print(FileComment.to_json())

# convert the object into a dict
file_comment_dict = file_comment_instance.to_dict()
# create an instance of FileComment from a dict
file_comment_from_dict = FileComment.from_dict(file_comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


