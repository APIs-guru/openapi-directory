# Nutrition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_sugars** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**added_sugars_daily_percentage** | **float** | Added sugars daily percentage. | [optional] 
**calcium** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**calcium_daily_percentage** | **float** | Calcium daily percentage. | [optional] 
**cholesterol** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**cholesterol_daily_percentage** | **float** | Cholesterol daily percentage. | [optional] 
**dietary_fiber** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**dietary_fiber_daily_percentage** | **float** | Dietary fiber daily percentage. | [optional] 
**energy** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**energy_from_fat** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**folate_daily_percentage** | **float** | Folate daily percentage. | [optional] 
**folate_folic_acid** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**folate_mcg_dfe** | **float** | Folate mcg DFE. | [optional] 
**iron** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**iron_daily_percentage** | **float** | Iron daily percentage. | [optional] 
**monounsaturated_fat** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**nutrition_fact_measure** | **str** | Nutrition fact measure. | [optional] 
**polyols** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**polyunsaturated_fat** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**potassium** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**potassium_daily_percentage** | **float** | Potassium daily percentage. | [optional] 
**prepared_size_description** | **str** | Prepared size description. | [optional] 
**protein** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**protein_daily_percentage** | **float** | Protein daily percentage. | [optional] 
**saturated_fat** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**saturated_fat_daily_percentage** | **float** | Saturated fat daily percentage. | [optional] 
**serving_size_description** | **str** | Food Serving Size. Serving size description. | [optional] 
**serving_size_measure** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**servings_per_container** | **str** | Servings per container. | [optional] 
**sodium** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**sodium_daily_percentage** | **float** | Sodium daily percentage. | [optional] 
**starch** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**total_carbohydrate** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**total_carbohydrate_daily_percentage** | **float** | Total carbohydrate daily percentage. | [optional] 
**total_fat** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**total_fat_daily_percentage** | **float** | Total fat daily percentage. | [optional] 
**total_sugars** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**total_sugars_daily_percentage** | **float** | Total sugars daily percentage. | [optional] 
**trans_fat** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**trans_fat_daily_percentage** | **float** | Trans fat daily percentage. | [optional] 
**vitamin_d** | [**FloatUnit**](FloatUnit.md) |  | [optional] 
**vitamin_d_daily_percentage** | **float** | Vitamin D daily percentage. | [optional] 
**voluntary_nutrition_fact** | [**List[VoluntaryNutritionFact]**](VoluntaryNutritionFact.md) | Voluntary nutrition fact. | [optional] 

## Example

```python
from openapi_client.models.nutrition import Nutrition

# TODO update the JSON string below
json = "{}"
# create an instance of Nutrition from a JSON string
nutrition_instance = Nutrition.from_json(json)
# print the JSON string representation of the object
print(Nutrition.to_json())

# convert the object into a dict
nutrition_dict = nutrition_instance.to_dict()
# create an instance of Nutrition from a dict
nutrition_from_dict = Nutrition.from_dict(nutrition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


