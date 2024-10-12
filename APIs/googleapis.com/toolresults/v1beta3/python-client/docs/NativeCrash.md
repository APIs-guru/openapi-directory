# NativeCrash

Additional details for a native crash.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stack_trace** | [**StackTrace**](StackTrace.md) |  | [optional] 

## Example

```python
from openapi_client.models.native_crash import NativeCrash

# TODO update the JSON string below
json = "{}"
# create an instance of NativeCrash from a JSON string
native_crash_instance = NativeCrash.from_json(json)
# print the JSON string representation of the object
print(NativeCrash.to_json())

# convert the object into a dict
native_crash_dict = native_crash_instance.to_dict()
# create an instance of NativeCrash from a dict
native_crash_from_dict = NativeCrash.from_dict(native_crash_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


