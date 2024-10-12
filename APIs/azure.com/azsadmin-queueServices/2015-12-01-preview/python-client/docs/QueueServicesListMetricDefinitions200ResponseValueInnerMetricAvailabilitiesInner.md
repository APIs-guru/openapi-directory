# QueueServicesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner

Metric availability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention** | **str** | Retention of metric. | [optional] 
**time_grain** | **str** | Time grain. | [optional] 

## Example

```python
from openapi_client.models.queue_services_list_metric_definitions200_response_value_inner_metric_availabilities_inner import QueueServicesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner

# TODO update the JSON string below
json = "{}"
# create an instance of QueueServicesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner from a JSON string
queue_services_list_metric_definitions200_response_value_inner_metric_availabilities_inner_instance = QueueServicesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.from_json(json)
# print the JSON string representation of the object
print(QueueServicesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.to_json())

# convert the object into a dict
queue_services_list_metric_definitions200_response_value_inner_metric_availabilities_inner_dict = queue_services_list_metric_definitions200_response_value_inner_metric_availabilities_inner_instance.to_dict()
# create an instance of QueueServicesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner from a dict
queue_services_list_metric_definitions200_response_value_inner_metric_availabilities_inner_from_dict = QueueServicesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.from_dict(queue_services_list_metric_definitions200_response_value_inner_metric_availabilities_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


