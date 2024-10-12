# AutoScaler

The Auto Scaler properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoscale_enabled** | **bool** | Option to enable/disable auto scaling. | [optional] 
**max_replicas** | **int** | The maximum number of replicas in the cluster. | [optional] 
**min_replicas** | **int** | The minimum number of replicas to scale down to. | [optional] 
**refresh_period_in_seconds** | **int** | The amount of seconds to wait between auto scale updates. | [optional] 
**target_utilization** | **int** | The target utilization percentage to use for determining whether to scale the cluster. | [optional] 

## Example

```python
from openapi_client.models.auto_scaler import AutoScaler

# TODO update the JSON string below
json = "{}"
# create an instance of AutoScaler from a JSON string
auto_scaler_instance = AutoScaler.from_json(json)
# print the JSON string representation of the object
print(AutoScaler.to_json())

# convert the object into a dict
auto_scaler_dict = auto_scaler_instance.to_dict()
# create an instance of AutoScaler from a dict
auto_scaler_from_dict = AutoScaler.from_dict(auto_scaler_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


