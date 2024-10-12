# Metric

A `metric` is a set of user experience data for a single web performance metric, like \"first contentful paint\". It contains a summary histogram of real world Chrome usage as a series of `bins`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fractions** | **Dict[str, float]** | For enum metrics, provides fractions which add up to approximately 1.0. | [optional] 
**histogram** | [**List[Bin]**](Bin.md) | The histogram of user experiences for a metric. The histogram will have at least one bin and the densities of all bins will add up to ~1. | [optional] 
**percentiles** | [**Percentiles**](Percentiles.md) |  | [optional] 

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


