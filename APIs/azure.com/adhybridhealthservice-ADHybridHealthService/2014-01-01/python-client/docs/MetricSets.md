# MetricSets

The metrics data represented set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sets** | [**List[MetricSet]**](MetricSet.md) | The list of metric set. | [optional] 
**time_stamps** | **List[datetime]** | The list of timestamps for each metric in the metric set. | [optional] 

## Example

```python
from openapi_client.models.metric_sets import MetricSets

# TODO update the JSON string below
json = "{}"
# create an instance of MetricSets from a JSON string
metric_sets_instance = MetricSets.from_json(json)
# print the JSON string representation of the object
print(MetricSets.to_json())

# convert the object into a dict
metric_sets_dict = metric_sets_instance.to_dict()
# create an instance of MetricSets from a dict
metric_sets_from_dict = MetricSets.from_dict(metric_sets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


