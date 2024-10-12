# FoodMenus

Menus of a business that serve food dishes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**menus** | [**List[FoodMenu]**](FoodMenu.md) | Optional. A collection of food menus. | [optional] 
**name** | **str** | Required. Google identifier for this location in the form: &#x60;accounts/{account_id}/locations/{location_id}/foodMenus&#x60; | [optional] 

## Example

```python
from openapi_client.models.food_menus import FoodMenus

# TODO update the JSON string below
json = "{}"
# create an instance of FoodMenus from a JSON string
food_menus_instance = FoodMenus.from_json(json)
# print the JSON string representation of the object
print(FoodMenus.to_json())

# convert the object into a dict
food_menus_dict = food_menus_instance.to_dict()
# create an instance of FoodMenus from a dict
food_menus_from_dict = FoodMenus.from_dict(food_menus_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


