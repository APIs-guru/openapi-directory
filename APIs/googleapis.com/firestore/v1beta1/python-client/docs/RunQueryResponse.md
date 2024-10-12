# RunQueryResponse

The response for Firestore.RunQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**Document**](Document.md) |  | [optional] 
**done** | **bool** | If present, Firestore has completely finished the request and no more documents will be returned. | [optional] 
**read_time** | **str** | The time at which the document was read. This may be monotonically increasing; in this case, the previous documents in the result stream are guaranteed not to have changed between their &#x60;read_time&#x60; and this one. If the query returns no results, a response with &#x60;read_time&#x60; and no &#x60;document&#x60; will be sent, and this represents the time at which the query was run. | [optional] 
**skipped_results** | **int** | The number of results that have been skipped due to an offset between the last response and the current response. | [optional] 
**transaction** | **bytearray** | The transaction that was started as part of this request. Can only be set in the first response, and only if RunQueryRequest.new_transaction was set in the request. If set, no other fields will be set in this response. | [optional] 

## Example

```python
from openapi_client.models.run_query_response import RunQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RunQueryResponse from a JSON string
run_query_response_instance = RunQueryResponse.from_json(json)
# print the JSON string representation of the object
print(RunQueryResponse.to_json())

# convert the object into a dict
run_query_response_dict = run_query_response_instance.to_dict()
# create an instance of RunQueryResponse from a dict
run_query_response_from_dict = RunQueryResponse.from_dict(run_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


