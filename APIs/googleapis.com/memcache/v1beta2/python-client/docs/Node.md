# Node


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | Output only. Hostname or IP address of the Memcached node used by the clients to connect to the Memcached server on this node. | [optional] [readonly] 
**memcache_full_version** | **str** | Output only. The full version of memcached server running on this node. e.g. - memcached-1.5.16 | [optional] [readonly] 
**memcache_version** | **str** | Output only. Major version of memcached server running on this node, e.g. MEMCACHE_1_5 | [optional] [readonly] 
**node_id** | **str** | Output only. Identifier of the Memcached node. The node id does not include project or location like the Memcached instance name. | [optional] [readonly] 
**parameters** | [**MemcacheParameters**](MemcacheParameters.md) |  | [optional] 
**port** | **int** | Output only. The port number of the Memcached server on this node. | [optional] [readonly] 
**state** | **str** | Output only. Current state of the Memcached node. | [optional] [readonly] 
**update_available** | **bool** | Output only. Returns true if there is an update waiting to be applied | [optional] [readonly] 
**zone** | **str** | Output only. Location (GCP Zone) for the Memcached node. | [optional] [readonly] 

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


