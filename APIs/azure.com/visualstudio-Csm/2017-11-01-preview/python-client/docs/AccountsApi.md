# openapi_client.AccountsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accounts_check_name_availability**](AccountsApi.md#accounts_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/microsoft.visualstudio/checkNameAvailability | Accounts_CheckNameAvailability
[**accounts_create_or_update**](AccountsApi.md#accounts_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{resourceName} | Accounts_CreateOrUpdate
[**accounts_delete**](AccountsApi.md#accounts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{resourceName} | Accounts_Delete
[**accounts_get**](AccountsApi.md#accounts_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{resourceName} | Accounts_Get
[**accounts_list_by_resource_group**](AccountsApi.md#accounts_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account | Accounts_ListByResourceGroup


# **accounts_check_name_availability**
> CheckNameAvailabilityResult accounts_check_name_availability(subscription_id, api_version, body)

Accounts_CheckNameAvailability

Checks if the specified Visual Studio Team Services account name is available. Resource name can be either an account name or an account name and PUID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_name_availability_parameter import CheckNameAvailabilityParameter
from openapi_client.models.check_name_availability_result import CheckNameAvailabilityResult
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
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription identifier.
    api_version = 'api_version_example' # str | API Version
    body = openapi_client.CheckNameAvailabilityParameter() # CheckNameAvailabilityParameter | Parameters describing the name to check availability for.

    try:
        # Accounts_CheckNameAvailability
        api_response = api_instance.accounts_check_name_availability(subscription_id, api_version, body)
        print("The response of AccountsApi->accounts_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription identifier. | 
 **api_version** | **str**| API Version | 
 **body** | [**CheckNameAvailabilityParameter**](CheckNameAvailabilityParameter.md)| Parameters describing the name to check availability for. | 

### Return type

[**CheckNameAvailabilityResult**](CheckNameAvailabilityResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation succeeded. The response contains the result of the name availability check. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_create_or_update**
> AccountResource accounts_create_or_update(resource_group_name, subscription_id, api_version, resource_name, body)

Accounts_CreateOrUpdate

Creates or updates a Visual Studio Team Services account resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.account_resource import AccountResource
from openapi_client.models.account_resource_request import AccountResourceRequest
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
    api_instance = openapi_client.AccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | The Azure subscription identifier.
    api_version = 'api_version_example' # str | API Version
    resource_name = 'resource_name_example' # str | Name of the resource.
    body = openapi_client.AccountResourceRequest() # AccountResourceRequest | The request data.

    try:
        # Accounts_CreateOrUpdate
        api_response = api_instance.accounts_create_or_update(resource_group_name, subscription_id, api_version, resource_name, body)
        print("The response of AccountsApi->accounts_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| The Azure subscription identifier. | 
 **api_version** | **str**| API Version | 
 **resource_name** | **str**| Name of the resource. | 
 **body** | [**AccountResourceRequest**](AccountResourceRequest.md)| The request data. | 

### Return type

[**AccountResource**](AccountResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation succeeded. The Visual Studio Team Services account resource was created or updated. |  -  |
**404** | The Visual Studio Team Services account does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_delete**
> accounts_delete(resource_group_name, subscription_id, api_version, resource_name)

Accounts_Delete

Deletes a Visual Studio Team Services account resource.

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
    api_instance = openapi_client.AccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | The Azure subscription identifier.
    api_version = 'api_version_example' # str | API Version
    resource_name = 'resource_name_example' # str | Name of the resource.

    try:
        # Accounts_Delete
        api_instance.accounts_delete(resource_group_name, subscription_id, api_version, resource_name)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| The Azure subscription identifier. | 
 **api_version** | **str**| API Version | 
 **resource_name** | **str**| Name of the resource. | 

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
**200** | The operation succeeded. The Visual Studio Team Services account resource was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_get**
> AccountResource accounts_get(resource_group_name, subscription_id, api_version, resource_name)

Accounts_Get

Gets the Visual Studio Team Services account resource details.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.account_resource import AccountResource
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
    api_instance = openapi_client.AccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | The Azure subscription identifier.
    api_version = 'api_version_example' # str | API Version
    resource_name = 'resource_name_example' # str | Name of the resource.

    try:
        # Accounts_Get
        api_response = api_instance.accounts_get(resource_group_name, subscription_id, api_version, resource_name)
        print("The response of AccountsApi->accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| The Azure subscription identifier. | 
 **api_version** | **str**| API Version | 
 **resource_name** | **str**| Name of the resource. | 

### Return type

[**AccountResource**](AccountResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation succeeded. The response contains the details of the Visual Studio Team Services account resource. |  -  |
**404** | The Visual Studio Team Services account does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_list_by_resource_group**
> AccountResourceListResult accounts_list_by_resource_group(resource_group_name, subscription_id, api_version)

Accounts_ListByResourceGroup

Gets all Visual Studio Team Services account resources under the resource group linked to the specified Azure subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.account_resource_list_result import AccountResourceListResult
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
    api_instance = openapi_client.AccountsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | The Azure subscription identifier.
    api_version = 'api_version_example' # str | API Version

    try:
        # Accounts_ListByResourceGroup
        api_response = api_instance.accounts_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of AccountsApi->accounts_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| The Azure subscription identifier. | 
 **api_version** | **str**| API Version | 

### Return type

[**AccountResourceListResult**](AccountResourceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation succeeded. The response contains the details of the Visual Studio Team Services account resources linked to the Azure subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

