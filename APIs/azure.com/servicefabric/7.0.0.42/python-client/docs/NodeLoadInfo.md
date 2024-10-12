# NodeLoadInfo

Information about load on a Service Fabric node. It holds a summary of all metrics and their load on a node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_load_metric_information** | [**List[NodeLoadMetricInformation]**](NodeLoadMetricInformation.md) | List that contains metrics and their load information on this node. | [optional] 
**node_name** | **str** | The name of a Service Fabric node. | [optional] 

## Example

```python
from openapi_client.models.node_load_info import NodeLoadInfo

# TODO update the JSON string below
json = "{}"
# create an instance of NodeLoadInfo from a JSON string
node_load_info_instance = NodeLoadInfo.from_json(json)
# print the JSON string representation of the object
print(NodeLoadInfo.to_json())

# convert the object into a dict
node_load_info_dict = node_load_info_instance.to_dict()
# create an instance of NodeLoadInfo from a dict
node_load_info_from_dict = NodeLoadInfo.from_dict(node_load_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


