# openapi_client.ManagedHostingEnvironmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_hosting_environments_create_or_update_managed_hosting_environment**](ManagedHostingEnvironmentsApi.md#managed_hosting_environments_create_or_update_managed_hosting_environment) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/managedHostingEnvironments/{name} | Create or update a managed hosting environment.
[**managed_hosting_environments_delete_managed_hosting_environment**](ManagedHostingEnvironmentsApi.md#managed_hosting_environments_delete_managed_hosting_environment) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/managedHostingEnvironments/{name} | Delete a managed hosting environment.
[**managed_hosting_environments_get_managed_hosting_environment**](ManagedHostingEnvironmentsApi.md#managed_hosting_environments_get_managed_hosting_environment) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/managedHostingEnvironments/{name} | Get properties of a managed hosting environment.
[**managed_hosting_environments_get_managed_hosting_environment_operation**](ManagedHostingEnvironmentsApi.md#managed_hosting_environments_get_managed_hosting_environment_operation) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/managedHostingEnvironments/{name}/operations/{operationId} | Get status of an operation on a managed hosting environment.
[**managed_hosting_environments_get_managed_hosting_environment_server_farms**](ManagedHostingEnvironmentsApi.md#managed_hosting_environments_get_managed_hosting_environment_server_farms) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/managedHostingEnvironments/{name}/serverfarms | Get all serverfarms (App Service Plans) on the managed hosting environment.
[**managed_hosting_environments_get_managed_hosting_environment_sites**](ManagedHostingEnvironmentsApi.md#managed_hosting_environments_get_managed_hosting_environment_sites) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/managedHostingEnvironments/{name}/sites | Get all sites on the managed hosting environment.
[**managed_hosting_environments_get_managed_hosting_environment_vips**](ManagedHostingEnvironmentsApi.md#managed_hosting_environments_get_managed_hosting_environment_vips) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/managedHostingEnvironments/{name}/capacities/virtualip | Get list of ip addresses assigned to a managed hosting environment
[**managed_hosting_environments_get_managed_hosting_environment_web_hosting_plans**](ManagedHostingEnvironmentsApi.md#managed_hosting_environments_get_managed_hosting_environment_web_hosting_plans) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/managedHostingEnvironments/{name}/webhostingplans | Get all serverfarms (App Service Plans) on the managed hosting environment.
[**managed_hosting_environments_get_managed_hosting_environments**](ManagedHostingEnvironmentsApi.md#managed_hosting_environments_get_managed_hosting_environments) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/managedHostingEnvironments | Get all managed hosting environments in a resource group.


# **managed_hosting_environments_create_or_update_managed_hosting_environment**
> HostingEnvironment managed_hosting_environments_create_or_update_managed_hosting_environment(resource_group_name, name, subscription_id, api_version, managed_hosting_environment_envelope)

Create or update a managed hosting environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hosting_environment import HostingEnvironment
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
    api_instance = openapi_client.ManagedHostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of managed hosting environment
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    managed_hosting_environment_envelope = openapi_client.HostingEnvironment() # HostingEnvironment | Properties of managed hosting environment

    try:
        # Create or update a managed hosting environment.
        api_response = api_instance.managed_hosting_environments_create_or_update_managed_hosting_environment(resource_group_name, name, subscription_id, api_version, managed_hosting_environment_envelope)
        print("The response of ManagedHostingEnvironmentsApi->managed_hosting_environments_create_or_update_managed_hosting_environment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedHostingEnvironmentsApi->managed_hosting_environments_create_or_update_managed_hosting_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of managed hosting environment | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **managed_hosting_environment_envelope** | [**HostingEnvironment**](HostingEnvironment.md)| Properties of managed hosting environment | 

### Return type

[**HostingEnvironment**](HostingEnvironment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Asynchronous operation in progress |  -  |
**400** | Bad request |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_hosting_environments_delete_managed_hosting_environment**
> object managed_hosting_environments_delete_managed_hosting_environment(resource_group_name, name, subscription_id, api_version, force_delete=force_delete)

Delete a managed hosting environment.

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
    api_instance = openapi_client.ManagedHostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of managed hosting environment
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    force_delete = True # bool | Delete even if the managed hosting environment contains resources (optional)

    try:
        # Delete a managed hosting environment.
        api_response = api_instance.managed_hosting_environments_delete_managed_hosting_environment(resource_group_name, name, subscription_id, api_version, force_delete=force_delete)
        print("The response of ManagedHostingEnvironmentsApi->managed_hosting_environments_delete_managed_hosting_environment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedHostingEnvironmentsApi->managed_hosting_environments_delete_managed_hosting_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of managed hosting environment | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **force_delete** | **bool**| Delete even if the managed hosting environment contains resources | [optional] 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Asynchronous operation in progress |  -  |
**400** | Bad request |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_hosting_environments_get_managed_hosting_environment**
> ManagedHostingEnvironment managed_hosting_environments_get_managed_hosting_environment(resource_group_name, name, subscription_id, api_version)

Get properties of a managed hosting environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_hosting_environment import ManagedHostingEnvironment
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
    api_instance = openapi_client.ManagedHostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of managed hosting environment
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get properties of a managed hosting environment.
        api_response = api_instance.managed_hosting_environments_get_managed_hosting_environment(resource_group_name, name, subscription_id, api_version)
        print("The response of ManagedHostingEnvironmentsApi->managed_hosting_environments_get_managed_hosting_environment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedHostingEnvironmentsApi->managed_hosting_environments_get_managed_hosting_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of managed hosting environment | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**ManagedHostingEnvironment**](ManagedHostingEnvironment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_hosting_environments_get_managed_hosting_environment_operation**
> object managed_hosting_environments_get_managed_hosting_environment_operation(resource_group_name, name, operation_id, subscription_id, api_version)

Get status of an operation on a managed hosting environment.

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
    api_instance = openapi_client.ManagedHostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of managed hosting environment
    operation_id = 'operation_id_example' # str | operation identifier GUID
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get status of an operation on a managed hosting environment.
        api_response = api_instance.managed_hosting_environments_get_managed_hosting_environment_operation(resource_group_name, name, operation_id, subscription_id, api_version)
        print("The response of ManagedHostingEnvironmentsApi->managed_hosting_environments_get_managed_hosting_environment_operation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedHostingEnvironmentsApi->managed_hosting_environments_get_managed_hosting_environment_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of managed hosting environment | 
 **operation_id** | **str**| operation identifier GUID | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Operation completed successfully |  -  |
**202** | Asynchronous operation in progress |  -  |
**404** | Not found |  -  |
**500** | Operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_hosting_environments_get_managed_hosting_environment_server_farms**
> ServerFarmCollection managed_hosting_environments_get_managed_hosting_environment_server_farms(resource_group_name, name, subscription_id, api_version)

Get all serverfarms (App Service Plans) on the managed hosting environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_farm_collection import ServerFarmCollection
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
    api_instance = openapi_client.ManagedHostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of managed hosting environment
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all serverfarms (App Service Plans) on the managed hosting environment.
        api_response = api_instance.managed_hosting_environments_get_managed_hosting_environment_server_farms(resource_group_name, name, subscription_id, api_version)
        print("The response of ManagedHostingEnvironmentsApi->managed_hosting_environments_get_managed_hosting_environment_server_farms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedHostingEnvironmentsApi->managed_hosting_environments_get_managed_hosting_environment_server_farms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of managed hosting environment | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**ServerFarmCollection**](ServerFarmCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_hosting_environments_get_managed_hosting_environment_sites**
> SiteCollection managed_hosting_environments_get_managed_hosting_environment_sites(resource_group_name, name, subscription_id, api_version, properties_to_include=properties_to_include)

Get all sites on the managed hosting environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_collection import SiteCollection
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
    api_instance = openapi_client.ManagedHostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of managed hosting environment
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    properties_to_include = 'properties_to_include_example' # str | Comma separated list of site properties to include (optional)

    try:
        # Get all sites on the managed hosting environment.
        api_response = api_instance.managed_hosting_environments_get_managed_hosting_environment_sites(resource_group_name, name, subscription_id, api_version, properties_to_include=properties_to_include)
        print("The response of ManagedHostingEnvironmentsApi->managed_hosting_environments_get_managed_hosting_environment_sites:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedHostingEnvironmentsApi->managed_hosting_environments_get_managed_hosting_environment_sites: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of managed hosting environment | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **properties_to_include** | **str**| Comma separated list of site properties to include | [optional] 

### Return type

[**SiteCollection**](SiteCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_hosting_environments_get_managed_hosting_environment_vips**
> AddressResponse managed_hosting_environments_get_managed_hosting_environment_vips(resource_group_name, name, subscription_id, api_version)

Get list of ip addresses assigned to a managed hosting environment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.address_response import AddressResponse
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
    api_instance = openapi_client.ManagedHostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of managed hosting environment
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get list of ip addresses assigned to a managed hosting environment
        api_response = api_instance.managed_hosting_environments_get_managed_hosting_environment_vips(resource_group_name, name, subscription_id, api_version)
        print("The response of ManagedHostingEnvironmentsApi->managed_hosting_environments_get_managed_hosting_environment_vips:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedHostingEnvironmentsApi->managed_hosting_environments_get_managed_hosting_environment_vips: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of managed hosting environment | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**AddressResponse**](AddressResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_hosting_environments_get_managed_hosting_environment_web_hosting_plans**
> ServerFarmCollection managed_hosting_environments_get_managed_hosting_environment_web_hosting_plans(resource_group_name, name, subscription_id, api_version)

Get all serverfarms (App Service Plans) on the managed hosting environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_farm_collection import ServerFarmCollection
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
    api_instance = openapi_client.ManagedHostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of managed hosting environment
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all serverfarms (App Service Plans) on the managed hosting environment.
        api_response = api_instance.managed_hosting_environments_get_managed_hosting_environment_web_hosting_plans(resource_group_name, name, subscription_id, api_version)
        print("The response of ManagedHostingEnvironmentsApi->managed_hosting_environments_get_managed_hosting_environment_web_hosting_plans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedHostingEnvironmentsApi->managed_hosting_environments_get_managed_hosting_environment_web_hosting_plans: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of managed hosting environment | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**ServerFarmCollection**](ServerFarmCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_hosting_environments_get_managed_hosting_environments**
> HostingEnvironmentCollection managed_hosting_environments_get_managed_hosting_environments(resource_group_name, subscription_id, api_version)

Get all managed hosting environments in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hosting_environment_collection import HostingEnvironmentCollection
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
    api_instance = openapi_client.ManagedHostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all managed hosting environments in a resource group.
        api_response = api_instance.managed_hosting_environments_get_managed_hosting_environments(resource_group_name, subscription_id, api_version)
        print("The response of ManagedHostingEnvironmentsApi->managed_hosting_environments_get_managed_hosting_environments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedHostingEnvironmentsApi->managed_hosting_environments_get_managed_hosting_environments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**HostingEnvironmentCollection**](HostingEnvironmentCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

