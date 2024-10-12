# MetricList

Collection of metrics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Metrics]**](Metrics.md) | The value. | 

## Example

```python
from openapi_client.models.metric_list import MetricList

# TODO update the JSON string below
json = "{}"
# create an instance of MetricList from a JSON string
metric_list_instance = MetricList.from_json(json)
# print the JSON string representation of the object
print(MetricList.to_json())

# convert the object into a dict
metric_list_dict = metric_list_instance.to_dict()
# create an instance of MetricList from a dict
metric_list_from_dict = MetricList.from_dict(metric_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


