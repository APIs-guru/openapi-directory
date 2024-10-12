# FoodMenu

Menu of a business that serves food dishes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cuisines** | **List[str]** | Optional. Cuisine information for the food menu. It is highly recommended to provide this field. | [optional] 
**labels** | [**List[MenuLabel]**](MenuLabel.md) | Required. Language-tagged labels for the menu. E.g. \&quot;menu\&quot;, \&quot;lunch special\&quot;. Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required. | [optional] 
**sections** | [**List[FoodMenuSection]**](FoodMenuSection.md) | Required. Sections of the menu. | [optional] 
**source_url** | **str** | Optional. Source URL of menu if there is a webpage to go to. | [optional] 

## Example

```python
from openapi_client.models.food_menu import FoodMenu

# TODO update the JSON string below
json = "{}"
# create an instance of FoodMenu from a JSON string
food_menu_instance = FoodMenu.from_json(json)
# print the JSON string representation of the object
print(FoodMenu.to_json())

# convert the object into a dict
food_menu_dict = food_menu_instance.to_dict()
# create an instance of FoodMenu from a dict
food_menu_from_dict = FoodMenu.from_dict(food_menu_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


