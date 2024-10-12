# ImageTemplateLastRunStatus

Describes the latest status of running an image template

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | End time of the last run (UTC) | [optional] 
**message** | **str** | Verbose information about the last run state | [optional] 
**run_state** | **str** | State of the last run | [optional] 
**run_sub_state** | **str** | Sub-state of the last run | [optional] 
**start_time** | **datetime** | Start time of the last run (UTC) | [optional] 

## Example

```python
from openapi_client.models.image_template_last_run_status import ImageTemplateLastRunStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateLastRunStatus from a JSON string
image_template_last_run_status_instance = ImageTemplateLastRunStatus.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateLastRunStatus.to_json())

# convert the object into a dict
image_template_last_run_status_dict = image_template_last_run_status_instance.to_dict()
# create an instance of ImageTemplateLastRunStatus from a dict
image_template_last_run_status_from_dict = ImageTemplateLastRunStatus.from_dict(image_template_last_run_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


