# ClusterHealthPolicy

Defines a health policy used to evaluate the health of the cluster or of a cluster node. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type_health_policy_map** | [**List[ApplicationTypeHealthPolicyMapItem]**](ApplicationTypeHealthPolicyMapItem.md) | Defines a map with max percentage unhealthy applications for specific application types. Each entry specifies as key the application type name and as value an integer that represents the MaxPercentUnhealthyApplications percentage used to evaluate the applications of the specified application type.  The application type health policy map can be used during cluster health evaluation to describe special application types. The application types included in the map are evaluated against the percentage specified in the map, and not with the global MaxPercentUnhealthyApplications defined in the cluster health policy. The applications of application types specified in the map are not counted against the global pool of applications. For example, if some applications of a type are critical, the cluster administrator can add an entry to the map for that application type and assign it a value of 0% (that is, do not tolerate any failures). All other applications can be evaluated with MaxPercentUnhealthyApplications set to 20% to tolerate some failures out of the thousands of application instances. The application type health policy map is used only if the cluster manifest enables application type health evaluation using the configuration entry for HealthManager/EnableApplicationTypeHealthEvaluation.  | [optional] 
**consider_warning_as_error** | **bool** | Indicates whether warnings are treated with the same severity as errors. | [optional] [default to False]
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


