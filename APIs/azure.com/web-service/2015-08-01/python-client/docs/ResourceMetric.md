# ResourceMetric

Object representing a metric for any resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | Metric end time | [optional] 
**metric_values** | [**List[ResourceMetricValue]**](ResourceMetricValue.md) | Metric values | [optional] 
**name** | [**ResourceMetricName**](ResourceMetricName.md) |  | [optional] 
**properties** | [**List[KeyValuePairStringString]**](KeyValuePairStringString.md) | Properties | [optional] 
**resource_id** | **str** | Metric resource Id | [optional] 
**start_time** | **datetime** | Metric start time | [optional] 
**time_grain** | **str** | Metric granularity. E.g PT1H, PT5M, P1D | [optional] 
**unit** | **str** | Metric unit | [optional] 

## Example

```python
from openapi_client.models.resource_metric import ResourceMetric

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceMetric from a JSON string
resource_metric_instance = ResourceMetric.from_json(json)
# print the JSON string representation of the object
print(ResourceMetric.to_json())

# convert the object into a dict
resource_metric_dict = resource_metric_instance.to_dict()
# create an instance of ResourceMetric from a dict
resource_metric_from_dict = ResourceMetric.from_dict(resource_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


