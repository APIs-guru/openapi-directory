# openapi_client.AccountsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**account_list_node_agent_skus**](AccountsApi.md#account_list_node_agent_skus) | **GET** /nodeagentskus | Lists all node agent SKUs supported by the Azure Batch service.
[**account_list_pool_node_counts**](AccountsApi.md#account_list_pool_node_counts) | **GET** /nodecounts | 


# **account_list_node_agent_skus**
> AccountListNodeAgentSkusResult account_list_node_agent_skus(api_version, filter=filter, maxresults=maxresults, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)

Lists all node agent SKUs supported by the Azure Batch service.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.account_list_node_agent_skus_result import AccountListNodeAgentSkusResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    filter = 'filter_example' # str | An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-node-agent-skus. (optional)
    maxresults = 1000 # int | The maximum number of items to return in the response. A maximum of 1000 results will be returned. (optional) (default to 1000)
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)

    try:
        # Lists all node agent SKUs supported by the Azure Batch service.
        api_response = api_instance.account_list_node_agent_skus(api_version, filter=filter, maxresults=maxresults, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)
        print("The response of AccountsApi->account_list_node_agent_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->account_list_node_agent_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **filter** | **str**| An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-node-agent-skus. | [optional] 
 **maxresults** | **int**| The maximum number of items to return in the response. A maximum of 1000 results will be returned. | [optional] [default to 1000]
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 

### Return type

[**AccountListNodeAgentSkusResult**](AccountListNodeAgentSkusResult.md)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response containing the list of node agent SKUs. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_list_pool_node_counts**
> PoolNodeCountsListResult account_list_pool_node_counts(api_version, filter=filter, maxresults=maxresults, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)



Gets the number of nodes in each state, grouped by pool.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pool_node_counts_list_result import PoolNodeCountsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    filter = 'filter_example' # str | An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch. (optional)
    maxresults = 10 # int | The maximum number of items to return in the response. (optional) (default to 10)
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)

    try:
        api_response = api_instance.account_list_pool_node_counts(api_version, filter=filter, maxresults=maxresults, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)
        print("The response of AccountsApi->account_list_pool_node_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->account_list_pool_node_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **filter** | **str**| An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch. | [optional] 
 **maxresults** | **int**| The maximum number of items to return in the response. | [optional] [default to 10]
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 

### Return type

[**PoolNodeCountsListResult**](PoolNodeCountsListResult.md)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response contains the number of nodes in each node state, grouped by pool. |  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch account against which the request was made, and the region that account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

