# DefaultWorkflow

Details about the default workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**update_draft_if_needed** | **bool** | Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to &#x60;false&#x60;. | [optional] 
**workflow** | **str** | The name of the workflow to set as the default workflow. | 

## Example

```python
from openapi_client.models.default_workflow import DefaultWorkflow

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultWorkflow from a JSON string
default_workflow_instance = DefaultWorkflow.from_json(json)
# print the JSON string representation of the object
print(DefaultWorkflow.to_json())

# convert the object into a dict
default_workflow_dict = default_workflow_instance.to_dict()
# create an instance of DefaultWorkflow from a dict
default_workflow_from_dict = DefaultWorkflow.from_dict(default_workflow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


