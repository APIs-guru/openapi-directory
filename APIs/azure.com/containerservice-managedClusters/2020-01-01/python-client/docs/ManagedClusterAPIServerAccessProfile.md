# ManagedClusterAPIServerAccessProfile

Access profile for managed cluster API server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_ip_ranges** | **List[str]** | Authorized IP Ranges to kubernetes API server. | [optional] 
**enable_private_cluster** | **bool** | Whether to create the cluster as a private cluster or not. | [optional] 

## Example

```python
from openapi_client.models.managed_cluster_api_server_access_profile import ManagedClusterAPIServerAccessProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterAPIServerAccessProfile from a JSON string
managed_cluster_api_server_access_profile_instance = ManagedClusterAPIServerAccessProfile.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterAPIServerAccessProfile.to_json())

# convert the object into a dict
managed_cluster_api_server_access_profile_dict = managed_cluster_api_server_access_profile_instance.to_dict()
# create an instance of ManagedClusterAPIServerAccessProfile from a dict
managed_cluster_api_server_access_profile_from_dict = ManagedClusterAPIServerAccessProfile.from_dict(managed_cluster_api_server_access_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


