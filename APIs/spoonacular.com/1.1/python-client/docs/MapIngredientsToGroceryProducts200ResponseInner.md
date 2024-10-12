# MapIngredientsToGroceryProducts200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingredient_image** | **str** |  | 
**meta** | **List[str]** |  | 
**original** | **str** |  | 
**original_name** | **str** |  | 
**products** | [**List[MapIngredientsToGroceryProducts200ResponseInnerProductsInner]**](MapIngredientsToGroceryProducts200ResponseInnerProductsInner.md) |  | 

## Example

```python
from openapi_client.models.map_ingredients_to_grocery_products200_response_inner import MapIngredientsToGroceryProducts200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of MapIngredientsToGroceryProducts200ResponseInner from a JSON string
map_ingredients_to_grocery_products200_response_inner_instance = MapIngredientsToGroceryProducts200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(MapIngredientsToGroceryProducts200ResponseInner.to_json())

# convert the object into a dict
map_ingredients_to_grocery_products200_response_inner_dict = map_ingredients_to_grocery_products200_response_inner_instance.to_dict()
# create an instance of MapIngredientsToGroceryProducts200ResponseInner from a dict
map_ingredients_to_grocery_products200_response_inner_from_dict = MapIngredientsToGroceryProducts200ResponseInner.from_dict(map_ingredients_to_grocery_products200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


