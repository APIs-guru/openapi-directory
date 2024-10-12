# CreateWorkflowDetails

The details of a workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the workflow. The maximum length is 1000 characters. | [optional] 
**name** | **str** | The name of the workflow. The name must be unique. The maximum length is 255 characters. Characters can be separated by a whitespace but the name cannot start or end with a whitespace. | 
**statuses** | [**List[CreateWorkflowStatusDetails]**](CreateWorkflowStatusDetails.md) | The statuses of the workflow. Any status that does not include a transition is added to the workflow without a transition. | 
**transitions** | [**List[CreateWorkflowTransitionDetails]**](CreateWorkflowTransitionDetails.md) | The transitions of the workflow. For the request to be valid, these transitions must:   *  include one *initial* transition.  *  not use the same name for a *global* and *directed* transition.  *  have a unique name for each *global* transition.  *  have a unique &#39;to&#39; status for each *global* transition.  *  have unique names for each transition from a status.  *  not have a &#39;from&#39; status on *initial* and *global* transitions.  *  have a &#39;from&#39; status on *directed* transitions.  All the transition statuses must be included in &#x60;statuses&#x60;. | 

## Example

```python
from openapi_client.models.create_workflow_details import CreateWorkflowDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWorkflowDetails from a JSON string
create_workflow_details_instance = CreateWorkflowDetails.from_json(json)
# print the JSON string representation of the object
print(CreateWorkflowDetails.to_json())

# convert the object into a dict
create_workflow_details_dict = create_workflow_details_instance.to_dict()
# create an instance of CreateWorkflowDetails from a dict
create_workflow_details_from_dict = CreateWorkflowDetails.from_dict(create_workflow_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


