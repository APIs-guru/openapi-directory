# MetricCriteria

Criterion to filter metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** | **str** | the criteria operator. | 
**threshold** | **float** | the criteria threshold value that activates the alert. | 

## Example

```python
from openapi_client.models.metric_criteria import MetricCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of MetricCriteria from a JSON string
metric_criteria_instance = MetricCriteria.from_json(json)
# print the JSON string representation of the object
print(MetricCriteria.to_json())

# convert the object into a dict
metric_criteria_dict = metric_criteria_instance.to_dict()
# create an instance of MetricCriteria from a dict
metric_criteria_from_dict = MetricCriteria.from_dict(metric_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


