# ParseIngredients200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aisle** | **str** |  | 
**amount** | **float** |  | 
**consistency** | **str** |  | 
**estimated_cost** | [**GetIngredientInformation200ResponseEstimatedCost**](GetIngredientInformation200ResponseEstimatedCost.md) |  | 
**id** | **int** |  | 
**image** | **str** |  | 
**meta** | **List[str]** |  | 
**name** | **str** |  | 
**name_clean** | **str** |  | 
**nutrition** | [**ParseIngredients200ResponseInnerNutrition**](ParseIngredients200ResponseInnerNutrition.md) |  | 
**original** | **str** |  | 
**original_name** | **str** |  | 
**possible_units** | **List[str]** |  | 
**unit** | **str** |  | 
**unit_long** | **str** |  | 
**unit_short** | **str** |  | 

## Example

```python
from openapi_client.models.parse_ingredients200_response_inner import ParseIngredients200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ParseIngredients200ResponseInner from a JSON string
parse_ingredients200_response_inner_instance = ParseIngredients200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ParseIngredients200ResponseInner.to_json())

# convert the object into a dict
parse_ingredients200_response_inner_dict = parse_ingredients200_response_inner_instance.to_dict()
# create an instance of ParseIngredients200ResponseInner from a dict
parse_ingredients200_response_inner_from_dict = ParseIngredients200ResponseInner.from_dict(parse_ingredients200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


