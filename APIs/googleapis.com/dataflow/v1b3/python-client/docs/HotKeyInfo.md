# HotKeyInfo

Information about a hot key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hot_key_age** | **str** | The age of the hot key measured from when it was first detected. | [optional] 
**key** | **str** | A detected hot key that is causing limited parallelism. This field will be populated only if the following flag is set to true: \&quot;--enable_hot_key_logging\&quot;. | [optional] 
**key_truncated** | **bool** | If true, then the above key is truncated and cannot be deserialized. This occurs if the key above is populated and the key size is &gt;5MB. | [optional] 

## Example

```python
from openapi_client.models.hot_key_info import HotKeyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of HotKeyInfo from a JSON string
hot_key_info_instance = HotKeyInfo.from_json(json)
# print the JSON string representation of the object
print(HotKeyInfo.to_json())

# convert the object into a dict
hot_key_info_dict = hot_key_info_instance.to_dict()
# create an instance of HotKeyInfo from a dict
hot_key_info_from_dict = HotKeyInfo.from_dict(hot_key_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


