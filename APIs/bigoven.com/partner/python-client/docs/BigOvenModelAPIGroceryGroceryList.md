# BigOvenModelAPIGroceryGroceryList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[BigOvenModelAPIGroceryItem]**](BigOvenModelAPIGroceryItem.md) |  | [optional] 
**last_modified** | **datetime** |  | [optional] 
**recipes** | [**List[BigOvenModelAPIRecipeInfo]**](BigOvenModelAPIRecipeInfo.md) |  | [optional] 
**version_guid** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api_grocery_grocery_list import BigOvenModelAPIGroceryGroceryList

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPIGroceryGroceryList from a JSON string
big_oven_model_api_grocery_grocery_list_instance = BigOvenModelAPIGroceryGroceryList.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPIGroceryGroceryList.to_json())

# convert the object into a dict
big_oven_model_api_grocery_grocery_list_dict = big_oven_model_api_grocery_grocery_list_instance.to_dict()
# create an instance of BigOvenModelAPIGroceryGroceryList from a dict
big_oven_model_api_grocery_grocery_list_from_dict = BigOvenModelAPIGroceryGroceryList.from_dict(big_oven_model_api_grocery_grocery_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


