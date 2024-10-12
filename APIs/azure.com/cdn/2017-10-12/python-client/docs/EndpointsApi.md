# openapi_client.EndpointsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endpoints_create**](EndpointsApi.md#endpoints_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName} | 
[**endpoints_delete**](EndpointsApi.md#endpoints_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName} | 
[**endpoints_get**](EndpointsApi.md#endpoints_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName} | 
[**endpoints_list_by_profile**](EndpointsApi.md#endpoints_list_by_profile) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints | 
[**endpoints_list_resource_usage**](EndpointsApi.md#endpoints_list_resource_usage) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/checkResourceUsage | 
[**endpoints_load_content**](EndpointsApi.md#endpoints_load_content) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/load | 
[**endpoints_purge_content**](EndpointsApi.md#endpoints_purge_content) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/purge | 
[**endpoints_start**](EndpointsApi.md#endpoints_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/start | 
[**endpoints_stop**](EndpointsApi.md#endpoints_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/stop | 
[**endpoints_update**](EndpointsApi.md#endpoints_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName} | 
[**endpoints_validate_custom_domain**](EndpointsApi.md#endpoints_validate_custom_domain) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/validateCustomDomain | 


# **endpoints_create**
> Endpoint endpoints_create(resource_group_name, profile_name, endpoint_name, subscription_id, api_version, endpoint)



Creates a new CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.endpoint import Endpoint
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
    api_instance = openapi_client.EndpointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.
    endpoint = openapi_client.Endpoint() # Endpoint | Endpoint properties

    try:
        api_response = api_instance.endpoints_create(resource_group_name, profile_name, endpoint_name, subscription_id, api_version, endpoint)
        print("The response of EndpointsApi->endpoints_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 
 **endpoint** | [**Endpoint**](Endpoint.md)| Endpoint properties | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**201** | Created. The request has been fulfilled and a new endpoint has been created. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_delete**
> endpoints_delete(resource_group_name, profile_name, endpoint_name, subscription_id, api_version)



Deletes an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.

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
    api_instance = openapi_client.EndpointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_instance.endpoints_delete(resource_group_name, profile_name, endpoint_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

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
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | No Content. The request has been accepted but the endpoint was not found. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_get**
> Endpoint endpoints_get(resource_group_name, profile_name, endpoint_name, subscription_id, api_version)



Gets an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.endpoint import Endpoint
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
    api_instance = openapi_client.EndpointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.endpoints_get(resource_group_name, profile_name, endpoint_name, subscription_id, api_version)
        print("The response of EndpointsApi->endpoints_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_list_by_profile**
> EndpointListResult endpoints_list_by_profile(resource_group_name, profile_name, subscription_id, api_version)



Lists existing CDN endpoints.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.endpoint_list_result import EndpointListResult
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
    api_instance = openapi_client.EndpointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.endpoints_list_by_profile(resource_group_name, profile_name, subscription_id, api_version)
        print("The response of EndpointsApi->endpoints_list_by_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_list_by_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

### Return type

[**EndpointListResult**](EndpointListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_list_resource_usage**
> ResourceUsageListResult endpoints_list_resource_usage(resource_group_name, profile_name, endpoint_name, subscription_id, api_version)



Checks the quota and usage of geo filters and custom domains under the given endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_usage_list_result import ResourceUsageListResult
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
    api_instance = openapi_client.EndpointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.endpoints_list_resource_usage(resource_group_name, profile_name, endpoint_name, subscription_id, api_version)
        print("The response of EndpointsApi->endpoints_list_resource_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_list_resource_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

### Return type

[**ResourceUsageListResult**](ResourceUsageListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_load_content**
> endpoints_load_content(resource_group_name, profile_name, endpoint_name, subscription_id, api_version, content_file_paths)



Pre-loads a content to CDN. Available for Verizon Profiles.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.load_parameters import LoadParameters
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
    api_instance = openapi_client.EndpointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.
    content_file_paths = openapi_client.LoadParameters() # LoadParameters | The path to the content to be loaded. Path should be a full URL, e.g. ‘/pictures/city.png' which loads a single file 

    try:
        api_instance.endpoints_load_content(resource_group_name, profile_name, endpoint_name, subscription_id, api_version, content_file_paths)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_load_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 
 **content_file_paths** | [**LoadParameters**](LoadParameters.md)| The path to the content to be loaded. Path should be a full URL, e.g. ‘/pictures/city.png&#39; which loads a single file  | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_purge_content**
> endpoints_purge_content(resource_group_name, profile_name, endpoint_name, subscription_id, api_version, content_file_paths)



Removes a content from CDN.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.purge_parameters import PurgeParameters
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
    api_instance = openapi_client.EndpointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.
    content_file_paths = openapi_client.PurgeParameters() # PurgeParameters | The path to the content to be purged. Path can be a full URL, e.g. '/pictures/city.png' which removes a single file, or a directory with a wildcard, e.g. '/pictures/*' which removes all folders and files in the directory.

    try:
        api_instance.endpoints_purge_content(resource_group_name, profile_name, endpoint_name, subscription_id, api_version, content_file_paths)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_purge_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 
 **content_file_paths** | [**PurgeParameters**](PurgeParameters.md)| The path to the content to be purged. Path can be a full URL, e.g. &#39;/pictures/city.png&#39; which removes a single file, or a directory with a wildcard, e.g. &#39;/pictures/*&#39; which removes all folders and files in the directory. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_start**
> Endpoint endpoints_start(resource_group_name, profile_name, endpoint_name, subscription_id, api_version)



Starts an existing CDN endpoint that is on a stopped state.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.endpoint import Endpoint
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
    api_instance = openapi_client.EndpointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.endpoints_start(resource_group_name, profile_name, endpoint_name, subscription_id, api_version)
        print("The response of EndpointsApi->endpoints_start:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_stop**
> Endpoint endpoints_stop(resource_group_name, profile_name, endpoint_name, subscription_id, api_version)



Stops an existing running CDN endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.endpoint import Endpoint
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
    api_instance = openapi_client.EndpointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.endpoints_stop(resource_group_name, profile_name, endpoint_name, subscription_id, api_version)
        print("The response of EndpointsApi->endpoints_stop:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_update**
> Endpoint endpoints_update(resource_group_name, profile_name, endpoint_name, subscription_id, api_version, endpoint_update_properties)



Updates an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile. Only tags and Origin HostHeader can be updated after creating an endpoint. To update origins, use the Update Origin operation. To update custom domains, use the Update Custom Domain operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.endpoint import Endpoint
from openapi_client.models.endpoint_update_parameters import EndpointUpdateParameters
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
    api_instance = openapi_client.EndpointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.
    endpoint_update_properties = openapi_client.EndpointUpdateParameters() # EndpointUpdateParameters | Endpoint update properties

    try:
        api_response = api_instance.endpoints_update(resource_group_name, profile_name, endpoint_name, subscription_id, api_version, endpoint_update_properties)
        print("The response of EndpointsApi->endpoints_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 
 **endpoint_update_properties** | [**EndpointUpdateParameters**](EndpointUpdateParameters.md)| Endpoint update properties | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted and  the operation will complete asynchronously |  -  |
**0** | CDN error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_validate_custom_domain**
> ValidateCustomDomainOutput endpoints_validate_custom_domain(resource_group_name, profile_name, endpoint_name, subscription_id, api_version, custom_domain_properties)



Validates the custom domain mapping to ensure it maps to the correct CDN endpoint in DNS.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.validate_custom_domain_input import ValidateCustomDomainInput
from openapi_client.models.validate_custom_domain_output import ValidateCustomDomainOutput
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
    api_instance = openapi_client.EndpointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | Name of the CDN profile which is unique within the resource group.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint under the profile which is unique globally.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.
    custom_domain_properties = openapi_client.ValidateCustomDomainInput() # ValidateCustomDomainInput | Custom domain to be validated.

    try:
        api_response = api_instance.endpoints_validate_custom_domain(resource_group_name, profile_name, endpoint_name, subscription_id, api_version, custom_domain_properties)
        print("The response of EndpointsApi->endpoints_validate_custom_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_validate_custom_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| Name of the CDN profile which is unique within the resource group. | 
 **endpoint_name** | **str**| Name of the endpoint under the profile which is unique globally. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 
 **custom_domain_properties** | [**ValidateCustomDomainInput**](ValidateCustomDomainInput.md)| Custom domain to be validated. | 

### Return type

[**ValidateCustomDomainOutput**](ValidateCustomDomainOutput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

