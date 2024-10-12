# QueueServicesListMetrics200Response

Pageable list of metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] [readonly] 
**value** | [**List[QueueServicesListMetrics200ResponseValueInner]**](QueueServicesListMetrics200ResponseValueInner.md) | List of metrics. | [optional] [readonly] 

## Example

```python
from openapi_client.models.queue_services_list_metrics200_response import QueueServicesListMetrics200Response

# TODO update the JSON string below
json = "{}"
# create an instance of QueueServicesListMetrics200Response from a JSON string
queue_services_list_metrics200_response_instance = QueueServicesListMetrics200Response.from_json(json)
# print the JSON string representation of the object
print(QueueServicesListMetrics200Response.to_json())

# convert the object into a dict
queue_services_list_metrics200_response_dict = queue_services_list_metrics200_response_instance.to_dict()
# create an instance of QueueServicesListMetrics200Response from a dict
queue_services_list_metrics200_response_from_dict = QueueServicesListMetrics200Response.from_dict(queue_services_list_metrics200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


