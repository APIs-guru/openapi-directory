# RpcRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of RCP caller | [default to 'neblio-apis']
**jsonrpc** | **str** | JSON-RPC version | [default to '1.0']
**method** | **str** | Name of the Neblio RPC method to call | 
**params** | **List[str]** | Array of string params that should be passed to the RPC method. | 

## Example

```python
from openapi_client.models.rpc_request import RpcRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RpcRequest from a JSON string
rpc_request_instance = RpcRequest.from_json(json)
# print the JSON string representation of the object
print(RpcRequest.to_json())

# convert the object into a dict
rpc_request_dict = rpc_request_instance.to_dict()
# create an instance of RpcRequest from a dict
rpc_request_from_dict = RpcRequest.from_dict(rpc_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


