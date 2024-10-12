# RunQueryResponse

The response for Datastore.RunQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch** | [**QueryResultBatch**](QueryResultBatch.md) |  | [optional] 
**query** | [**Query**](Query.md) |  | [optional] 

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


