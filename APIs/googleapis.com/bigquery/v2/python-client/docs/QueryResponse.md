# QueryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_hit** | **bool** | Whether the query result was fetched from the query cache. | [optional] 
**dml_stats** | [**DmlStatistics**](DmlStatistics.md) |  | [optional] 
**errors** | [**List[ErrorProto]**](ErrorProto.md) | Output only. The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. For more information about error messages, see [Error messages](https://cloud.google.com/bigquery/docs/error-messages). | [optional] [readonly] 
**job_complete** | **bool** | Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available. | [optional] 
**job_creation_reason** | [**JobCreationReason**](JobCreationReason.md) |  | [optional] 
**job_reference** | [**JobReference**](JobReference.md) |  | [optional] 
**kind** | **str** | The resource type. | [optional] [default to 'bigquery#queryResponse']
**num_dml_affected_rows** | **str** | Output only. The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE. | [optional] [readonly] 
**page_token** | **str** | A token used for paging results. A non-empty token indicates that additional results are available. To see additional results, query the [&#x60;jobs.getQueryResults&#x60;](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/getQueryResults) method. For more information, see [Paging through table data](https://cloud.google.com/bigquery/docs/paging-results). | [optional] 
**query_id** | **str** | Query ID for the completed query. This ID will be auto-generated. This field is not yet available and it is currently not guaranteed to be populated. | [optional] 
**rows** | [**List[TableRow]**](TableRow.md) | An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above. | [optional] 
**var_schema** | [**TableSchema**](TableSchema.md) |  | [optional] 
**session_info** | [**SessionInfo**](SessionInfo.md) |  | [optional] 
**total_bytes_processed** | **str** | The total number of bytes processed for this query. If this query was a dry run, this is the number of bytes that would be processed if the query were run. | [optional] 
**total_rows** | **str** | The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. | [optional] 

## Example

```python
from openapi_client.models.query_response import QueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryResponse from a JSON string
query_response_instance = QueryResponse.from_json(json)
# print the JSON string representation of the object
print(QueryResponse.to_json())

# convert the object into a dict
query_response_dict = query_response_instance.to_dict()
# create an instance of QueryResponse from a dict
query_response_from_dict = QueryResponse.from_dict(query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


