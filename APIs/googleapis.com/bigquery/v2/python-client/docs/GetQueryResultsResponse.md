# GetQueryResultsResponse

Response object of GetQueryResults.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_hit** | **bool** | Whether the query result was fetched from the query cache. | [optional] 
**errors** | [**List[ErrorProto]**](ErrorProto.md) | Output only. The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. For more information about error messages, see [Error messages](https://cloud.google.com/bigquery/docs/error-messages). | [optional] [readonly] 
**etag** | **str** | A hash of this response. | [optional] 
**job_complete** | **bool** | Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available. | [optional] 
**job_reference** | [**JobReference**](JobReference.md) |  | [optional] 
**kind** | **str** | The resource type of the response. | [optional] [default to 'bigquery#getQueryResultsResponse']
**num_dml_affected_rows** | **str** | Output only. The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE. | [optional] [readonly] 
**page_token** | **str** | A token used for paging results. When this token is non-empty, it indicates additional results are available. | [optional] 
**rows** | [**List[TableRow]**](TableRow.md) | An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above. Present only when the query completes successfully. The REST-based representation of this data leverages a series of JSON f,v objects for indicating fields and values. | [optional] 
**var_schema** | [**TableSchema**](TableSchema.md) |  | [optional] 
**total_bytes_processed** | **str** | The total number of bytes processed for this query. | [optional] 
**total_rows** | **str** | The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. Present only when the query completes successfully. | [optional] 

## Example

```python
from openapi_client.models.get_query_results_response import GetQueryResultsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetQueryResultsResponse from a JSON string
get_query_results_response_instance = GetQueryResultsResponse.from_json(json)
# print the JSON string representation of the object
print(GetQueryResultsResponse.to_json())

# convert the object into a dict
get_query_results_response_dict = get_query_results_response_instance.to_dict()
# create an instance of GetQueryResultsResponse from a dict
get_query_results_response_from_dict = GetQueryResultsResponse.from_dict(get_query_results_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


