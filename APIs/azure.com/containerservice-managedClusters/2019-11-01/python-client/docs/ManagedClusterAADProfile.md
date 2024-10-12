# ManagedClusterAADProfile

AADProfile specifies attributes for Azure Active Directory integration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_app_id** | **str** | The client AAD application ID. | 
**server_app_id** | **str** | The server AAD application ID. | 
**server_app_secret** | **str** | The server AAD application secret. | [optional] 
**tenant_id** | **str** | The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription. | [optional] 

## Example

```python
from openapi_client.models.managed_cluster_aad_profile import ManagedClusterAADProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterAADProfile from a JSON string
managed_cluster_aad_profile_instance = ManagedClusterAADProfile.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterAADProfile.to_json())

# convert the object into a dict
managed_cluster_aad_profile_dict = managed_cluster_aad_profile_instance.to_dict()
# create an instance of ManagedClusterAADProfile from a dict
managed_cluster_aad_profile_from_dict = ManagedClusterAADProfile.from_dict(managed_cluster_aad_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


