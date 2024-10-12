# LoginProfile

The user profile information used for logging in to a virtual machine on Google Compute Engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. A unique user ID. | [optional] 
**posix_accounts** | [**List[PosixAccount]**](PosixAccount.md) | The list of POSIX accounts associated with the user. | [optional] 
**security_keys** | [**List[SecurityKey]**](SecurityKey.md) | The registered security key credentials for a user. | [optional] 
**ssh_public_keys** | [**Dict[str, SshPublicKey]**](SshPublicKey.md) | A map from SSH public key fingerprint to the associated key object. | [optional] 

## Example

```python
from openapi_client.models.login_profile import LoginProfile

# TODO update the JSON string below
json = "{}"
# create an instance of LoginProfile from a JSON string
login_profile_instance = LoginProfile.from_json(json)
# print the JSON string representation of the object
print(LoginProfile.to_json())

# convert the object into a dict
login_profile_dict = login_profile_instance.to_dict()
# create an instance of LoginProfile from a dict
login_profile_from_dict = LoginProfile.from_dict(login_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


