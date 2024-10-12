# Metric

The result data of a query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the metric Id. | 
**name** | [**LocalizableString**](LocalizableString.md) |  | 
**timeseries** | [**List[TimeSeriesElement]**](TimeSeriesElement.md) | the time series returned when a data query is performed. | 
**type** | **str** | the resource type of the metric resource. | 
**unit** | [**Unit**](Unit.md) |  | 

## Example

```python
from openapi_client.models.metric import Metric

# TODO update the JSON string below
json = "{}"
# create an instance of Metric from a JSON string
metric_instance = Metric.from_json(json)
# print the JSON string representation of the object
print(Metric.to_json())

# convert the object into a dict
metric_dict = metric_instance.to_dict()
# create an instance of Metric from a dict
metric_from_dict = Metric.from_dict(metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


