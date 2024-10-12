# AllowedClient

Represents an 'access point' for the share.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_dev** | **bool** | Allow dev flag. Which controls whether to allow creation of devices. | [optional] 
**allow_suid** | **bool** | Allow the setuid flag. | [optional] 
**allowed_clients_cidr** | **str** | The subnet of IP addresses permitted to access the share. | [optional] 
**mount_permissions** | **str** | Mount permissions. | [optional] 
**network** | **str** | The network the access point sits on. | [optional] 
**nfs_path** | **str** | Output only. The path to access NFS, in format shareIP:/InstanceID InstanceID is the generated ID instead of customer provided name. example like \&quot;10.0.0.0:/g123456789-nfs001\&quot; | [optional] [readonly] 
**no_root_squash** | **bool** | Disable root squashing, which is a feature of NFS. Root squash is a special mapping of the remote superuser (root) identity when using identity authentication. | [optional] 
**share_ip** | **str** | Output only. The IP address of the share on this network. Assigned automatically during provisioning based on the network&#39;s services_cidr. | [optional] [readonly] 

## Example

```python
from openapi_client.models.allowed_client import AllowedClient

# TODO update the JSON string below
json = "{}"
# create an instance of AllowedClient from a JSON string
allowed_client_instance = AllowedClient.from_json(json)
# print the JSON string representation of the object
print(AllowedClient.to_json())

# convert the object into a dict
allowed_client_dict = allowed_client_instance.to_dict()
# create an instance of AllowedClient from a dict
allowed_client_from_dict = AllowedClient.from_dict(allowed_client_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


