# PublishedWorkflowId

Properties that identify a published workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | **str** | The entity ID of the workflow. | [optional] 
**name** | **str** | The name of the workflow. | 

## Example

```python
from openapi_client.models.published_workflow_id import PublishedWorkflowId

# TODO update the JSON string below
json = "{}"
# create an instance of PublishedWorkflowId from a JSON string
published_workflow_id_instance = PublishedWorkflowId.from_json(json)
# print the JSON string representation of the object
print(PublishedWorkflowId.to_json())

# convert the object into a dict
published_workflow_id_dict = published_workflow_id_instance.to_dict()
# create an instance of PublishedWorkflowId from a dict
published_workflow_id_from_dict = PublishedWorkflowId.from_dict(published_workflow_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


