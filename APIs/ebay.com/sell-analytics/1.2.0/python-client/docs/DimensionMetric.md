# DimensionMetric

This complex type defines a the customer service metrics and seller benchmark performance related to a given dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | [**Dimension**](Dimension.md) |  | [optional] 
**metrics** | [**List[Metric]**](Metric.md) | This is a list of Metric elements where each element contains data and information related to the transactions grouped by the associated dimension. | [optional] 

## Example

```python
from openapi_client.models.dimension_metric import DimensionMetric

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionMetric from a JSON string
dimension_metric_instance = DimensionMetric.from_json(json)
# print the JSON string representation of the object
print(DimensionMetric.to_json())

# convert the object into a dict
dimension_metric_dict = dimension_metric_instance.to_dict()
# create an instance of DimensionMetric from a dict
dimension_metric_from_dict = DimensionMetric.from_dict(dimension_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


