# CreateWorkflowStatusDetails

The details of a transition status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the status. | 
**properties** | **Dict[str, str]** | The properties of the status. | [optional] 

## Example

```python
from openapi_client.models.create_workflow_status_details import CreateWorkflowStatusDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWorkflowStatusDetails from a JSON string
create_workflow_status_details_instance = CreateWorkflowStatusDetails.from_json(json)
# print the JSON string representation of the object
print(CreateWorkflowStatusDetails.to_json())

# convert the object into a dict
create_workflow_status_details_dict = create_workflow_status_details_instance.to_dict()
# create an instance of CreateWorkflowStatusDetails from a dict
create_workflow_status_details_from_dict = CreateWorkflowStatusDetails.from_dict(create_workflow_status_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


