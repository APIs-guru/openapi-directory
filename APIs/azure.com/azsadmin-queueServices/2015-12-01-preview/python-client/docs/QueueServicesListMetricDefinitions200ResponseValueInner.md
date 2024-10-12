# QueueServicesListMetricDefinitions200ResponseValueInner

Metric definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_availabilities** | [**List[QueueServicesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner]**](QueueServicesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.md) | Metric availabilities. | [optional] [readonly] 
**name** | [**QueueServicesListMetricDefinitions200ResponseValueInnerName**](QueueServicesListMetricDefinitions200ResponseValueInnerName.md) |  | [optional] 
**primary_aggregation_type** | **str** | Aggregate type. | [optional] [readonly] 
**unit** | **str** | Metric unit. | [optional] 

## Example

```python
from openapi_client.models.queue_services_list_metric_definitions200_response_value_inner import QueueServicesListMetricDefinitions200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of QueueServicesListMetricDefinitions200ResponseValueInner from a JSON string
queue_services_list_metric_definitions200_response_value_inner_instance = QueueServicesListMetricDefinitions200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(QueueServicesListMetricDefinitions200ResponseValueInner.to_json())

# convert the object into a dict
queue_services_list_metric_definitions200_response_value_inner_dict = queue_services_list_metric_definitions200_response_value_inner_instance.to_dict()
# create an instance of QueueServicesListMetricDefinitions200ResponseValueInner from a dict
queue_services_list_metric_definitions200_response_value_inner_from_dict = QueueServicesListMetricDefinitions200ResponseValueInner.from_dict(queue_services_list_metric_definitions200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


