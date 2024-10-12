# MetricSingleDimension

The metric dimension name and value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the dimension. | 
**value** | **str** | Value of the dimension. | 

## Example

```python
from openapi_client.models.metric_single_dimension import MetricSingleDimension

# TODO update the JSON string below
json = "{}"
# create an instance of MetricSingleDimension from a JSON string
metric_single_dimension_instance = MetricSingleDimension.from_json(json)
# print the JSON string representation of the object
print(MetricSingleDimension.to_json())

# convert the object into a dict
metric_single_dimension_dict = metric_single_dimension_instance.to_dict()
# create an instance of MetricSingleDimension from a dict
metric_single_dimension_from_dict = MetricSingleDimension.from_dict(metric_single_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


