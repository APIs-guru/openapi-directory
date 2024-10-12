# Node

Details of a single node in the instance. Nodes in an AlloyDB instance are ephemereal, they can change during update, failover, autohealing and resize operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the VM e.g. \&quot;test-read-0601-407e52be-ms3l\&quot;. | [optional] 
**ip** | **str** | The private IP address of the VM e.g. \&quot;10.57.0.34\&quot;. | [optional] 
**state** | **str** | Determined by state of the compute VM and postgres-service health. Compute VM state can have values listed in https://cloud.google.com/compute/docs/instances/instance-life-cycle and postgres-service health can have values: HEALTHY and UNHEALTHY. | [optional] 
**zone_id** | **str** | The Compute Engine zone of the VM e.g. \&quot;us-central1-b\&quot;. | [optional] 

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


