# StructuredAggregationQuery

Firestore query for running an aggregation over a StructuredQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregations** | [**List[Aggregation]**](Aggregation.md) | Optional. Series of aggregations to apply over the results of the &#x60;structured_query&#x60;. Requires: * A minimum of one and maximum of five aggregations per query. | [optional] 
**structured_query** | [**StructuredQuery**](StructuredQuery.md) |  | [optional] 

## Example

```python
from openapi_client.models.structured_aggregation_query import StructuredAggregationQuery

# TODO update the JSON string below
json = "{}"
# create an instance of StructuredAggregationQuery from a JSON string
structured_aggregation_query_instance = StructuredAggregationQuery.from_json(json)
# print the JSON string representation of the object
print(StructuredAggregationQuery.to_json())

# convert the object into a dict
structured_aggregation_query_dict = structured_aggregation_query_instance.to_dict()
# create an instance of StructuredAggregationQuery from a dict
structured_aggregation_query_from_dict = StructuredAggregationQuery.from_dict(structured_aggregation_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


