# StepEntry

An StepEntry contains debugging information for a step transition in a workflow execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The creation time of the step entry. | [optional] [readonly] 
**entry_id** | **str** | Output only. The numeric ID of this step entry, used for navigation. | [optional] [readonly] 
**exception** | [**Exception**](Exception.md) |  | [optional] 
**name** | **str** | Output only. The full resource name of the step entry. Each step entry has a unique entry ID, which is a monotonically increasing counter. Step entry names have the format: &#x60;projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}/stepEntries/{step_entry}&#x60;. | [optional] [readonly] 
**navigation_info** | [**NavigationInfo**](NavigationInfo.md) |  | [optional] 
**routine** | **str** | Output only. The name of the routine this step entry belongs to. A routine name is the subworkflow name defined in the YAML source code. The top level routine name is &#x60;main&#x60;. | [optional] [readonly] 
**state** | **str** | Output only. The state of the step entry. | [optional] [readonly] 
**step** | **str** | Output only. The name of the step this step entry belongs to. | [optional] [readonly] 
**step_entry_metadata** | [**StepEntryMetadata**](StepEntryMetadata.md) |  | [optional] 
**step_type** | **str** | Output only. The type of the step this step entry belongs to. | [optional] [readonly] 
**update_time** | **str** | Output only. The most recently updated time of the step entry. | [optional] [readonly] 

## Example

```python
from openapi_client.models.step_entry import StepEntry

# TODO update the JSON string below
json = "{}"
# create an instance of StepEntry from a JSON string
step_entry_instance = StepEntry.from_json(json)
# print the JSON string representation of the object
print(StepEntry.to_json())

# convert the object into a dict
step_entry_dict = step_entry_instance.to_dict()
# create an instance of StepEntry from a dict
step_entry_from_dict = StepEntry.from_dict(step_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


