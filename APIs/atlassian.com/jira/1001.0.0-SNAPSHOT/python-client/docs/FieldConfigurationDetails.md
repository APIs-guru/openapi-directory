# FieldConfigurationDetails

Details of a field configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the field configuration. | [optional] 
**name** | **str** | The name of the field configuration. Must be unique. | 

## Example

```python
from openapi_client.models.field_configuration_details import FieldConfigurationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FieldConfigurationDetails from a JSON string
field_configuration_details_instance = FieldConfigurationDetails.from_json(json)
# print the JSON string representation of the object
print(FieldConfigurationDetails.to_json())

# convert the object into a dict
field_configuration_details_dict = field_configuration_details_instance.to_dict()
# create an instance of FieldConfigurationDetails from a dict
field_configuration_details_from_dict = FieldConfigurationDetails.from_dict(field_configuration_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


