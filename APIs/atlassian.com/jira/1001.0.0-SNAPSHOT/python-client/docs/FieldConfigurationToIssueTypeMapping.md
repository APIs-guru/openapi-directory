# FieldConfigurationToIssueTypeMapping

The field configuration to issue type mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_configuration_id** | **str** | The ID of the field configuration. | 
**issue_type_id** | **str** | The ID of the issue type or *default*. When set to *default* this field configuration issue type item applies to all issue types without a field configuration. An issue type can be included only once in a request. | 

## Example

```python
from openapi_client.models.field_configuration_to_issue_type_mapping import FieldConfigurationToIssueTypeMapping

# TODO update the JSON string below
json = "{}"
# create an instance of FieldConfigurationToIssueTypeMapping from a JSON string
field_configuration_to_issue_type_mapping_instance = FieldConfigurationToIssueTypeMapping.from_json(json)
# print the JSON string representation of the object
print(FieldConfigurationToIssueTypeMapping.to_json())

# convert the object into a dict
field_configuration_to_issue_type_mapping_dict = field_configuration_to_issue_type_mapping_instance.to_dict()
# create an instance of FieldConfigurationToIssueTypeMapping from a dict
field_configuration_to_issue_type_mapping_from_dict = FieldConfigurationToIssueTypeMapping.from_dict(field_configuration_to_issue_type_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


