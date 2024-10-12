# ArticleArticle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body_markdown** | **str** |  | [optional] 
**canonical_url** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**main_image** | **str** |  | [optional] 
**organization_id** | **int** |  | [optional] 
**published** | **bool** |  | [optional] [default to False]
**series** | **str** |  | [optional] 
**tags** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.article_article import ArticleArticle

# TODO update the JSON string below
json = "{}"
# create an instance of ArticleArticle from a JSON string
article_article_instance = ArticleArticle.from_json(json)
# print the JSON string representation of the object
print(ArticleArticle.to_json())

# convert the object into a dict
article_article_dict = article_article_instance.to_dict()
# create an instance of ArticleArticle from a dict
article_article_from_dict = ArticleArticle.from_dict(article_article_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


