# BigOvenModelShoppingListLine


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_added** | **datetime** |  | [optional] 
**dept** | **str** |  | [optional] 
**guid** | **str** |  | [optional] 
**html_item_name** | **str** |  | [optional] 
**is_checked** | **bool** |  | [optional] 
**item_name** | **str** |  | [optional] 
**last_modified** | **datetime** |  | [optional] 
**list_id** | **int** |  | [optional] 
**meal_plan_id** | **int** |  | [optional] 
**meal_plan_object_type** | **int** |  | [optional] 
**notes** | **str** |  | [optional] 
**pending_addition** | **bool** |  | [optional] 
**recipe_id** | **int** |  | [optional] 
**shopping_list_line_id** | **int** |  | [optional] 
**store** | **str** |  | [optional] 
**text_amt** | **str** |  | [optional] 
**third_party_host** | **str** |  | [optional] 
**third_party_title** | **str** |  | [optional] 
**third_party_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_shopping_list_line import BigOvenModelShoppingListLine

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelShoppingListLine from a JSON string
big_oven_model_shopping_list_line_instance = BigOvenModelShoppingListLine.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelShoppingListLine.to_json())

# convert the object into a dict
big_oven_model_shopping_list_line_dict = big_oven_model_shopping_list_line_instance.to_dict()
# create an instance of BigOvenModelShoppingListLine from a dict
big_oven_model_shopping_list_line_from_dict = BigOvenModelShoppingListLine.from_dict(big_oven_model_shopping_list_line_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


