# PathNodeAssociatedFinding

A finding that is associated with this node in the attack path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_finding** | **str** | Canonical name of the associated findings. Example: organizations/123/sources/456/findings/789 | [optional] 
**finding_category** | **str** | The additional taxonomy group within findings from a given source. | [optional] 
**name** | **str** | Full resource name of the finding. | [optional] 

## Example

```python
from openapi_client.models.path_node_associated_finding import PathNodeAssociatedFinding

# TODO update the JSON string below
json = "{}"
# create an instance of PathNodeAssociatedFinding from a JSON string
path_node_associated_finding_instance = PathNodeAssociatedFinding.from_json(json)
# print the JSON string representation of the object
print(PathNodeAssociatedFinding.to_json())

# convert the object into a dict
path_node_associated_finding_dict = path_node_associated_finding_instance.to_dict()
# create an instance of PathNodeAssociatedFinding from a dict
path_node_associated_finding_from_dict = PathNodeAssociatedFinding.from_dict(path_node_associated_finding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


