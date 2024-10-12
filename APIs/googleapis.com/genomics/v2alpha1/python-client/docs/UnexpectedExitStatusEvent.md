# UnexpectedExitStatusEvent

An event generated when the execution of a container results in a non-zero exit status that was not otherwise ignored. Execution will continue, but only actions that are flagged as `ALWAYS_RUN` will be executed. Other actions will be skipped.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_id** | **int** | The numeric ID of the action that started the container. | [optional] 
**exit_status** | **int** | The exit status of the container. | [optional] 

## Example

```python
from openapi_client.models.unexpected_exit_status_event import UnexpectedExitStatusEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UnexpectedExitStatusEvent from a JSON string
unexpected_exit_status_event_instance = UnexpectedExitStatusEvent.from_json(json)
# print the JSON string representation of the object
print(UnexpectedExitStatusEvent.to_json())

# convert the object into a dict
unexpected_exit_status_event_dict = unexpected_exit_status_event_instance.to_dict()
# create an instance of UnexpectedExitStatusEvent from a dict
unexpected_exit_status_event_from_dict = UnexpectedExitStatusEvent.from_dict(unexpected_exit_status_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


