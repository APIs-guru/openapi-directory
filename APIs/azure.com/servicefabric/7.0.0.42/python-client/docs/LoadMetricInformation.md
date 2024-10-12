# LoadMetricInformation

Represents data structure that contains load information for a certain metric in a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The current action being taken with regard to this metric | [optional] 
**activity_threshold** | **float** | The Activity Threshold specified for this metric in the system Cluster Manifest. | [optional] 
**balancing_threshold** | **float** | The balancing threshold for a certain metric. | [optional] 
**buffered_cluster_capacity_remaining** | **float** | Remaining capacity in the cluster excluding the reserved space. | [optional] 
**cluster_buffered_capacity** | **str** | Remaining capacity in the cluster excluding the reserved space. In future releases of Service Fabric this parameter will be deprecated in favor of BufferedClusterCapacityRemaining. | [optional] 
**cluster_capacity** | **str** | The total cluster capacity for a given metric | [optional] 
**cluster_capacity_remaining** | **str** | The remaining capacity for the metric in the cluster. | [optional] 
**cluster_load** | **str** | The total cluster load. In future releases of Service Fabric this parameter will be deprecated in favor of CurrentClusterLoad. | [optional] 
**cluster_remaining_buffered_capacity** | **str** | The remaining percentage of cluster total capacity for this metric. | [optional] 
**cluster_remaining_capacity** | **str** | The remaining capacity for the metric in the cluster. In future releases of Service Fabric this parameter will be deprecated in favor of ClusterCapacityRemaining. | [optional] 
**current_cluster_load** | **float** | The total cluster load. | [optional] 
**deviation_after** | **float** | The standard average deviation of the metrics after resource balancer run. | [optional] 
**deviation_before** | **float** | The standard average deviation of the metrics before resource balancer run. | [optional] 
**is_balanced_after** | **bool** | Value that indicates whether the metrics is balanced or not after resource balancer run. | [optional] 
**is_balanced_before** | **bool** | Value that indicates whether the metrics is balanced or not before resource balancer run | [optional] 
**is_cluster_capacity_violation** | **bool** | Indicates that the metric is currently over capacity in the cluster. | [optional] 
**max_node_load_node_id** | [**NodeId**](NodeId.md) |  | [optional] 
**max_node_load_value** | **str** | The maximum load on any node for this metric. In future releases of Service Fabric this parameter will be deprecated in favor of MaximumNodeLoad. | [optional] 
**maximum_node_load** | **float** | The maximum load on any node for this metric. | [optional] 
**min_node_load_node_id** | [**NodeId**](NodeId.md) |  | [optional] 
**min_node_load_value** | **str** | The minimum load on any node for this metric. In future releases of Service Fabric this parameter will be deprecated in favor of MinimumNodeLoad. | [optional] 
**minimum_node_load** | **float** | The minimum load on any node for this metric. | [optional] 
**name** | **str** | Name of the metric for which this load information is provided. | [optional] 
**node_buffer_percentage** | **float** | The reserved percentage of total node capacity for this metric. | [optional] 
**planned_load_removal** | **float** | This value represents the load of the replicas that are planned to be removed in the future within the cluster. This kind of load is reported for replicas that are currently being moving to other nodes and for replicas that are currently being dropped but still use the load on the source node. | [optional] 

## Example

```python
from openapi_client.models.load_metric_information import LoadMetricInformation

# TODO update the JSON string below
json = "{}"
# create an instance of LoadMetricInformation from a JSON string
load_metric_information_instance = LoadMetricInformation.from_json(json)
# print the JSON string representation of the object
print(LoadMetricInformation.to_json())

# convert the object into a dict
load_metric_information_dict = load_metric_information_instance.to_dict()
# create an instance of LoadMetricInformation from a dict
load_metric_information_from_dict = LoadMetricInformation.from_dict(load_metric_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


