# openapi_client.ApplicationsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**application_get**](ApplicationsApi.md#application_get) | **GET** /applications/{applicationId} | Gets information about the specified Application.
[**application_list**](ApplicationsApi.md#application_list) | **GET** /applications | Lists all of the applications available in the specified Account.


# **application_get**
> ApplicationSummary application_get(application_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)

Gets information about the specified Application.

This operation returns only Applications and versions that are available for use on Compute Nodes; that is, that can be used in an Package reference. For administrator information about Applications and versions that are not yet available to Compute Nodes, use the Azure portal or the Azure Resource Manager API.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_summary import ApplicationSummary
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
    api_instance = openapi_client.ApplicationsApi(api_client)
    application_id = 'application_id_example' # str | The ID of the Application.
    api_version = 'api_version_example' # str | Client API Version.
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)

    try:
        # Gets information about the specified Application.
        api_response = api_instance.application_get(application_id, api_version, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)
        print("The response of ApplicationsApi->application_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->application_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**| The ID of the Application. | 
 **api_version** | **str**| Client API Version. | 
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 

### Return type

[**ApplicationSummary**](ApplicationSummary.md)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response containing the application. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_list**
> ApplicationListResult application_list(api_version, maxresults=maxresults, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)

Lists all of the applications available in the specified Account.

This operation returns only Applications and versions that are available for use on Compute Nodes; that is, that can be used in an Package reference. For administrator information about applications and versions that are not yet available to Compute Nodes, use the Azure portal or the Azure Resource Manager API.

### Example

* Api Key Authentication (api_key):
* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_list_result import ApplicationListResult
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
    api_instance = openapi_client.ApplicationsApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    maxresults = 1000 # int | The maximum number of items to return in the response. A maximum of 1000 applications can be returned. (optional) (default to 1000)
    timeout = 30 # int | The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. (optional) (default to 30)
    client_request_id = 'client_request_id_example' # str | The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. (optional)
    return_client_request_id = False # bool | Whether the server should return the client-request-id in the response. (optional) (default to False)
    ocp_date = 'ocp_date_example' # str | The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. (optional)

    try:
        # Lists all of the applications available in the specified Account.
        api_response = api_instance.application_list(api_version, maxresults=maxresults, timeout=timeout, client_request_id=client_request_id, return_client_request_id=return_client_request_id, ocp_date=ocp_date)
        print("The response of ApplicationsApi->application_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->application_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **maxresults** | **int**| The maximum number of items to return in the response. A maximum of 1000 applications can be returned. | [optional] [default to 1000]
 **timeout** | **int**| The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. | [optional] [default to 30]
 **client_request_id** | **str**| The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0. | [optional] 
 **return_client_request_id** | **bool**| Whether the server should return the client-request-id in the response. | [optional] [default to False]
 **ocp_date** | **str**| The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly. | [optional] 

### Return type

[**ApplicationListResult**](ApplicationListResult.md)

### Authorization

[api_key](../README.md#api_key), [azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response containing the list of applications. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers. <br>  * client-request-id - The client-request-id provided by the client during the request. This will be returned only if the return-client-request-id parameter was set to true. <br>  * Last-Modified - The time at which the resource was last modified. <br>  * request-id - A unique identifier for the request that was made to the Batch service. If a request is consistently failing and you have verified that the request is properly formulated, you may use this value to report the error to Microsoft. In your report, include the value of this request ID, the approximate time that the request was made, the Batch Account against which the request was made, and the region that Account resides in. <br>  |
**0** | The error from the Batch service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

