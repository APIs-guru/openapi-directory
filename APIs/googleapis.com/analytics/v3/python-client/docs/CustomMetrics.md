# CustomMetrics

A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[CustomMetric]**](CustomMetric.md) | Collection of custom metrics. | [optional] 
**items_per_page** | **int** | The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. | [optional] 
**kind** | **str** | Collection type. | [optional] [default to 'analytics#customMetrics']
**next_link** | **str** | Link to next page for this custom metric collection. | [optional] 
**previous_link** | **str** | Link to previous page for this custom metric collection. | [optional] 
**start_index** | **int** | The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. | [optional] 
**total_results** | **int** | The total number of results for the query, regardless of the number of results in the response. | [optional] 
**username** | **str** | Email ID of the authenticated user | [optional] 

## Example

```python
from openapi_client.models.custom_metrics import CustomMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of CustomMetrics from a JSON string
custom_metrics_instance = CustomMetrics.from_json(json)
# print the JSON string representation of the object
print(CustomMetrics.to_json())

# convert the object into a dict
custom_metrics_dict = custom_metrics_instance.to_dict()
# create an instance of CustomMetrics from a dict
custom_metrics_from_dict = CustomMetrics.from_dict(custom_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


