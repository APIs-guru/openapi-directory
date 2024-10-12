# StragglerDebuggingInfo

Information useful for debugging a straggler. Each type will provide specialized debugging information relevant for a particular cause. The StragglerDebuggingInfo will be 1:1 mapping to the StragglerCause enum.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hot_key** | [**HotKeyDebuggingInfo**](HotKeyDebuggingInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.straggler_debugging_info import StragglerDebuggingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of StragglerDebuggingInfo from a JSON string
straggler_debugging_info_instance = StragglerDebuggingInfo.from_json(json)
# print the JSON string representation of the object
print(StragglerDebuggingInfo.to_json())

# convert the object into a dict
straggler_debugging_info_dict = straggler_debugging_info_instance.to_dict()
# create an instance of StragglerDebuggingInfo from a dict
straggler_debugging_info_from_dict = StragglerDebuggingInfo.from_dict(straggler_debugging_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


