# openapi_client.BotConnectionApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bot_connection_create**](BotConnectionApi.md#bot_connection_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/Connections/{connectionName} | 
[**bot_connection_delete**](BotConnectionApi.md#bot_connection_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/Connections/{connectionName} | 
[**bot_connection_get**](BotConnectionApi.md#bot_connection_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/Connections/{connectionName} | 
[**bot_connection_list_by_bot_service**](BotConnectionApi.md#bot_connection_list_by_bot_service) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/connections | 
[**bot_connection_list_with_secrets**](BotConnectionApi.md#bot_connection_list_with_secrets) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/Connections/{connectionName}/listWithSecrets | 
[**bot_connection_update**](BotConnectionApi.md#bot_connection_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/Connections/{connectionName} | 


# **bot_connection_create**
> ConnectionSetting bot_connection_create(resource_group_name, resource_name, connection_name, api_version, subscription_id, parameters)



Register a new Auth Connection for a Bot Service

### Example


```python
import openapi_client
from openapi_client.models.connection_setting import ConnectionSetting
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
    api_instance = openapi_client.BotConnectionApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Bot resource group in the user subscription.
    resource_name = 'resource_name_example' # str | The name of the Bot resource.
    connection_name = 'connection_name_example' # str | The name of the Bot Service Connection Setting resource
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    parameters = openapi_client.ConnectionSetting() # ConnectionSetting | The parameters to provide for creating the Connection Setting.

    try:
        api_response = api_instance.bot_connection_create(resource_group_name, resource_name, connection_name, api_version, subscription_id, parameters)
        print("The response of BotConnectionApi->bot_connection_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BotConnectionApi->bot_connection_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Bot resource group in the user subscription. | 
 **resource_name** | **str**| The name of the Bot resource. | 
 **connection_name** | **str**| The name of the Bot Service Connection Setting resource | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **parameters** | [**ConnectionSetting**](ConnectionSetting.md)| The parameters to provide for creating the Connection Setting. | 

### Return type

[**ConnectionSetting**](ConnectionSetting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If resource is created successfully or already existed, the service should return 200 (OK). |  -  |
**201** | If resource is created successfully, the service should return 201 (Created). Execution to continue asynchronously. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bot_connection_delete**
> bot_connection_delete(resource_group_name, resource_name, connection_name, api_version, subscription_id)



Deletes a Connection Setting registration for a Bot Service

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
    api_instance = openapi_client.BotConnectionApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Bot resource group in the user subscription.
    resource_name = 'resource_name_example' # str | The name of the Bot resource.
    connection_name = 'connection_name_example' # str | The name of the Bot Service Connection Setting resource
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_instance.bot_connection_delete(resource_group_name, resource_name, connection_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling BotConnectionApi->bot_connection_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Bot resource group in the user subscription. | 
 **resource_name** | **str**| The name of the Bot resource. | 
 **connection_name** | **str**| The name of the Bot Service Connection Setting resource | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Azure Subscription ID. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A 200 (OK) should be returned if the object exists and was deleted successfully; |  -  |
**204** | a 204 (NoContent) should be used if the resource does not exist and the request is well formed. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bot_connection_get**
> ConnectionSetting bot_connection_get(resource_group_name, resource_name, connection_name, api_version, subscription_id)



Get a Connection Setting registration for a Bot Service

### Example


```python
import openapi_client
from openapi_client.models.connection_setting import ConnectionSetting
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
    api_instance = openapi_client.BotConnectionApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Bot resource group in the user subscription.
    resource_name = 'resource_name_example' # str | The name of the Bot resource.
    connection_name = 'connection_name_example' # str | The name of the Bot Service Connection Setting resource
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_response = api_instance.bot_connection_get(resource_group_name, resource_name, connection_name, api_version, subscription_id)
        print("The response of BotConnectionApi->bot_connection_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BotConnectionApi->bot_connection_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Bot resource group in the user subscription. | 
 **resource_name** | **str**| The name of the Bot resource. | 
 **connection_name** | **str**| The name of the Bot Service Connection Setting resource | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Azure Subscription ID. | 

### Return type

[**ConnectionSetting**](ConnectionSetting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource provider should return 200 (OK) to indicate that the operation completed successfully.  |  -  |
**0** | Error response describing why the operation failed. If the resource group *or* resource does not exist, 404 (NotFound) should be returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bot_connection_list_by_bot_service**
> ConnectionSettingResponseList bot_connection_list_by_bot_service(resource_group_name, resource_name, subscription_id, api_version)



Returns all the Connection Settings registered to a particular BotService resource

### Example


```python
import openapi_client
from openapi_client.models.connection_setting_response_list import ConnectionSettingResponseList
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
    api_instance = openapi_client.BotConnectionApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Bot resource group in the user subscription.
    resource_name = 'resource_name_example' # str | The name of the Bot resource.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.bot_connection_list_by_bot_service(resource_group_name, resource_name, subscription_id, api_version)
        print("The response of BotConnectionApi->bot_connection_list_by_bot_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BotConnectionApi->bot_connection_list_by_bot_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Bot resource group in the user subscription. | 
 **resource_name** | **str**| The name of the Bot resource. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**ConnectionSettingResponseList**](ConnectionSettingResponseList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code. The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses here. If a resource provider does not support paging, it should return the same body (JSON object with “value” property) but omit nextLink entirely (or set to null, *not* empty string) for future compatibility. The nextLink should be implemented using following query parameters: · skipToken: opaque token that allows the resource provider to skip resources already enumerated. This value is defined and returned by the RP after first request via nextLink. · top: the optional client query parameter which defines the maximum number of records to be returned by the server. Implementation details: · NextLink may include all the query parameters (specifically OData $filter) used by the client in the first query.  · Server may return less records than requested with nextLink. Returning zero records with NextLink is an acceptable response.  Clients must fetch records until the nextLink is not returned back / null. Clients should never rely on number of returned records to determinate if pagination is completed. |  -  |
**0** | Error response describing why the operation failed. If the resource group does not exist, 404 (NotFound) will be returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bot_connection_list_with_secrets**
> ConnectionSetting bot_connection_list_with_secrets(resource_group_name, resource_name, connection_name, api_version, subscription_id)



Get a Connection Setting registration for a Bot Service

### Example


```python
import openapi_client
from openapi_client.models.connection_setting import ConnectionSetting
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
    api_instance = openapi_client.BotConnectionApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Bot resource group in the user subscription.
    resource_name = 'resource_name_example' # str | The name of the Bot resource.
    connection_name = 'connection_name_example' # str | The name of the Bot Service Connection Setting resource
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_response = api_instance.bot_connection_list_with_secrets(resource_group_name, resource_name, connection_name, api_version, subscription_id)
        print("The response of BotConnectionApi->bot_connection_list_with_secrets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BotConnectionApi->bot_connection_list_with_secrets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Bot resource group in the user subscription. | 
 **resource_name** | **str**| The name of the Bot resource. | 
 **connection_name** | **str**| The name of the Bot Service Connection Setting resource | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Azure Subscription ID. | 

### Return type

[**ConnectionSetting**](ConnectionSetting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource provider should return 200 (OK) to indicate that the operation completed successfully.  |  -  |
**0** | Error response describing why the operation failed. If the resource group *or* resource does not exist, 404 (NotFound) should be returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bot_connection_update**
> ConnectionSetting bot_connection_update(resource_group_name, resource_name, connection_name, api_version, subscription_id, parameters)



Updates a Connection Setting registration for a Bot Service

### Example


```python
import openapi_client
from openapi_client.models.connection_setting import ConnectionSetting
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
    api_instance = openapi_client.BotConnectionApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Bot resource group in the user subscription.
    resource_name = 'resource_name_example' # str | The name of the Bot resource.
    connection_name = 'connection_name_example' # str | The name of the Bot Service Connection Setting resource
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    parameters = openapi_client.ConnectionSetting() # ConnectionSetting | The parameters to provide for updating the Connection Setting.

    try:
        api_response = api_instance.bot_connection_update(resource_group_name, resource_name, connection_name, api_version, subscription_id, parameters)
        print("The response of BotConnectionApi->bot_connection_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BotConnectionApi->bot_connection_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Bot resource group in the user subscription. | 
 **resource_name** | **str**| The name of the Bot resource. | 
 **connection_name** | **str**| The name of the Bot Service Connection Setting resource | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **parameters** | [**ConnectionSetting**](ConnectionSetting.md)| The parameters to provide for updating the Connection Setting. | 

### Return type

[**ConnectionSetting**](ConnectionSetting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If resource is created successfully or already existed, the service should return 200 (OK). |  -  |
**201** | If resource is created successfully, the service should return 201 (Created). Execution to continue asynchronously. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

