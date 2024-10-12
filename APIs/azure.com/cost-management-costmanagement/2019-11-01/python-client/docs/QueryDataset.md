# QueryDataset

The definition of data present in the query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | [**Dict[str, QueryAggregation]**](QueryAggregation.md) | Dictionary of aggregation expression to use in the query. The key of each item in the dictionary is the alias for the aggregated column. Query can have up to 2 aggregation clauses. | [optional] 
**configuration** | [**QueryDatasetConfiguration**](QueryDatasetConfiguration.md) |  | [optional] 
**filter** | [**QueryFilter**](QueryFilter.md) |  | [optional] 
**granularity** | **str** | The granularity of rows in the query. | [optional] 
**grouping** | [**List[QueryGrouping]**](QueryGrouping.md) | Array of group by expression to use in the query. Query can have up to 2 group by clauses. | [optional] 

## Example

```python
from openapi_client.models.query_dataset import QueryDataset

# TODO update the JSON string below
json = "{}"
# create an instance of QueryDataset from a JSON string
query_dataset_instance = QueryDataset.from_json(json)
# print the JSON string representation of the object
print(QueryDataset.to_json())

# convert the object into a dict
query_dataset_dict = query_dataset_instance.to_dict()
# create an instance of QueryDataset from a dict
query_dataset_from_dict = QueryDataset.from_dict(query_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


