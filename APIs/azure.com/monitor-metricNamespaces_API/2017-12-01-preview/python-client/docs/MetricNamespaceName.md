# MetricNamespaceName

The fully qualified metric namespace name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_namespace_name** | **str** | The metric namespace name. | [optional] 

## Example

```python
from openapi_client.models.metric_namespace_name import MetricNamespaceName

# TODO update the JSON string below
json = "{}"
# create an instance of MetricNamespaceName from a JSON string
metric_namespace_name_instance = MetricNamespaceName.from_json(json)
# print the JSON string representation of the object
print(MetricNamespaceName.to_json())

# convert the object into a dict
metric_namespace_name_dict = metric_namespace_name_instance.to_dict()
# create an instance of MetricNamespaceName from a dict
metric_namespace_name_from_dict = MetricNamespaceName.from_dict(metric_namespace_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


