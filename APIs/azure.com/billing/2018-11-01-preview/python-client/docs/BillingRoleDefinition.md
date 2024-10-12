# BillingRoleDefinition

Result of get role definition for a role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BillingRoleDefinitionProperties**](BillingRoleDefinitionProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_role_definition import BillingRoleDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of BillingRoleDefinition from a JSON string
billing_role_definition_instance = BillingRoleDefinition.from_json(json)
# print the JSON string representation of the object
print(BillingRoleDefinition.to_json())

# convert the object into a dict
billing_role_definition_dict = billing_role_definition_instance.to_dict()
# create an instance of BillingRoleDefinition from a dict
billing_role_definition_from_dict = BillingRoleDefinition.from_dict(billing_role_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


