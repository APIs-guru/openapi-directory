# NodeAddedToClusterEvent

Node Added event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fabric_version** | **str** | Fabric version. | 
**ip_address_or_fqdn** | **str** | IP address or FQDN. | 
**node_capacities** | **str** | Capacities. | 
**node_id** | **str** | Id of Node. | 
**node_instance** | **int** | Id of Node instance. | 
**node_type** | **str** | Type of Node. | 

## Example

```python
from openapi_client.models.node_added_to_cluster_event import NodeAddedToClusterEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NodeAddedToClusterEvent from a JSON string
node_added_to_cluster_event_instance = NodeAddedToClusterEvent.from_json(json)
# print the JSON string representation of the object
print(NodeAddedToClusterEvent.to_json())

# convert the object into a dict
node_added_to_cluster_event_dict = node_added_to_cluster_event_instance.to_dict()
# create an instance of NodeAddedToClusterEvent from a dict
node_added_to_cluster_event_from_dict = NodeAddedToClusterEvent.from_dict(node_added_to_cluster_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


