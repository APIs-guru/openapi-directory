# DebugOptions

Shared request debug options for all cloudsearch RPC methods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_debugging** | **bool** | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. | [optional] 

## Example

```python
from openapi_client.models.debug_options import DebugOptions

# TODO update the JSON string below
json = "{}"
# create an instance of DebugOptions from a JSON string
debug_options_instance = DebugOptions.from_json(json)
# print the JSON string representation of the object
print(DebugOptions.to_json())

# convert the object into a dict
debug_options_dict = debug_options_instance.to_dict()
# create an instance of DebugOptions from a dict
debug_options_from_dict = DebugOptions.from_dict(debug_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


