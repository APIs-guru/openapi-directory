# PartitionQueryRequest

The request for Firestore.PartitionQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_size** | **int** | The maximum number of partitions to return in this call, subject to &#x60;partition_count&#x60;. For example, if &#x60;partition_count&#x60; &#x3D; 10 and &#x60;page_size&#x60; &#x3D; 8, the first call to PartitionQuery will return up to 8 partitions and a &#x60;next_page_token&#x60; if more results exist. A second call to PartitionQuery will return up to 2 partitions, to complete the total of 10 specified in &#x60;partition_count&#x60;. | [optional] 
**page_token** | **str** | The &#x60;next_page_token&#x60; value returned from a previous call to PartitionQuery that may be used to get an additional set of results. There are no ordering guarantees between sets of results. Thus, using multiple sets of results will require merging the different result sets. For example, two subsequent calls using a page_token may return: * cursor B, cursor M, cursor Q * cursor A, cursor U, cursor W To obtain a complete result set ordered with respect to the results of the query supplied to PartitionQuery, the results sets should be merged: cursor A, cursor B, cursor M, cursor Q, cursor U, cursor W | [optional] 
**partition_count** | **str** | The desired maximum number of partition points. The partitions may be returned across multiple pages of results. The number must be positive. The actual number of partitions returned may be fewer. For example, this may be set to one fewer than the number of parallel queries to be run, or in running a data pipeline job, one fewer than the number of workers or compute instances available. | [optional] 
**read_time** | **str** | Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. | [optional] 
**structured_query** | [**StructuredQuery**](StructuredQuery.md) |  | [optional] 

## Example

```python
from openapi_client.models.partition_query_request import PartitionQueryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionQueryRequest from a JSON string
partition_query_request_instance = PartitionQueryRequest.from_json(json)
# print the JSON string representation of the object
print(PartitionQueryRequest.to_json())

# convert the object into a dict
partition_query_request_dict = partition_query_request_instance.to_dict()
# create an instance of PartitionQueryRequest from a dict
partition_query_request_from_dict = PartitionQueryRequest.from_dict(partition_query_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


