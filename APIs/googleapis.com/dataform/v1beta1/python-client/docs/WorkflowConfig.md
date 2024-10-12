# WorkflowConfig

Represents a Dataform workflow configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron_schedule** | **str** | Optional. Optional schedule (in cron format) for automatic execution of this workflow config. | [optional] 
**invocation_config** | [**InvocationConfig**](InvocationConfig.md) |  | [optional] 
**name** | **str** | Output only. The workflow config&#39;s name. | [optional] [readonly] 
**recent_scheduled_execution_records** | [**List[ScheduledExecutionRecord]**](ScheduledExecutionRecord.md) | Output only. Records of the 10 most recent scheduled execution attempts, ordered in in descending order of &#x60;execution_time&#x60;. Updated whenever automatic creation of a workflow invocation is triggered by cron_schedule. | [optional] [readonly] 
**release_config** | **str** | Required. The name of the release config whose release_compilation_result should be executed. Must be in the format &#x60;projects/*/locations/*/repositories/*/releaseConfigs/*&#x60;. | [optional] 
**time_zone** | **str** | Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC. | [optional] 

## Example

```python
from openapi_client.models.workflow_config import WorkflowConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowConfig from a JSON string
workflow_config_instance = WorkflowConfig.from_json(json)
# print the JSON string representation of the object
print(WorkflowConfig.to_json())

# convert the object into a dict
workflow_config_dict = workflow_config_instance.to_dict()
# create an instance of WorkflowConfig from a dict
workflow_config_from_dict = WorkflowConfig.from_dict(workflow_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


