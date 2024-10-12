# Article

Representation of an Article to be created/updated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article** | [**ArticleArticle**](ArticleArticle.md) |  | [optional] 

## Example

```python
from openapi_client.models.article import Article

# TODO update the JSON string below
json = "{}"
# create an instance of Article from a JSON string
article_instance = Article.from_json(json)
# print the JSON string representation of the object
print(Article.to_json())

# convert the object into a dict
article_dict = article_instance.to_dict()
# create an instance of Article from a dict
article_from_dict = Article.from_dict(article_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


