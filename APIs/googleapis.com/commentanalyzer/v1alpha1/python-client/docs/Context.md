# Context

Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article_and_parent_comment** | [**ArticleAndParentComment**](ArticleAndParentComment.md) |  | [optional] 
**entries** | [**List[TextEntry]**](TextEntry.md) | A list of messages. For example, a linear comments section or forum thread. | [optional] 

## Example

```python
from openapi_client.models.context import Context

# TODO update the JSON string below
json = "{}"
# create an instance of Context from a JSON string
context_instance = Context.from_json(json)
# print the JSON string representation of the object
print(Context.to_json())

# convert the object into a dict
context_dict = context_instance.to_dict()
# create an instance of Context from a dict
context_from_dict = Context.from_dict(context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


