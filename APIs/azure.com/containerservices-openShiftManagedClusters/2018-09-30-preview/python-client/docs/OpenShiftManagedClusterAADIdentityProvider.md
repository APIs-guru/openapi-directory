# OpenShiftManagedClusterAADIdentityProvider

Defines the Identity provider for MS AAD.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The clientId password associated with the provider. | [optional] 
**secret** | **str** | The secret password associated with the provider. | [optional] 
**tenant_id** | **str** | The tenantId associated with the provider. | [optional] 

## Example

```python
from openapi_client.models.open_shift_managed_cluster_aad_identity_provider import OpenShiftManagedClusterAADIdentityProvider

# TODO update the JSON string below
json = "{}"
# create an instance of OpenShiftManagedClusterAADIdentityProvider from a JSON string
open_shift_managed_cluster_aad_identity_provider_instance = OpenShiftManagedClusterAADIdentityProvider.from_json(json)
# print the JSON string representation of the object
print(OpenShiftManagedClusterAADIdentityProvider.to_json())

# convert the object into a dict
open_shift_managed_cluster_aad_identity_provider_dict = open_shift_managed_cluster_aad_identity_provider_instance.to_dict()
# create an instance of OpenShiftManagedClusterAADIdentityProvider from a dict
open_shift_managed_cluster_aad_identity_provider_from_dict = OpenShiftManagedClusterAADIdentityProvider.from_dict(open_shift_managed_cluster_aad_identity_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


