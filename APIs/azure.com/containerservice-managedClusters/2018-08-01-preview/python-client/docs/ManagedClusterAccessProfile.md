# ManagedClusterAccessProfile

Managed cluster Access Profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 
**properties** | [**AccessProfile**](AccessProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.managed_cluster_access_profile import ManagedClusterAccessProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterAccessProfile from a JSON string
managed_cluster_access_profile_instance = ManagedClusterAccessProfile.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterAccessProfile.to_json())

# convert the object into a dict
managed_cluster_access_profile_dict = managed_cluster_access_profile_instance.to_dict()
# create an instance of ManagedClusterAccessProfile from a dict
managed_cluster_access_profile_from_dict = ManagedClusterAccessProfile.from_dict(managed_cluster_access_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


