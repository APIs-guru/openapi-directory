# LoggerSamplingProperties

Sampling settings for an ApplicationInsights logger.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluation_interval** | **str** | Rate re-evaluation interval in ISO8601 format. | [optional] 
**initial_percentage** | **float** | Initial sampling rate. | [optional] 
**max_percentage** | **float** | Maximum allowed rate of sampling. | [optional] 
**max_telemetry_items_per_second** | **int** | Target rate of telemetry items per second. | [optional] 
**min_percentage** | **float** | Minimum allowed rate of sampling. | [optional] 
**moving_average_ratio** | **float** | Moving average ration assigned to most recent value. | [optional] 
**percentage** | **float** | Rate of sampling for fixed-rate sampling. | [optional] 
**percentage_decrease_timeout** | **str** | Duration in ISO8601 format after which it&#39;s allowed to lower the sampling rate. | [optional] 
**percentage_increase_timeout** | **str** | Duration in ISO8601 format after which it&#39;s allowed to increase the sampling rate. | [optional] 
**sampling_type** | **str** | Sampling type. | [optional] 

## Example

```python
from openapi_client.models.logger_sampling_properties import LoggerSamplingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LoggerSamplingProperties from a JSON string
logger_sampling_properties_instance = LoggerSamplingProperties.from_json(json)
# print the JSON string representation of the object
print(LoggerSamplingProperties.to_json())

# convert the object into a dict
logger_sampling_properties_dict = logger_sampling_properties_instance.to_dict()
# create an instance of LoggerSamplingProperties from a dict
logger_sampling_properties_from_dict = LoggerSamplingProperties.from_dict(logger_sampling_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


