# NutritionFacts

This message represents nutrition facts for a food dish.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calories** | [**CaloriesFact**](CaloriesFact.md) |  | [optional] 
**cholesterol** | [**NutritionFact**](NutritionFact.md) |  | [optional] 
**protein** | [**NutritionFact**](NutritionFact.md) |  | [optional] 
**sodium** | [**NutritionFact**](NutritionFact.md) |  | [optional] 
**total_carbohydrate** | [**NutritionFact**](NutritionFact.md) |  | [optional] 
**total_fat** | [**NutritionFact**](NutritionFact.md) |  | [optional] 

## Example

```python
from openapi_client.models.nutrition_facts import NutritionFacts

# TODO update the JSON string below
json = "{}"
# create an instance of NutritionFacts from a JSON string
nutrition_facts_instance = NutritionFacts.from_json(json)
# print the JSON string representation of the object
print(NutritionFacts.to_json())

# convert the object into a dict
nutrition_facts_dict = nutrition_facts_instance.to_dict()
# create an instance of NutritionFacts from a dict
nutrition_facts_from_dict = NutritionFacts.from_dict(nutrition_facts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


