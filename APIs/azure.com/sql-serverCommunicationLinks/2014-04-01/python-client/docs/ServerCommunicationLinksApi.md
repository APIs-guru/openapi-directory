# openapi_client.ServerCommunicationLinksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**server_communication_links_create_or_update**](ServerCommunicationLinksApi.md#server_communication_links_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/communicationLinks/{communicationLinkName} | 
[**server_communication_links_delete**](ServerCommunicationLinksApi.md#server_communication_links_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/communicationLinks/{communicationLinkName} | 
[**server_communication_links_get**](ServerCommunicationLinksApi.md#server_communication_links_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/communicationLinks/{communicationLinkName} | 
[**server_communication_links_list_by_server**](ServerCommunicationLinksApi.md#server_communication_links_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/communicationLinks | 


# **server_communication_links_create_or_update**
> ServerCommunicationLink server_communication_links_create_or_update(api_version, subscription_id, resource_group_name, server_name, communication_link_name, parameters)



Creates a server communication link.

### Example


```python
import openapi_client
from openapi_client.models.server_communication_link import ServerCommunicationLink
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
    api_instance = openapi_client.ServerCommunicationLinksApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    communication_link_name = 'communication_link_name_example' # str | The name of the server communication link.
    parameters = openapi_client.ServerCommunicationLink() # ServerCommunicationLink | The required parameters for creating a server communication link.

    try:
        api_response = api_instance.server_communication_links_create_or_update(api_version, subscription_id, resource_group_name, server_name, communication_link_name, parameters)
        print("The response of ServerCommunicationLinksApi->server_communication_links_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerCommunicationLinksApi->server_communication_links_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **communication_link_name** | **str**| The name of the server communication link. | 
 **parameters** | [**ServerCommunicationLink**](ServerCommunicationLink.md)| The required parameters for creating a server communication link. | 

### Return type

[**ServerCommunicationLink**](ServerCommunicationLink.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_communication_links_delete**
> server_communication_links_delete(api_version, subscription_id, resource_group_name, server_name, communication_link_name)



Deletes a server communication link.

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
    api_instance = openapi_client.ServerCommunicationLinksApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    communication_link_name = 'communication_link_name_example' # str | The name of the server communication link.

    try:
        api_instance.server_communication_links_delete(api_version, subscription_id, resource_group_name, server_name, communication_link_name)
    except Exception as e:
        print("Exception when calling ServerCommunicationLinksApi->server_communication_links_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **communication_link_name** | **str**| The name of the server communication link. | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_communication_links_get**
> ServerCommunicationLink server_communication_links_get(api_version, subscription_id, resource_group_name, server_name, communication_link_name)



Returns a server communication link.

### Example


```python
import openapi_client
from openapi_client.models.server_communication_link import ServerCommunicationLink
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
    api_instance = openapi_client.ServerCommunicationLinksApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    communication_link_name = 'communication_link_name_example' # str | The name of the server communication link.

    try:
        api_response = api_instance.server_communication_links_get(api_version, subscription_id, resource_group_name, server_name, communication_link_name)
        print("The response of ServerCommunicationLinksApi->server_communication_links_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerCommunicationLinksApi->server_communication_links_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **communication_link_name** | **str**| The name of the server communication link. | 

### Return type

[**ServerCommunicationLink**](ServerCommunicationLink.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_communication_links_list_by_server**
> ServerCommunicationLinkListResult server_communication_links_list_by_server(api_version, subscription_id, resource_group_name, server_name)



Gets a list of server communication links.

### Example


```python
import openapi_client
from openapi_client.models.server_communication_link_list_result import ServerCommunicationLinkListResult
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
    api_instance = openapi_client.ServerCommunicationLinksApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.

    try:
        api_response = api_instance.server_communication_links_list_by_server(api_version, subscription_id, resource_group_name, server_name)
        print("The response of ServerCommunicationLinksApi->server_communication_links_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerCommunicationLinksApi->server_communication_links_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 

### Return type

[**ServerCommunicationLinkListResult**](ServerCommunicationLinkListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

