# OnPremCluster

OnPremCluster contains information specific to GKE On-Prem clusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_cluster** | **bool** | Immutable. Whether the cluster is an admin cluster. | [optional] 
**cluster_missing** | **bool** | Output only. If cluster_missing is set then it denotes that API(gkeonprem.googleapis.com) resource for this GKE On-Prem cluster no longer exists. | [optional] [readonly] 
**cluster_type** | **str** | Immutable. The on prem cluster&#39;s type. | [optional] 
**resource_link** | **str** | Immutable. Self-link of the Google Cloud resource for the GKE On-Prem cluster. For example: //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/vmwareClusters/my-cluster //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/bareMetalClusters/my-cluster | [optional] 

## Example

```python
from openapi_client.models.on_prem_cluster import OnPremCluster

# TODO update the JSON string below
json = "{}"
# create an instance of OnPremCluster from a JSON string
on_prem_cluster_instance = OnPremCluster.from_json(json)
# print the JSON string representation of the object
print(OnPremCluster.to_json())

# convert the object into a dict
on_prem_cluster_dict = on_prem_cluster_instance.to_dict()
# create an instance of OnPremCluster from a dict
on_prem_cluster_from_dict = OnPremCluster.from_dict(on_prem_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


