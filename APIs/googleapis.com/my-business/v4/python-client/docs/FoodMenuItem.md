# FoodMenuItem

Item of a Section. It can be the dish itself, or can contain multiple FoodMenuItemOption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**FoodMenuItemAttributes**](FoodMenuItemAttributes.md) |  | [optional] 
**labels** | [**List[MenuLabel]**](MenuLabel.md) | Required. Language tagged labels for this menu item. Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required. | [optional] 
**options** | [**List[FoodMenuItemOption]**](FoodMenuItemOption.md) | Optional. This is for an item that comes in multiple different options, and users are required to make choices. E.g. \&quot;regular\&quot; vs. \&quot;large\&quot; pizza. When options are specified, labels and attributes at item level will automatically become the first option&#39;s labels and attributes. Clients only need to specify other additional food options in this field. | [optional] 

## Example

```python
from openapi_client.models.food_menu_item import FoodMenuItem

# TODO update the JSON string below
json = "{}"
# create an instance of FoodMenuItem from a JSON string
food_menu_item_instance = FoodMenuItem.from_json(json)
# print the JSON string representation of the object
print(FoodMenuItem.to_json())

# convert the object into a dict
food_menu_item_dict = food_menu_item_instance.to_dict()
# create an instance of FoodMenuItem from a dict
food_menu_item_from_dict = FoodMenuItem.from_dict(food_menu_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


