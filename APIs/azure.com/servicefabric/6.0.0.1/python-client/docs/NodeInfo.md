# NodeInfo

Information about a node in Service Fabric cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_version** | **str** | The version of Service Fabric binaries that the node is running. | [optional] 
**config_version** | **str** | The version of Service Fabric cluster manifest that the node is using. | [optional] 
**fault_domain** | **str** | The fault domain of the node. | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**id** | [**NodeId**](NodeId.md) |  | [optional] 
**instance_id** | **str** | The id representing the node instance. While the Id of the node is deterministically generated from the node name and remains same across restarts, the InstanceId changes every time node restarts. | [optional] 
**ip_address_or_fqdn** | **str** | The IP address or fully qualified domain name of the node. | [optional] 
**is_seed_node** | **bool** | Indicates if the node is a seed node or not. Returns true if the node is a seed node, otherwise false. A quorum of seed nodes are required for proper operation of Service Fabric cluster. | [optional] 
**is_stopped** | **bool** | Indicates if the node is stopped by calling stop node API or not. Returns true if the node is stopped, otherwise false. | [optional] 
**name** | **str** | The name of a Service Fabric node. | [optional] 
**node_deactivation_info** | [**NodeDeactivationInfo**](NodeDeactivationInfo.md) |  | [optional] 
**node_down_at** | **datetime** | Date time in UTC when the node went down. If node has never been down then this value will be zero date time. | [optional] 
**node_down_time_in_seconds** | **str** | Time in seconds since the node has been in NodeStatus Down. Value zero indicates node is not NodeStatus Down. | [optional] 
**node_status** | [**NodeStatus**](NodeStatus.md) |  | [optional] 
**node_up_at** | **datetime** | Date time in UTC when the node came up. If the node has never been up then this value will be zero date time. | [optional] 
**node_up_time_in_seconds** | **str** | Time in seconds since the node has been in NodeStatus Up. Value ero indicates that the node is not Up. | [optional] 
**type** | **str** | The type of the node. | [optional] 
**upgrade_domain** | **str** | The upgrade domain of the node. | [optional] 

## Example

```python
from openapi_client.models.node_info import NodeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of NodeInfo from a JSON string
node_info_instance = NodeInfo.from_json(json)
# print the JSON string representation of the object
print(NodeInfo.to_json())

# convert the object into a dict
node_info_dict = node_info_instance.to_dict()
# create an instance of NodeInfo from a dict
node_info_from_dict = NodeInfo.from_dict(node_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


