# MetricProperties

Metric properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_specification** | [**ServiceSpecification**](ServiceSpecification.md) |  | [optional] 

## Example

```python
from openapi_client.models.metric_properties import MetricProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MetricProperties from a JSON string
metric_properties_instance = MetricProperties.from_json(json)
# print the JSON string representation of the object
print(MetricProperties.to_json())

# convert the object into a dict
metric_properties_dict = metric_properties_instance.to_dict()
# create an instance of MetricProperties from a dict
metric_properties_from_dict = MetricProperties.from_dict(metric_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


