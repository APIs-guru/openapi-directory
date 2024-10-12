# NodeLoadMetricInformation

Represents data structure that contains load information for a certain metric on a node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buffered_node_capacity_remaining** | **float** | The remaining capacity which is not reserved by NodeBufferPercentage for this metric on the node. | [optional] 
**current_node_load** | **float** | Current load on the node for this metric. | [optional] 
**is_capacity_violation** | **bool** | Indicates if there is a capacity violation for this metric on the node. | [optional] 
**name** | **str** | Name of the metric for which this load information is provided. | [optional] 
**node_buffered_capacity** | **str** | The value that indicates the reserved capacity for this metric on the node. | [optional] 
**node_capacity** | **str** | Total capacity on the node for this metric. | [optional] 
**node_capacity_remaining** | **float** | The remaining capacity on the node for the metric. | [optional] 
**node_load** | **str** | Current load on the node for this metric. In future releases of Service Fabric this parameter will be deprecated in favor of CurrentNodeLoad. | [optional] 
**node_remaining_buffered_capacity** | **str** | The remaining reserved capacity for this metric on the node. In future releases of Service Fabric this parameter will be deprecated in favor of BufferedNodeCapacityRemaining. | [optional] 
**node_remaining_capacity** | **str** | The remaining capacity on the node for this metric. In future releases of Service Fabric this parameter will be deprecated in favor of NodeCapacityRemaining. | [optional] 
**planned_node_load_removal** | **float** | This value represents the load of the replicas that are planned to be removed in the future. This kind of load is reported for replicas that are currently being moving to other nodes and for replicas that are currently being dropped but still use the load on the source node. | [optional] 

## Example

```python
from openapi_client.models.node_load_metric_information import NodeLoadMetricInformation

# TODO update the JSON string below
json = "{}"
# create an instance of NodeLoadMetricInformation from a JSON string
node_load_metric_information_instance = NodeLoadMetricInformation.from_json(json)
# print the JSON string representation of the object
print(NodeLoadMetricInformation.to_json())

# convert the object into a dict
node_load_metric_information_dict = node_load_metric_information_instance.to_dict()
# create an instance of NodeLoadMetricInformation from a dict
node_load_metric_information_from_dict = NodeLoadMetricInformation.from_dict(node_load_metric_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


