# Query

A query for entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distinct_on** | [**List[PropertyReference]**](PropertyReference.md) | The properties to make distinct. The query results will contain the first result for each distinct combination of values for the given properties (if empty, all results are returned). Requires: * If &#x60;order&#x60; is specified, the set of distinct on properties must appear before the non-distinct on properties in &#x60;order&#x60;. | [optional] 
**end_cursor** | **bytearray** | An ending point for the query results. Query cursors are returned in query result batches and [can only be used to limit the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets). | [optional] 
**filter** | [**Filter**](Filter.md) |  | [optional] 
**kind** | [**List[KindExpression]**](KindExpression.md) | The kinds to query (if empty, returns entities of all kinds). Currently at most 1 kind may be specified. | [optional] 
**limit** | **int** | The maximum number of results to return. Applies after all other constraints. Optional. Unspecified is interpreted as no limit. Must be &gt;&#x3D; 0 if specified. | [optional] 
**offset** | **int** | The number of results to skip. Applies before limit, but after all other constraints. Optional. Must be &gt;&#x3D; 0 if specified. | [optional] 
**order** | [**List[PropertyOrder]**](PropertyOrder.md) | The order to apply to the query results (if empty, order is unspecified). | [optional] 
**projection** | [**List[Projection]**](Projection.md) | The projection to return. Defaults to returning all properties. | [optional] 
**start_cursor** | **bytearray** | A starting point for the query results. Query cursors are returned in query result batches and [can only be used to continue the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets). | [optional] 

## Example

```python
from openapi_client.models.query import Query

# TODO update the JSON string below
json = "{}"
# create an instance of Query from a JSON string
query_instance = Query.from_json(json)
# print the JSON string representation of the object
print(Query.to_json())

# convert the object into a dict
query_dict = query_instance.to_dict()
# create an instance of Query from a dict
query_from_dict = Query.from_dict(query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


