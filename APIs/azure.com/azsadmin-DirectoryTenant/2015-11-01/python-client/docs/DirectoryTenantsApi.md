# openapi_client.DirectoryTenantsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**directory_tenants_create_or_update**](DirectoryTenantsApi.md#directory_tenants_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Subscriptions.Admin/directoryTenants/{tenant} | 
[**directory_tenants_delete**](DirectoryTenantsApi.md#directory_tenants_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Subscriptions.Admin/directoryTenants/{tenant} | 
[**directory_tenants_get**](DirectoryTenantsApi.md#directory_tenants_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Subscriptions.Admin/directoryTenants/{tenant} | 
[**directory_tenants_list**](DirectoryTenantsApi.md#directory_tenants_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Subscriptions.Admin/directoryTenants | 


# **directory_tenants_create_or_update**
> DirectoryTenant directory_tenants_create_or_update(subscription_id, resource_group_name, tenant, api_version, new_tenant)



Create or updates a directory tenant.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.directory_tenant import DirectoryTenant
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DirectoryTenantsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group the resource is located under.
    tenant = 'tenant_example' # str | Directory tenant name.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')
    new_tenant = openapi_client.DirectoryTenant() # DirectoryTenant | New directory tenant properties.

    try:
        api_response = api_instance.directory_tenants_create_or_update(subscription_id, resource_group_name, tenant, api_version, new_tenant)
        print("The response of DirectoryTenantsApi->directory_tenants_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DirectoryTenantsApi->directory_tenants_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group the resource is located under. | 
 **tenant** | **str**| Directory tenant name. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]
 **new_tenant** | [**DirectoryTenant**](DirectoryTenant.md)| New directory tenant properties. | 

### Return type

[**DirectoryTenant**](DirectoryTenant.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **directory_tenants_delete**
> directory_tenants_delete(subscription_id, resource_group_name, tenant, api_version)



Delete a directory tenant under a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DirectoryTenantsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group the resource is located under.
    tenant = 'tenant_example' # str | Directory tenant name.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_instance.directory_tenants_delete(subscription_id, resource_group_name, tenant, api_version)
    except Exception as e:
        print("Exception when calling DirectoryTenantsApi->directory_tenants_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group the resource is located under. | 
 **tenant** | **str**| Directory tenant name. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

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
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **directory_tenants_get**
> DirectoryTenant directory_tenants_get(subscription_id, resource_group_name, tenant, api_version)



Get a directory tenant by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.directory_tenant import DirectoryTenant
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DirectoryTenantsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group the resource is located under.
    tenant = 'tenant_example' # str | Directory tenant name.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.directory_tenants_get(subscription_id, resource_group_name, tenant, api_version)
        print("The response of DirectoryTenantsApi->directory_tenants_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DirectoryTenantsApi->directory_tenants_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group the resource is located under. | 
 **tenant** | **str**| Directory tenant name. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**DirectoryTenant**](DirectoryTenant.md)

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

# **directory_tenants_list**
> DirectoryTenantList directory_tenants_list(subscription_id, resource_group_name, api_version)



Lists all the directory tenants under the current subscription and given resource group name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.directory_tenant_list import DirectoryTenantList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DirectoryTenantsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group the resource is located under.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.directory_tenants_list(subscription_id, resource_group_name, api_version)
        print("The response of DirectoryTenantsApi->directory_tenants_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DirectoryTenantsApi->directory_tenants_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group the resource is located under. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**DirectoryTenantList**](DirectoryTenantList.md)

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

