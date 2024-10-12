# JitNetworkAccessRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestor** | **str** | The identity of the person who made the request | 
**start_time_utc** | **datetime** | The start time of the request in UTC | 
**virtual_machines** | [**List[JitNetworkAccessRequestVirtualMachine]**](JitNetworkAccessRequestVirtualMachine.md) |  | 

## Example

```python
from openapi_client.models.jit_network_access_request import JitNetworkAccessRequest

# TODO update the JSON string below
json = "{}"
# create an instance of JitNetworkAccessRequest from a JSON string
jit_network_access_request_instance = JitNetworkAccessRequest.from_json(json)
# print the JSON string representation of the object
print(JitNetworkAccessRequest.to_json())

# convert the object into a dict
jit_network_access_request_dict = jit_network_access_request_instance.to_dict()
# create an instance of JitNetworkAccessRequest from a dict
jit_network_access_request_from_dict = JitNetworkAccessRequest.from_dict(jit_network_access_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


