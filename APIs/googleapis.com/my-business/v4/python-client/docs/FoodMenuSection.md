# FoodMenuSection

Section of a menu. It can contain multiple items/dishes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[FoodMenuItem]**](FoodMenuItem.md) | Required. Items of the section. Each Section must have at least an item. | [optional] 
**labels** | [**List[MenuLabel]**](MenuLabel.md) | Required. Language tagged labels for this menu section. Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required. | [optional] 

## Example

```python
from openapi_client.models.food_menu_section import FoodMenuSection

# TODO update the JSON string below
json = "{}"
# create an instance of FoodMenuSection from a JSON string
food_menu_section_instance = FoodMenuSection.from_json(json)
# print the JSON string representation of the object
print(FoodMenuSection.to_json())

# convert the object into a dict
food_menu_section_dict = food_menu_section_instance.to_dict()
# create an instance of FoodMenuSection from a dict
food_menu_section_from_dict = FoodMenuSection.from_dict(food_menu_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


