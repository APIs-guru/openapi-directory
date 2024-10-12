# HotKeyDebuggingInfo

Information useful for debugging a hot key detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_hot_keys** | [**Dict[str, HotKeyInfo]**](HotKeyInfo.md) | Debugging information for each detected hot key. Keyed by a hash of the key. | [optional] 

## Example

```python
from openapi_client.models.hot_key_debugging_info import HotKeyDebuggingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of HotKeyDebuggingInfo from a JSON string
hot_key_debugging_info_instance = HotKeyDebuggingInfo.from_json(json)
# print the JSON string representation of the object
print(HotKeyDebuggingInfo.to_json())

# convert the object into a dict
hot_key_debugging_info_dict = hot_key_debugging_info_instance.to_dict()
# create an instance of HotKeyDebuggingInfo from a dict
hot_key_debugging_info_from_dict = HotKeyDebuggingInfo.from_dict(hot_key_debugging_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


