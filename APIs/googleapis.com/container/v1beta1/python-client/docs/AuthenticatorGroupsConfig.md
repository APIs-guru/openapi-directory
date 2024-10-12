# AuthenticatorGroupsConfig

Configuration for returning group information from authenticators.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether this cluster should return group membership lookups during authentication using a group of security groups. | [optional] 
**security_group** | **str** | The name of the security group-of-groups to be used. Only relevant if enabled &#x3D; true. | [optional] 

## Example

```python
from openapi_client.models.authenticator_groups_config import AuthenticatorGroupsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticatorGroupsConfig from a JSON string
authenticator_groups_config_instance = AuthenticatorGroupsConfig.from_json(json)
# print the JSON string representation of the object
print(AuthenticatorGroupsConfig.to_json())

# convert the object into a dict
authenticator_groups_config_dict = authenticator_groups_config_instance.to_dict()
# create an instance of AuthenticatorGroupsConfig from a dict
authenticator_groups_config_from_dict = AuthenticatorGroupsConfig.from_dict(authenticator_groups_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


