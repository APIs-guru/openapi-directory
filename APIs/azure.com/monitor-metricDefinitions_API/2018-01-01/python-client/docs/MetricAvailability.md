# MetricAvailability

Metric availability specifies the time grain (aggregation interval or frequency) and the retention period for that time grain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention** | **str** | the retention period for the metric at the specified timegrain.  Expressed as a duration &#39;PT1M&#39;, &#39;P1D&#39;, etc. | [optional] 
**time_grain** | **str** | the time grain specifies the aggregation interval for the metric. Expressed as a duration &#39;PT1M&#39;, &#39;P1D&#39;, etc. | [optional] 

## Example

```python
from openapi_client.models.metric_availability import MetricAvailability

# TODO update the JSON string below
json = "{}"
# create an instance of MetricAvailability from a JSON string
metric_availability_instance = MetricAvailability.from_json(json)
# print the JSON string representation of the object
print(MetricAvailability.to_json())

# convert the object into a dict
metric_availability_dict = metric_availability_instance.to_dict()
# create an instance of MetricAvailability from a dict
metric_availability_from_dict = MetricAvailability.from_dict(metric_availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


