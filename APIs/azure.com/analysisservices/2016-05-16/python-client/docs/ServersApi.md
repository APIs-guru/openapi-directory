# openapi_client.ServersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**servers_check_name_availability**](ServersApi.md#servers_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/locations/{location}/checkNameAvailability | 
[**servers_create**](ServersApi.md#servers_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName} | 
[**servers_delete**](ServersApi.md#servers_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName} | 
[**servers_get_details**](ServersApi.md#servers_get_details) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName} | 
[**servers_list**](ServersApi.md#servers_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/servers | 
[**servers_list_by_resource_group**](ServersApi.md#servers_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers | 
[**servers_list_operation_results**](ServersApi.md#servers_list_operation_results) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/locations/{location}/operationresults/{operationId} | 
[**servers_list_operation_statuses**](ServersApi.md#servers_list_operation_statuses) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/locations/{location}/operationstatuses/{operationId} | 
[**servers_list_skus_for_existing**](ServersApi.md#servers_list_skus_for_existing) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/skus | 
[**servers_resume**](ServersApi.md#servers_resume) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/resume | 
[**servers_suspend**](ServersApi.md#servers_suspend) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/suspend | 
[**servers_update**](ServersApi.md#servers_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName} | 


# **servers_check_name_availability**
> CheckServerNameAvailabilityResult servers_check_name_availability(location, api_version, subscription_id, server_parameters)



Check the name availability in the target location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_server_name_availability_parameters import CheckServerNameAvailabilityParameters
from openapi_client.models.check_server_name_availability_result import CheckServerNameAvailabilityResult
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
    api_instance = openapi_client.ServersApi(api_client)
    location = 'location_example' # str | The region name which the operation will lookup into.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    server_parameters = openapi_client.CheckServerNameAvailabilityParameters() # CheckServerNameAvailabilityParameters | Contains the information used to provision the Analysis Services server.

    try:
        api_response = api_instance.servers_check_name_availability(location, api_version, subscription_id, server_parameters)
        print("The response of ServersApi->servers_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServersApi->servers_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The region name which the operation will lookup into. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **server_parameters** | [**CheckServerNameAvailabilityParameters**](CheckServerNameAvailabilityParameters.md)| Contains the information used to provision the Analysis Services server. | 

### Return type

[**CheckServerNameAvailabilityResult**](CheckServerNameAvailabilityResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_create**
> AnalysisServicesServer servers_create(resource_group_name, server_name, api_version, subscription_id, server_parameters)



Provisions the specified Analysis Services server based on the configuration specified in the request.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.analysis_services_server import AnalysisServicesServer
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
    api_instance = openapi_client.ServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
    server_name = 'server_name_example' # str | The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    server_parameters = openapi_client.AnalysisServicesServer() # AnalysisServicesServer | Contains the information used to provision the Analysis Services server.

    try:
        api_response = api_instance.servers_create(resource_group_name, server_name, api_version, subscription_id, server_parameters)
        print("The response of ServersApi->servers_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServersApi->servers_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90. | 
 **server_name** | **str**| The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **server_parameters** | [**AnalysisServicesServer**](AnalysisServicesServer.md)| Contains the information used to provision the Analysis Services server. | 

### Return type

[**AnalysisServicesServer**](AnalysisServicesServer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The operation completed successfully. |  -  |
**201** | InProgress. The operation is still completing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_delete**
> servers_delete(resource_group_name, server_name, api_version, subscription_id)



Deletes the specified Analysis Services server.

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
    api_instance = openapi_client.ServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
    server_name = 'server_name_example' # str | The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.servers_delete(resource_group_name, server_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ServersApi->servers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90. | 
 **server_name** | **str**| The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Accepted. |  -  |
**204** | No Content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_get_details**
> AnalysisServicesServer servers_get_details(resource_group_name, server_name, api_version, subscription_id)



Gets details about the specified Analysis Services server.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.analysis_services_server import AnalysisServicesServer
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
    api_instance = openapi_client.ServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
    server_name = 'server_name_example' # str | The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.servers_get_details(resource_group_name, server_name, api_version, subscription_id)
        print("The response of ServersApi->servers_get_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServersApi->servers_get_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90. | 
 **server_name** | **str**| The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AnalysisServicesServer**](AnalysisServicesServer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The operation was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_list**
> AnalysisServicesServers servers_list(api_version, subscription_id)



Lists all the Analysis Services servers for the given subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.analysis_services_servers import AnalysisServicesServers
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
    api_instance = openapi_client.ServersApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.servers_list(api_version, subscription_id)
        print("The response of ServersApi->servers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServersApi->servers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AnalysisServicesServers**](AnalysisServicesServers.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_list_by_resource_group**
> AnalysisServicesServers servers_list_by_resource_group(resource_group_name, api_version, subscription_id)



Gets all the Analysis Services servers for the given resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.analysis_services_servers import AnalysisServicesServers
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
    api_instance = openapi_client.ServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.servers_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of ServersApi->servers_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServersApi->servers_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AnalysisServicesServers**](AnalysisServicesServers.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_list_operation_results**
> servers_list_operation_results(location, operation_id, api_version, subscription_id)



List the result of the specified operation.

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
    api_instance = openapi_client.ServersApi(api_client)
    location = 'location_example' # str | The region name which the operation will lookup into.
    operation_id = 'operation_id_example' # str | The target operation Id.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.servers_list_operation_results(location, operation_id, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ServersApi->servers_list_operation_results: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The region name which the operation will lookup into. | 
 **operation_id** | **str**| The target operation Id. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The operation completed. |  -  |
**202** | Accepted. The operation is ongoing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_list_operation_statuses**
> OperationStatus servers_list_operation_statuses(location, operation_id, api_version, subscription_id)



List the status of operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
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
    api_instance = openapi_client.ServersApi(api_client)
    location = 'location_example' # str | The region name which the operation will lookup into.
    operation_id = 'operation_id_example' # str | The target operation Id.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.servers_list_operation_statuses(location, operation_id, api_version, subscription_id)
        print("The response of ServersApi->servers_list_operation_statuses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServersApi->servers_list_operation_statuses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The region name which the operation will lookup into. | 
 **operation_id** | **str**| The target operation Id. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The operation completed. |  -  |
**202** | Accepted. The operation is ongoing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_list_skus_for_existing**
> SkuEnumerationForExistingResourceResult servers_list_skus_for_existing(resource_group_name, server_name, api_version, subscription_id)



Lists eligible SKUs for an Analysis Services resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sku_enumeration_for_existing_resource_result import SkuEnumerationForExistingResourceResult
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
    api_instance = openapi_client.ServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
    server_name = 'server_name_example' # str | The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.servers_list_skus_for_existing(resource_group_name, server_name, api_version, subscription_id)
        print("The response of ServersApi->servers_list_skus_for_existing:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServersApi->servers_list_skus_for_existing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90. | 
 **server_name** | **str**| The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SkuEnumerationForExistingResourceResult**](SkuEnumerationForExistingResourceResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_resume**
> servers_resume(resource_group_name, server_name, api_version, subscription_id)



Resumes operation of the specified Analysis Services server instance.

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
    api_instance = openapi_client.ServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
    server_name = 'server_name_example' # str | The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.servers_resume(resource_group_name, server_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ServersApi->servers_resume: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90. | 
 **server_name** | **str**| The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_suspend**
> servers_suspend(resource_group_name, server_name, api_version, subscription_id)



Suspends operation of the specified Analysis Services server instance.

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
    api_instance = openapi_client.ServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
    server_name = 'server_name_example' # str | The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.servers_suspend(resource_group_name, server_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ServersApi->servers_suspend: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90. | 
 **server_name** | **str**| The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Accepted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_update**
> AnalysisServicesServer servers_update(resource_group_name, server_name, api_version, subscription_id, server_update_parameters)



Updates the current state of the specified Analysis Services server.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.analysis_services_server import AnalysisServicesServer
from openapi_client.models.analysis_services_server_update_parameters import AnalysisServicesServerUpdateParameters
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
    api_instance = openapi_client.ServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
    server_name = 'server_name_example' # str | The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    server_update_parameters = openapi_client.AnalysisServicesServerUpdateParameters() # AnalysisServicesServerUpdateParameters | Request object that contains the updated information for the server.

    try:
        api_response = api_instance.servers_update(resource_group_name, server_name, api_version, subscription_id, server_update_parameters)
        print("The response of ServersApi->servers_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServersApi->servers_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90. | 
 **server_name** | **str**| The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **server_update_parameters** | [**AnalysisServicesServerUpdateParameters**](AnalysisServicesServerUpdateParameters.md)| Request object that contains the updated information for the server. | 

### Return type

[**AnalysisServicesServer**](AnalysisServicesServer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

