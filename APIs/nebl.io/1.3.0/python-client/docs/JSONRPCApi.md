# openapi_client.JSONRPCApi

All URIs are relative to *https://ntp1node.nebl.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**json_rpc**](JSONRPCApi.md#json_rpc) | **POST** / | Send a JSON-RPC call to a localhost neblio-Qt or nebliod node


# **json_rpc**
> RpcResponse json_rpc(rpc_request)

Send a JSON-RPC call to a localhost neblio-Qt or nebliod node

Call any Neblio RPC command from the Neblio API libraries. Useful for signing transactions with a local node and other functions. Will not work from a browser due to CORS restrictions. Requires a node to be running locally at 127.0.0.1

### Example

* Basic Authentication (rpcAuth):

```python
import openapi_client
from openapi_client.models.rpc_request import RpcRequest
from openapi_client.models.rpc_response import RpcResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ntp1node.nebl.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ntp1node.nebl.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: rpcAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JSONRPCApi(api_client)
    rpc_request = openapi_client.RpcRequest() # RpcRequest | 

    try:
        # Send a JSON-RPC call to a localhost neblio-Qt or nebliod node
        api_response = api_instance.json_rpc(rpc_request)
        print("The response of JSONRPCApi->json_rpc:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JSONRPCApi->json_rpc: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rpc_request** | [**RpcRequest**](RpcRequest.md)|  | 

### Return type

[**RpcResponse**](RpcResponse.md)

### Authorization

[rpcAuth](../README.md#rpcAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Object containing the JSON response from the Neblio node. |  -  |
**401** | Authentication information is missing or invalid |  * WWW_Authenticate -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

