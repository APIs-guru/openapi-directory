# BillingRoleDefinitionProperties

The properties of the a role definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The role description | [optional] [readonly] 
**permissions** | [**BillingPermissionsListResult**](BillingPermissionsListResult.md) |  | [optional] 
**role_name** | **str** | The name of the role | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_role_definition_properties import BillingRoleDefinitionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BillingRoleDefinitionProperties from a JSON string
billing_role_definition_properties_instance = BillingRoleDefinitionProperties.from_json(json)
# print the JSON string representation of the object
print(BillingRoleDefinitionProperties.to_json())

# convert the object into a dict
billing_role_definition_properties_dict = billing_role_definition_properties_instance.to_dict()
# create an instance of BillingRoleDefinitionProperties from a dict
billing_role_definition_properties_from_dict = BillingRoleDefinitionProperties.from_dict(billing_role_definition_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


