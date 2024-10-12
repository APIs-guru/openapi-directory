# NetworkTrace

Network trace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Detailed message of a network trace operation, e.g. error message in case of failure. | [optional] 
**path** | **str** | Local file path for the captured network trace file. | [optional] 
**status** | **str** | Current status of the network trace operation, same as Operation.Status (InProgress/Succeeded/Failed). | [optional] 

## Example

```python
from openapi_client.models.network_trace import NetworkTrace

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkTrace from a JSON string
network_trace_instance = NetworkTrace.from_json(json)
# print the JSON string representation of the object
print(NetworkTrace.to_json())

# convert the object into a dict
network_trace_dict = network_trace_instance.to_dict()
# create an instance of NetworkTrace from a dict
network_trace_from_dict = NetworkTrace.from_dict(network_trace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


