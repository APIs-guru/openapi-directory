# Cluster

Describes the identifying information, config, and status of a Dataproc cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_name** | **str** | Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused. | [optional] 
**cluster_uuid** | **str** | Output only. A cluster UUID (Unique Universal Identifier). Dataproc generates this value when it creates the cluster. | [optional] [readonly] 
**config** | [**ClusterConfig**](ClusterConfig.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster. | [optional] 
**metrics** | [**ClusterMetrics**](ClusterMetrics.md) |  | [optional] 
**project_id** | **str** | Required. The Google Cloud Platform project ID that the cluster belongs to. | [optional] 
**status** | [**ClusterStatus**](ClusterStatus.md) |  | [optional] 
**status_history** | [**List[ClusterStatus]**](ClusterStatus.md) | Output only. The previous cluster status. | [optional] [readonly] 
**virtual_cluster_config** | [**VirtualClusterConfig**](VirtualClusterConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster import Cluster

# TODO update the JSON string below
json = "{}"
# create an instance of Cluster from a JSON string
cluster_instance = Cluster.from_json(json)
# print the JSON string representation of the object
print(Cluster.to_json())

# convert the object into a dict
cluster_dict = cluster_instance.to_dict()
# create an instance of Cluster from a dict
cluster_from_dict = Cluster.from_dict(cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


