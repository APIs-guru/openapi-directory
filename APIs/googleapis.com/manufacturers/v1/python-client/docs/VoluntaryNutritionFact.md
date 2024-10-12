# VoluntaryNutritionFact

Voluntary Nutrition Facts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily_percentage** | **float** | Daily percentage. | [optional] 
**name** | **str** | Name. | [optional] 
**value** | [**FloatUnit**](FloatUnit.md) |  | [optional] 

## Example

```python
from openapi_client.models.voluntary_nutrition_fact import VoluntaryNutritionFact

# TODO update the JSON string below
json = "{}"
# create an instance of VoluntaryNutritionFact from a JSON string
voluntary_nutrition_fact_instance = VoluntaryNutritionFact.from_json(json)
# print the JSON string representation of the object
print(VoluntaryNutritionFact.to_json())

# convert the object into a dict
voluntary_nutrition_fact_dict = voluntary_nutrition_fact_instance.to_dict()
# create an instance of VoluntaryNutritionFact from a dict
voluntary_nutrition_fact_from_dict = VoluntaryNutritionFact.from_dict(voluntary_nutrition_fact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


