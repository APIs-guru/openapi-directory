# GymArticleDetailsDTO

The GymArticleDetailsDTO Class. Contains fields of GymArticleDetails DTO in application.             

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article_id** | **int** |  | [optional] 
**available_qty** | **float** |  | [optional] 
**created_user** | **str** | Created User  | [optional] 
**employee_discount** | **float** |  | [optional] 
**employee_price** | **float** |  | [optional] 
**gym_id** | **int** | Gym Id where article is related  | [optional] 
**gym_id_list** | **str** | GymId - Gym Id string with comma separated GymIds  | [optional] 
**gym_name** | **str** | Gym Name | [optional] 
**id** | **int** |  | [optional] 
**is_default** | **bool** | Set as the default values for the article  | [optional] 
**is_inventory_item** | **bool** |  | [optional] 
**is_obsolete** | **bool** |  | [optional] 
**modified_user** | **str** | Modified user | [optional] 
**reorder_level** | **float** |  | [optional] 
**revenue_account_id** | **int** | Revenue account Id | [optional] 
**selling_price** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.gym_article_details_dto import GymArticleDetailsDTO

# TODO update the JSON string below
json = "{}"
# create an instance of GymArticleDetailsDTO from a JSON string
gym_article_details_dto_instance = GymArticleDetailsDTO.from_json(json)
# print the JSON string representation of the object
print(GymArticleDetailsDTO.to_json())

# convert the object into a dict
gym_article_details_dto_dict = gym_article_details_dto_instance.to_dict()
# create an instance of GymArticleDetailsDTO from a dict
gym_article_details_dto_from_dict = GymArticleDetailsDTO.from_dict(gym_article_details_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


