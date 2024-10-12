# WatcherProperties

Definition of the watcher properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Gets or sets the creation time. | [optional] [readonly] 
**description** | **str** | Gets or sets the description. | [optional] 
**execution_frequency_in_seconds** | **int** | Gets or sets the frequency at which the watcher is invoked. | [optional] 
**last_modified_by** | **str** | Details of the user who last modified the watcher. | [optional] [readonly] 
**last_modified_time** | **datetime** | Gets or sets the last modified time. | [optional] [readonly] 
**script_name** | **str** | Gets or sets the name of the script the watcher is attached to, i.e. the name of an existing runbook. | [optional] 
**script_parameters** | **Dict[str, str]** | Gets or sets the parameters of the script. | [optional] 
**script_run_on** | **str** | Gets or sets the name of the hybrid worker group the watcher will run on. | [optional] 
**status** | **str** | Gets the current status of the watcher. | [optional] [readonly] 

## Example

```python
from openapi_client.models.watcher_properties import WatcherProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WatcherProperties from a JSON string
watcher_properties_instance = WatcherProperties.from_json(json)
# print the JSON string representation of the object
print(WatcherProperties.to_json())

# convert the object into a dict
watcher_properties_dict = watcher_properties_instance.to_dict()
# create an instance of WatcherProperties from a dict
watcher_properties_from_dict = WatcherProperties.from_dict(watcher_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


