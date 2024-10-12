# MetricDimensionV1

Metric Dimension v1.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name of the metrics dimension. | [optional] 
**name** | **str** | Name of the metrics dimension. | [optional] 
**to_be_exported_for_shoebox** | **bool** | To be exported to shoe box. | [optional] 

## Example

```python
from openapi_client.models.metric_dimension_v1 import MetricDimensionV1

# TODO update the JSON string below
json = "{}"
# create an instance of MetricDimensionV1 from a JSON string
metric_dimension_v1_instance = MetricDimensionV1.from_json(json)
# print the JSON string representation of the object
print(MetricDimensionV1.to_json())

# convert the object into a dict
metric_dimension_v1_dict = metric_dimension_v1_instance.to_dict()
# create an instance of MetricDimensionV1 from a dict
metric_dimension_v1_from_dict = MetricDimensionV1.from_dict(metric_dimension_v1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


