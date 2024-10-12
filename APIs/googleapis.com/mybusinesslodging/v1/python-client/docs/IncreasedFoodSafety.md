# IncreasedFoodSafety

Increased food safety measures implemented by the hotel during COVID-19.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dining_areas_additional_sanitation** | **bool** | Additional sanitation in dining areas. | [optional] 
**dining_areas_additional_sanitation_exception** | **str** | Dining areas additional sanitation exception. | [optional] 
**disposable_flatware** | **bool** | Disposable flatware. | [optional] 
**disposable_flatware_exception** | **str** | Disposable flatware exception. | [optional] 
**food_preparation_and_serving_additional_safety** | **bool** | Additional safety measures during food prep and serving. | [optional] 
**food_preparation_and_serving_additional_safety_exception** | **str** | Food preparation and serving additional safety exception. | [optional] 
**individual_packaged_meals** | **bool** | Individually-packaged meals. | [optional] 
**individual_packaged_meals_exception** | **str** | Individual packaged meals exception. | [optional] 
**single_use_food_menus** | **bool** | Single-use menus. | [optional] 
**single_use_food_menus_exception** | **str** | Single use food menus exception. | [optional] 

## Example

```python
from openapi_client.models.increased_food_safety import IncreasedFoodSafety

# TODO update the JSON string below
json = "{}"
# create an instance of IncreasedFoodSafety from a JSON string
increased_food_safety_instance = IncreasedFoodSafety.from_json(json)
# print the JSON string representation of the object
print(IncreasedFoodSafety.to_json())

# convert the object into a dict
increased_food_safety_dict = increased_food_safety_instance.to_dict()
# create an instance of IncreasedFoodSafety from a dict
increased_food_safety_from_dict = IncreasedFoodSafety.from_dict(increased_food_safety_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


