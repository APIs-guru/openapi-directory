# OpenShiftManagedClusterAuthProfile

Defines all possible authentication profiles for the OpenShift cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_providers** | [**List[OpenShiftManagedClusterIdentityProvider]**](OpenShiftManagedClusterIdentityProvider.md) | Type of authentication profile to use. | [optional] 

## Example

```python
from openapi_client.models.open_shift_managed_cluster_auth_profile import OpenShiftManagedClusterAuthProfile

# TODO update the JSON string below
json = "{}"
# create an instance of OpenShiftManagedClusterAuthProfile from a JSON string
open_shift_managed_cluster_auth_profile_instance = OpenShiftManagedClusterAuthProfile.from_json(json)
# print the JSON string representation of the object
print(OpenShiftManagedClusterAuthProfile.to_json())

# convert the object into a dict
open_shift_managed_cluster_auth_profile_dict = open_shift_managed_cluster_auth_profile_instance.to_dict()
# create an instance of OpenShiftManagedClusterAuthProfile from a dict
open_shift_managed_cluster_auth_profile_from_dict = OpenShiftManagedClusterAuthProfile.from_dict(open_shift_managed_cluster_auth_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


