# EnterpriseCrmEventbusAuthconfigAuthConfigTaskParam


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_credential_types** | **List[str]** | Defines the credential types to be supported as Task may restrict specific types to use, e.g. Cloud SQL Task will use username/password type only. | [optional] 
**allowed_service_account_in_context** | **bool** |  | [optional] 
**auth_config_id** | **str** | UUID of the AuthConfig. | [optional] 
**scope** | **str** | A space-delimited list of requested scope permissions. | [optional] 
**use_service_account_in_context** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_authconfig_auth_config_task_param import EnterpriseCrmEventbusAuthconfigAuthConfigTaskParam

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusAuthconfigAuthConfigTaskParam from a JSON string
enterprise_crm_eventbus_authconfig_auth_config_task_param_instance = EnterpriseCrmEventbusAuthconfigAuthConfigTaskParam.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusAuthconfigAuthConfigTaskParam.to_json())

# convert the object into a dict
enterprise_crm_eventbus_authconfig_auth_config_task_param_dict = enterprise_crm_eventbus_authconfig_auth_config_task_param_instance.to_dict()
# create an instance of EnterpriseCrmEventbusAuthconfigAuthConfigTaskParam from a dict
enterprise_crm_eventbus_authconfig_auth_config_task_param_from_dict = EnterpriseCrmEventbusAuthconfigAuthConfigTaskParam.from_dict(enterprise_crm_eventbus_authconfig_auth_config_task_param_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


