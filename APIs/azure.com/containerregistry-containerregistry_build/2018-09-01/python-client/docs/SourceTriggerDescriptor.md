# SourceTriggerDescriptor

The source trigger that caused a run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch_name** | **str** | The branch name in the repository. | [optional] 
**commit_id** | **str** | The unique ID that identifies a commit. | [optional] 
**event_type** | **str** | The event type of the trigger. | [optional] 
**id** | **str** | The unique ID of the trigger. | [optional] 
**provider_type** | **str** | The source control provider type. | [optional] 
**pull_request_id** | **str** | The unique ID that identifies pull request. | [optional] 
**repository_url** | **str** | The repository URL. | [optional] 

## Example

```python
from openapi_client.models.source_trigger_descriptor import SourceTriggerDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of SourceTriggerDescriptor from a JSON string
source_trigger_descriptor_instance = SourceTriggerDescriptor.from_json(json)
# print the JSON string representation of the object
print(SourceTriggerDescriptor.to_json())

# convert the object into a dict
source_trigger_descriptor_dict = source_trigger_descriptor_instance.to_dict()
# create an instance of SourceTriggerDescriptor from a dict
source_trigger_descriptor_from_dict = SourceTriggerDescriptor.from_dict(source_trigger_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


