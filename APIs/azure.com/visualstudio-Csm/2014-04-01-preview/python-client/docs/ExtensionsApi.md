# openapi_client.ExtensionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**extensions_create**](ExtensionsApi.md#extensions_create) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{accountResourceName}/extension/{extensionResourceName} | Extensions_Create
[**extensions_delete**](ExtensionsApi.md#extensions_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{accountResourceName}/extension/{extensionResourceName} | Extensions_Delete
[**extensions_get**](ExtensionsApi.md#extensions_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{accountResourceName}/extension/{extensionResourceName} | Extensions_Get
[**extensions_list_by_account**](ExtensionsApi.md#extensions_list_by_account) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{accountResourceName}/extension | Extensions_ListByAccount
[**extensions_update**](ExtensionsApi.md#extensions_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{accountResourceName}/extension/{extensionResourceName} | Extensions_Update


# **extensions_create**
> ExtensionResource extensions_create(resource_group_name, subscription_id, api_version, account_resource_name, extension_resource_name, body)

Extensions_Create

Registers the extension with a Visual Studio Team Services account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.extension_resource import ExtensionResource
from openapi_client.models.extension_resource_request import ExtensionResourceRequest
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
    api_instance = openapi_client.ExtensionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | The Azure subscription identifier.
    api_version = 'api_version_example' # str | API Version
    account_resource_name = 'account_resource_name_example' # str | The name of the Visual Studio Team Services account resource.
    extension_resource_name = 'extension_resource_name_example' # str | The name of the extension.
    body = openapi_client.ExtensionResourceRequest() # ExtensionResourceRequest | An object containing additional information related to the extension request.

    try:
        # Extensions_Create
        api_response = api_instance.extensions_create(resource_group_name, subscription_id, api_version, account_resource_name, extension_resource_name, body)
        print("The response of ExtensionsApi->extensions_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExtensionsApi->extensions_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| The Azure subscription identifier. | 
 **api_version** | **str**| API Version | 
 **account_resource_name** | **str**| The name of the Visual Studio Team Services account resource. | 
 **extension_resource_name** | **str**| The name of the extension. | 
 **body** | [**ExtensionResourceRequest**](ExtensionResourceRequest.md)| An object containing additional information related to the extension request. | 

### Return type

[**ExtensionResource**](ExtensionResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation succeeded. The extension resource was created for the specified account. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extensions_delete**
> extensions_delete(resource_group_name, subscription_id, api_version, account_resource_name, extension_resource_name)

Extensions_Delete

Removes an extension resource registration for a Visual Studio Team Services account.

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
    api_instance = openapi_client.ExtensionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | The Azure subscription identifier.
    api_version = 'api_version_example' # str | API Version
    account_resource_name = 'account_resource_name_example' # str | The name of the Visual Studio Team Services account resource.
    extension_resource_name = 'extension_resource_name_example' # str | The name of the extension.

    try:
        # Extensions_Delete
        api_instance.extensions_delete(resource_group_name, subscription_id, api_version, account_resource_name, extension_resource_name)
    except Exception as e:
        print("Exception when calling ExtensionsApi->extensions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| The Azure subscription identifier. | 
 **api_version** | **str**| API Version | 
 **account_resource_name** | **str**| The name of the Visual Studio Team Services account resource. | 
 **extension_resource_name** | **str**| The name of the extension. | 

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
**200** | The operation succeeded. The extension resource has been deleted for the specified account. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extensions_get**
> ExtensionResource extensions_get(resource_group_name, subscription_id, api_version, account_resource_name, extension_resource_name)

Extensions_Get

Gets the details of an extension associated with a Visual Studio Team Services account resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.extension_resource import ExtensionResource
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
    api_instance = openapi_client.ExtensionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | The Azure subscription identifier.
    api_version = 'api_version_example' # str | API Version
    account_resource_name = 'account_resource_name_example' # str | The name of the Visual Studio Team Services account resource.
    extension_resource_name = 'extension_resource_name_example' # str | The name of the extension.

    try:
        # Extensions_Get
        api_response = api_instance.extensions_get(resource_group_name, subscription_id, api_version, account_resource_name, extension_resource_name)
        print("The response of ExtensionsApi->extensions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExtensionsApi->extensions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| The Azure subscription identifier. | 
 **api_version** | **str**| API Version | 
 **account_resource_name** | **str**| The name of the Visual Studio Team Services account resource. | 
 **extension_resource_name** | **str**| The name of the extension. | 

### Return type

[**ExtensionResource**](ExtensionResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation succeeded. The response contains the extension resource details for the specified account. |  -  |
**404** | The specified extension has no plans defined. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extensions_list_by_account**
> ExtensionResourceListResult extensions_list_by_account(resource_group_name, subscription_id, api_version, account_resource_name)

Extensions_ListByAccount

Gets the details of the extension resources created within the resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.extension_resource_list_result import ExtensionResourceListResult
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
    api_instance = openapi_client.ExtensionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | The Azure subscription identifier.
    api_version = 'api_version_example' # str | API Version
    account_resource_name = 'account_resource_name_example' # str | The name of the Visual Studio Team Services account resource.

    try:
        # Extensions_ListByAccount
        api_response = api_instance.extensions_list_by_account(resource_group_name, subscription_id, api_version, account_resource_name)
        print("The response of ExtensionsApi->extensions_list_by_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExtensionsApi->extensions_list_by_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| The Azure subscription identifier. | 
 **api_version** | **str**| API Version | 
 **account_resource_name** | **str**| The name of the Visual Studio Team Services account resource. | 

### Return type

[**ExtensionResourceListResult**](ExtensionResourceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation succeeded. The response contains all extension resource details for the specified account. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extensions_update**
> ExtensionResource extensions_update(resource_group_name, subscription_id, api_version, account_resource_name, extension_resource_name, body)

Extensions_Update

Updates an existing extension registration for the Visual Studio Team Services account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.extension_resource import ExtensionResource
from openapi_client.models.extension_resource_request import ExtensionResourceRequest
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
    api_instance = openapi_client.ExtensionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | The Azure subscription identifier.
    api_version = 'api_version_example' # str | API Version
    account_resource_name = 'account_resource_name_example' # str | The name of the Visual Studio Team Services account resource.
    extension_resource_name = 'extension_resource_name_example' # str | The name of the extension.
    body = openapi_client.ExtensionResourceRequest() # ExtensionResourceRequest | An object containing additional information related to the extension request.

    try:
        # Extensions_Update
        api_response = api_instance.extensions_update(resource_group_name, subscription_id, api_version, account_resource_name, extension_resource_name, body)
        print("The response of ExtensionsApi->extensions_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExtensionsApi->extensions_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| The Azure subscription identifier. | 
 **api_version** | **str**| API Version | 
 **account_resource_name** | **str**| The name of the Visual Studio Team Services account resource. | 
 **extension_resource_name** | **str**| The name of the extension. | 
 **body** | [**ExtensionResourceRequest**](ExtensionResourceRequest.md)| An object containing additional information related to the extension request. | 

### Return type

[**ExtensionResource**](ExtensionResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation succeeded. The extension resource was updated for the specified account. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

