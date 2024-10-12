# openapi_client.ServerAdministratorsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**server_administrators_create_or_update**](ServerAdministratorsApi.md#server_administrators_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/Administrators/activeDirectory | 
[**server_administrators_delete**](ServerAdministratorsApi.md#server_administrators_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/Administrators/activeDirectory | 
[**server_administrators_get**](ServerAdministratorsApi.md#server_administrators_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/Administrators/activeDirectory | 
[**server_administrators_list_by_server**](ServerAdministratorsApi.md#server_administrators_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/administrators | 


# **server_administrators_create_or_update**
> ServerAdministratorResource server_administrators_create_or_update(api_version, subscription_id, resource_group_name, server_name, properties)



Creates or update active directory administrator on an existing server. The update action will overwrite the existing administrator.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_administrator_resource import ServerAdministratorResource
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
    api_instance = openapi_client.ServerAdministratorsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    properties = openapi_client.ServerAdministratorResource() # ServerAdministratorResource | The required parameters for creating or updating an AAD server administrator.

    try:
        api_response = api_instance.server_administrators_create_or_update(api_version, subscription_id, resource_group_name, server_name, properties)
        print("The response of ServerAdministratorsApi->server_administrators_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerAdministratorsApi->server_administrators_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **properties** | [**ServerAdministratorResource**](ServerAdministratorResource.md)| The required parameters for creating or updating an AAD server administrator. | 

### Return type

[**ServerAdministratorResource**](ServerAdministratorResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_administrators_delete**
> ServerAdministratorResource server_administrators_delete(api_version, subscription_id, resource_group_name, server_name)



Deletes AAD Administrator.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_administrator_resource import ServerAdministratorResource
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
    api_instance = openapi_client.ServerAdministratorsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.

    try:
        api_response = api_instance.server_administrators_delete(api_version, subscription_id, resource_group_name, server_name)
        print("The response of ServerAdministratorsApi->server_administrators_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerAdministratorsApi->server_administrators_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 

### Return type

[**ServerAdministratorResource**](ServerAdministratorResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | NoContent |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_administrators_get**
> ServerAdministratorResource server_administrators_get(api_version, subscription_id, resource_group_name, server_name)



Gets information about a AAD server administrator.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_administrator_resource import ServerAdministratorResource
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
    api_instance = openapi_client.ServerAdministratorsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.

    try:
        api_response = api_instance.server_administrators_get(api_version, subscription_id, resource_group_name, server_name)
        print("The response of ServerAdministratorsApi->server_administrators_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerAdministratorsApi->server_administrators_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 

### Return type

[**ServerAdministratorResource**](ServerAdministratorResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_administrators_list_by_server**
> ServerAdministratorResourceListResult server_administrators_list_by_server(api_version, subscription_id, resource_group_name, server_name)



Returns a list of server Administrators.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_administrator_resource_list_result import ServerAdministratorResourceListResult
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
    api_instance = openapi_client.ServerAdministratorsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.

    try:
        api_response = api_instance.server_administrators_list_by_server(api_version, subscription_id, resource_group_name, server_name)
        print("The response of ServerAdministratorsApi->server_administrators_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerAdministratorsApi->server_administrators_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 

### Return type

[**ServerAdministratorResourceListResult**](ServerAdministratorResourceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

