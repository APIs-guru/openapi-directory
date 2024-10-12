# QueryMetric

A database query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the metric for display in user interface | [optional] [readonly] 
**name** | **str** | The name of the metric | [optional] [readonly] 
**unit** | **str** | The unit of measurement | [optional] [readonly] 
**value** | **float** | The measured value | [optional] [readonly] 

## Example

```python
from openapi_client.models.query_metric import QueryMetric

# TODO update the JSON string below
json = "{}"
# create an instance of QueryMetric from a JSON string
query_metric_instance = QueryMetric.from_json(json)
# print the JSON string representation of the object
print(QueryMetric.to_json())

# convert the object into a dict
query_metric_dict = query_metric_instance.to_dict()
# create an instance of QueryMetric from a dict
query_metric_from_dict = QueryMetric.from_dict(query_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


