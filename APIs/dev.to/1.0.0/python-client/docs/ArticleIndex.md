# ArticleIndex

Representation of an article or post returned in a list

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_url** | **str** |  | 
**cover_image** | **str** |  | 
**created_at** | **datetime** |  | 
**crossposted_at** | **datetime** |  | 
**description** | **str** |  | 
**edited_at** | **datetime** |  | 
**flare_tag** | [**ArticleFlareTag**](ArticleFlareTag.md) |  | [optional] 
**id** | **int** |  | 
**last_comment_at** | **datetime** |  | 
**organization** | [**SharedOrganization**](SharedOrganization.md) |  | [optional] 
**path** | **str** |  | 
**positive_reactions_count** | **int** |  | 
**public_reactions_count** | **int** |  | 
**published_at** | **datetime** |  | 
**published_timestamp** | **datetime** | Crossposting or published date time | 
**readable_publish_date** | **str** |  | 
**reading_time_minutes** | **int** | Reading time, in minutes | 
**slug** | **str** |  | 
**social_image** | **str** |  | 
**tag_list** | **List[str]** |  | 
**tags** | **str** |  | 
**title** | **str** |  | 
**type_of** | **str** |  | 
**url** | **str** |  | 
**user** | [**SharedUser**](SharedUser.md) |  | 

## Example

```python
from openapi_client.models.article_index import ArticleIndex

# TODO update the JSON string below
json = "{}"
# create an instance of ArticleIndex from a JSON string
article_index_instance = ArticleIndex.from_json(json)
# print the JSON string representation of the object
print(ArticleIndex.to_json())

# convert the object into a dict
article_index_dict = article_index_instance.to_dict()
# create an instance of ArticleIndex from a dict
article_index_from_dict = ArticleIndex.from_dict(article_index_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


