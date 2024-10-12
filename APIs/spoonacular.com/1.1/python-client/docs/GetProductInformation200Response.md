# GetProductInformation200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aisle** | **str** |  | 
**badges** | **List[str]** |  | 
**breadcrumbs** | **List[str]** |  | 
**generated_text** | **object** |  | [optional] 
**id** | **int** |  | 
**image_type** | **str** |  | 
**important_badges** | **List[str]** |  | 
**ingredient_count** | **int** |  | 
**ingredient_list** | **str** |  | 
**ingredients** | [**List[GetProductInformation200ResponseIngredientsInner]**](GetProductInformation200ResponseIngredientsInner.md) |  | 
**likes** | **float** |  | 
**nutrition** | [**GetMenuItemInformation200ResponseNutrition**](GetMenuItemInformation200ResponseNutrition.md) |  | 
**price** | **float** |  | 
**servings** | [**SearchMenuItems200ResponseMenuItemsInnerServings**](SearchMenuItems200ResponseMenuItemsInnerServings.md) |  | 
**spoonacular_score** | **float** |  | 
**title** | **str** |  | 

## Example

```python
from openapi_client.models.get_product_information200_response import GetProductInformation200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetProductInformation200Response from a JSON string
get_product_information200_response_instance = GetProductInformation200Response.from_json(json)
# print the JSON string representation of the object
print(GetProductInformation200Response.to_json())

# convert the object into a dict
get_product_information200_response_dict = get_product_information200_response_instance.to_dict()
# create an instance of GetProductInformation200Response from a dict
get_product_information200_response_from_dict = GetProductInformation200Response.from_dict(get_product_information200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


