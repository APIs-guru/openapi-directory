# MetricCollection

The collection of metric value sets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Metric]**](Metric.md) | the value of the collection. | 

## Example

```python
from openapi_client.models.metric_collection import MetricCollection

# TODO update the JSON string below
json = "{}"
# create an instance of MetricCollection from a JSON string
metric_collection_instance = MetricCollection.from_json(json)
# print the JSON string representation of the object
print(MetricCollection.to_json())

# convert the object into a dict
metric_collection_dict = metric_collection_instance.to_dict()
# create an instance of MetricCollection from a dict
metric_collection_from_dict = MetricCollection.from_dict(metric_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


