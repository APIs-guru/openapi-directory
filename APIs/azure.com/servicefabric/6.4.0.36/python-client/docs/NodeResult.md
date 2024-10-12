# NodeResult

Contains information about a node that was targeted by a user-induced operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_instance_id** | **str** | The node instance id. | [optional] 
**node_name** | **str** | The name of a Service Fabric node. | [optional] 

## Example

```python
from openapi_client.models.node_result import NodeResult

# TODO update the JSON string below
json = "{}"
# create an instance of NodeResult from a JSON string
node_result_instance = NodeResult.from_json(json)
# print the JSON string representation of the object
print(NodeResult.to_json())

# convert the object into a dict
node_result_dict = node_result_instance.to_dict()
# create an instance of NodeResult from a dict
node_result_from_dict = NodeResult.from_dict(node_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


