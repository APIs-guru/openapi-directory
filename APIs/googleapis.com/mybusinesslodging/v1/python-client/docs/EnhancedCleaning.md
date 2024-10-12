# EnhancedCleaning

Enhanced cleaning measures implemented by the hotel during COVID-19.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commercial_grade_disinfectant_cleaning** | **bool** | Commercial-grade disinfectant used to clean the property. | [optional] 
**commercial_grade_disinfectant_cleaning_exception** | **str** | Commercial grade disinfectant cleaning exception. | [optional] 
**common_areas_enhanced_cleaning** | **bool** | Enhanced cleaning of common areas. | [optional] 
**common_areas_enhanced_cleaning_exception** | **str** | Common areas enhanced cleaning exception. | [optional] 
**employees_trained_cleaning_procedures** | **bool** | Employees trained in COVID-19 cleaning procedures. | [optional] 
**employees_trained_cleaning_procedures_exception** | **str** | Employees trained cleaning procedures exception. | [optional] 
**employees_trained_thorough_hand_washing** | **bool** | Employees trained in thorough hand-washing. | [optional] 
**employees_trained_thorough_hand_washing_exception** | **str** | Employees trained thorough hand washing exception. | [optional] 
**employees_wear_protective_equipment** | **bool** | Employees wear masks, face shields, and/or gloves. | [optional] 
**employees_wear_protective_equipment_exception** | **str** | Employees wear protective equipment exception. | [optional] 
**guest_rooms_enhanced_cleaning** | **bool** | Enhanced cleaning of guest rooms. | [optional] 
**guest_rooms_enhanced_cleaning_exception** | **str** | Guest rooms enhanced cleaning exception. | [optional] 

## Example

```python
from openapi_client.models.enhanced_cleaning import EnhancedCleaning

# TODO update the JSON string below
json = "{}"
# create an instance of EnhancedCleaning from a JSON string
enhanced_cleaning_instance = EnhancedCleaning.from_json(json)
# print the JSON string representation of the object
print(EnhancedCleaning.to_json())

# convert the object into a dict
enhanced_cleaning_dict = enhanced_cleaning_instance.to_dict()
# create an instance of EnhancedCleaning from a dict
enhanced_cleaning_from_dict = EnhancedCleaning.from_dict(enhanced_cleaning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


