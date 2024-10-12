# MapIngredientsToGroceryProductsRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingredients** | **List[str]** |  | 
**servings** | **float** |  | 

## Example

```python
from openapi_client.models.map_ingredients_to_grocery_products_request import MapIngredientsToGroceryProductsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MapIngredientsToGroceryProductsRequest from a JSON string
map_ingredients_to_grocery_products_request_instance = MapIngredientsToGroceryProductsRequest.from_json(json)
# print the JSON string representation of the object
print(MapIngredientsToGroceryProductsRequest.to_json())

# convert the object into a dict
map_ingredients_to_grocery_products_request_dict = map_ingredients_to_grocery_products_request_instance.to_dict()
# create an instance of MapIngredientsToGroceryProductsRequest from a dict
map_ingredients_to_grocery_products_request_from_dict = MapIngredientsToGroceryProductsRequest.from_dict(map_ingredients_to_grocery_products_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


