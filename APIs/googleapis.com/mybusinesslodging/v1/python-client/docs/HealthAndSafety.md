# HealthAndSafety

Health and safety measures implemented by the hotel during COVID-19.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enhanced_cleaning** | [**EnhancedCleaning**](EnhancedCleaning.md) |  | [optional] 
**increased_food_safety** | [**IncreasedFoodSafety**](IncreasedFoodSafety.md) |  | [optional] 
**minimized_contact** | [**MinimizedContact**](MinimizedContact.md) |  | [optional] 
**personal_protection** | [**PersonalProtection**](PersonalProtection.md) |  | [optional] 
**physical_distancing** | [**PhysicalDistancing**](PhysicalDistancing.md) |  | [optional] 

## Example

```python
from openapi_client.models.health_and_safety import HealthAndSafety

# TODO update the JSON string below
json = "{}"
# create an instance of HealthAndSafety from a JSON string
health_and_safety_instance = HealthAndSafety.from_json(json)
# print the JSON string representation of the object
print(HealthAndSafety.to_json())

# convert the object into a dict
health_and_safety_dict = health_and_safety_instance.to_dict()
# create an instance of HealthAndSafety from a dict
health_and_safety_from_dict = HealthAndSafety.from_dict(health_and_safety_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


