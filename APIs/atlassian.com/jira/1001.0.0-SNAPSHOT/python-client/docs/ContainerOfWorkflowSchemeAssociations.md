# ContainerOfWorkflowSchemeAssociations

A container for a list of workflow schemes together with the projects they are associated with.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**List[WorkflowSchemeAssociations]**](WorkflowSchemeAssociations.md) | A list of workflow schemes together with projects they are associated with. | 

## Example

```python
from openapi_client.models.container_of_workflow_scheme_associations import ContainerOfWorkflowSchemeAssociations

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerOfWorkflowSchemeAssociations from a JSON string
container_of_workflow_scheme_associations_instance = ContainerOfWorkflowSchemeAssociations.from_json(json)
# print the JSON string representation of the object
print(ContainerOfWorkflowSchemeAssociations.to_json())

# convert the object into a dict
container_of_workflow_scheme_associations_dict = container_of_workflow_scheme_associations_instance.to_dict()
# create an instance of ContainerOfWorkflowSchemeAssociations from a dict
container_of_workflow_scheme_associations_from_dict = ContainerOfWorkflowSchemeAssociations.from_dict(container_of_workflow_scheme_associations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


