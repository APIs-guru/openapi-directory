# QueryResultPage

A single page of query results. If query has not finished yet, a page will have continuation token set. In this case, to get the next page of results, send the same request again with continuation token parameter. If query has completed, the continuation token is null. It is also possible to get an empty page with only continuation token set when no query results have been computed yet. If paging has completed (continuation token is null), then timestamps and properties may be empty if there is no data to return.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | If returned, this means that current results represent a partial result. Continuation token allows to get the next page of results. To get the next page of query results, send the same request with continuation token parameter in \&quot;x-ms-continuation\&quot; HTTP header. | [optional] [readonly] 
**progress** | **float** | Approximate progress of the query in percentage. It can be between 0 and 100. When the continuation token in the response is null, the progress is expected to be 100. | [optional] [readonly] 
**properties** | [**List[PropertyValues]**](PropertyValues.md) | Collection of time series properties and values for each of the timestamps.  Can be null if server was unable to fill the page in this request, or can be empty if there are no more objects when continuation token is null. | [optional] [readonly] 
**timestamps** | **List[datetime]** | The timestamps of the values of the time series. If an aggregation over intervals is used, timestamps represent the start of corresponding intervals. If events are retrieved, timestamps are values of timestamp $ts property of events. Can be null if server was unable to fill the page in this request, or can be empty if there are no more objects when continuation token is null. | [optional] [readonly] 

## Example

```python
from openapi_client.models.query_result_page import QueryResultPage

# TODO update the JSON string below
json = "{}"
# create an instance of QueryResultPage from a JSON string
query_result_page_instance = QueryResultPage.from_json(json)
# print the JSON string representation of the object
print(QueryResultPage.to_json())

# convert the object into a dict
query_result_page_dict = query_result_page_instance.to_dict()
# create an instance of QueryResultPage from a dict
query_result_page_from_dict = QueryResultPage.from_dict(query_result_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


