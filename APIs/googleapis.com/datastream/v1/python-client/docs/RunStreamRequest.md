# RunStreamRequest

Request message for running a stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cdc_strategy** | [**CdcStrategy**](CdcStrategy.md) |  | [optional] 

## Example

```python
from openapi_client.models.run_stream_request import RunStreamRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RunStreamRequest from a JSON string
run_stream_request_instance = RunStreamRequest.from_json(json)
# print the JSON string representation of the object
print(RunStreamRequest.to_json())

# convert the object into a dict
run_stream_request_dict = run_stream_request_instance.to_dict()
# create an instance of RunStreamRequest from a dict
run_stream_request_from_dict = RunStreamRequest.from_dict(run_stream_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


