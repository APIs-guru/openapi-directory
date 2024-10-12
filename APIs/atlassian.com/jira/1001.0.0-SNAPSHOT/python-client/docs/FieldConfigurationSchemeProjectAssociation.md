# FieldConfigurationSchemeProjectAssociation

Associated field configuration scheme and project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_configuration_scheme_id** | **str** | The ID of the field configuration scheme. If the field configuration scheme ID is &#x60;null&#x60;, the operation assigns the default field configuration scheme. | [optional] 
**project_id** | **str** | The ID of the project. | 

## Example

```python
from openapi_client.models.field_configuration_scheme_project_association import FieldConfigurationSchemeProjectAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of FieldConfigurationSchemeProjectAssociation from a JSON string
field_configuration_scheme_project_association_instance = FieldConfigurationSchemeProjectAssociation.from_json(json)
# print the JSON string representation of the object
print(FieldConfigurationSchemeProjectAssociation.to_json())

# convert the object into a dict
field_configuration_scheme_project_association_dict = field_configuration_scheme_project_association_instance.to_dict()
# create an instance of FieldConfigurationSchemeProjectAssociation from a dict
field_configuration_scheme_project_association_from_dict = FieldConfigurationSchemeProjectAssociation.from_dict(field_configuration_scheme_project_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


