# BigOvenModelAPIIngredient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_index** | **int** |  | [optional] 
**display_quantity** | **str** |  | [optional] 
**html_name** | **str** |  | [optional] 
**ingredient_id** | **int** |  | [optional] 
**ingredient_info** | [**BigOvenModelAPIIngredientInfo**](BigOvenModelAPIIngredientInfo.md) |  | [optional] 
**is_heading** | **bool** |  | [optional] 
**is_linked** | **bool** |  | [optional] 
**metric_display_quantity** | **str** |  | [optional] 
**metric_quantity** | **float** |  | [optional] 
**metric_unit** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**preparation_notes** | **str** |  | [optional] 
**quantity** | **float** |  | [optional] 
**unit** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api_ingredient import BigOvenModelAPIIngredient

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPIIngredient from a JSON string
big_oven_model_api_ingredient_instance = BigOvenModelAPIIngredient.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPIIngredient.to_json())

# convert the object into a dict
big_oven_model_api_ingredient_dict = big_oven_model_api_ingredient_instance.to_dict()
# create an instance of BigOvenModelAPIIngredient from a dict
big_oven_model_api_ingredient_from_dict = BigOvenModelAPIIngredient.from_dict(big_oven_model_api_ingredient_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


