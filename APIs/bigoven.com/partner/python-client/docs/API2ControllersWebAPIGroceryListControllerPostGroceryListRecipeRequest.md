# API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mark_as_pending** | **bool** | Gets or sets the mark as pending. | [optional] 
**recipe_id** | **int** | Gets or sets the recipe identifier. | [optional] 
**scale** | **float** | Gets or sets the scale. | [optional] 

## Example

```python
from openapi_client.models.api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request import API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest from a JSON string
api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request_instance = API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest.from_json(json)
# print the JSON string representation of the object
print(API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest.to_json())

# convert the object into a dict
api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request_dict = api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request_instance.to_dict()
# create an instance of API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest from a dict
api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request_from_dict = API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest.from_dict(api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


