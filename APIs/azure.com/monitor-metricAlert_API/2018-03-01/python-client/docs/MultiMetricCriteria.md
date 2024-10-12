# MultiMetricCriteria

The types of conditions for a multi resource alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criterion_type** | **str** | Specifies the type of threshold criteria | 
**dimensions** | [**List[MetricDimension]**](MetricDimension.md) | List of dimension conditions. | [optional] 
**metric_name** | **str** | Name of the metric. | 
**metric_namespace** | **str** | Namespace of the metric. | [optional] 
**name** | **str** | Name of the criteria. | 
**time_aggregation** | **str** | the criteria time aggregation types. | 

## Example

```python
from openapi_client.models.multi_metric_criteria import MultiMetricCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of MultiMetricCriteria from a JSON string
multi_metric_criteria_instance = MultiMetricCriteria.from_json(json)
# print the JSON string representation of the object
print(MultiMetricCriteria.to_json())

# convert the object into a dict
multi_metric_criteria_dict = multi_metric_criteria_instance.to_dict()
# create an instance of MultiMetricCriteria from a dict
multi_metric_criteria_from_dict = MultiMetricCriteria.from_dict(multi_metric_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


