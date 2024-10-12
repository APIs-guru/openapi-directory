# openapi_client.ServerAzureADAdministratorsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**server_azure_ad_administrators_create_or_update**](ServerAzureADAdministratorsApi.md#server_azure_ad_administrators_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/administrators/{administratorName} | 
[**server_azure_ad_administrators_delete**](ServerAzureADAdministratorsApi.md#server_azure_ad_administrators_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/administrators/{administratorName} | 
[**server_azure_ad_administrators_get**](ServerAzureADAdministratorsApi.md#server_azure_ad_administrators_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/administrators/{administratorName} | 
[**server_azure_ad_administrators_list_by_server**](ServerAzureADAdministratorsApi.md#server_azure_ad_administrators_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/administrators | 


# **server_azure_ad_administrators_create_or_update**
> ServerAzureADAdministrator server_azure_ad_administrators_create_or_update(api_version, subscription_id, resource_group_name, server_name, administrator_name, parameters)



Creates a new Server Active Directory Administrator or updates an existing server Active Directory Administrator.

### Example


```python
import openapi_client
from openapi_client.models.server_azure_ad_administrator import ServerAzureADAdministrator
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ServerAzureADAdministratorsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    administrator_name = 'administrator_name_example' # str | 
    parameters = openapi_client.ServerAzureADAdministrator() # ServerAzureADAdministrator | The required parameters for creating or updating an Active Directory Administrator.

    try:
        api_response = api_instance.server_azure_ad_administrators_create_or_update(api_version, subscription_id, resource_group_name, server_name, administrator_name, parameters)
        print("The response of ServerAzureADAdministratorsApi->server_azure_ad_administrators_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerAzureADAdministratorsApi->server_azure_ad_administrators_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **administrator_name** | **str**|  | 
 **parameters** | [**ServerAzureADAdministrator**](ServerAzureADAdministrator.md)| The required parameters for creating or updating an Active Directory Administrator. | 

### Return type

[**ServerAzureADAdministrator**](ServerAzureADAdministrator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated a Azure Active Directory administrator. |  -  |
**201** | Successfully created a Azure Active Directory administrator. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_azure_ad_administrators_delete**
> server_azure_ad_administrators_delete(api_version, subscription_id, resource_group_name, server_name, administrator_name)



Deletes an existing server Active Directory Administrator.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ServerAzureADAdministratorsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    administrator_name = 'administrator_name_example' # str | The name of server active directory administrator.

    try:
        api_instance.server_azure_ad_administrators_delete(api_version, subscription_id, resource_group_name, server_name, administrator_name)
    except Exception as e:
        print("Exception when calling ServerAzureADAdministratorsApi->server_azure_ad_administrators_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **administrator_name** | **str**| The name of server active directory administrator. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted the Azure Active Directory administrator. |  -  |
**202** | Accepted |  -  |
**204** | The specified Azure Active Directory administrator does not exist. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_azure_ad_administrators_get**
> ServerAzureADAdministrator server_azure_ad_administrators_get(api_version, subscription_id, resource_group_name, server_name, administrator_name)



Gets a server Administrator.

### Example


```python
import openapi_client
from openapi_client.models.server_azure_ad_administrator import ServerAzureADAdministrator
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ServerAzureADAdministratorsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    administrator_name = 'administrator_name_example' # str | The name of server active directory administrator.

    try:
        api_response = api_instance.server_azure_ad_administrators_get(api_version, subscription_id, resource_group_name, server_name, administrator_name)
        print("The response of ServerAzureADAdministratorsApi->server_azure_ad_administrators_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerAzureADAdministratorsApi->server_azure_ad_administrators_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **administrator_name** | **str**| The name of server active directory administrator. | 

### Return type

[**ServerAzureADAdministrator**](ServerAzureADAdministrator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved a specified Azure Active Directory administrator. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_azure_ad_administrators_list_by_server**
> AdministratorListResult server_azure_ad_administrators_list_by_server(api_version, subscription_id, resource_group_name, server_name)



Gets a list of server Administrators.

### Example


```python
import openapi_client
from openapi_client.models.administrator_list_result import AdministratorListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ServerAzureADAdministratorsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.

    try:
        api_response = api_instance.server_azure_ad_administrators_list_by_server(api_version, subscription_id, resource_group_name, server_name)
        print("The response of ServerAzureADAdministratorsApi->server_azure_ad_administrators_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerAzureADAdministratorsApi->server_azure_ad_administrators_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 

### Return type

[**AdministratorListResult**](AdministratorListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of Azure Active Directory administrators. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

