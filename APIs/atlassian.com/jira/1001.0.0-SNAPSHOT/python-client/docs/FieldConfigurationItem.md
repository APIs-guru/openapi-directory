# FieldConfigurationItem

A field within a field configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the field within the field configuration. | [optional] 
**id** | **str** | The ID of the field within the field configuration. | 
**is_hidden** | **bool** | Whether the field is hidden in the field configuration. | [optional] 
**is_required** | **bool** | Whether the field is required in the field configuration. | [optional] 
**renderer** | **str** | The renderer type for the field within the field configuration. | [optional] 

## Example

```python
from openapi_client.models.field_configuration_item import FieldConfigurationItem

# TODO update the JSON string below
json = "{}"
# create an instance of FieldConfigurationItem from a JSON string
field_configuration_item_instance = FieldConfigurationItem.from_json(json)
# print the JSON string representation of the object
print(FieldConfigurationItem.to_json())

# convert the object into a dict
field_configuration_item_dict = field_configuration_item_instance.to_dict()
# create an instance of FieldConfigurationItem from a dict
field_configuration_item_from_dict = FieldConfigurationItem.from_dict(field_configuration_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


