# openapi_client.JitRequestsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jit_requests_create_or_update**](JitRequestsApi.md#jit_requests_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName} | 
[**jit_requests_delete**](JitRequestsApi.md#jit_requests_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName} | 
[**jit_requests_get**](JitRequestsApi.md#jit_requests_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName} | 
[**jit_requests_list_by_resource_group**](JitRequestsApi.md#jit_requests_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests | 
[**jit_requests_list_by_subscription**](JitRequestsApi.md#jit_requests_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Solutions/jitRequests | 
[**jit_requests_update**](JitRequestsApi.md#jit_requests_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName} | 


# **jit_requests_create_or_update**
> JitRequestDefinition jit_requests_create_or_update(resource_group_name, jit_request_name, api_version, subscription_id, parameters)



Creates or updates the JIT request.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.jit_request_definition import JitRequestDefinition
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
    api_instance = openapi_client.JitRequestsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    jit_request_name = 'jit_request_name_example' # str | The name of the JIT request.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.JitRequestDefinition() # JitRequestDefinition | Parameters supplied to the update JIT request.

    try:
        api_response = api_instance.jit_requests_create_or_update(resource_group_name, jit_request_name, api_version, subscription_id, parameters)
        print("The response of JitRequestsApi->jit_requests_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JitRequestsApi->jit_requests_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **jit_request_name** | **str**| The name of the JIT request. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**JitRequestDefinition**](JitRequestDefinition.md)| Parameters supplied to the update JIT request. | 

### Return type

[**JitRequestDefinition**](JitRequestDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok - Returns information about existing JIT request. |  -  |
**201** | Created - Returns information about the JIT request. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jit_requests_delete**
> jit_requests_delete(resource_group_name, jit_request_name, api_version, subscription_id)



Deletes the JIT request.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.JitRequestsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    jit_request_name = 'jit_request_name_example' # str | The name of the JIT request.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_instance.jit_requests_delete(resource_group_name, jit_request_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling JitRequestsApi->jit_requests_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **jit_request_name** | **str**| The name of the JIT request. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | NoContent |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jit_requests_get**
> JitRequestDefinition jit_requests_get(resource_group_name, jit_request_name, api_version, subscription_id)



Gets the JIT request.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.jit_request_definition import JitRequestDefinition
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
    api_instance = openapi_client.JitRequestsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    jit_request_name = 'jit_request_name_example' # str | The name of the JIT request.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.jit_requests_get(resource_group_name, jit_request_name, api_version, subscription_id)
        print("The response of JitRequestsApi->jit_requests_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JitRequestsApi->jit_requests_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **jit_request_name** | **str**| The name of the JIT request. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**JitRequestDefinition**](JitRequestDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the JIT request |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jit_requests_list_by_resource_group**
> JitRequestDefinitionListResult jit_requests_list_by_resource_group(resource_group_name, api_version, subscription_id)



Retrieves all JIT requests within the resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.jit_request_definition_list_result import JitRequestDefinitionListResult
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
    api_instance = openapi_client.JitRequestsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.jit_requests_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of JitRequestsApi->jit_requests_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JitRequestsApi->jit_requests_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**JitRequestDefinitionListResult**](JitRequestDefinitionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of JIT requests. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jit_requests_list_by_subscription**
> JitRequestDefinitionListResult jit_requests_list_by_subscription(api_version, subscription_id)



Retrieves all JIT requests within the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.jit_request_definition_list_result import JitRequestDefinitionListResult
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
    api_instance = openapi_client.JitRequestsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.jit_requests_list_by_subscription(api_version, subscription_id)
        print("The response of JitRequestsApi->jit_requests_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JitRequestsApi->jit_requests_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**JitRequestDefinitionListResult**](JitRequestDefinitionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of JIT requests. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jit_requests_update**
> JitRequestDefinition jit_requests_update(resource_group_name, jit_request_name, api_version, subscription_id, parameters)



Updates the JIT request.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.jit_request_definition import JitRequestDefinition
from openapi_client.models.jit_request_patchable import JitRequestPatchable
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
    api_instance = openapi_client.JitRequestsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    jit_request_name = 'jit_request_name_example' # str | The name of the JIT request.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.JitRequestPatchable() # JitRequestPatchable | Parameters supplied to the update JIT request.

    try:
        api_response = api_instance.jit_requests_update(resource_group_name, jit_request_name, api_version, subscription_id, parameters)
        print("The response of JitRequestsApi->jit_requests_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JitRequestsApi->jit_requests_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **jit_request_name** | **str**| The name of the JIT request. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**JitRequestPatchable**](JitRequestPatchable.md)| Parameters supplied to the update JIT request. | 

### Return type

[**JitRequestDefinition**](JitRequestDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok - Returns information about the JIT request. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

