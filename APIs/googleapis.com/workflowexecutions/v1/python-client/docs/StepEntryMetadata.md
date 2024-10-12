# StepEntryMetadata

StepEntryMetadata contains metadata information about this step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**progress_number** | **str** | Progress number represents the current state of the current progress. eg: A step entry represents the 4th iteration in a progress of PROGRESS_TYPE_FOR. | [optional] 
**progress_type** | **str** | Progress type of this step entry. | [optional] 
**thread_id** | **str** | Child thread id that this step entry belongs to. | [optional] 

## Example

```python
from openapi_client.models.step_entry_metadata import StepEntryMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of StepEntryMetadata from a JSON string
step_entry_metadata_instance = StepEntryMetadata.from_json(json)
# print the JSON string representation of the object
print(StepEntryMetadata.to_json())

# convert the object into a dict
step_entry_metadata_dict = step_entry_metadata_instance.to_dict()
# create an instance of StepEntryMetadata from a dict
step_entry_metadata_from_dict = StepEntryMetadata.from_dict(step_entry_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


