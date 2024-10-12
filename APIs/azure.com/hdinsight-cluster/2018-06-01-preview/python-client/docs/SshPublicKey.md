# SshPublicKey

The SSH public key for the cluster nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_data** | **str** | The certificate for SSH. | [optional] 

## Example

```python
from openapi_client.models.ssh_public_key import SshPublicKey

# TODO update the JSON string below
json = "{}"
# create an instance of SshPublicKey from a JSON string
ssh_public_key_instance = SshPublicKey.from_json(json)
# print the JSON string representation of the object
print(SshPublicKey.to_json())

# convert the object into a dict
ssh_public_key_dict = ssh_public_key_instance.to_dict()
# create an instance of SshPublicKey from a dict
ssh_public_key_from_dict = SshPublicKey.from_dict(ssh_public_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


