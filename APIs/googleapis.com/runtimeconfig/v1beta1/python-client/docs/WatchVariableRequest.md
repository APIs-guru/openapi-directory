# WatchVariableRequest

Request for the `WatchVariable()` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**newer_than** | **str** | If specified, checks the current timestamp of the variable and if the current timestamp is newer than &#x60;newerThan&#x60; timestamp, the method returns immediately. If not specified or the variable has an older timestamp, the watcher waits for a the value to change before returning. | [optional] 

## Example

```python
from openapi_client.models.watch_variable_request import WatchVariableRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WatchVariableRequest from a JSON string
watch_variable_request_instance = WatchVariableRequest.from_json(json)
# print the JSON string representation of the object
print(WatchVariableRequest.to_json())

# convert the object into a dict
watch_variable_request_dict = watch_variable_request_instance.to_dict()
# create an instance of WatchVariableRequest from a dict
watch_variable_request_from_dict = WatchVariableRequest.from_dict(watch_variable_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


