# Metric

Progress metric is (string, int|float|string) pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**double_value** | **float** | For metrics with floating point value. | [optional] 
**int_value** | **str** | For metrics with integer value. | [optional] 
**name** | **str** | Required. Metric name, e.g., \&quot;nodes total\&quot;, \&quot;percent done\&quot;. | [optional] 
**string_value** | **str** | For metrics with custom values (ratios, visual progress, etc.). | [optional] 

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


