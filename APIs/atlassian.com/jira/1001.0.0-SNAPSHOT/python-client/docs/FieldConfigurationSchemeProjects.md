# FieldConfigurationSchemeProjects

Project list with assigned field configuration schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_configuration_scheme** | [**FieldConfigurationScheme**](FieldConfigurationScheme.md) |  | [optional] 
**project_ids** | **List[str]** | The IDs of projects using the field configuration scheme. | 

## Example

```python
from openapi_client.models.field_configuration_scheme_projects import FieldConfigurationSchemeProjects

# TODO update the JSON string below
json = "{}"
# create an instance of FieldConfigurationSchemeProjects from a JSON string
field_configuration_scheme_projects_instance = FieldConfigurationSchemeProjects.from_json(json)
# print the JSON string representation of the object
print(FieldConfigurationSchemeProjects.to_json())

# convert the object into a dict
field_configuration_scheme_projects_dict = field_configuration_scheme_projects_instance.to_dict()
# create an instance of FieldConfigurationSchemeProjects from a dict
field_configuration_scheme_projects_from_dict = FieldConfigurationSchemeProjects.from_dict(field_configuration_scheme_projects_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


