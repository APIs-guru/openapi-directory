# openapi_client.ServerDnsAliasesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**server_dns_aliases_acquire**](ServerDnsAliasesApi.md#server_dns_aliases_acquire) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/dnsAliases/{dnsAliasName}/acquire | 
[**server_dns_aliases_create_or_update**](ServerDnsAliasesApi.md#server_dns_aliases_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/dnsAliases/{dnsAliasName} | 
[**server_dns_aliases_delete**](ServerDnsAliasesApi.md#server_dns_aliases_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/dnsAliases/{dnsAliasName} | 
[**server_dns_aliases_get**](ServerDnsAliasesApi.md#server_dns_aliases_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/dnsAliases/{dnsAliasName} | 
[**server_dns_aliases_list_by_server**](ServerDnsAliasesApi.md#server_dns_aliases_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/dnsAliases | 


# **server_dns_aliases_acquire**
> server_dns_aliases_acquire(resource_group_name, server_name, dns_alias_name, subscription_id, api_version, parameters)



Acquires server DNS alias from another server.

### Example


```python
import openapi_client
from openapi_client.models.server_dns_alias_acquisition import ServerDnsAliasAcquisition
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
    api_instance = openapi_client.ServerDnsAliasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server that the alias is pointing to.
    dns_alias_name = 'dns_alias_name_example' # str | The name of the server dns alias.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ServerDnsAliasAcquisition() # ServerDnsAliasAcquisition | 

    try:
        api_instance.server_dns_aliases_acquire(resource_group_name, server_name, dns_alias_name, subscription_id, api_version, parameters)
    except Exception as e:
        print("Exception when calling ServerDnsAliasesApi->server_dns_aliases_acquire: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server that the alias is pointing to. | 
 **dns_alias_name** | **str**| The name of the server dns alias. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ServerDnsAliasAcquisition**](ServerDnsAliasAcquisition.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully acquired server DNS alias. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 InvalidServerDnsAliasAcquireRequest - The acquire server DNS alias request body is empty or invalid (it should contain the old server alias id, for example: /subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/servers/dns-alias-old-server/dnsAliases/dns-alias-name-1).   * 400 ServerDnsAliasAcquireRequestInvalidOldServerDnsAliasId -    * 400 UnableToResolveRemoteServer -    * 400 ServerNotFound - The requested server was not found.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 TokenTooLong - The provided token is too long.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 InvalidServerName - Invalid server name specified.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceNotFound - The requested resource was not found.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 ServerDnsAliasAlreadyExists -    * 409 ServerDnsAliasAlreadyExists -    * 409 ServerDnsAliasBusy -    * 409 ServerDnsAliasDnsRecordInUse -    * 409 InvalidServerDnsAliasName -    * 409 SubscriptionDisabled - Subscription is disabled.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingServerOperation - An operation is currently in progress for the server.   * 429 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_dns_aliases_create_or_update**
> ServerDnsAlias server_dns_aliases_create_or_update(resource_group_name, server_name, dns_alias_name, subscription_id, api_version)



Creates a server dns alias.

### Example


```python
import openapi_client
from openapi_client.models.server_dns_alias import ServerDnsAlias
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
    api_instance = openapi_client.ServerDnsAliasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server that the alias is pointing to.
    dns_alias_name = 'dns_alias_name_example' # str | The name of the server DNS alias.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.server_dns_aliases_create_or_update(resource_group_name, server_name, dns_alias_name, subscription_id, api_version)
        print("The response of ServerDnsAliasesApi->server_dns_aliases_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerDnsAliasesApi->server_dns_aliases_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server that the alias is pointing to. | 
 **dns_alias_name** | **str**| The name of the server DNS alias. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ServerDnsAlias**](ServerDnsAlias.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The server DNS alias already exists. |  -  |
**201** | Successfully created a server DNS alias. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 InvalidServerDnsAliasAcquireRequest - The acquire server DNS alias request body is empty or invalid (it should contain the old server alias id, for example: /subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/servers/dns-alias-old-server/dnsAliases/dns-alias-name-1).   * 400 ServerDnsAliasAcquireRequestInvalidOldServerDnsAliasId -    * 400 UnableToResolveRemoteServer -    * 400 ServerNotFound - The requested server was not found.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 TokenTooLong - The provided token is too long.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 InvalidServerName - Invalid server name specified.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 409 ServerDnsAliasAlreadyExists -    * 409 ServerDnsAliasAlreadyExists -    * 409 ServerDnsAliasBusy -    * 409 ServerDnsAliasDnsRecordInUse -    * 409 InvalidServerDnsAliasName -    * 409 SubscriptionDisabled - Subscription is disabled.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingServerOperation - An operation is currently in progress for the server.   * 429 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_dns_aliases_delete**
> server_dns_aliases_delete(resource_group_name, server_name, dns_alias_name, subscription_id, api_version)



Deletes the server DNS alias with the given name.

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
    api_instance = openapi_client.ServerDnsAliasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server that the alias is pointing to.
    dns_alias_name = 'dns_alias_name_example' # str | The name of the server DNS alias.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.server_dns_aliases_delete(resource_group_name, server_name, dns_alias_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ServerDnsAliasesApi->server_dns_aliases_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server that the alias is pointing to. | 
 **dns_alias_name** | **str**| The name of the server DNS alias. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

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
**200** | Successfully deleted the server DNS alias. |  -  |
**202** | Accepted |  -  |
**204** | The specified server DNS alias does not exist. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_dns_aliases_get**
> ServerDnsAlias server_dns_aliases_get(resource_group_name, server_name, dns_alias_name, subscription_id, api_version)



Gets a server DNS alias.

### Example


```python
import openapi_client
from openapi_client.models.server_dns_alias import ServerDnsAlias
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
    api_instance = openapi_client.ServerDnsAliasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server that the alias is pointing to.
    dns_alias_name = 'dns_alias_name_example' # str | The name of the server DNS alias.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.server_dns_aliases_get(resource_group_name, server_name, dns_alias_name, subscription_id, api_version)
        print("The response of ServerDnsAliasesApi->server_dns_aliases_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerDnsAliasesApi->server_dns_aliases_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server that the alias is pointing to. | 
 **dns_alias_name** | **str**| The name of the server DNS alias. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ServerDnsAlias**](ServerDnsAlias.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified server DNS alias. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_dns_aliases_list_by_server**
> ServerDnsAliasListResult server_dns_aliases_list_by_server(resource_group_name, server_name, subscription_id, api_version)



Gets a list of server DNS aliases for a server.

### Example


```python
import openapi_client
from openapi_client.models.server_dns_alias_list_result import ServerDnsAliasListResult
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
    api_instance = openapi_client.ServerDnsAliasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server that the alias is pointing to.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.server_dns_aliases_list_by_server(resource_group_name, server_name, subscription_id, api_version)
        print("The response of ServerDnsAliasesApi->server_dns_aliases_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerDnsAliasesApi->server_dns_aliases_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server that the alias is pointing to. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ServerDnsAliasListResult**](ServerDnsAliasListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of server DNS aliases. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

