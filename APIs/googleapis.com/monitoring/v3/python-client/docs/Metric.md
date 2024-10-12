# Metric

A specific metric, identified by specifying values for all of the labels of a MetricDescriptor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | The set of label values that uniquely identify this metric. All labels listed in the MetricDescriptor must be assigned values. | [optional] 
**type** | **str** | An existing metric type, see google.api.MetricDescriptor. For example, custom.googleapis.com/invoice/paid/amount. | [optional] 

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


