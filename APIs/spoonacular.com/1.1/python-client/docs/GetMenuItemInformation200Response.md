# GetMenuItemInformation200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badges** | **List[str]** |  | 
**breadcrumbs** | **List[str]** |  | 
**generated_text** | **str** |  | [optional] 
**id** | **int** |  | 
**image_type** | **str** |  | 
**likes** | **float** |  | 
**nutrition** | [**GetMenuItemInformation200ResponseNutrition**](GetMenuItemInformation200ResponseNutrition.md) |  | 
**price** | **float** |  | [optional] 
**restaurant_chain** | **str** |  | 
**servings** | [**SearchMenuItems200ResponseMenuItemsInnerServings**](SearchMenuItems200ResponseMenuItemsInnerServings.md) |  | 
**spoonacular_score** | **float** |  | [optional] 
**title** | **str** |  | 

## Example

```python
from openapi_client.models.get_menu_item_information200_response import GetMenuItemInformation200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetMenuItemInformation200Response from a JSON string
get_menu_item_information200_response_instance = GetMenuItemInformation200Response.from_json(json)
# print the JSON string representation of the object
print(GetMenuItemInformation200Response.to_json())

# convert the object into a dict
get_menu_item_information200_response_dict = get_menu_item_information200_response_instance.to_dict()
# create an instance of GetMenuItemInformation200Response from a dict
get_menu_item_information200_response_from_dict = GetMenuItemInformation200Response.from_dict(get_menu_item_information200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


