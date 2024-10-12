# OpenShiftManagedClusterIdentityProvider

Defines the configuration of the identity providers to be used in the OpenShift cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the provider. | [optional] 
**provider** | [**OpenShiftManagedClusterBaseIdentityProvider**](OpenShiftManagedClusterBaseIdentityProvider.md) |  | [optional] 

## Example

```python
from openapi_client.models.open_shift_managed_cluster_identity_provider import OpenShiftManagedClusterIdentityProvider

# TODO update the JSON string below
json = "{}"
# create an instance of OpenShiftManagedClusterIdentityProvider from a JSON string
open_shift_managed_cluster_identity_provider_instance = OpenShiftManagedClusterIdentityProvider.from_json(json)
# print the JSON string representation of the object
print(OpenShiftManagedClusterIdentityProvider.to_json())

# convert the object into a dict
open_shift_managed_cluster_identity_provider_dict = open_shift_managed_cluster_identity_provider_instance.to_dict()
# create an instance of OpenShiftManagedClusterIdentityProvider from a dict
open_shift_managed_cluster_identity_provider_from_dict = OpenShiftManagedClusterIdentityProvider.from_dict(open_shift_managed_cluster_identity_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


