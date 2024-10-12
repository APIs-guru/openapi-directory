# NodeSpec

Details of the TPU node(s) being requested. Users can request either a single node or multiple nodes. NodeSpec provides the specification for node(s) to be created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multi_node_params** | [**MultiNodeParams**](MultiNodeParams.md) |  | [optional] 
**node** | [**Node**](Node.md) |  | [optional] 
**node_id** | **str** | The unqualified resource name. Should follow the &#x60;^[A-Za-z0-9_.~+%-]+$&#x60; regex format. This is only specified when requesting a single node. In case of multi-node requests, multi_node_params must be populated instead. It&#39;s an error to specify both node_id and multi_node_params. | [optional] 
**parent** | **str** | Required. The parent resource name. | [optional] 

## Example

```python
from openapi_client.models.node_spec import NodeSpec

# TODO update the JSON string below
json = "{}"
# create an instance of NodeSpec from a JSON string
node_spec_instance = NodeSpec.from_json(json)
# print the JSON string representation of the object
print(NodeSpec.to_json())

# convert the object into a dict
node_spec_dict = node_spec_instance.to_dict()
# create an instance of NodeSpec from a dict
node_spec_from_dict = NodeSpec.from_dict(node_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


