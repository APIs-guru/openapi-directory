# AppProcessStartEvent

An app process was started. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**process_info** | [**AppProcessInfo**](AppProcessInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_process_start_event import AppProcessStartEvent

# TODO update the JSON string below
json = "{}"
# create an instance of AppProcessStartEvent from a JSON string
app_process_start_event_instance = AppProcessStartEvent.from_json(json)
# print the JSON string representation of the object
print(AppProcessStartEvent.to_json())

# convert the object into a dict
app_process_start_event_dict = app_process_start_event_instance.to_dict()
# create an instance of AppProcessStartEvent from a dict
app_process_start_event_from_dict = AppProcessStartEvent.from_dict(app_process_start_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


