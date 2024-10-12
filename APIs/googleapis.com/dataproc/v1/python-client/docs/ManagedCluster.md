# ManagedCluster

Cluster that is managed by the workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_name** | **str** | Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix.The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters. | [optional] 
**config** | [**ClusterConfig**](ClusterConfig.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels to associate with this cluster.Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}\\p{N}_-{0,63}No more than 32 labels can be associated with a given cluster. | [optional] 

## Example

```python
from openapi_client.models.managed_cluster import ManagedCluster

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedCluster from a JSON string
managed_cluster_instance = ManagedCluster.from_json(json)
# print the JSON string representation of the object
print(ManagedCluster.to_json())

# convert the object into a dict
managed_cluster_dict = managed_cluster_instance.to_dict()
# create an instance of ManagedCluster from a dict
managed_cluster_from_dict = ManagedCluster.from_dict(managed_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


