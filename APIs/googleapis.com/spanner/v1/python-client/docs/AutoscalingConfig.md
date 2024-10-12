# AutoscalingConfig

Autoscaling config for an instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoscaling_limits** | [**AutoscalingLimits**](AutoscalingLimits.md) |  | [optional] 
**autoscaling_targets** | [**AutoscalingTargets**](AutoscalingTargets.md) |  | [optional] 

## Example

```python
from openapi_client.models.autoscaling_config import AutoscalingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscalingConfig from a JSON string
autoscaling_config_instance = AutoscalingConfig.from_json(json)
# print the JSON string representation of the object
print(AutoscalingConfig.to_json())

# convert the object into a dict
autoscaling_config_dict = autoscaling_config_instance.to_dict()
# create an instance of AutoscalingConfig from a dict
autoscaling_config_from_dict = AutoscalingConfig.from_dict(autoscaling_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


