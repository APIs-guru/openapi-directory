# PublishDraftWorkflowScheme

Details about the status mappings for publishing a draft workflow scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_mappings** | [**List[StatusMapping]**](StatusMapping.md) | Mappings of statuses to new statuses for issue types. | [optional] 

## Example

```python
from openapi_client.models.publish_draft_workflow_scheme import PublishDraftWorkflowScheme

# TODO update the JSON string below
json = "{}"
# create an instance of PublishDraftWorkflowScheme from a JSON string
publish_draft_workflow_scheme_instance = PublishDraftWorkflowScheme.from_json(json)
# print the JSON string representation of the object
print(PublishDraftWorkflowScheme.to_json())

# convert the object into a dict
publish_draft_workflow_scheme_dict = publish_draft_workflow_scheme_instance.to_dict()
# create an instance of PublishDraftWorkflowScheme from a dict
publish_draft_workflow_scheme_from_dict = PublishDraftWorkflowScheme.from_dict(publish_draft_workflow_scheme_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


