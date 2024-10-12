# RpcResponse

Object containing the JSON response from the Neblio node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **object** | Object containing any error information. | [optional] 
**id** | **str** | Identifier of RCP caller | [optional] 
**result** | **object** | Object containing the response output. | [optional] 

## Example

```python
from openapi_client.models.rpc_response import RpcResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RpcResponse from a JSON string
rpc_response_instance = RpcResponse.from_json(json)
# print the JSON string representation of the object
print(RpcResponse.to_json())

# convert the object into a dict
rpc_response_dict = rpc_response_instance.to_dict()
# create an instance of RpcResponse from a dict
rpc_response_from_dict = RpcResponse.from_dict(rpc_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


