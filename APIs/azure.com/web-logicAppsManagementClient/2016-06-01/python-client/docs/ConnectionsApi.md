# openapi_client.ConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connections_confirm_consent_code**](ConnectionsApi.md#connections_confirm_consent_code) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName}/confirmConsentCode | Confirms the consent code for a connection
[**connections_create_or_update**](ConnectionsApi.md#connections_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName} | Replace an existing connection
[**connections_delete**](ConnectionsApi.md#connections_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName} | Delete an existing connection
[**connections_get**](ConnectionsApi.md#connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName} | Get a connection
[**connections_list**](ConnectionsApi.md#connections_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections | Get all connections
[**connections_list_consent_links**](ConnectionsApi.md#connections_list_consent_links) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName}/listConsentLinks | Lists consent links for a connection
[**connections_update**](ConnectionsApi.md#connections_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName} | Update an existing connection


# **connections_confirm_consent_code**
> ConfirmConsentCodeDefinition connections_confirm_consent_code(subscription_id, resource_group_name, connection_name, api_version, confirm_consent_code)

Confirms the consent code for a connection

Confirms consent code of a connection

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.confirm_consent_code_definition import ConfirmConsentCodeDefinition
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
    api_instance = openapi_client.ConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    connection_name = 'connection_name_example' # str | Connection name
    api_version = 'api_version_example' # str | API Version
    confirm_consent_code = openapi_client.ConfirmConsentCodeDefinition() # ConfirmConsentCodeDefinition | The consent code confirmation

    try:
        # Confirms the consent code for a connection
        api_response = api_instance.connections_confirm_consent_code(subscription_id, resource_group_name, connection_name, api_version, confirm_consent_code)
        print("The response of ConnectionsApi->connections_confirm_consent_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_confirm_consent_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **connection_name** | **str**| Connection name | 
 **api_version** | **str**| API Version | 
 **confirm_consent_code** | [**ConfirmConsentCodeDefinition**](ConfirmConsentCodeDefinition.md)| The consent code confirmation | 

### Return type

[**ConfirmConsentCodeDefinition**](ConfirmConsentCodeDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Confirmation of the consent code |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_create_or_update**
> ApiConnectionDefinition connections_create_or_update(subscription_id, resource_group_name, connection_name, api_version, connection)

Replace an existing connection

Creates or updates a connection

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_connection_definition import ApiConnectionDefinition
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
    api_instance = openapi_client.ConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    connection_name = 'connection_name_example' # str | Connection name
    api_version = 'api_version_example' # str | API Version
    connection = openapi_client.ApiConnectionDefinition() # ApiConnectionDefinition | The connection

    try:
        # Replace an existing connection
        api_response = api_instance.connections_create_or_update(subscription_id, resource_group_name, connection_name, api_version, connection)
        print("The response of ConnectionsApi->connections_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **connection_name** | **str**| Connection name | 
 **api_version** | **str**| API Version | 
 **connection** | [**ApiConnectionDefinition**](ApiConnectionDefinition.md)| The connection | 

### Return type

[**ApiConnectionDefinition**](ApiConnectionDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | New API connection created |  -  |
**201** | Already existing API connection updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_delete**
> connections_delete(subscription_id, resource_group_name, connection_name, api_version)

Delete an existing connection

Deletes a connection

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
    api_instance = openapi_client.ConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    connection_name = 'connection_name_example' # str | Connection name
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete an existing connection
        api_instance.connections_delete(subscription_id, resource_group_name, connection_name, api_version)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **connection_name** | **str**| Connection name | 
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
**200** | Successfully deleted the connection |  -  |
**204** | No connection to delete |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_get**
> ApiConnectionDefinition connections_get(subscription_id, resource_group_name, connection_name, api_version)

Get a connection

Get a specific connection

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_connection_definition import ApiConnectionDefinition
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
    api_instance = openapi_client.ConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    connection_name = 'connection_name_example' # str | Connection name
    api_version = 'api_version_example' # str | API Version

    try:
        # Get a connection
        api_response = api_instance.connections_get(subscription_id, resource_group_name, connection_name, api_version)
        print("The response of ConnectionsApi->connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **connection_name** | **str**| Connection name | 
 **api_version** | **str**| API Version | 

### Return type

[**ApiConnectionDefinition**](ApiConnectionDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An API connection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_list**
> ApiConnectionDefinitionCollection connections_list(subscription_id, resource_group_name, api_version, top=top, filter=filter)

Get all connections

Gets a list of connections

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_connection_definition_collection import ApiConnectionDefinitionCollection
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
    api_instance = openapi_client.ConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    api_version = 'api_version_example' # str | API Version
    top = 56 # int | The number of items to be included in the result (optional)
    filter = 'filter_example' # str | The filter to apply on the operation (optional)

    try:
        # Get all connections
        api_response = api_instance.connections_list(subscription_id, resource_group_name, api_version, top=top, filter=filter)
        print("The response of ConnectionsApi->connections_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **api_version** | **str**| API Version | 
 **top** | **int**| The number of items to be included in the result | [optional] 
 **filter** | **str**| The filter to apply on the operation | [optional] 

### Return type

[**ApiConnectionDefinitionCollection**](ApiConnectionDefinitionCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of API connection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_list_consent_links**
> ConsentLinkCollection connections_list_consent_links(subscription_id, resource_group_name, connection_name, api_version, list_consent_link)

Lists consent links for a connection

Lists the consent links of a connection

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.consent_link_collection import ConsentLinkCollection
from openapi_client.models.list_consent_links_definition import ListConsentLinksDefinition
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
    api_instance = openapi_client.ConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    connection_name = 'connection_name_example' # str | Connection name
    api_version = 'api_version_example' # str | API Version
    list_consent_link = openapi_client.ListConsentLinksDefinition() # ListConsentLinksDefinition | The consent links

    try:
        # Lists consent links for a connection
        api_response = api_instance.connections_list_consent_links(subscription_id, resource_group_name, connection_name, api_version, list_consent_link)
        print("The response of ConnectionsApi->connections_list_consent_links:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_list_consent_links: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **connection_name** | **str**| Connection name | 
 **api_version** | **str**| API Version | 
 **list_consent_link** | [**ListConsentLinksDefinition**](ListConsentLinksDefinition.md)| The consent links | 

### Return type

[**ConsentLinkCollection**](ConsentLinkCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the consent links |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_update**
> ApiConnectionDefinition connections_update(subscription_id, resource_group_name, connection_name, api_version, connection)

Update an existing connection

Updates a connection's tags

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_connection_definition import ApiConnectionDefinition
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
    api_instance = openapi_client.ConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    connection_name = 'connection_name_example' # str | Connection name
    api_version = 'api_version_example' # str | API Version
    connection = openapi_client.ApiConnectionDefinition() # ApiConnectionDefinition | The connection

    try:
        # Update an existing connection
        api_response = api_instance.connections_update(subscription_id, resource_group_name, connection_name, api_version, connection)
        print("The response of ConnectionsApi->connections_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **connection_name** | **str**| Connection name | 
 **api_version** | **str**| API Version | 
 **connection** | [**ApiConnectionDefinition**](ApiConnectionDefinition.md)| The connection | 

### Return type

[**ApiConnectionDefinition**](ApiConnectionDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API connection updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

