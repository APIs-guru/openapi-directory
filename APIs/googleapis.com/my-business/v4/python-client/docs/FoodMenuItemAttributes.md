# FoodMenuItemAttributes

Attributes of a food item/dish.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allergen** | **List[str]** | Optional. Allergens associated with the food dish. It is highly recommended to provide this field. | [optional] 
**dietary_restriction** | **List[str]** | Optional. Dietary information of the food dish. It is highly recommended to provide this field. | [optional] 
**ingredients** | [**List[Ingredient]**](Ingredient.md) | Optional. Ingredients of the food dish option. | [optional] 
**media_keys** | **List[str]** | Optional. The media keys of the media associated with the dish. Only photo media is supported. When there are multiple photos associated, the first photo is considered as the preferred photo. | [optional] 
**nutrition_facts** | [**NutritionFacts**](NutritionFacts.md) |  | [optional] 
**portion_size** | [**PortionSize**](PortionSize.md) |  | [optional] 
**preparation_methods** | **List[str]** | Optional. Methods on how the food dish option is prepared. | [optional] 
**price** | [**Money**](Money.md) |  | [optional] 
**serves_num_people** | **int** | Optional. Number of people can be served by this food dish option. | [optional] 
**spiciness** | **str** | Optional. Spiciness level of the food dish. | [optional] 

## Example

```python
from openapi_client.models.food_menu_item_attributes import FoodMenuItemAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of FoodMenuItemAttributes from a JSON string
food_menu_item_attributes_instance = FoodMenuItemAttributes.from_json(json)
# print the JSON string representation of the object
print(FoodMenuItemAttributes.to_json())

# convert the object into a dict
food_menu_item_attributes_dict = food_menu_item_attributes_instance.to_dict()
# create an instance of FoodMenuItemAttributes from a dict
food_menu_item_attributes_from_dict = FoodMenuItemAttributes.from_dict(food_menu_item_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


