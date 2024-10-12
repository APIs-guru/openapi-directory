# openapi_client.ApiDiagnosticLoggersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_diagnostic_logger_check_entity_exists**](ApiDiagnosticLoggersApi.md#api_diagnostic_logger_check_entity_exists) | **HEAD** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/diagnostics/{diagnosticId}/loggers/{loggerid} | 
[**api_diagnostic_logger_create_or_update**](ApiDiagnosticLoggersApi.md#api_diagnostic_logger_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/diagnostics/{diagnosticId}/loggers/{loggerid} | 
[**api_diagnostic_logger_delete**](ApiDiagnosticLoggersApi.md#api_diagnostic_logger_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/diagnostics/{diagnosticId}/loggers/{loggerid} | 
[**api_diagnostic_logger_list_by_service**](ApiDiagnosticLoggersApi.md#api_diagnostic_logger_list_by_service) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/diagnostics/{diagnosticId}/loggers | 


# **api_diagnostic_logger_check_entity_exists**
> api_diagnostic_logger_check_entity_exists(resource_group_name, service_name, api_id, diagnostic_id, loggerid, api_version, subscription_id)



Checks that logger entity specified by identifier is associated with the diagnostics entity.

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
    api_instance = openapi_client.ApiDiagnosticLoggersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    diagnostic_id = 'diagnostic_id_example' # str | Diagnostic identifier. Must be unique in the current API Management service instance.
    loggerid = 'loggerid_example' # str | Logger identifier. Must be unique in the API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.api_diagnostic_logger_check_entity_exists(resource_group_name, service_name, api_id, diagnostic_id, loggerid, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ApiDiagnosticLoggersApi->api_diagnostic_logger_check_entity_exists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **diagnostic_id** | **str**| Diagnostic identifier. Must be unique in the current API Management service instance. | 
 **loggerid** | **str**| Logger identifier. Must be unique in the API Management service instance. | 
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
**204** | Entity exists |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_diagnostic_logger_create_or_update**
> ApiDiagnosticLoggerCreateOrUpdate200Response api_diagnostic_logger_create_or_update(resource_group_name, service_name, api_id, diagnostic_id, loggerid, api_version, subscription_id)



Attaches a logger to a diagnostic for an API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_diagnostic_logger_create_or_update200_response import ApiDiagnosticLoggerCreateOrUpdate200Response
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
    api_instance = openapi_client.ApiDiagnosticLoggersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    diagnostic_id = 'diagnostic_id_example' # str | Diagnostic identifier. Must be unique in the current API Management service instance.
    loggerid = 'loggerid_example' # str | Logger identifier. Must be unique in the API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.api_diagnostic_logger_create_or_update(resource_group_name, service_name, api_id, diagnostic_id, loggerid, api_version, subscription_id)
        print("The response of ApiDiagnosticLoggersApi->api_diagnostic_logger_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiDiagnosticLoggersApi->api_diagnostic_logger_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **diagnostic_id** | **str**| Diagnostic identifier. Must be unique in the current API Management service instance. | 
 **loggerid** | **str**| Logger identifier. Must be unique in the API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ApiDiagnosticLoggerCreateOrUpdate200Response**](ApiDiagnosticLoggerCreateOrUpdate200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Logger to Diagnostic link was successfully updated. |  -  |
**201** | Logger was successfully attached to Diagnostic. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_diagnostic_logger_delete**
> api_diagnostic_logger_delete(resource_group_name, service_name, api_id, diagnostic_id, loggerid, api_version, subscription_id)



Deletes the specified Logger from Diagnostic for an API.

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
    api_instance = openapi_client.ApiDiagnosticLoggersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    diagnostic_id = 'diagnostic_id_example' # str | Diagnostic identifier. Must be unique in the current API Management service instance.
    loggerid = 'loggerid_example' # str | Logger identifier. Must be unique in the API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.api_diagnostic_logger_delete(resource_group_name, service_name, api_id, diagnostic_id, loggerid, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ApiDiagnosticLoggersApi->api_diagnostic_logger_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **diagnostic_id** | **str**| Diagnostic identifier. Must be unique in the current API Management service instance. | 
 **loggerid** | **str**| Logger identifier. Must be unique in the API Management service instance. | 
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
**204** | The Logger was successfully detached from Diagnostic. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_diagnostic_logger_list_by_service**
> ApiDiagnosticLoggerListByService200Response api_diagnostic_logger_list_by_service(resource_group_name, service_name, api_id, api_version, subscription_id, diagnostic_id, filter=filter, top=top, skip=skip)



Lists all loggers associated with the specified Diagnostic of an API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_diagnostic_logger_list_by_service200_response import ApiDiagnosticLoggerListByService200Response
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
    api_instance = openapi_client.ApiDiagnosticLoggersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    diagnostic_id = 'diagnostic_id_example' # str | Diagnostic identifier. Must be unique in the current API Management service instance.
    filter = 'filter_example' # str | | Field       | Supported operators    | Supported functions               | |-------------|------------------------|-----------------------------------| | id          | ge, le, eq, ne, gt, lt | substringof, startswith, endswith | | type        | eq                     |                                   | (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)

    try:
        api_response = api_instance.api_diagnostic_logger_list_by_service(resource_group_name, service_name, api_id, api_version, subscription_id, diagnostic_id, filter=filter, top=top, skip=skip)
        print("The response of ApiDiagnosticLoggersApi->api_diagnostic_logger_list_by_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiDiagnosticLoggersApi->api_diagnostic_logger_list_by_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **diagnostic_id** | **str**| Diagnostic identifier. Must be unique in the current API Management service instance. | 
 **filter** | **str**| | Field       | Supported operators    | Supported functions               | |-------------|------------------------|-----------------------------------| | id          | ge, le, eq, ne, gt, lt | substringof, startswith, endswith | | type        | eq                     |                                   | | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 

### Return type

[**ApiDiagnosticLoggerListByService200Response**](ApiDiagnosticLoggerListByService200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paged Result response of loggers assigned to the specified Diagnostic. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

