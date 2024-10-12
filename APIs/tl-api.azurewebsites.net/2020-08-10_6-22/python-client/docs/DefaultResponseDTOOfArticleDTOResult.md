# DefaultResponseDTOOfArticleDTOResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_status** | **bool** | Active Status  | [optional] 
**apply_for_all_gyms** | **bool** |  | [optional] 
**article_id** | **int** |  | [optional] 
**available_gyms** | [**List[GymDTO]**](GymDTO.md) |  | 
**available_qty** | **float** | Default AvailableQty | [optional] 
**barcode** | **str** |  | [optional] 
**created_date** | **datetime** |  | [optional] 
**created_user** | **str** |  | [optional] 
**cron_expression** | **str** | Access Schedule CRON Expression  | [optional] 
**description** | **str** |  | [optional] 
**discount** | **float** |  | [optional] 
**employee_discount** | **float** | Default EmployeeDiscount | [optional] 
**employee_price** | **float** | Default EmployeePrice | [optional] 
**gym_articles** | [**List[GymArticleDetailsDTO]**](GymArticleDetailsDTO.md) | Gym Customizations  | [optional] 
**is_add_on** | **bool** |  | [optional] 
**is_inventory_item** | **bool** | Default IsInventoryItem of the Article  | [optional] 
**is_obsolete** | **bool** | Default IsObsolete of the Article  | [optional] 
**measure_unit** | **str** |  | 
**modified_date** | **datetime** |  | [optional] 
**modified_user** | **str** |  | [optional] 
**name** | **str** |  | 
**number** | **int** |  | [optional] 
**price** | **float** |  | 
**reorder_level** | **float** | Deafault ReorderLevel | [optional] 
**revenue_account_id** | **int** | Default Revenue account | [optional] 
**selling_price** | **float** | Default SellingPrice | [optional] 
**tags** | **str** |  | [optional] 
**type** | **str** |  | 
**vat** | **float** |  | [optional] 
**vat_applicable** | **bool** | VAT Applicable  | [optional] 

## Example

```python
from openapi_client.models.default_response_dtoof_article_dto_result import DefaultResponseDTOOfArticleDTOResult

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultResponseDTOOfArticleDTOResult from a JSON string
default_response_dtoof_article_dto_result_instance = DefaultResponseDTOOfArticleDTOResult.from_json(json)
# print the JSON string representation of the object
print(DefaultResponseDTOOfArticleDTOResult.to_json())

# convert the object into a dict
default_response_dtoof_article_dto_result_dict = default_response_dtoof_article_dto_result_instance.to_dict()
# create an instance of DefaultResponseDTOOfArticleDTOResult from a dict
default_response_dtoof_article_dto_result_from_dict = DefaultResponseDTOOfArticleDTOResult.from_dict(default_response_dtoof_article_dto_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


