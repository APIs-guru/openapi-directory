# AutoscalingSettings

Settings for WorkerPool autoscaling.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | The algorithm to use for autoscaling. | [optional] 
**max_num_workers** | **int** | The maximum number of workers to cap scaling at. | [optional] 

## Example

```python
from openapi_client.models.autoscaling_settings import AutoscalingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscalingSettings from a JSON string
autoscaling_settings_instance = AutoscalingSettings.from_json(json)
# print the JSON string representation of the object
print(AutoscalingSettings.to_json())

# convert the object into a dict
autoscaling_settings_dict = autoscaling_settings_instance.to_dict()
# create an instance of AutoscalingSettings from a dict
autoscaling_settings_from_dict = AutoscalingSettings.from_dict(autoscaling_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


