# Node

Node in a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_core_count** | **str** | Output only. Customized number of cores | [optional] [readonly] 
**fqdn** | **str** | Output only. Fully qualified domain name of the node. | [optional] [readonly] 
**internal_ip** | **str** | Output only. Internal IP address of the node. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of this node. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster/nodes/my-node | [optional] [readonly] 
**node_type_id** | **str** | Output only. The canonical identifier of the node type (corresponds to the &#x60;NodeType&#x60;). For example: standard-72. | [optional] [readonly] 
**state** | **str** | Output only. The state of the appliance. | [optional] [readonly] 
**version** | **str** | Output only. The version number of the VMware ESXi management component in this cluster. | [optional] [readonly] 

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


