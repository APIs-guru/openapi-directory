# NutritionFact

This message denotes nutrition information with an upper bound and lower bound range and can be represented by mass unit. Lower amount must be specified. Both lower and upper amounts are non-negative numbers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower_amount** | **float** | Required. Lower amount of nutrition | [optional] 
**unit** | **str** | Required. Unit of the given nutrition information. | [optional] 
**upper_amount** | **float** | Optional. Upper amount of nutrition | [optional] 

## Example

```python
from openapi_client.models.nutrition_fact import NutritionFact

# TODO update the JSON string below
json = "{}"
# create an instance of NutritionFact from a JSON string
nutrition_fact_instance = NutritionFact.from_json(json)
# print the JSON string representation of the object
print(NutritionFact.to_json())

# convert the object into a dict
nutrition_fact_dict = nutrition_fact_instance.to_dict()
# create an instance of NutritionFact from a dict
nutrition_fact_from_dict = NutritionFact.from_dict(nutrition_fact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


