# GetIngredientInformation200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aisle** | **str** |  | 
**amount** | **float** |  | 
**category_path** | **List[str]** |  | 
**consistency** | **str** |  | 
**estimated_cost** | [**GetIngredientInformation200ResponseEstimatedCost**](GetIngredientInformation200ResponseEstimatedCost.md) |  | 
**id** | **int** |  | 
**image** | **str** |  | 
**meta** | **List[object]** |  | 
**name** | **str** |  | 
**name_clean** | **str** |  | 
**nutrition** | [**GetIngredientInformation200ResponseNutrition**](GetIngredientInformation200ResponseNutrition.md) |  | 
**original** | **str** |  | 
**original_name** | **str** |  | 
**possible_units** | **List[str]** |  | 
**shopping_list_units** | **List[str]** |  | 
**unit** | **str** |  | 
**unit_long** | **str** |  | 
**unit_short** | **str** |  | 

## Example

```python
from openapi_client.models.get_ingredient_information200_response import GetIngredientInformation200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetIngredientInformation200Response from a JSON string
get_ingredient_information200_response_instance = GetIngredientInformation200Response.from_json(json)
# print the JSON string representation of the object
print(GetIngredientInformation200Response.to_json())

# convert the object into a dict
get_ingredient_information200_response_dict = get_ingredient_information200_response_instance.to_dict()
# create an instance of GetIngredientInformation200Response from a dict
get_ingredient_information200_response_from_dict = GetIngredientInformation200Response.from_dict(get_ingredient_information200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


