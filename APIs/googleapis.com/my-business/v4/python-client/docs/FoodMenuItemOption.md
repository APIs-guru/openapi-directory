# FoodMenuItemOption

Option of an Item. It requires an explicit user selection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**FoodMenuItemAttributes**](FoodMenuItemAttributes.md) |  | [optional] 
**labels** | [**List[MenuLabel]**](MenuLabel.md) | Required. Language tagged labels for this menu item option. E.g.: \&quot;beef pad thai\&quot;, \&quot;veggie pad thai\&quot;, \&quot;small pizza\&quot;, \&quot;large pizza\&quot;. Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required. | [optional] 

## Example

```python
from openapi_client.models.food_menu_item_option import FoodMenuItemOption

# TODO update the JSON string below
json = "{}"
# create an instance of FoodMenuItemOption from a JSON string
food_menu_item_option_instance = FoodMenuItemOption.from_json(json)
# print the JSON string representation of the object
print(FoodMenuItemOption.to_json())

# convert the object into a dict
food_menu_item_option_dict = food_menu_item_option_instance.to_dict()
# create an instance of FoodMenuItemOption from a dict
food_menu_item_option_from_dict = FoodMenuItemOption.from_dict(food_menu_item_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


