# AssociateFieldConfigurationsWithIssueTypesRequest

Details of a field configuration to issue type mappings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mappings** | [**List[FieldConfigurationToIssueTypeMapping]**](FieldConfigurationToIssueTypeMapping.md) | Field configuration to issue type mappings. | 

## Example

```python
from openapi_client.models.associate_field_configurations_with_issue_types_request import AssociateFieldConfigurationsWithIssueTypesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssociateFieldConfigurationsWithIssueTypesRequest from a JSON string
associate_field_configurations_with_issue_types_request_instance = AssociateFieldConfigurationsWithIssueTypesRequest.from_json(json)
# print the JSON string representation of the object
print(AssociateFieldConfigurationsWithIssueTypesRequest.to_json())

# convert the object into a dict
associate_field_configurations_with_issue_types_request_dict = associate_field_configurations_with_issue_types_request_instance.to_dict()
# create an instance of AssociateFieldConfigurationsWithIssueTypesRequest from a dict
associate_field_configurations_with_issue_types_request_from_dict = AssociateFieldConfigurationsWithIssueTypesRequest.from_dict(associate_field_configurations_with_issue_types_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


