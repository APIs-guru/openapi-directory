# PageviewArticle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[PageviewArticleItemsInner]**](PageviewArticleItemsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.pageview_article import PageviewArticle

# TODO update the JSON string below
json = "{}"
# create an instance of PageviewArticle from a JSON string
pageview_article_instance = PageviewArticle.from_json(json)
# print the JSON string representation of the object
print(PageviewArticle.to_json())

# convert the object into a dict
pageview_article_dict = pageview_article_instance.to_dict()
# create an instance of PageviewArticle from a dict
pageview_article_from_dict = PageviewArticle.from_dict(pageview_article_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


