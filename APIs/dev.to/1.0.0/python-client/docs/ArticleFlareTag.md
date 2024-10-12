# ArticleFlareTag

Flare tag of the article

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bg_color_hex** | **str** | Background color (hexadecimal) | [optional] 
**name** | **str** |  | [optional] 
**text_color_hex** | **str** | Text color (hexadecimal) | [optional] 

## Example

```python
from openapi_client.models.article_flare_tag import ArticleFlareTag

# TODO update the JSON string below
json = "{}"
# create an instance of ArticleFlareTag from a JSON string
article_flare_tag_instance = ArticleFlareTag.from_json(json)
# print the JSON string representation of the object
print(ArticleFlareTag.to_json())

# convert the object into a dict
article_flare_tag_dict = article_flare_tag_instance.to_dict()
# create an instance of ArticleFlareTag from a dict
article_flare_tag_from_dict = ArticleFlareTag.from_dict(article_flare_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


