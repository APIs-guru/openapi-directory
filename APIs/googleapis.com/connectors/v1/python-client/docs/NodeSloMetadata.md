# NodeSloMetadata

Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the node, if different from instance location. | [optional] 
**node_id** | **str** | The id of the node. This should be equal to SaasInstanceNode.node_id. | [optional] 
**per_sli_eligibility** | [**PerSliSloEligibility**](PerSliSloEligibility.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_slo_metadata import NodeSloMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of NodeSloMetadata from a JSON string
node_slo_metadata_instance = NodeSloMetadata.from_json(json)
# print the JSON string representation of the object
print(NodeSloMetadata.to_json())

# convert the object into a dict
node_slo_metadata_dict = node_slo_metadata_instance.to_dict()
# create an instance of NodeSloMetadata from a dict
node_slo_metadata_from_dict = NodeSloMetadata.from_dict(node_slo_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


