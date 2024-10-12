# openapi_client.RequestsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**requests_get**](RequestsApi.md#requests_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.CustomerLockbox/requests/{requestId} | 
[**requests_list**](RequestsApi.md#requests_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.CustomerLockbox/requests | 
[**requests_update_status**](RequestsApi.md#requests_update_status) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.CustomerLockbox/requests/{requestId}/UpdateApproval | 


# **requests_get**
> LockboxRequestResponse requests_get(request_id, subscription_id, api_version)



Get Customer Lockbox request

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lockbox_request_response import LockboxRequestResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RequestsApi(api_client)
    request_id = 'request_id_example' # str | The Lockbox request ID.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.

    try:
        api_response = api_instance.requests_get(request_id, subscription_id, api_version)
        print("The response of RequestsApi->requests_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RequestsApi->requests_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **str**| The Lockbox request ID. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 

### Return type

[**LockboxRequestResponse**](LockboxRequestResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieval of Customer Lockbox request successful. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requests_list**
> RequestListResult requests_list(subscription_id, filter=filter)



Lists all of the Lockbox requests in the given subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.request_list_result import RequestListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RequestsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    filter = 'filter_example' # str | The $filter OData query parameter. Only filter by request status is supported, e.g $filter=properties/status eq 'Pending' (optional)

    try:
        api_response = api_instance.requests_list(subscription_id, filter=filter)
        print("The response of RequestsApi->requests_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RequestsApi->requests_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **filter** | **str**| The $filter OData query parameter. Only filter by request status is supported, e.g $filter&#x3D;properties/status eq &#39;Pending&#39; | [optional] 

### Return type

[**RequestListResult**](RequestListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully listed the Lockbox requests under the given subscription. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requests_update_status**
> Approval requests_update_status(subscription_id, request_id, api_version, approval)



Update Customer Lockbox request approval status API

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.approval import Approval
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RequestsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    request_id = 'request_id_example' # str | The Lockbox request ID.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    approval = openapi_client.Approval() # Approval | The approval object to update request status.

    try:
        api_response = api_instance.requests_update_status(subscription_id, request_id, api_version, approval)
        print("The response of RequestsApi->requests_update_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RequestsApi->requests_update_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **request_id** | **str**| The Lockbox request ID. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **approval** | [**Approval**](Approval.md)| The approval object to update request status. | 

### Return type

[**Approval**](Approval.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update of Request Status successful |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

