# QueryAggregation

The aggregation expression to be used in the query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function** | **str** | The name of the aggregation function to use. | 
**name** | **str** | The name of the column to aggregate. | 

## Example

```python
from openapi_client.models.query_aggregation import QueryAggregation

# TODO update the JSON string below
json = "{}"
# create an instance of QueryAggregation from a JSON string
query_aggregation_instance = QueryAggregation.from_json(json)
# print the JSON string representation of the object
print(QueryAggregation.to_json())

# convert the object into a dict
query_aggregation_dict = query_aggregation_instance.to_dict()
# create an instance of QueryAggregation from a dict
query_aggregation_from_dict = QueryAggregation.from_dict(query_aggregation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


