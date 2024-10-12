# VmwareAdminAuthorizationConfig

VmwareAdminAuthorizationConfig represents configuration for admin cluster authorization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**viewer_users** | [**List[ClusterUser]**](ClusterUser.md) | For VMware admin clusters, users will be granted the cluster-viewer role on the cluster. | [optional] 

## Example

```python
from openapi_client.models.vmware_admin_authorization_config import VmwareAdminAuthorizationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareAdminAuthorizationConfig from a JSON string
vmware_admin_authorization_config_instance = VmwareAdminAuthorizationConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareAdminAuthorizationConfig.to_json())

# convert the object into a dict
vmware_admin_authorization_config_dict = vmware_admin_authorization_config_instance.to_dict()
# create an instance of VmwareAdminAuthorizationConfig from a dict
vmware_admin_authorization_config_from_dict = VmwareAdminAuthorizationConfig.from_dict(vmware_admin_authorization_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


