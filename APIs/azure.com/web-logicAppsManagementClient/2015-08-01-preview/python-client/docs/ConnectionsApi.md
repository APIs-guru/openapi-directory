# openapi_client.ConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connections_confirm_consent_code**](ConnectionsApi.md#connections_confirm_consent_code) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName}/confirmConsentCode | 
[**connections_create_or_update**](ConnectionsApi.md#connections_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName} | 
[**connections_delete**](ConnectionsApi.md#connections_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName} | 
[**connections_get**](ConnectionsApi.md#connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName} | 
[**connections_list**](ConnectionsApi.md#connections_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections | Get Connections
[**connections_list_connection_keys**](ConnectionsApi.md#connections_list_connection_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName}/listConnectionKeys | 
[**connections_list_consent_links**](ConnectionsApi.md#connections_list_consent_links) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/connections/{connectionName}/listConsentLinks | 


# **connections_confirm_consent_code**
> Connection connections_confirm_consent_code(subscription_id, resource_group_name, connection_name, api_version, content)



Confirms consent code of a connection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.confirm_consent_code_input import ConfirmConsentCodeInput
from openapi_client.models.connection import Connection
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
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    connection_name = 'connection_name_example' # str | The connection name.
    api_version = 'api_version_example' # str | API Version
    content = openapi_client.ConfirmConsentCodeInput() # ConfirmConsentCodeInput | The content.

    try:
        api_response = api_instance.connections_confirm_consent_code(subscription_id, resource_group_name, connection_name, api_version, content)
        print("The response of ConnectionsApi->connections_confirm_consent_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_confirm_consent_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group name. | 
 **connection_name** | **str**| The connection name. | 
 **api_version** | **str**| API Version | 
 **content** | [**ConfirmConsentCodeInput**](ConfirmConsentCodeInput.md)| The content. | 

### Return type

[**Connection**](Connection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_create_or_update**
> Connection connections_create_or_update(subscription_id, resource_group_name, connection_name, api_version, connection)



Creates or updates a connection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection import Connection
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
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    connection_name = 'connection_name_example' # str | The connection name.
    api_version = 'api_version_example' # str | API Version
    connection = openapi_client.Connection() # Connection | The connection.

    try:
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
 **resource_group_name** | **str**| The resource group name. | 
 **connection_name** | **str**| The connection name. | 
 **api_version** | **str**| API Version | 
 **connection** | [**Connection**](Connection.md)| The connection. | 

### Return type

[**Connection**](Connection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_delete**
> connections_delete(subscription_id, resource_group_name, connection_name, api_version)



Deletes a connection.

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
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    connection_name = 'connection_name_example' # str | The connection name.
    api_version = 'api_version_example' # str | API Version

    try:
        api_instance.connections_delete(subscription_id, resource_group_name, connection_name, api_version)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group name. | 
 **connection_name** | **str**| The connection name. | 
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
**200** | OK |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_get**
> Connection connections_get(subscription_id, resource_group_name, connection_name, api_version)



Gets a connection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection import Connection
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
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    connection_name = 'connection_name_example' # str | The connection name.
    api_version = 'api_version_example' # str | API Version

    try:
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
 **resource_group_name** | **str**| The resource group name. | 
 **connection_name** | **str**| The connection name. | 
 **api_version** | **str**| API Version | 

### Return type

[**Connection**](Connection.md)

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

# **connections_list**
> ConnectionCollection connections_list(resource_group_name, subscription_id, api_version, top=top, filter=filter)

Get Connections

Gets a list of connections.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_collection import ConnectionCollection
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
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    top = 56 # int | The number of items to be included in the result. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        # Get Connections
        api_response = api_instance.connections_list(resource_group_name, subscription_id, api_version, top=top, filter=filter)
        print("The response of ConnectionsApi->connections_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Resource Group Name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **top** | **int**| The number of items to be included in the result. | [optional] 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**ConnectionCollection**](ConnectionCollection.md)

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

# **connections_list_connection_keys**
> ConnectionSecrets connections_list_connection_keys(subscription_id, resource_group_name, connection_name, api_version, content)



Lists connection keys.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_secrets import ConnectionSecrets
from openapi_client.models.list_connection_keys_input import ListConnectionKeysInput
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
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    connection_name = 'connection_name_example' # str | The connection name.
    api_version = 'api_version_example' # str | API Version
    content = openapi_client.ListConnectionKeysInput() # ListConnectionKeysInput | The content.

    try:
        api_response = api_instance.connections_list_connection_keys(subscription_id, resource_group_name, connection_name, api_version, content)
        print("The response of ConnectionsApi->connections_list_connection_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_list_connection_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group name. | 
 **connection_name** | **str**| The connection name. | 
 **api_version** | **str**| API Version | 
 **content** | [**ListConnectionKeysInput**](ListConnectionKeysInput.md)| The content. | 

### Return type

[**ConnectionSecrets**](ConnectionSecrets.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_list_consent_links**
> ConsentLinkPayload connections_list_consent_links(subscription_id, resource_group_name, connection_name, api_version, content)



Lists consent links of a connection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.consent_link_input import ConsentLinkInput
from openapi_client.models.consent_link_payload import ConsentLinkPayload
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
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    connection_name = 'connection_name_example' # str | The connection name.
    api_version = 'api_version_example' # str | API Version
    content = openapi_client.ConsentLinkInput() # ConsentLinkInput | The content.

    try:
        api_response = api_instance.connections_list_consent_links(subscription_id, resource_group_name, connection_name, api_version, content)
        print("The response of ConnectionsApi->connections_list_consent_links:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_list_consent_links: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group name. | 
 **connection_name** | **str**| The connection name. | 
 **api_version** | **str**| API Version | 
 **content** | [**ConsentLinkInput**](ConsentLinkInput.md)| The content. | 

### Return type

[**ConsentLinkPayload**](ConsentLinkPayload.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

