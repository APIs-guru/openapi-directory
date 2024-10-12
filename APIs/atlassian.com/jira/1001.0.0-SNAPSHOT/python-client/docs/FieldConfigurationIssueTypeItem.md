# FieldConfigurationIssueTypeItem

The field configuration for an issue type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_configuration_id** | **str** | The ID of the field configuration. | 
**field_configuration_scheme_id** | **str** | The ID of the field configuration scheme. | 
**issue_type_id** | **str** | The ID of the issue type or *default*. When set to *default* this field configuration issue type item applies to all issue types without a field configuration. | 

## Example

```python
from openapi_client.models.field_configuration_issue_type_item import FieldConfigurationIssueTypeItem

# TODO update the JSON string below
json = "{}"
# create an instance of FieldConfigurationIssueTypeItem from a JSON string
field_configuration_issue_type_item_instance = FieldConfigurationIssueTypeItem.from_json(json)
# print the JSON string representation of the object
print(FieldConfigurationIssueTypeItem.to_json())

# convert the object into a dict
field_configuration_issue_type_item_dict = field_configuration_issue_type_item_instance.to_dict()
# create an instance of FieldConfigurationIssueTypeItem from a dict
field_configuration_issue_type_item_from_dict = FieldConfigurationIssueTypeItem.from_dict(field_configuration_issue_type_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


