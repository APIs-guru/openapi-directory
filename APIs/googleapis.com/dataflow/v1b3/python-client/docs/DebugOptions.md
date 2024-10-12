# DebugOptions

Describes any options that have an effect on the debugging of pipelines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_sampling** | [**DataSamplingConfig**](DataSamplingConfig.md) |  | [optional] 
**enable_hot_key_logging** | **bool** | When true, enables the logging of the literal hot key to the user&#39;s Cloud Logging. | [optional] 

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


