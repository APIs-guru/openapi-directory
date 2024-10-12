# FieldConfiguration

Details of a field configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the field configuration. | 
**id** | **int** | The ID of the field configuration. | 
**is_default** | **bool** | Whether the field configuration is the default. | [optional] 
**name** | **str** | The name of the field configuration. | 

## Example

```python
from openapi_client.models.field_configuration import FieldConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of FieldConfiguration from a JSON string
field_configuration_instance = FieldConfiguration.from_json(json)
# print the JSON string representation of the object
print(FieldConfiguration.to_json())

# convert the object into a dict
field_configuration_dict = field_configuration_instance.to_dict()
# create an instance of FieldConfiguration from a dict
field_configuration_from_dict = FieldConfiguration.from_dict(field_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


