# SshAuthenticationConfig

Configures fields for performing SSH authentication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_public_key** | **str** | Required. Content of a public SSH key to verify an identity of a remote Git host. | [optional] 
**user_private_key_secret_version** | **str** | Required. The name of the Secret Manager secret version to use as a ssh private key for Git operations. Must be in the format &#x60;projects/*/secrets/*/versions/*&#x60;. | [optional] 

## Example

```python
from openapi_client.models.ssh_authentication_config import SshAuthenticationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SshAuthenticationConfig from a JSON string
ssh_authentication_config_instance = SshAuthenticationConfig.from_json(json)
# print the JSON string representation of the object
print(SshAuthenticationConfig.to_json())

# convert the object into a dict
ssh_authentication_config_dict = ssh_authentication_config_instance.to_dict()
# create an instance of SshAuthenticationConfig from a dict
ssh_authentication_config_from_dict = SshAuthenticationConfig.from_dict(ssh_authentication_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


