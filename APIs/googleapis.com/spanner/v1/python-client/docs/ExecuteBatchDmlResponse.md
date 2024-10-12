# ExecuteBatchDmlResponse

The response for ExecuteBatchDml. Contains a list of ResultSet messages, one for each DML statement that has successfully executed, in the same order as the statements in the request. If a statement fails, the status in the response body identifies the cause of the failure. To check for DML statements that failed, use the following approach: 1. Check the status in the response message. The google.rpc.Code enum value `OK` indicates that all statements were executed successfully. 2. If the status was not `OK`, check the number of result sets in the response. If the response contains `N` ResultSet messages, then statement `N+1` in the request failed. Example 1: * Request: 5 DML statements, all executed successfully. * Response: 5 ResultSet messages, with the status `OK`. Example 2: * Request: 5 DML statements. The third statement has a syntax error. * Response: 2 ResultSet messages, and a syntax error (`INVALID_ARGUMENT`) status. The number of ResultSet messages indicates that the third statement failed, and the fourth and fifth statements were not executed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result_sets** | [**List[ResultSet]**](ResultSet.md) | One ResultSet for each statement in the request that ran successfully, in the same order as the statements in the request. Each ResultSet does not contain any rows. The ResultSetStats in each ResultSet contain the number of rows modified by the statement. Only the first ResultSet in the response contains valid ResultSetMetadata. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.execute_batch_dml_response import ExecuteBatchDmlResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExecuteBatchDmlResponse from a JSON string
execute_batch_dml_response_instance = ExecuteBatchDmlResponse.from_json(json)
# print the JSON string representation of the object
print(ExecuteBatchDmlResponse.to_json())

# convert the object into a dict
execute_batch_dml_response_dict = execute_batch_dml_response_instance.to_dict()
# create an instance of ExecuteBatchDmlResponse from a dict
execute_batch_dml_response_from_dict = ExecuteBatchDmlResponse.from_dict(execute_batch_dml_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


