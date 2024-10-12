# LdapAuthModuleConfig

Settings to authenticate users using a generic OAuth2 provider

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_password** | **str** | The admin password | 
**admin_username** | **str** | The admin username | 
**desc** | **str** | Description of the config | 
**email_field** | **str** | Field name to get email from user profile | 
**group_filter** | **str** | Filter for groups | 
**id** | **str** | Unique id of the config | 
**name** | **str** | Name of the config | 
**name_field** | **str** | Field name to get name from user profile | 
**otoroshi_data_field** | **str** | Field name to get otoroshi metadata from. You can specify sub fields using | as separator | [optional] 
**search_base** | **str** | LDAP search base | 
**search_filter** | **str** | Filter for users | 
**server_url** | **str** | URL of the ldap server | 
**session_max_age** | **int** | Max age of the session | 
**type** | **str** | Type of settings. value is ldap | 
**user_base** | **str** | LDAP user base DN | 

## Example

```python
from openapi_client.models.ldap_auth_module_config import LdapAuthModuleConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LdapAuthModuleConfig from a JSON string
ldap_auth_module_config_instance = LdapAuthModuleConfig.from_json(json)
# print the JSON string representation of the object
print(LdapAuthModuleConfig.to_json())

# convert the object into a dict
ldap_auth_module_config_dict = ldap_auth_module_config_instance.to_dict()
# create an instance of LdapAuthModuleConfig from a dict
ldap_auth_module_config_from_dict = LdapAuthModuleConfig.from_dict(ldap_auth_module_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


