# CreateWorkflow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template** | **str** | The template that the Dispatch API will execute. For the initial version of the API the only available value will be failover | [optional] 
**workflow** | [**List[CreateWorkflowWorkflowInner]**](CreateWorkflowWorkflowInner.md) | Contains a message object that must reflect the current /messages resource. All parameters within the content object reflect the /messages docs. | [optional] 

## Example

```python
from openapi_client.models.create_workflow import CreateWorkflow

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWorkflow from a JSON string
create_workflow_instance = CreateWorkflow.from_json(json)
# print the JSON string representation of the object
print(CreateWorkflow.to_json())

# convert the object into a dict
create_workflow_dict = create_workflow_instance.to_dict()
# create an instance of CreateWorkflow from a dict
create_workflow_from_dict = CreateWorkflow.from_dict(create_workflow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


