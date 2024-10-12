# ArticleSearchDTO

The ArticleSearchDTO Class. Contains relevant fields of ArticleSearch DTO by masking actual Article entity's fields in application.             

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_status** | **bool** | Active Status  | [optional] 
**apply_for_all_gyms** | **bool** |  | [optional] 
**article_id** | **int** |  | [optional] 
**created_date** | **datetime** |  | [optional] 
**created_user** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**measure_unit** | **str** | MeasureUnit  | [optional] 
**modified_date** | **datetime** |  | [optional] 
**modified_user** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**number** | **int** |  | [optional] 
**price** | **float** |  | [optional] 
**selling_price** | **float** | Actual Selling price of the article  | [optional] 
**tags** | **str** |  | [optional] 
**total_count** | **int** | total number of recode for particular search  | [optional] 
**type** | **str** | article type | [optional] 

## Example

```python
from openapi_client.models.article_search_dto import ArticleSearchDTO

# TODO update the JSON string below
json = "{}"
# create an instance of ArticleSearchDTO from a JSON string
article_search_dto_instance = ArticleSearchDTO.from_json(json)
# print the JSON string representation of the object
print(ArticleSearchDTO.to_json())

# convert the object into a dict
article_search_dto_dict = article_search_dto_instance.to_dict()
# create an instance of ArticleSearchDTO from a dict
article_search_dto_from_dict = ArticleSearchDTO.from_dict(article_search_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


