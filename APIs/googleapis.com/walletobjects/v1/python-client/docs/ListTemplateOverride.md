# ListTemplateOverride


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_row_option** | [**FirstRowOption**](FirstRowOption.md) |  | [optional] 
**second_row_option** | [**FieldSelector**](FieldSelector.md) |  | [optional] 
**third_row_option** | [**FieldSelector**](FieldSelector.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_template_override import ListTemplateOverride

# TODO update the JSON string below
json = "{}"
# create an instance of ListTemplateOverride from a JSON string
list_template_override_instance = ListTemplateOverride.from_json(json)
# print the JSON string representation of the object
print(ListTemplateOverride.to_json())

# convert the object into a dict
list_template_override_dict = list_template_override_instance.to_dict()
# create an instance of ListTemplateOverride from a dict
list_template_override_from_dict = ListTemplateOverride.from_dict(list_template_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


