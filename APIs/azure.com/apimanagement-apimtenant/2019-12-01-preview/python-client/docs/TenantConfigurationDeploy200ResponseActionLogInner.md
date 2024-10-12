# TenantConfigurationDeploy200ResponseActionLogInner

Log of the entity being created, updated or deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Action like create/update/delete. | [optional] 
**object_key** | **str** | Identifier of the entity being created/updated/deleted. | [optional] 
**object_type** | **str** | The type of entity contract. | [optional] 

## Example

```python
from openapi_client.models.tenant_configuration_deploy200_response_action_log_inner import TenantConfigurationDeploy200ResponseActionLogInner

# TODO update the JSON string below
json = "{}"
# create an instance of TenantConfigurationDeploy200ResponseActionLogInner from a JSON string
tenant_configuration_deploy200_response_action_log_inner_instance = TenantConfigurationDeploy200ResponseActionLogInner.from_json(json)
# print the JSON string representation of the object
print(TenantConfigurationDeploy200ResponseActionLogInner.to_json())

# convert the object into a dict
tenant_configuration_deploy200_response_action_log_inner_dict = tenant_configuration_deploy200_response_action_log_inner_instance.to_dict()
# create an instance of TenantConfigurationDeploy200ResponseActionLogInner from a dict
tenant_configuration_deploy200_response_action_log_inner_from_dict = TenantConfigurationDeploy200ResponseActionLogInner.from_dict(tenant_configuration_deploy200_response_action_log_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


