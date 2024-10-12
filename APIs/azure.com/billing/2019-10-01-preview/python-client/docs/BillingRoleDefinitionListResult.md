# BillingRoleDefinitionListResult

list the role definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[BillingRoleDefinition]**](BillingRoleDefinition.md) | The list of role definitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_role_definition_list_result import BillingRoleDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BillingRoleDefinitionListResult from a JSON string
billing_role_definition_list_result_instance = BillingRoleDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(BillingRoleDefinitionListResult.to_json())

# convert the object into a dict
billing_role_definition_list_result_dict = billing_role_definition_list_result_instance.to_dict()
# create an instance of BillingRoleDefinitionListResult from a dict
billing_role_definition_list_result_from_dict = BillingRoleDefinitionListResult.from_dict(billing_role_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


