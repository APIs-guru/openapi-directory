# SignalRUsage

Object that describes a specific usage of SignalR resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | Current value for the usage quota. | [optional] 
**id** | **str** | Fully qualified ARM resource id | [optional] 
**limit** | **int** | The maximum permitted value for the usage quota. If there is no limit, this value will be -1. | [optional] 
**name** | [**SignalRUsageName**](SignalRUsageName.md) |  | [optional] 
**unit** | **str** | Representing the units of the usage quota. Possible values are: Count, Bytes, Seconds, Percent, CountPerSecond, BytesPerSecond. | [optional] 

## Example

```python
from openapi_client.models.signal_r_usage import SignalRUsage

# TODO update the JSON string below
json = "{}"
# create an instance of SignalRUsage from a JSON string
signal_r_usage_instance = SignalRUsage.from_json(json)
# print the JSON string representation of the object
print(SignalRUsage.to_json())

# convert the object into a dict
signal_r_usage_dict = signal_r_usage_instance.to_dict()
# create an instance of SignalRUsage from a dict
signal_r_usage_from_dict = SignalRUsage.from_dict(signal_r_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


