# RunQueryRequest

Request to run a stored query to generate a report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_range** | [**DataRange**](DataRange.md) |  | [optional] 

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


