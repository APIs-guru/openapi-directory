# WorkflowTemplatePlacement

Specifies workflow execution target.Either managed_cluster or cluster_selector is required.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_selector** | [**ClusterSelector**](ClusterSelector.md) |  | [optional] 
**managed_cluster** | [**ManagedCluster**](ManagedCluster.md) |  | [optional] 

## Example

```python
from openapi_client.models.workflow_template_placement import WorkflowTemplatePlacement

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTemplatePlacement from a JSON string
workflow_template_placement_instance = WorkflowTemplatePlacement.from_json(json)
# print the JSON string representation of the object
print(WorkflowTemplatePlacement.to_json())

# convert the object into a dict
workflow_template_placement_dict = workflow_template_placement_instance.to_dict()
# create an instance of WorkflowTemplatePlacement from a dict
workflow_template_placement_from_dict = WorkflowTemplatePlacement.from_dict(workflow_template_placement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


