# CreateWorkflowWorkflowInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover** | [**FailoverProperty**](FailoverProperty.md) |  | [optional] 
**var_from** | [**FromProperty**](FromProperty.md) |  | 
**message** | [**MessageProperty**](MessageProperty.md) |  | 
**to** | [**ToProperty**](ToProperty.md) |  | 

## Example

```python
from openapi_client.models.create_workflow_workflow_inner import CreateWorkflowWorkflowInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWorkflowWorkflowInner from a JSON string
create_workflow_workflow_inner_instance = CreateWorkflowWorkflowInner.from_json(json)
# print the JSON string representation of the object
print(CreateWorkflowWorkflowInner.to_json())

# convert the object into a dict
create_workflow_workflow_inner_dict = create_workflow_workflow_inner_instance.to_dict()
# create an instance of CreateWorkflowWorkflowInner from a dict
create_workflow_workflow_inner_from_dict = CreateWorkflowWorkflowInner.from_dict(create_workflow_workflow_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


