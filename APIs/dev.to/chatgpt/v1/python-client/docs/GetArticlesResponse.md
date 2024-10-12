# GetArticlesResponse

Representation of an article returned in a list

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body_markdown** | **str** | The body of the article | [optional] 
**canonical_url** | **str** |  | 
**cover_image** | **str** |  | 
**created_at** | **datetime** |  | 
**crossposted_at** | **datetime** |  | 
**description** | **str** | A description of the article | 
**edited_at** | **datetime** |  | 
**id** | **int** |  | 
**last_comment_at** | **datetime** |  | 
**organization** | [**SharedOrganization**](SharedOrganization.md) |  | [optional] 
**path** | **str** | A relative path of the article. | 
**positive_reactions_count** | **int** |  | 
**public_reactions_count** | **int** |  | 
**published_at** | **datetime** |  | 
**published_timestamp** | **datetime** | Crossposting or published date time | 
**readable_publish_date** | **str** |  | 
**reading_time_minutes** | **int** | Reading time, in minutes | 
**slug** | **str** |  | 
**social_image** | **str** |  | 
**tag_list** | **List[str]** | An array representation of the tags that are associated with an article | 
**tags** | **str** | An array representation of the tags that are associated with an article | 
**title** | **str** | The article title | 
**type_of** | **str** |  | 
**url** | **str** | The url of the article. Can be used to link to the article. | 
**user** | [**SharedUser**](SharedUser.md) |  | 

## Example

```python
from openapi_client.models.get_articles_response import GetArticlesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetArticlesResponse from a JSON string
get_articles_response_instance = GetArticlesResponse.from_json(json)
# print the JSON string representation of the object
print(GetArticlesResponse.to_json())

# convert the object into a dict
get_articles_response_dict = get_articles_response_instance.to_dict()
# create an instance of GetArticlesResponse from a dict
get_articles_response_from_dict = GetArticlesResponse.from_dict(get_articles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


