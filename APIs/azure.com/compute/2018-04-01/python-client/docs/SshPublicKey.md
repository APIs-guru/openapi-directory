# SshPublicKey

Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_data** | **str** | SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. &lt;br&gt;&lt;br&gt; For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc&#x3D;%2fazure%2fvirtual-machines%2flinux%2ftoc.json). | [optional] 
**path** | **str** | Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys | [optional] 

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


