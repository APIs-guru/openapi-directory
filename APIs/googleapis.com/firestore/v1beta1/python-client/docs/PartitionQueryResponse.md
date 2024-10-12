# PartitionQueryResponse

The response for Firestore.PartitionQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A page token that may be used to request an additional set of results, up to the number specified by &#x60;partition_count&#x60; in the PartitionQuery request. If blank, there are no more results. | [optional] 
**partitions** | [**List[Cursor]**](Cursor.md) | Partition results. Each partition is a split point that can be used by RunQuery as a starting or end point for the query results. The RunQuery requests must be made with the same query supplied to this PartitionQuery request. The partition cursors will be ordered according to same ordering as the results of the query supplied to PartitionQuery. For example, if a PartitionQuery request returns partition cursors A and B, running the following three queries will return the entire result set of the original query: * query, end_at A * query, start_at A, end_at B * query, start_at B An empty result may indicate that the query has too few results to be partitioned, or that the query is not yet supported for partitioning. | [optional] 

## Example

```python
from openapi_client.models.partition_query_response import PartitionQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionQueryResponse from a JSON string
partition_query_response_instance = PartitionQueryResponse.from_json(json)
# print the JSON string representation of the object
print(PartitionQueryResponse.to_json())

# convert the object into a dict
partition_query_response_dict = partition_query_response_instance.to_dict()
# create an instance of PartitionQueryResponse from a dict
partition_query_response_from_dict = PartitionQueryResponse.from_dict(partition_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


