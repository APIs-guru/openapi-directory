# QueryRequest

Describes the format of the jobs.query request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_properties** | [**List[ConnectionProperty]**](ConnectionProperty.md) | Optional. Connection properties which can modify the query behavior. | [optional] 
**continuous** | **bool** | [Optional] Specifies whether the query should be executed as a continuous query. The default value is false. | [optional] 
**create_session** | **bool** | Optional. If true, creates a new session using a randomly generated session_id. If false, runs query with an existing session_id passed in ConnectionProperty, otherwise runs query in non-session mode. The session location will be set to QueryRequest.location if it is present, otherwise it&#39;s set to the default location based on existing routing logic. | [optional] 
**default_dataset** | [**DatasetReference**](DatasetReference.md) |  | [optional] 
**dry_run** | **bool** | Optional. If set to true, BigQuery doesn&#39;t run the job. Instead, if the query is valid, BigQuery returns statistics about the job such as how many bytes would be processed. If the query is invalid, an error returns. The default value is false. | [optional] 
**format_options** | [**DataFormatOptions**](DataFormatOptions.md) |  | [optional] 
**job_creation_mode** | **str** | Optional. If not set, jobs are always required. If set, the query request will follow the behavior described JobCreationMode. This feature is not yet available. Jobs will always be created. | [optional] 
**kind** | **str** | The resource type of the request. | [optional] [default to 'bigquery#queryRequest']
**labels** | **Dict[str, str]** | Optional. The labels associated with this query. Labels can be used to organize and group query jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label keys must start with a letter and each label in the list must have a different key. | [optional] 
**location** | **str** | The geographic location where the job should run. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location. | [optional] 
**max_results** | **int** | Optional. The maximum number of rows of data to return per page of results. Setting this flag to a small value such as 1000 and then paging through results might improve reliability when the query result set is large. In addition to this limit, responses are also limited to 10 MB. By default, there is no maximum row count, and only the byte limit applies. | [optional] 
**maximum_bytes_billed** | **str** | Optional. Limits the bytes billed for this query. Queries with bytes billed above this limit will fail (without incurring a charge). If unspecified, the project default is used. | [optional] 
**parameter_mode** | **str** | GoogleSQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query. | [optional] 
**preserve_nulls** | **bool** | This property is deprecated. | [optional] 
**query** | **str** | Required. A query string to execute, using Google Standard SQL or legacy SQL syntax. Example: \&quot;SELECT COUNT(f1) FROM myProjectId.myDatasetId.myTableId\&quot;. | [optional] 
**query_parameters** | [**List[QueryParameter]**](QueryParameter.md) | Query parameters for GoogleSQL queries. | [optional] 
**request_id** | **str** | Optional. A unique user provided identifier to ensure idempotent behavior for queries. Note that this is different from the job_id. It has the following properties: 1. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is recommended. 2. Read only queries can ignore this token since they are nullipotent by definition. 3. For the purposes of idempotency ensured by the request_id, a request is considered duplicate of another only if they have the same request_id and are actually duplicates. When determining whether a request is a duplicate of another request, all parameters in the request that may affect the result are considered. For example, query, connection_properties, query_parameters, use_legacy_sql are parameters that affect the result and are considered when determining whether a request is a duplicate, but properties like timeout_ms don&#39;t affect the result and are thus not considered. Dry run query requests are never considered duplicate of another request. 4. When a duplicate mutating query request is detected, it returns: a. the results of the mutation if it completes successfully within the timeout. b. the running operation if it is still in progress at the end of the timeout. 5. Its lifetime is limited to 15 minutes. In other words, if two requests are sent with the same request_id, but more than 15 minutes apart, idempotency is not guaranteed. | [optional] 
**timeout_ms** | **int** | Optional. Optional: Specifies the maximum amount of time, in milliseconds, that the client is willing to wait for the query to complete. By default, this limit is 10 seconds (10,000 milliseconds). If the query is complete, the jobComplete field in the response is true. If the query has not yet completed, jobComplete is false. You can request a longer timeout period in the timeoutMs field. However, the call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. If jobComplete is false, you can continue to wait for the query to complete by calling the getQueryResults method until the jobComplete field in the getQueryResults response is true. | [optional] 
**use_legacy_sql** | **bool** | Specifies whether to use BigQuery&#39;s legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery&#39;s GoogleSQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false. | [optional] [default to True]
**use_query_cache** | **bool** | Optional. Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. The default value is true. | [optional] [default to True]

## Example

```python
from openapi_client.models.query_request import QueryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryRequest from a JSON string
query_request_instance = QueryRequest.from_json(json)
# print the JSON string representation of the object
print(QueryRequest.to_json())

# convert the object into a dict
query_request_dict = query_request_instance.to_dict()
# create an instance of QueryRequest from a dict
query_request_from_dict = QueryRequest.from_dict(query_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


