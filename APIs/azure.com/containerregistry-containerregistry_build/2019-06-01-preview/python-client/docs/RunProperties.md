# RunProperties

The properties for a run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_configuration** | [**AgentProperties**](AgentProperties.md) |  | [optional] 
**create_time** | **datetime** | The time the run was scheduled. | [optional] 
**custom_registries** | **List[str]** | The list of custom registries that were logged in during this run. | [optional] 
**finish_time** | **datetime** | The time the run finished. | [optional] 
**image_update_trigger** | [**ImageUpdateTrigger**](ImageUpdateTrigger.md) |  | [optional] 
**is_archive_enabled** | **bool** | The value that indicates whether archiving is enabled or not. | [optional] [default to False]
**last_updated_time** | **datetime** | The last updated time for the run. | [optional] 
**output_images** | [**List[ImageDescriptor]**](ImageDescriptor.md) | The list of all images that were generated from the run. This is applicable if the run generates base image dependencies. | [optional] 
**platform** | [**PlatformProperties**](PlatformProperties.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state of a run. | [optional] 
**run_error_message** | **str** | The error message received from backend systems after the run is scheduled. | [optional] [readonly] 
**run_id** | **str** | The unique identifier for the run. | [optional] 
**run_type** | **str** | The type of run. | [optional] 
**source_registry_auth** | **str** | The scope of the credentials that were used to login to the source registry during this run. | [optional] 
**source_trigger** | [**SourceTriggerDescriptor**](SourceTriggerDescriptor.md) |  | [optional] 
**start_time** | **datetime** | The time the run started. | [optional] 
**status** | **str** | The current status of the run. | [optional] 
**task** | **str** | The task against which run was scheduled. | [optional] 
**timer_trigger** | [**TimerTriggerDescriptor**](TimerTriggerDescriptor.md) |  | [optional] 
**update_trigger_token** | **str** | The update trigger token passed for the Run. | [optional] 

## Example

```python
from openapi_client.models.run_properties import RunProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RunProperties from a JSON string
run_properties_instance = RunProperties.from_json(json)
# print the JSON string representation of the object
print(RunProperties.to_json())

# convert the object into a dict
run_properties_dict = run_properties_instance.to_dict()
# create an instance of RunProperties from a dict
run_properties_from_dict = RunProperties.from_dict(run_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


