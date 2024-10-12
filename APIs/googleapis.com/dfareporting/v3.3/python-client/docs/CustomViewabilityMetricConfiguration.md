# CustomViewabilityMetricConfiguration

The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audible** | **bool** | Whether the video must be audible to count an impression. | [optional] 
**time_millis** | **int** | The time in milliseconds the video must play for the Custom Viewability Metric to count an impression. If both this and timePercent are specified, the earlier of the two will be used. | [optional] 
**time_percent** | **int** | The percentage of video that must play for the Custom Viewability Metric to count an impression. If both this and timeMillis are specified, the earlier of the two will be used. | [optional] 
**viewability_percent** | **int** | The percentage of video that must be on screen for the Custom Viewability Metric to count an impression. | [optional] 

## Example

```python
from openapi_client.models.custom_viewability_metric_configuration import CustomViewabilityMetricConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of CustomViewabilityMetricConfiguration from a JSON string
custom_viewability_metric_configuration_instance = CustomViewabilityMetricConfiguration.from_json(json)
# print the JSON string representation of the object
print(CustomViewabilityMetricConfiguration.to_json())

# convert the object into a dict
custom_viewability_metric_configuration_dict = custom_viewability_metric_configuration_instance.to_dict()
# create an instance of CustomViewabilityMetricConfiguration from a dict
custom_viewability_metric_configuration_from_dict = CustomViewabilityMetricConfiguration.from_dict(custom_viewability_metric_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


