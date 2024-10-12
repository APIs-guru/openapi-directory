# TemplateItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_value** | [**FieldSelector**](FieldSelector.md) |  | [optional] 
**predefined_item** | **str** | A predefined item to display. Only one of &#x60;firstValue&#x60; or &#x60;predefinedItem&#x60; may be set. | [optional] 
**second_value** | [**FieldSelector**](FieldSelector.md) |  | [optional] 

## Example

```python
from openapi_client.models.template_item import TemplateItem

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateItem from a JSON string
template_item_instance = TemplateItem.from_json(json)
# print the JSON string representation of the object
print(TemplateItem.to_json())

# convert the object into a dict
template_item_dict = template_item_instance.to_dict()
# create an instance of TemplateItem from a dict
template_item_from_dict = TemplateItem.from_dict(template_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


