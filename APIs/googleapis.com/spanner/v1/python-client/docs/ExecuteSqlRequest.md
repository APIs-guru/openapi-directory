# ExecuteSqlRequest

The request for ExecuteSql and ExecuteStreamingSql.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_boost_enabled** | **bool** | If this is for a partitioned query and this field is set to &#x60;true&#x60;, the request is executed with Spanner Data Boost independent compute resources. If the field is set to &#x60;true&#x60; but the request does not set &#x60;partition_token&#x60;, the API returns an &#x60;INVALID_ARGUMENT&#x60; error. | [optional] 
**directed_read_options** | [**DirectedReadOptions**](DirectedReadOptions.md) |  | [optional] 
**param_types** | [**Dict[str, Type]**](Type.md) | It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type &#x60;BYTES&#x60; and values of type &#x60;STRING&#x60; both appear in params as JSON strings. In these cases, &#x60;param_types&#x60; can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types. | [optional] 
**params** | **Dict[str, object]** | Parameter names and values that bind to placeholders in the SQL string. A parameter placeholder consists of the &#x60;@&#x60; character followed by the parameter name (for example, &#x60;@firstName&#x60;). Parameter names must conform to the naming requirements of identifiers as specified at https://cloud.google.com/spanner/docs/lexical#identifiers. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: &#x60;\&quot;WHERE id &gt; @msg_id AND id &lt; @msg_id + 100\&quot;&#x60; It is an error to execute a SQL statement with unbound parameters. | [optional] 
**partition_token** | **bytearray** | If present, results will be restricted to the specified partition previously created using PartitionQuery(). There must be an exact match for the values of fields common to this message and the PartitionQueryRequest message used to create this partition_token. | [optional] 
**query_mode** | **str** | Used to control the amount of debugging information returned in ResultSetStats. If partition_token is set, query_mode can only be set to QueryMode.NORMAL. | [optional] 
**query_options** | [**QueryOptions**](QueryOptions.md) |  | [optional] 
**request_options** | [**RequestOptions**](RequestOptions.md) |  | [optional] 
**resume_token** | **bytearray** | If this request is resuming a previously interrupted SQL statement execution, &#x60;resume_token&#x60; should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new SQL statement execution to resume where the last one left off. The rest of the request parameters must exactly match the request that yielded this token. | [optional] 
**seqno** | **str** | A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed. The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution. Required for DML statements. Ignored for queries. | [optional] 
**sql** | **str** | Required. The SQL string. | [optional] 
**transaction** | [**TransactionSelector**](TransactionSelector.md) |  | [optional] 

## Example

```python
from openapi_client.models.execute_sql_request import ExecuteSqlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExecuteSqlRequest from a JSON string
execute_sql_request_instance = ExecuteSqlRequest.from_json(json)
# print the JSON string representation of the object
print(ExecuteSqlRequest.to_json())

# convert the object into a dict
execute_sql_request_dict = execute_sql_request_instance.to_dict()
# create an instance of ExecuteSqlRequest from a dict
execute_sql_request_from_dict = ExecuteSqlRequest.from_dict(execute_sql_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


