# openapi_client.ConnectionGatewaysApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connection_gateway_installations_get**](ConnectionGatewaysApi.md#connection_gateway_installations_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/connectionGatewayInstallations/{gatewayId} | Gets an installed gateway that the user is an admin of
[**connection_gateway_installations_list**](ConnectionGatewaysApi.md#connection_gateway_installations_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/connectionGatewayInstallations | Gets a list of installed gateways that the user is an admin of
[**connection_gateways_create_or_update**](ConnectionGatewaysApi.md#connection_gateways_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connectionGateways/{connectionGatewayName} | Replaces a specific gateway
[**connection_gateways_delete**](ConnectionGatewaysApi.md#connection_gateways_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connectionGateways/{connectionGatewayName} | Deletes a specific gateway
[**connection_gateways_get**](ConnectionGatewaysApi.md#connection_gateways_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connectionGateways/{connectionGatewayName} | Gets a specific gateway
[**connection_gateways_list**](ConnectionGatewaysApi.md#connection_gateways_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/connectionGateways | Lists all of the connection gateways
[**connection_gateways_list_by_resource_group**](ConnectionGatewaysApi.md#connection_gateways_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connectionGateways | Lists all of the connection gateways
[**connection_gateways_update**](ConnectionGatewaysApi.md#connection_gateways_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connectionGateways/{connectionGatewayName} | Updates a specific gateway


# **connection_gateway_installations_get**
> ConnectionGatewayInstallationDefinition connection_gateway_installations_get(subscription_id, location, gateway_id, api_version)

Gets an installed gateway that the user is an admin of

Get a specific installed gateway that the user is an admin of, in a specific subscription and at a certain location

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_gateway_installation_definition import ConnectionGatewayInstallationDefinition
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
    api_instance = openapi_client.ConnectionGatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    location = 'location_example' # str | The location
    gateway_id = 'gateway_id_example' # str | Gateway ID
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets an installed gateway that the user is an admin of
        api_response = api_instance.connection_gateway_installations_get(subscription_id, location, gateway_id, api_version)
        print("The response of ConnectionGatewaysApi->connection_gateway_installations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionGatewaysApi->connection_gateway_installations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **location** | **str**| The location | 
 **gateway_id** | **str**| Gateway ID | 
 **api_version** | **str**| API Version | 

### Return type

[**ConnectionGatewayInstallationDefinition**](ConnectionGatewayInstallationDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The gateway installation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connection_gateway_installations_list**
> ConnectionGatewayInstallationDefinitionCollection connection_gateway_installations_list(subscription_id, location, api_version)

Gets a list of installed gateways that the user is an admin of

Gets a list of installed gateways that the user is an admin of, in a specific subscription and at a certain location

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_gateway_installation_definition_collection import ConnectionGatewayInstallationDefinitionCollection
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
    api_instance = openapi_client.ConnectionGatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    location = 'location_example' # str | The location
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets a list of installed gateways that the user is an admin of
        api_response = api_instance.connection_gateway_installations_list(subscription_id, location, api_version)
        print("The response of ConnectionGatewaysApi->connection_gateway_installations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionGatewaysApi->connection_gateway_installations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **location** | **str**| The location | 
 **api_version** | **str**| API Version | 

### Return type

[**ConnectionGatewayInstallationDefinitionCollection**](ConnectionGatewayInstallationDefinitionCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The gateway installations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connection_gateways_create_or_update**
> ConnectionGatewayDefinition connection_gateways_create_or_update(subscription_id, resource_group_name, connection_gateway_name, api_version, connection_gateway)

Replaces a specific gateway

Creates or updates a specific gateway for under a subscription and in a specific resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_gateway_definition import ConnectionGatewayDefinition
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
    api_instance = openapi_client.ConnectionGatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    connection_gateway_name = 'connection_gateway_name_example' # str | The connection gateway name
    api_version = 'api_version_example' # str | API Version
    connection_gateway = openapi_client.ConnectionGatewayDefinition() # ConnectionGatewayDefinition | The connection gateway

    try:
        # Replaces a specific gateway
        api_response = api_instance.connection_gateways_create_or_update(subscription_id, resource_group_name, connection_gateway_name, api_version, connection_gateway)
        print("The response of ConnectionGatewaysApi->connection_gateways_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionGatewaysApi->connection_gateways_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **connection_gateway_name** | **str**| The connection gateway name | 
 **api_version** | **str**| API Version | 
 **connection_gateway** | [**ConnectionGatewayDefinition**](ConnectionGatewayDefinition.md)| The connection gateway | 

### Return type

[**ConnectionGatewayDefinition**](ConnectionGatewayDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated gateway definition |  -  |
**201** | The newly created gateway definition |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connection_gateways_delete**
> connection_gateways_delete(subscription_id, resource_group_name, connection_gateway_name, api_version)

Deletes a specific gateway

Deletes a specific gateway for under a subscription and in a specific resource group

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
    api_instance = openapi_client.ConnectionGatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    connection_gateway_name = 'connection_gateway_name_example' # str | The connection gateway name
    api_version = 'api_version_example' # str | API Version

    try:
        # Deletes a specific gateway
        api_instance.connection_gateways_delete(subscription_id, resource_group_name, connection_gateway_name, api_version)
    except Exception as e:
        print("Exception when calling ConnectionGatewaysApi->connection_gateways_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **connection_gateway_name** | **str**| The connection gateway name | 
 **api_version** | **str**| API Version | 

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
**200** | Successfully deleted the connection gateway |  -  |
**204** | No connection gateway to delete |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connection_gateways_get**
> ConnectionGatewayDefinition connection_gateways_get(subscription_id, resource_group_name, connection_gateway_name, api_version)

Gets a specific gateway

Gets a specific gateway under a subscription and in a specific resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_gateway_definition import ConnectionGatewayDefinition
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
    api_instance = openapi_client.ConnectionGatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    connection_gateway_name = 'connection_gateway_name_example' # str | The connection gateway name
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets a specific gateway
        api_response = api_instance.connection_gateways_get(subscription_id, resource_group_name, connection_gateway_name, api_version)
        print("The response of ConnectionGatewaysApi->connection_gateways_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionGatewaysApi->connection_gateways_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **connection_gateway_name** | **str**| The connection gateway name | 
 **api_version** | **str**| API Version | 

### Return type

[**ConnectionGatewayDefinition**](ConnectionGatewayDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The gateway definition |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connection_gateways_list**
> ConnectionGatewayDefinitionCollection connection_gateways_list(subscription_id, api_version)

Lists all of the connection gateways

Gets a list of gateways under a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_gateway_definition_collection import ConnectionGatewayDefinitionCollection
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
    api_instance = openapi_client.ConnectionGatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Lists all of the connection gateways
        api_response = api_instance.connection_gateways_list(subscription_id, api_version)
        print("The response of ConnectionGatewaysApi->connection_gateways_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionGatewaysApi->connection_gateways_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**ConnectionGatewayDefinitionCollection**](ConnectionGatewayDefinitionCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The gateway definitions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connection_gateways_list_by_resource_group**
> ConnectionGatewayDefinitionCollection connection_gateways_list_by_resource_group(subscription_id, resource_group_name, api_version)

Lists all of the connection gateways

Gets a list of gateways under a subscription and in a specific resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_gateway_definition_collection import ConnectionGatewayDefinitionCollection
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
    api_instance = openapi_client.ConnectionGatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    api_version = 'api_version_example' # str | API Version

    try:
        # Lists all of the connection gateways
        api_response = api_instance.connection_gateways_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of ConnectionGatewaysApi->connection_gateways_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionGatewaysApi->connection_gateways_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **api_version** | **str**| API Version | 

### Return type

[**ConnectionGatewayDefinitionCollection**](ConnectionGatewayDefinitionCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The gateway definitions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connection_gateways_update**
> ConnectionGatewayDefinition connection_gateways_update(subscription_id, resource_group_name, connection_gateway_name, api_version, connection_gateway)

Updates a specific gateway

Updates a connection gateway's tags

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_gateway_definition import ConnectionGatewayDefinition
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
    api_instance = openapi_client.ConnectionGatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    connection_gateway_name = 'connection_gateway_name_example' # str | The connection gateway name
    api_version = 'api_version_example' # str | API Version
    connection_gateway = openapi_client.ConnectionGatewayDefinition() # ConnectionGatewayDefinition | The connection gateway

    try:
        # Updates a specific gateway
        api_response = api_instance.connection_gateways_update(subscription_id, resource_group_name, connection_gateway_name, api_version, connection_gateway)
        print("The response of ConnectionGatewaysApi->connection_gateways_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionGatewaysApi->connection_gateways_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **connection_gateway_name** | **str**| The connection gateway name | 
 **api_version** | **str**| API Version | 
 **connection_gateway** | [**ConnectionGatewayDefinition**](ConnectionGatewayDefinition.md)| The connection gateway | 

### Return type

[**ConnectionGatewayDefinition**](ConnectionGatewayDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The gateway definition |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

