# MetricDimension

A metric dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name for the dimension. | [optional] [readonly] 
**name** | **str** | The metric dimension name. | [optional] [readonly] 
**to_be_exported_for_shoebox** | **bool** | Whether to export metric to shoebox. | [optional] [readonly] 

## Example

```python
from openapi_client.models.metric_dimension import MetricDimension

# TODO update the JSON string below
json = "{}"
# create an instance of MetricDimension from a JSON string
metric_dimension_instance = MetricDimension.from_json(json)
# print the JSON string representation of the object
print(MetricDimension.to_json())

# convert the object into a dict
metric_dimension_dict = metric_dimension_instance.to_dict()
# create an instance of MetricDimension from a dict
metric_dimension_from_dict = MetricDimension.from_dict(metric_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


