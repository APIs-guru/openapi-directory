# MetricAvailability

A metric availability value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention** | **str** | The length of retention for the database metric. | [optional] [readonly] 
**time_grain** | **str** | The granularity of the database metric. | [optional] [readonly] 

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


