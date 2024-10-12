# SshProfile

The list of SSH public keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_keys** | [**List[SshPublicKey]**](SshPublicKey.md) | The list of SSH public keys. | [optional] 

## Example

```python
from openapi_client.models.ssh_profile import SshProfile

# TODO update the JSON string below
json = "{}"
# create an instance of SshProfile from a JSON string
ssh_profile_instance = SshProfile.from_json(json)
# print the JSON string representation of the object
print(SshProfile.to_json())

# convert the object into a dict
ssh_profile_dict = ssh_profile_instance.to_dict()
# create an instance of SshProfile from a dict
ssh_profile_from_dict = SshProfile.from_dict(ssh_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


