# WatcherListByAutomationAccountDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.watcher_list_by_automation_account_default_response import WatcherListByAutomationAccountDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WatcherListByAutomationAccountDefaultResponse from a JSON string
watcher_list_by_automation_account_default_response_instance = WatcherListByAutomationAccountDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(WatcherListByAutomationAccountDefaultResponse.to_json())

# convert the object into a dict
watcher_list_by_automation_account_default_response_dict = watcher_list_by_automation_account_default_response_instance.to_dict()
# create an instance of WatcherListByAutomationAccountDefaultResponse from a dict
watcher_list_by_automation_account_default_response_from_dict = WatcherListByAutomationAccountDefaultResponse.from_dict(watcher_list_by_automation_account_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


