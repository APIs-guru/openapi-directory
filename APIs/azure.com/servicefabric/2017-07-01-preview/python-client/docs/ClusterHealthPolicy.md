# ClusterHealthPolicy

Defines a health policy used to evaluate the health of the cluster or of a cluster node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_applications** | **int** | The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.  | [optional] 
**max_percent_unhealthy_nodes** | **int** | The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10.  | [optional] 

## Example

```python
from openapi_client.models.cluster_health_policy import ClusterHealthPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterHealthPolicy from a JSON string
cluster_health_policy_instance = ClusterHealthPolicy.from_json(json)
# print the JSON string representation of the object
print(ClusterHealthPolicy.to_json())

# convert the object into a dict
cluster_health_policy_dict = cluster_health_policy_instance.to_dict()
# create an instance of ClusterHealthPolicy from a dict
cluster_health_policy_from_dict = ClusterHealthPolicy.from_dict(cluster_health_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


