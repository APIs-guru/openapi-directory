# openapi_client.ApiOperationsPolicyApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_operations_policy_create_or_update**](ApiOperationsPolicyApi.md#api_operations_policy_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/policy | 
[**api_operations_policy_delete**](ApiOperationsPolicyApi.md#api_operations_policy_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/policy | 
[**api_operations_policy_get**](ApiOperationsPolicyApi.md#api_operations_policy_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/policy | 


# **api_operations_policy_create_or_update**
> api_operations_policy_create_or_update(resource_group_name, service_name, api_id, operation_id, if_match, api_version, subscription_id, parameters)



Creates or updates policy configuration for the API Operation level.

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
    api_instance = openapi_client.ApiOperationsPolicyApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    operation_id = 'operation_id_example' # str | Operation identifier within an API. Must be unique in the current API Management service instance.
    if_match = 'if_match_example' # str | The entity state (Etag) version of the Api Operation policy to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = None # object | The policy contents to apply.

    try:
        api_instance.api_operations_policy_create_or_update(resource_group_name, service_name, api_id, operation_id, if_match, api_version, subscription_id, parameters)
    except Exception as e:
        print("Exception when calling ApiOperationsPolicyApi->api_operations_policy_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **operation_id** | **str**| Operation identifier within an API. Must be unique in the current API Management service instance. | 
 **if_match** | **str**| The entity state (Etag) version of the Api Operation policy to update. A value of \&quot;*\&quot; can be used for If-Match to unconditionally apply the operation. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | **object**| The policy contents to apply. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/vnd.ms-azure-apim.policy+xml
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Api Operation policy configuration was successfully created. |  -  |
**204** | Api Operation policy configuration of the tenant was successfully updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_operations_policy_delete**
> api_operations_policy_delete(resource_group_name, service_name, api_id, operation_id, if_match, api_version, subscription_id)



Deletes the policy configuration at the Api Operation.

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
    api_instance = openapi_client.ApiOperationsPolicyApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    operation_id = 'operation_id_example' # str | Operation identifier within an API. Must be unique in the current API Management service instance.
    if_match = 'if_match_example' # str | The entity state (Etag) version of the Api operation policy to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.api_operations_policy_delete(resource_group_name, service_name, api_id, operation_id, if_match, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ApiOperationsPolicyApi->api_operations_policy_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **operation_id** | **str**| Operation identifier within an API. Must be unique in the current API Management service instance. | 
 **if_match** | **str**| The entity state (Etag) version of the Api operation policy to update. A value of \&quot;*\&quot; can be used for If-Match to unconditionally apply the operation. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**204** | Successfully deleted the policy configuration at the API Operation level. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_operations_policy_get**
> bytearray api_operations_policy_get(resource_group_name, service_name, api_id, operation_id, api_version, subscription_id)



Get the policy configuration at the API Operation level.

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
    api_instance = openapi_client.ApiOperationsPolicyApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    operation_id = 'operation_id_example' # str | Operation identifier within an API. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.api_operations_policy_get(resource_group_name, service_name, api_id, operation_id, api_version, subscription_id)
        print("The response of ApiOperationsPolicyApi->api_operations_policy_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiOperationsPolicyApi->api_operations_policy_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **operation_id** | **str**| Operation identifier within an API. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

**bytearray**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.ms-azure-apim.policy+xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Api Operation Policy information. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

