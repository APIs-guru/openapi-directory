# ApplicationProcessExitedEvent

Process Exited event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_package_name** | **str** | Name of Code package. | 
**entry_point_type** | **str** | Type of EntryPoint. | 
**exe_name** | **str** | Name of executable. | 
**exit_code** | **int** | Exit code of process. | 
**host_id** | **str** | Host Id. | 
**is_exclusive** | **bool** | Indicates IsExclusive flag. | 
**process_id** | **int** | Process Id. | 
**service_name** | **str** | Name of Service. | 
**service_package_activation_id** | **str** | Activation Id of Service package. | 
**service_package_name** | **str** | Name of Service package. | 
**start_time** | **datetime** | Start time of process. | 
**unexpected_termination** | **bool** | Indicates if termination is unexpected. | 

## Example

```python
from openapi_client.models.application_process_exited_event import ApplicationProcessExitedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationProcessExitedEvent from a JSON string
application_process_exited_event_instance = ApplicationProcessExitedEvent.from_json(json)
# print the JSON string representation of the object
print(ApplicationProcessExitedEvent.to_json())

# convert the object into a dict
application_process_exited_event_dict = application_process_exited_event_instance.to_dict()
# create an instance of ApplicationProcessExitedEvent from a dict
application_process_exited_event_from_dict = ApplicationProcessExitedEvent.from_dict(application_process_exited_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


