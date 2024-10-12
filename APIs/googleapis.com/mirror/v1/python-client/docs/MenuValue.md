# MenuValue

A single value that is part of a MenuItem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name to display for the menu item. If you specify this property for a built-in menu item, the default contextual voice command for that menu item is not shown. | [optional] 
**icon_url** | **str** | URL of an icon to display with the menu item. | [optional] 
**state** | **str** | The state that this value applies to. Allowed values are:   - DEFAULT - Default value shown when displayed in the menuItems list.  - PENDING - Value shown when the menuItem has been selected by the user but can still be cancelled.  - CONFIRMED - Value shown when the menuItem has been selected by the user and can no longer be cancelled. | [optional] 

## Example

```python
from openapi_client.models.menu_value import MenuValue

# TODO update the JSON string below
json = "{}"
# create an instance of MenuValue from a JSON string
menu_value_instance = MenuValue.from_json(json)
# print the JSON string representation of the object
print(MenuValue.to_json())

# convert the object into a dict
menu_value_dict = menu_value_instance.to_dict()
# create an instance of MenuValue from a dict
menu_value_from_dict = MenuValue.from_dict(menu_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


