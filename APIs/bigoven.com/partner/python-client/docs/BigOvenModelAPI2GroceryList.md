# BigOvenModelAPI2GroceryList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[BigOvenModelAPIGroceryItem]**](BigOvenModelAPIGroceryItem.md) |  | [optional] 
**last_modified** | **datetime** |  | [optional] 
**recipes** | [**List[BigOvenModelAPI2RecipeInfox]**](BigOvenModelAPI2RecipeInfox.md) |  | [optional] 
**version_guid** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api2_grocery_list import BigOvenModelAPI2GroceryList

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPI2GroceryList from a JSON string
big_oven_model_api2_grocery_list_instance = BigOvenModelAPI2GroceryList.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPI2GroceryList.to_json())

# convert the object into a dict
big_oven_model_api2_grocery_list_dict = big_oven_model_api2_grocery_list_instance.to_dict()
# create an instance of BigOvenModelAPI2GroceryList from a dict
big_oven_model_api2_grocery_list_from_dict = BigOvenModelAPI2GroceryList.from_dict(big_oven_model_api2_grocery_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


