# NodeRepairImpactDescription

Describes the expected impact of a repair on a set of nodes.  This type supports the Service Fabric platform; it is not meant to be used directly from your code. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_impact_list** | [**List[NodeImpact]**](NodeImpact.md) | The list of nodes impacted by a repair action and their respective expected impact. | [optional] 

## Example

```python
from openapi_client.models.node_repair_impact_description import NodeRepairImpactDescription

# TODO update the JSON string below
json = "{}"
# create an instance of NodeRepairImpactDescription from a JSON string
node_repair_impact_description_instance = NodeRepairImpactDescription.from_json(json)
# print the JSON string representation of the object
print(NodeRepairImpactDescription.to_json())

# convert the object into a dict
node_repair_impact_description_dict = node_repair_impact_description_instance.to_dict()
# create an instance of NodeRepairImpactDescription from a dict
node_repair_impact_description_from_dict = NodeRepairImpactDescription.from_dict(node_repair_impact_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


