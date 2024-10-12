# openapi_client.CustomDomainsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**custom_domains_create**](CustomDomainsApi.md#custom_domains_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName} | Creates a new CDN custom domain within an endpoint.
[**custom_domains_delete_if_exists**](CustomDomainsApi.md#custom_domains_delete_if_exists) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName} | Deletes an existing CDN custom domain within an endpoint.
[**custom_domains_get**](CustomDomainsApi.md#custom_domains_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName} | Gets an existing CDN custom domain within an endpoint.
[**custom_domains_list_by_endpoint**](CustomDomainsApi.md#custom_domains_list_by_endpoint) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains | Lists the existing CDN custom domains within an endpoint.
[**custom_domains_update**](CustomDomainsApi.md#custom_domains_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName} | Updates an existing CDN custom domain within an endpoint.


# **custom_domains_create**
> CustomDomain custom_domains_create(custom_domain_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version, custom_domain_properties)

Creates a new CDN custom domain within an endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_domain import CustomDomain
from openapi_client.models.custom_domain_parameters import CustomDomainParameters
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
    api_instance = openapi_client.CustomDomainsApi(api_client)
    custom_domain_name = 'custom_domain_name_example' # str | Name of the custom domain within an endpoint.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01
    custom_domain_properties = openapi_client.CustomDomainParameters() # CustomDomainParameters | Custom domain properties required for creation.

    try:
        # Creates a new CDN custom domain within an endpoint.
        api_response = api_instance.custom_domains_create(custom_domain_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version, custom_domain_properties)
        print("The response of CustomDomainsApi->custom_domains_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomDomainsApi->custom_domains_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_domain_name** | **str**| Name of the custom domain within an endpoint. | 
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 
 **custom_domain_properties** | [**CustomDomainParameters**](CustomDomainParameters.md)| Custom domain properties required for creation. | 

### Return type

[**CustomDomain**](CustomDomain.md)

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

# **custom_domains_delete_if_exists**
> custom_domains_delete_if_exists(custom_domain_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version)

Deletes an existing CDN custom domain within an endpoint.

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
    api_instance = openapi_client.CustomDomainsApi(api_client)
    custom_domain_name = 'custom_domain_name_example' # str | Name of the custom domain within an endpoint.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01

    try:
        # Deletes an existing CDN custom domain within an endpoint.
        api_instance.custom_domains_delete_if_exists(custom_domain_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling CustomDomainsApi->custom_domains_delete_if_exists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_domain_name** | **str**| Name of the custom domain within an endpoint. | 
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
**200** | OK |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | No Content |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_domains_get**
> CustomDomain custom_domains_get(custom_domain_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version)

Gets an existing CDN custom domain within an endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_domain import CustomDomain
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
    api_instance = openapi_client.CustomDomainsApi(api_client)
    custom_domain_name = 'custom_domain_name_example' # str | Name of the custom domain within an endpoint.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01

    try:
        # Gets an existing CDN custom domain within an endpoint.
        api_response = api_instance.custom_domains_get(custom_domain_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version)
        print("The response of CustomDomainsApi->custom_domains_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomDomainsApi->custom_domains_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_domain_name** | **str**| Name of the custom domain within an endpoint. | 
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 

### Return type

[**CustomDomain**](CustomDomain.md)

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

# **custom_domains_list_by_endpoint**
> CustomDomainListResult custom_domains_list_by_endpoint(endpoint_name, profile_name, resource_group_name, subscription_id, api_version)

Lists the existing CDN custom domains within an endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_domain_list_result import CustomDomainListResult
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
    api_instance = openapi_client.CustomDomainsApi(api_client)
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01

    try:
        # Lists the existing CDN custom domains within an endpoint.
        api_response = api_instance.custom_domains_list_by_endpoint(endpoint_name, profile_name, resource_group_name, subscription_id, api_version)
        print("The response of CustomDomainsApi->custom_domains_list_by_endpoint:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomDomainsApi->custom_domains_list_by_endpoint: %s\n" % e)
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

[**CustomDomainListResult**](CustomDomainListResult.md)

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

# **custom_domains_update**
> ErrorResponse custom_domains_update(custom_domain_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version, custom_domain_properties)

Updates an existing CDN custom domain within an endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_domain_parameters import CustomDomainParameters
from openapi_client.models.error_response import ErrorResponse
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
    api_instance = openapi_client.CustomDomainsApi(api_client)
    custom_domain_name = 'custom_domain_name_example' # str | Name of the custom domain within an endpoint.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01
    custom_domain_properties = openapi_client.CustomDomainParameters() # CustomDomainParameters | Custom domain properties to update.

    try:
        # Updates an existing CDN custom domain within an endpoint.
        api_response = api_instance.custom_domains_update(custom_domain_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version, custom_domain_properties)
        print("The response of CustomDomainsApi->custom_domains_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomDomainsApi->custom_domains_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_domain_name** | **str**| Name of the custom domain within an endpoint. | 
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 
 **custom_domain_properties** | [**CustomDomainParameters**](CustomDomainParameters.md)| Custom domain properties to update. | 

### Return type

[**ErrorResponse**](ErrorResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

