# SyntheticMonitorTarget

Describes a Synthetic Monitor to be invoked by Uptime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_function_v2** | [**CloudFunctionV2Target**](CloudFunctionV2Target.md) |  | [optional] 

## Example

```python
from openapi_client.models.synthetic_monitor_target import SyntheticMonitorTarget

# TODO update the JSON string below
json = "{}"
# create an instance of SyntheticMonitorTarget from a JSON string
synthetic_monitor_target_instance = SyntheticMonitorTarget.from_json(json)
# print the JSON string representation of the object
print(SyntheticMonitorTarget.to_json())

# convert the object into a dict
synthetic_monitor_target_dict = synthetic_monitor_target_instance.to_dict()
# create an instance of SyntheticMonitorTarget from a dict
synthetic_monitor_target_from_dict = SyntheticMonitorTarget.from_dict(synthetic_monitor_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


