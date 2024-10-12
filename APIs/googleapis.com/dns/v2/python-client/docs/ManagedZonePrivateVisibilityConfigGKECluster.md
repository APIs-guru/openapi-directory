# ManagedZonePrivateVisibilityConfigGKECluster


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gke_cluster_name** | **str** | The resource name of the cluster to bind this ManagedZone to. This should be specified in the format like: projects/*/locations/*/clusters/*. This is referenced from GKE projects.locations.clusters.get API: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/get | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#managedZonePrivateVisibilityConfigGKECluster']

## Example

```python
from openapi_client.models.managed_zone_private_visibility_config_gke_cluster import ManagedZonePrivateVisibilityConfigGKECluster

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZonePrivateVisibilityConfigGKECluster from a JSON string
managed_zone_private_visibility_config_gke_cluster_instance = ManagedZonePrivateVisibilityConfigGKECluster.from_json(json)
# print the JSON string representation of the object
print(ManagedZonePrivateVisibilityConfigGKECluster.to_json())

# convert the object into a dict
managed_zone_private_visibility_config_gke_cluster_dict = managed_zone_private_visibility_config_gke_cluster_instance.to_dict()
# create an instance of ManagedZonePrivateVisibilityConfigGKECluster from a dict
managed_zone_private_visibility_config_gke_cluster_from_dict = ManagedZonePrivateVisibilityConfigGKECluster.from_dict(managed_zone_private_visibility_config_gke_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


