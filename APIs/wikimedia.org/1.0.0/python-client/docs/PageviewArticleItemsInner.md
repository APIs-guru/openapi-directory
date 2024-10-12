# PageviewArticleItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** |  | [optional] 
**agent** | **str** |  | [optional] 
**article** | **str** |  | [optional] 
**granularity** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**timestamp** | **str** |  | [optional] 
**views** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.pageview_article_items_inner import PageviewArticleItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PageviewArticleItemsInner from a JSON string
pageview_article_items_inner_instance = PageviewArticleItemsInner.from_json(json)
# print the JSON string representation of the object
print(PageviewArticleItemsInner.to_json())

# convert the object into a dict
pageview_article_items_inner_dict = pageview_article_items_inner_instance.to_dict()
# create an instance of PageviewArticleItemsInner from a dict
pageview_article_items_inner_from_dict = PageviewArticleItemsInner.from_dict(pageview_article_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


