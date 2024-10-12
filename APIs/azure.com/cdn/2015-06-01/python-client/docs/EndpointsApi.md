# openapi_client.EndpointsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endpoints_create**](EndpointsApi.md#endpoints_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName} | Creates a new CDN endpoint with the specified parameters.
[**endpoints_delete_if_exists**](EndpointsApi.md#endpoints_delete_if_exists) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName} | Deletes an existing CDN endpoint with the specified parameters.
[**endpoints_get**](EndpointsApi.md#endpoints_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName} | Gets an existing CDN endpoint with the specified parameters.
[**endpoints_list_by_profile**](EndpointsApi.md#endpoints_list_by_profile) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints | Lists existing CDN endpoints within a profile.
[**endpoints_load_content**](EndpointsApi.md#endpoints_load_content) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/load | Forcibly pre-loads CDN endpoint content.
[**endpoints_purge_content**](EndpointsApi.md#endpoints_purge_content) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/purge | Forcibly purges CDN endpoint content.
[**endpoints_start**](EndpointsApi.md#endpoints_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/start | Starts an existing stopped CDN endpoint.
[**endpoints_stop**](EndpointsApi.md#endpoints_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/stop | Stops an existing running CDN endpoint.
[**endpoints_update**](EndpointsApi.md#endpoints_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName} | Updates an existing CDN endpoint with the specified parameters. Only tags and OriginHostHeader can be updated after creating an endpoint. To update origins, use the Update Origin operation. To update custom domains, use the Update Custom Domain operation.
[**endpoints_validate_custom_domain**](EndpointsApi.md#endpoints_validate_custom_domain) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/validateCustomDomain | Validates a custom domain mapping to ensure it maps to the correct CNAME in DNS.


# **endpoints_create**
> Endpoint endpoints_create(endpoint_name, profile_name, resource_group_name, subscription_id, api_version, endpoint_properties)

Creates a new CDN endpoint with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.endpoint import Endpoint
from openapi_client.models.endpoint_create_parameters import EndpointCreateParameters
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
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01
    endpoint_properties = openapi_client.EndpointCreateParameters() # EndpointCreateParameters | Endpoint properties

    try:
        # Creates a new CDN endpoint with the specified parameters.
        api_response = api_instance.endpoints_create(endpoint_name, profile_name, resource_group_name, subscription_id, api_version, endpoint_properties)
        print("The response of EndpointsApi->endpoints_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 
 **endpoint_properties** | [**EndpointCreateParameters**](EndpointCreateParameters.md)| Endpoint properties | 

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
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_delete_if_exists**
> endpoints_delete_if_exists(endpoint_name, profile_name, resource_group_name, subscription_id, api_version)

Deletes an existing CDN endpoint with the specified parameters.

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
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01

    try:
        # Deletes an existing CDN endpoint with the specified parameters.
        api_instance.endpoints_delete_if_exists(endpoint_name, profile_name, resource_group_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_delete_if_exists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 

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
**202** | Accepted |  -  |
**204** | No Content |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_get**
> Endpoint endpoints_get(endpoint_name, profile_name, resource_group_name, subscription_id, api_version)

Gets an existing CDN endpoint with the specified parameters.

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
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01

    try:
        # Gets an existing CDN endpoint with the specified parameters.
        api_response = api_instance.endpoints_get(endpoint_name, profile_name, resource_group_name, subscription_id, api_version)
        print("The response of EndpointsApi->endpoints_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 

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
**200** | OK |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_list_by_profile**
> EndpointListResult endpoints_list_by_profile(profile_name, resource_group_name, subscription_id, api_version)

Lists existing CDN endpoints within a profile.

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
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01

    try:
        # Lists existing CDN endpoints within a profile.
        api_response = api_instance.endpoints_list_by_profile(profile_name, resource_group_name, subscription_id, api_version)
        print("The response of EndpointsApi->endpoints_list_by_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_list_by_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 

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
**200** | OK |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_load_content**
> endpoints_load_content(endpoint_name, profile_name, resource_group_name, subscription_id, api_version, content_file_paths)

Forcibly pre-loads CDN endpoint content.

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
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01
    content_file_paths = openapi_client.LoadParameters() # LoadParameters | The path to the content to be loaded. Path should describe a file.

    try:
        # Forcibly pre-loads CDN endpoint content.
        api_instance.endpoints_load_content(endpoint_name, profile_name, resource_group_name, subscription_id, api_version, content_file_paths)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_load_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 
 **content_file_paths** | [**LoadParameters**](LoadParameters.md)| The path to the content to be loaded. Path should describe a file. | 

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
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_purge_content**
> endpoints_purge_content(endpoint_name, profile_name, resource_group_name, subscription_id, api_version, content_file_paths)

Forcibly purges CDN endpoint content.

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
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01
    content_file_paths = openapi_client.PurgeParameters() # PurgeParameters | The path to the content to be purged. Path can describe a file or directory.

    try:
        # Forcibly purges CDN endpoint content.
        api_instance.endpoints_purge_content(endpoint_name, profile_name, resource_group_name, subscription_id, api_version, content_file_paths)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_purge_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 
 **content_file_paths** | [**PurgeParameters**](PurgeParameters.md)| The path to the content to be purged. Path can describe a file or directory. | 

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
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_start**
> Endpoint endpoints_start(endpoint_name, profile_name, resource_group_name, subscription_id, api_version)

Starts an existing stopped CDN endpoint.

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
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01

    try:
        # Starts an existing stopped CDN endpoint.
        api_response = api_instance.endpoints_start(endpoint_name, profile_name, resource_group_name, subscription_id, api_version)
        print("The response of EndpointsApi->endpoints_start:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 

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
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_stop**
> Endpoint endpoints_stop(endpoint_name, profile_name, resource_group_name, subscription_id, api_version)

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
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01

    try:
        # Stops an existing running CDN endpoint.
        api_response = api_instance.endpoints_stop(endpoint_name, profile_name, resource_group_name, subscription_id, api_version)
        print("The response of EndpointsApi->endpoints_stop:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 

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
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_update**
> Endpoint endpoints_update(endpoint_name, profile_name, resource_group_name, subscription_id, api_version, endpoint_properties)

Updates an existing CDN endpoint with the specified parameters. Only tags and OriginHostHeader can be updated after creating an endpoint. To update origins, use the Update Origin operation. To update custom domains, use the Update Custom Domain operation.

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
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01
    endpoint_properties = openapi_client.EndpointUpdateParameters() # EndpointUpdateParameters | Endpoint properties

    try:
        # Updates an existing CDN endpoint with the specified parameters. Only tags and OriginHostHeader can be updated after creating an endpoint. To update origins, use the Update Origin operation. To update custom domains, use the Update Custom Domain operation.
        api_response = api_instance.endpoints_update(endpoint_name, profile_name, resource_group_name, subscription_id, api_version, endpoint_properties)
        print("The response of EndpointsApi->endpoints_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 
 **endpoint_properties** | [**EndpointUpdateParameters**](EndpointUpdateParameters.md)| Endpoint properties | 

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
**200** | OK |  -  |
**202** | Accepted and  the operation will complete asynchronously |  -  |
**0** | CDN error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_validate_custom_domain**
> ValidateCustomDomainOutput endpoints_validate_custom_domain(endpoint_name, profile_name, resource_group_name, subscription_id, api_version, custom_domain_properties)

Validates a custom domain mapping to ensure it maps to the correct CNAME in DNS.

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
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01
    custom_domain_properties = openapi_client.ValidateCustomDomainInput() # ValidateCustomDomainInput | Custom domain to validate.

    try:
        # Validates a custom domain mapping to ensure it maps to the correct CNAME in DNS.
        api_response = api_instance.endpoints_validate_custom_domain(endpoint_name, profile_name, resource_group_name, subscription_id, api_version, custom_domain_properties)
        print("The response of EndpointsApi->endpoints_validate_custom_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_validate_custom_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 
 **custom_domain_properties** | [**ValidateCustomDomainInput**](ValidateCustomDomainInput.md)| Custom domain to validate. | 

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
**200** | OK |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

