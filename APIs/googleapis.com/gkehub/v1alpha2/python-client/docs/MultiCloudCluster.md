# MultiCloudCluster

MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_missing** | **bool** | Output only. If cluster_missing is set then it denotes that API(gkemulticloud.googleapis.com) resource for this GKE Multi-Cloud cluster no longer exists. | [optional] [readonly] 
**resource_link** | **str** | Immutable. Self-link of the Google Cloud resource for the GKE Multi-Cloud cluster. For example: //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/awsClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/azureClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/attachedClusters/my-cluster | [optional] 

## Example

```python
from openapi_client.models.multi_cloud_cluster import MultiCloudCluster

# TODO update the JSON string below
json = "{}"
# create an instance of MultiCloudCluster from a JSON string
multi_cloud_cluster_instance = MultiCloudCluster.from_json(json)
# print the JSON string representation of the object
print(MultiCloudCluster.to_json())

# convert the object into a dict
multi_cloud_cluster_dict = multi_cloud_cluster_instance.to_dict()
# create an instance of MultiCloudCluster from a dict
multi_cloud_cluster_from_dict = MultiCloudCluster.from_dict(multi_cloud_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


