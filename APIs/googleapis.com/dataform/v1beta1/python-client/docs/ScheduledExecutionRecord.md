# ScheduledExecutionRecord

A record of an attempt to create a workflow invocation for this workflow config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_status** | [**Status**](Status.md) |  | [optional] 
**execution_time** | **str** | The timestamp of this execution attempt. | [optional] 
**workflow_invocation** | **str** | The name of the created workflow invocation, if one was successfully created. Must be in the format &#x60;projects/*/locations/*/repositories/*/workflowInvocations/*&#x60;. | [optional] 

## Example

```python
from openapi_client.models.scheduled_execution_record import ScheduledExecutionRecord

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledExecutionRecord from a JSON string
scheduled_execution_record_instance = ScheduledExecutionRecord.from_json(json)
# print the JSON string representation of the object
print(ScheduledExecutionRecord.to_json())

# convert the object into a dict
scheduled_execution_record_dict = scheduled_execution_record_instance.to_dict()
# create an instance of ScheduledExecutionRecord from a dict
scheduled_execution_record_from_dict = ScheduledExecutionRecord.from_dict(scheduled_execution_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


