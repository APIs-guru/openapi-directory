# ArticleAndParentComment

A type of context specific to a comment left on a single-threaded comment message board, where comments are either a top level comment or the child of a top level comment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article** | [**TextEntry**](TextEntry.md) |  | [optional] 
**parent_comment** | [**TextEntry**](TextEntry.md) |  | [optional] 

## Example

```python
from openapi_client.models.article_and_parent_comment import ArticleAndParentComment

# TODO update the JSON string below
json = "{}"
# create an instance of ArticleAndParentComment from a JSON string
article_and_parent_comment_instance = ArticleAndParentComment.from_json(json)
# print the JSON string representation of the object
print(ArticleAndParentComment.to_json())

# convert the object into a dict
article_and_parent_comment_dict = article_and_parent_comment_instance.to_dict()
# create an instance of ArticleAndParentComment from a dict
article_and_parent_comment_from_dict = ArticleAndParentComment.from_dict(article_and_parent_comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


