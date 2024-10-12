# MenuLabel

Label to be used when displaying the menu and its various sub-components.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. Supplementary information of the component. | [optional] 
**display_name** | **str** | Required. Display name of the component. | [optional] 
**language_code** | **str** | Optional. The BCP 47 code of language. If the language is not available, it will default to English. | [optional] 

## Example

```python
from openapi_client.models.menu_label import MenuLabel

# TODO update the JSON string below
json = "{}"
# create an instance of MenuLabel from a JSON string
menu_label_instance = MenuLabel.from_json(json)
# print the JSON string representation of the object
print(MenuLabel.to_json())

# convert the object into a dict
menu_label_dict = menu_label_instance.to_dict()
# create an instance of MenuLabel from a dict
menu_label_from_dict = MenuLabel.from_dict(menu_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


