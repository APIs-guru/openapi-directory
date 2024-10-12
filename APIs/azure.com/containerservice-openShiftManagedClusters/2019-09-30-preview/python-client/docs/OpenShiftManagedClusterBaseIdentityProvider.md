# OpenShiftManagedClusterBaseIdentityProvider

Structure for any Identity provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of the provider. | 

## Example

```python
from openapi_client.models.open_shift_managed_cluster_base_identity_provider import OpenShiftManagedClusterBaseIdentityProvider

# TODO update the JSON string below
json = "{}"
# create an instance of OpenShiftManagedClusterBaseIdentityProvider from a JSON string
open_shift_managed_cluster_base_identity_provider_instance = OpenShiftManagedClusterBaseIdentityProvider.from_json(json)
# print the JSON string representation of the object
print(OpenShiftManagedClusterBaseIdentityProvider.to_json())

# convert the object into a dict
open_shift_managed_cluster_base_identity_provider_dict = open_shift_managed_cluster_base_identity_provider_instance.to_dict()
# create an instance of OpenShiftManagedClusterBaseIdentityProvider from a dict
open_shift_managed_cluster_base_identity_provider_from_dict = OpenShiftManagedClusterBaseIdentityProvider.from_dict(open_shift_managed_cluster_base_identity_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


