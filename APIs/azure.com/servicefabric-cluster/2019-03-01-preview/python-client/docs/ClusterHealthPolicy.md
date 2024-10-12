# ClusterHealthPolicy

Defines a health policy used to evaluate the health of the cluster or of a cluster node. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_policies** | [**Dict[str, ApplicationHealthPolicy]**](ApplicationHealthPolicy.md) | Defines a map that contains specific application health policies for different applications. Each entry specifies as key the application name and as value an ApplicationHealthPolicy used to evaluate the application health. The application name should include the &#39;fabric:&#39; URI scheme. The map is empty by default.  | [optional] 
**max_percent_unhealthy_applications** | **int** | The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.  The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error. If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning. This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap. The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero.  | [optional] 
**max_percent_unhealthy_nodes** | **int** | The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10.  The percentage represents the maximum tolerated percentage of nodes that can be unhealthy before the cluster is considered in error. If the percentage is respected but there is at least one unhealthy node, the health is evaluated as Warning. The percentage is calculated by dividing the number of unhealthy nodes over the total number of nodes in the cluster. The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.  In large clusters, some nodes will always be down or out for repairs, so this percentage should be configured to tolerate that.  | [optional] 

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


