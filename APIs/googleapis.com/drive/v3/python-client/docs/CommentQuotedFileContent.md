# CommentQuotedFileContent

The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mime_type** | **str** | The MIME type of the quoted content. | [optional] 
**value** | **str** | The quoted content itself. This is interpreted as plain text if set through the API. | [optional] 

## Example

```python
from openapi_client.models.comment_quoted_file_content import CommentQuotedFileContent

# TODO update the JSON string below
json = "{}"
# create an instance of CommentQuotedFileContent from a JSON string
comment_quoted_file_content_instance = CommentQuotedFileContent.from_json(json)
# print the JSON string representation of the object
print(CommentQuotedFileContent.to_json())

# convert the object into a dict
comment_quoted_file_content_dict = comment_quoted_file_content_instance.to_dict()
# create an instance of CommentQuotedFileContent from a dict
comment_quoted_file_content_from_dict = CommentQuotedFileContent.from_dict(comment_quoted_file_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


