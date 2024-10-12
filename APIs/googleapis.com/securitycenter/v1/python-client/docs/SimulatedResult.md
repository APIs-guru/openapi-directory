# SimulatedResult

Possible test result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Status**](Status.md) |  | [optional] 
**finding** | [**Finding**](Finding.md) |  | [optional] 
**no_violation** | **object** | A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } | [optional] 

## Example

```python
from openapi_client.models.simulated_result import SimulatedResult

# TODO update the JSON string below
json = "{}"
# create an instance of SimulatedResult from a JSON string
simulated_result_instance = SimulatedResult.from_json(json)
# print the JSON string representation of the object
print(SimulatedResult.to_json())

# convert the object into a dict
simulated_result_dict = simulated_result_instance.to_dict()
# create an instance of SimulatedResult from a dict
simulated_result_from_dict = SimulatedResult.from_dict(simulated_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


