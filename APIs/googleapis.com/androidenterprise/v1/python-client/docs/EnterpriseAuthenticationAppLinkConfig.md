# EnterpriseAuthenticationAppLinkConfig

An authentication URL configuration for the authenticator app of an identity provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | An authentication url. | [optional] 

## Example

```python
from openapi_client.models.enterprise_authentication_app_link_config import EnterpriseAuthenticationAppLinkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseAuthenticationAppLinkConfig from a JSON string
enterprise_authentication_app_link_config_instance = EnterpriseAuthenticationAppLinkConfig.from_json(json)
# print the JSON string representation of the object
print(EnterpriseAuthenticationAppLinkConfig.to_json())

# convert the object into a dict
enterprise_authentication_app_link_config_dict = enterprise_authentication_app_link_config_instance.to_dict()
# create an instance of EnterpriseAuthenticationAppLinkConfig from a dict
enterprise_authentication_app_link_config_from_dict = EnterpriseAuthenticationAppLinkConfig.from_dict(enterprise_authentication_app_link_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


