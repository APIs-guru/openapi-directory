# RunQueryRequest

The request for Firestore.RunQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_transaction** | [**TransactionOptions**](TransactionOptions.md) |  | [optional] 
**read_time** | **str** | Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. | [optional] 
**structured_query** | [**StructuredQuery**](StructuredQuery.md) |  | [optional] 
**transaction** | **bytearray** | Run the query within an already active transaction. The value here is the opaque transaction ID to execute the query in. | [optional] 

## Example

```python
from openapi_client.models.run_query_request import RunQueryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RunQueryRequest from a JSON string
run_query_request_instance = RunQueryRequest.from_json(json)
# print the JSON string representation of the object
print(RunQueryRequest.to_json())

# convert the object into a dict
run_query_request_dict = run_query_request_instance.to_dict()
# create an instance of RunQueryRequest from a dict
run_query_request_from_dict = RunQueryRequest.from_dict(run_query_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


