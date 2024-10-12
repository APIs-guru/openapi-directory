# NodeImpact

Describes the expected impact of a repair to a particular node.  This type supports the Service Fabric platform; it is not meant to be used directly from your code. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impact_level** | **str** | The level of impact expected. | [optional] 
**node_name** | **str** | The name of the impacted node. | 

## Example

```python
from openapi_client.models.node_impact import NodeImpact

# TODO update the JSON string below
json = "{}"
# create an instance of NodeImpact from a JSON string
node_impact_instance = NodeImpact.from_json(json)
# print the JSON string representation of the object
print(NodeImpact.to_json())

# convert the object into a dict
node_impact_dict = node_impact_instance.to_dict()
# create an instance of NodeImpact from a dict
node_impact_from_dict = NodeImpact.from_dict(node_impact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


