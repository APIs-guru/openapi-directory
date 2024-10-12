# UpdateFieldConfigurationSchemeDetails

The details of the field configuration scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the field configuration scheme. | [optional] 
**name** | **str** | The name of the field configuration scheme. The name must be unique. | 

## Example

```python
from openapi_client.models.update_field_configuration_scheme_details import UpdateFieldConfigurationSchemeDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateFieldConfigurationSchemeDetails from a JSON string
update_field_configuration_scheme_details_instance = UpdateFieldConfigurationSchemeDetails.from_json(json)
# print the JSON string representation of the object
print(UpdateFieldConfigurationSchemeDetails.to_json())

# convert the object into a dict
update_field_configuration_scheme_details_dict = update_field_configuration_scheme_details_instance.to_dict()
# create an instance of UpdateFieldConfigurationSchemeDetails from a dict
update_field_configuration_scheme_details_from_dict = UpdateFieldConfigurationSchemeDetails.from_dict(update_field_configuration_scheme_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


