# Node

The node

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_version** | **str** |  | [optional] 
**config_version** | **str** |  | [optional] 
**fault_domain** | **str** |  | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**id** | [**ClusterHealthNodeHealthStatesInnerId**](ClusterHealthNodeHealthStatesInnerId.md) |  | [optional] 
**instance_id** | **str** |  | [optional] 
**ip_address_or_fqdn** | **str** |  | [optional] 
**is_seed_node** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**node_deactivation_info** | [**NodeNodeDeactivationInfo**](NodeNodeDeactivationInfo.md) |  | [optional] 
**node_status** | **str** |  | [optional] 
**node_up_time_in_seconds** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**upgrade_domain** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.node import Node

# TODO update the JSON string below
json = "{}"
# create an instance of Node from a JSON string
node_instance = Node.from_json(json)
# print the JSON string representation of the object
print(Node.to_json())

# convert the object into a dict
node_dict = node_instance.to_dict()
# create an instance of Node from a dict
node_from_dict = Node.from_dict(node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


