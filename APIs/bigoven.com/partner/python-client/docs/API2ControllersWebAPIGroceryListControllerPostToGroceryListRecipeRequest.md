# API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**department** | **str** | Gets or sets the department. | [optional] 
**name** | **str** | Gets or sets the name. | [optional] 
**notes** | **str** | Gets or sets the notes. | [optional] 
**quantity** | **str** | Gets or sets the quantity. | [optional] 
**unit** | **str** | Gets or sets the unit. | [optional] 

## Example

```python
from openapi_client.models.api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request import API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest from a JSON string
api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request_instance = API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest.from_json(json)
# print the JSON string representation of the object
print(API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest.to_json())

# convert the object into a dict
api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request_dict = api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request_instance.to_dict()
# create an instance of API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest from a dict
api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request_from_dict = API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest.from_dict(api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


