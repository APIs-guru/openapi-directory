# QueueServicesListMetricDefinitions200Response

Pageable list of metric definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] [readonly] 
**value** | [**List[QueueServicesListMetricDefinitions200ResponseValueInner]**](QueueServicesListMetricDefinitions200ResponseValueInner.md) | List of metric definitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.queue_services_list_metric_definitions200_response import QueueServicesListMetricDefinitions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of QueueServicesListMetricDefinitions200Response from a JSON string
queue_services_list_metric_definitions200_response_instance = QueueServicesListMetricDefinitions200Response.from_json(json)
# print the JSON string representation of the object
print(QueueServicesListMetricDefinitions200Response.to_json())

# convert the object into a dict
queue_services_list_metric_definitions200_response_dict = queue_services_list_metric_definitions200_response_instance.to_dict()
# create an instance of QueueServicesListMetricDefinitions200Response from a dict
queue_services_list_metric_definitions200_response_from_dict = QueueServicesListMetricDefinitions200Response.from_dict(queue_services_list_metric_definitions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


