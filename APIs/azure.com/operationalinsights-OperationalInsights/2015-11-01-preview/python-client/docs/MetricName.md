# MetricName

The name of a metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_value** | **str** | The localized name of the metric. | [optional] 
**value** | **str** | The system name of the metric. | [optional] 

## Example

```python
from openapi_client.models.metric_name import MetricName

# TODO update the JSON string below
json = "{}"
# create an instance of MetricName from a JSON string
metric_name_instance = MetricName.from_json(json)
# print the JSON string representation of the object
print(MetricName.to_json())

# convert the object into a dict
metric_name_dict = metric_name_instance.to_dict()
# create an instance of MetricName from a dict
metric_name_from_dict = MetricName.from_dict(metric_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


