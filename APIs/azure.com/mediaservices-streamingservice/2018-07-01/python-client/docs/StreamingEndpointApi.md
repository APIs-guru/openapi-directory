# openapi_client.StreamingEndpointApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**streaming_endpoints_update**](StreamingEndpointApi.md#streaming_endpoints_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints/{streamingEndpointName} | Update StreamingEndpoint


# **streaming_endpoints_update**
> StreamingEndpoint streaming_endpoints_update(subscription_id, resource_group_name, account_name, streaming_endpoint_name, api_version, parameters)

Update StreamingEndpoint

Updates a existing StreamingEndpoint.

### Example


```python
import openapi_client
from openapi_client.models.streaming_endpoint import StreamingEndpoint
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamingEndpointApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    streaming_endpoint_name = 'streaming_endpoint_name_example' # str | The name of the StreamingEndpoint.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.StreamingEndpoint() # StreamingEndpoint | StreamingEndpoint properties needed for creation.

    try:
        # Update StreamingEndpoint
        api_response = api_instance.streaming_endpoints_update(subscription_id, resource_group_name, account_name, streaming_endpoint_name, api_version, parameters)
        print("The response of StreamingEndpointApi->streaming_endpoints_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamingEndpointApi->streaming_endpoints_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **streaming_endpoint_name** | **str**| The name of the StreamingEndpoint. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**StreamingEndpoint**](StreamingEndpoint.md)| StreamingEndpoint properties needed for creation. | 

### Return type

[**StreamingEndpoint**](StreamingEndpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. See https://go.microsoft.com/fwlink/?linkid&#x3D;2087017 for details on the monitoring asynchronous Azure Operations. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

