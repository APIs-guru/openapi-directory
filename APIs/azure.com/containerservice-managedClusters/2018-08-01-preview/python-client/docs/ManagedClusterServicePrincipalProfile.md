# ManagedClusterServicePrincipalProfile

Information about a service principal identity for the cluster to use for manipulating Azure APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The ID for the service principal. | 
**secret** | **str** | The secret password associated with the service principal in plain text. | [optional] 

## Example

```python
from openapi_client.models.managed_cluster_service_principal_profile import ManagedClusterServicePrincipalProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterServicePrincipalProfile from a JSON string
managed_cluster_service_principal_profile_instance = ManagedClusterServicePrincipalProfile.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterServicePrincipalProfile.to_json())

# convert the object into a dict
managed_cluster_service_principal_profile_dict = managed_cluster_service_principal_profile_instance.to_dict()
# create an instance of ManagedClusterServicePrincipalProfile from a dict
managed_cluster_service_principal_profile_from_dict = ManagedClusterServicePrincipalProfile.from_dict(managed_cluster_service_principal_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


