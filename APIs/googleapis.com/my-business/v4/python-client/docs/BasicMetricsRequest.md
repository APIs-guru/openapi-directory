# BasicMetricsRequest

A request for basic metric insights.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_requests** | [**List[MetricRequest]**](MetricRequest.md) | A collection of metrics to return values for including the options for how the data should be returned. | [optional] 
**time_range** | [**TimeRange**](TimeRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.basic_metrics_request import BasicMetricsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BasicMetricsRequest from a JSON string
basic_metrics_request_instance = BasicMetricsRequest.from_json(json)
# print the JSON string representation of the object
print(BasicMetricsRequest.to_json())

# convert the object into a dict
basic_metrics_request_dict = basic_metrics_request_instance.to_dict()
# create an instance of BasicMetricsRequest from a dict
basic_metrics_request_from_dict = BasicMetricsRequest.from_dict(basic_metrics_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


