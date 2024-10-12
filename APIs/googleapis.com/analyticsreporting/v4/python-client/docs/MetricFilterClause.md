# MetricFilterClause

Represents a group of metric filters. Set the operator value to specify how the filters are logically combined.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**List[MetricFilter]**](MetricFilter.md) | The repeated set of filters. They are logically combined based on the operator specified. | [optional] 
**operator** | **str** | The operator for combining multiple metric filters. If unspecified, it is treated as an &#x60;OR&#x60;. | [optional] 

## Example

```python
from openapi_client.models.metric_filter_clause import MetricFilterClause

# TODO update the JSON string below
json = "{}"
# create an instance of MetricFilterClause from a JSON string
metric_filter_clause_instance = MetricFilterClause.from_json(json)
# print the JSON string representation of the object
print(MetricFilterClause.to_json())

# convert the object into a dict
metric_filter_clause_dict = metric_filter_clause_instance.to_dict()
# create an instance of MetricFilterClause from a dict
metric_filter_clause_from_dict = MetricFilterClause.from_dict(metric_filter_clause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


