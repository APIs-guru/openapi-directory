# openapi_client.ServersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**servers_check_name_availability**](ServersApi.md#servers_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Sql/checkNameAvailability | 
[**servers_create_or_update**](ServersApi.md#servers_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName} | 
[**servers_delete**](ServersApi.md#servers_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName} | 
[**servers_get**](ServersApi.md#servers_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName} | 
[**servers_list**](ServersApi.md#servers_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Sql/servers | 
[**servers_list_by_resource_group**](ServersApi.md#servers_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers | 
[**servers_update**](ServersApi.md#servers_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName} | 


# **servers_check_name_availability**
> CheckNameAvailabilityResponse servers_check_name_availability(subscription_id, api_version, parameters)



Determines whether a resource can be created with the specified name.

### Example


```python
import openapi_client
from openapi_client.models.check_name_availability_request import CheckNameAvailabilityRequest
from openapi_client.models.check_name_availability_response import CheckNameAvailabilityResponse
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
    api_instance = openapi_client.ServersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.CheckNameAvailabilityRequest() # CheckNameAvailabilityRequest | The name availability request parameters.

    try:
        api_response = api_instance.servers_check_name_availability(subscription_id, api_version, parameters)
        print("The response of ServersApi->servers_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServersApi->servers_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**CheckNameAvailabilityRequest**](CheckNameAvailabilityRequest.md)| The name availability request parameters. | 

### Return type

[**CheckNameAvailabilityResponse**](CheckNameAvailabilityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully completed the availability check. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidNameAvailabilityRequest - The check name availability request is invalid.   * 400 UnknownNameType - Unknown resource type specified for a subscription level name availability check. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_create_or_update**
> Server servers_create_or_update(resource_group_name, server_name, subscription_id, api_version, parameters)



Creates or updates a server.

### Example


```python
import openapi_client
from openapi_client.models.server import Server
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
    api_instance = openapi_client.ServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.Server() # Server | The requested server resource state.

    try:
        api_response = api_instance.servers_create_or_update(resource_group_name, server_name, subscription_id, api_version, parameters)
        print("The response of ServersApi->servers_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServersApi->servers_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**Server**](Server.md)| The requested server resource state. | 

### Return type

[**Server**](Server.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the server. |  -  |
**201** | Successfully created the server. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 RegionDoesNotAllowProvisioning - The selected location is not accepting new Windows Azure SQL Database servers. This may change at a later time.   * 400 InvalidParameterValue - An invalid value was given to a parameter.   * 400 InvalidLoginName - The provided login name is invalid.   * 400 PasswordTooShort - The provided password is too short   * 400 PasswordTooLong - The provided password is too long.   * 400 NameAlreadyExists - The provided name already exists.   * 400 PasswordNotComplex - The provided password is not complex enough.   * 400 ProvisioningDisabled - Displays error message from resources operation authorizer as is, without changes   * 400 RegionDoesNotSupportVersion - A user attempted to create a server of a specified version in a location where that server version isn&#39;t supported.   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 TokenTooLong - The provided token is too long.   * 400 InvalidLocation - An invalid location was specified.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 ServerNotFound - The requested server was not found.   * 400 InvalidUsername - Supplied user name contains invalid characters.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ServerDisabled - Server is disabled.   * 409 ServerQuotaExceeded - Server cannot be added to a subscription because it will exceed quota.   * 409 ServerAlreadyExists - Duplicate server name.   * 409 ConflictingServerOperation - An operation is currently in progress for the server.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingSubscriptionOperation - An operation is currently in progress for the subscription.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_delete**
> servers_delete(resource_group_name, server_name, subscription_id, api_version)



Deletes a server.

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
    api_instance = openapi_client.ServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.servers_delete(resource_group_name, server_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ServersApi->servers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
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
**200** | Successfully deleted the server. |  -  |
**202** | Accepted |  -  |
**204** | The specified server does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 ConflictingServerOperation - An operation is currently in progress for the server.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_get**
> Server servers_get(resource_group_name, server_name, subscription_id, api_version)



Gets a server.

### Example


```python
import openapi_client
from openapi_client.models.server import Server
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
    api_instance = openapi_client.ServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.servers_get(resource_group_name, server_name, subscription_id, api_version)
        print("The response of ServersApi->servers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServersApi->servers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**Server**](Server.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified server. |  -  |
**0** | *** Error Responses: ***   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_list**
> ServerListResult servers_list(subscription_id, api_version)



Gets a list of all servers in the subscription.

### Example


```python
import openapi_client
from openapi_client.models.server_list_result import ServerListResult
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
    api_instance = openapi_client.ServersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.servers_list(subscription_id, api_version)
        print("The response of ServersApi->servers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServersApi->servers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ServerListResult**](ServerListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of servers. |  -  |
**0** | *** Error Responses: *** |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_list_by_resource_group**
> ServerListResult servers_list_by_resource_group(resource_group_name, subscription_id, api_version)



Gets a list of servers in a resource groups.

### Example


```python
import openapi_client
from openapi_client.models.server_list_result import ServerListResult
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
    api_instance = openapi_client.ServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.servers_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of ServersApi->servers_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServersApi->servers_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ServerListResult**](ServerListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of servers. |  -  |
**0** | *** Error Responses: *** |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servers_update**
> Server servers_update(resource_group_name, server_name, subscription_id, api_version, parameters)



Updates a server.

### Example


```python
import openapi_client
from openapi_client.models.server import Server
from openapi_client.models.server_update import ServerUpdate
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
    api_instance = openapi_client.ServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ServerUpdate() # ServerUpdate | The requested server resource state.

    try:
        api_response = api_instance.servers_update(resource_group_name, server_name, subscription_id, api_version, parameters)
        print("The response of ServersApi->servers_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServersApi->servers_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ServerUpdate**](ServerUpdate.md)| The requested server resource state. | 

### Return type

[**Server**](Server.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the server. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 RegionDoesNotAllowProvisioning - The selected location is not accepting new Windows Azure SQL Database servers. This may change at a later time.   * 400 InvalidParameterValue - An invalid value was given to a parameter.   * 400 InvalidLoginName - The provided login name is invalid.   * 400 PasswordTooShort - The provided password is too short   * 400 PasswordTooLong - The provided password is too long.   * 400 NameAlreadyExists - The provided name already exists.   * 400 PasswordNotComplex - The provided password is not complex enough.   * 400 ProvisioningDisabled - Displays error message from resources operation authorizer as is, without changes   * 400 RegionDoesNotSupportVersion - A user attempted to create a server of a specified version in a location where that server version isn&#39;t supported.   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 TokenTooLong - The provided token is too long.   * 400 InvalidLocation - An invalid location was specified.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 ServerNotFound - The requested server was not found.   * 400 InvalidUsername - Supplied user name contains invalid characters.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ServerDisabled - Server is disabled.   * 409 ServerQuotaExceeded - Server cannot be added to a subscription because it will exceed quota.   * 409 ServerAlreadyExists - Duplicate server name.   * 409 ConflictingServerOperation - An operation is currently in progress for the server.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingSubscriptionOperation - An operation is currently in progress for the subscription.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

