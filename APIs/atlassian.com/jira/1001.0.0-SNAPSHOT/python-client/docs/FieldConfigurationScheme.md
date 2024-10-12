# FieldConfigurationScheme

Details of a field configuration scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the field configuration scheme. | [optional] 
**id** | **str** | The ID of the field configuration scheme. | 
**name** | **str** | The name of the field configuration scheme. | 

## Example

```python
from openapi_client.models.field_configuration_scheme import FieldConfigurationScheme

# TODO update the JSON string below
json = "{}"
# create an instance of FieldConfigurationScheme from a JSON string
field_configuration_scheme_instance = FieldConfigurationScheme.from_json(json)
# print the JSON string representation of the object
print(FieldConfigurationScheme.to_json())

# convert the object into a dict
field_configuration_scheme_dict = field_configuration_scheme_instance.to_dict()
# create an instance of FieldConfigurationScheme from a dict
field_configuration_scheme_from_dict = FieldConfigurationScheme.from_dict(field_configuration_scheme_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


