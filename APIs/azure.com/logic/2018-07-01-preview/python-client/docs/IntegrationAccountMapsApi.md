# openapi_client.IntegrationAccountMapsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integration_account_maps_create_or_update**](IntegrationAccountMapsApi.md#integration_account_maps_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName} | 
[**integration_account_maps_delete**](IntegrationAccountMapsApi.md#integration_account_maps_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName} | 
[**integration_account_maps_get**](IntegrationAccountMapsApi.md#integration_account_maps_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName} | 
[**integration_account_maps_list**](IntegrationAccountMapsApi.md#integration_account_maps_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps | 
[**integration_account_maps_list_content_callback_url**](IntegrationAccountMapsApi.md#integration_account_maps_list_content_callback_url) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}/listContentCallbackUrl | 


# **integration_account_maps_create_or_update**
> IntegrationAccountMap integration_account_maps_create_or_update(subscription_id, resource_group_name, integration_account_name, map_name, api_version, map)



Creates or updates an integration account map.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_account_map import IntegrationAccountMap
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
    api_instance = openapi_client.IntegrationAccountMapsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    map_name = 'map_name_example' # str | The integration account map name.
    api_version = 'api_version_example' # str | The API version.
    map = openapi_client.IntegrationAccountMap() # IntegrationAccountMap | The integration account map.

    try:
        api_response = api_instance.integration_account_maps_create_or_update(subscription_id, resource_group_name, integration_account_name, map_name, api_version, map)
        print("The response of IntegrationAccountMapsApi->integration_account_maps_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountMapsApi->integration_account_maps_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **map_name** | **str**| The integration account map name. | 
 **api_version** | **str**| The API version. | 
 **map** | [**IntegrationAccountMap**](IntegrationAccountMap.md)| The integration account map. | 

### Return type

[**IntegrationAccountMap**](IntegrationAccountMap.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_maps_delete**
> integration_account_maps_delete(subscription_id, resource_group_name, integration_account_name, map_name, api_version)



Deletes an integration account map.

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
    api_instance = openapi_client.IntegrationAccountMapsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    map_name = 'map_name_example' # str | The integration account map name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_account_maps_delete(subscription_id, resource_group_name, integration_account_name, map_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationAccountMapsApi->integration_account_maps_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **map_name** | **str**| The integration account map name. | 
 **api_version** | **str**| The API version. | 

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

# **integration_account_maps_get**
> IntegrationAccountMap integration_account_maps_get(subscription_id, resource_group_name, integration_account_name, map_name, api_version)



Gets an integration account map.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_account_map import IntegrationAccountMap
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
    api_instance = openapi_client.IntegrationAccountMapsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    map_name = 'map_name_example' # str | The integration account map name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_account_maps_get(subscription_id, resource_group_name, integration_account_name, map_name, api_version)
        print("The response of IntegrationAccountMapsApi->integration_account_maps_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountMapsApi->integration_account_maps_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **map_name** | **str**| The integration account map name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationAccountMap**](IntegrationAccountMap.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_maps_list**
> IntegrationAccountMapListResult integration_account_maps_list(subscription_id, resource_group_name, integration_account_name, api_version, top=top, filter=filter)



Gets a list of integration account maps.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_account_map_list_result import IntegrationAccountMapListResult
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
    api_instance = openapi_client.IntegrationAccountMapsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. Options for filters include: MapType. (optional)

    try:
        api_response = api_instance.integration_account_maps_list(subscription_id, resource_group_name, integration_account_name, api_version, top=top, filter=filter)
        print("The response of IntegrationAccountMapsApi->integration_account_maps_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountMapsApi->integration_account_maps_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| The number of items to be included in the result. | [optional] 
 **filter** | **str**| The filter to apply on the operation. Options for filters include: MapType. | [optional] 

### Return type

[**IntegrationAccountMapListResult**](IntegrationAccountMapListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_maps_list_content_callback_url**
> WorkflowTriggerCallbackUrl integration_account_maps_list_content_callback_url(subscription_id, resource_group_name, integration_account_name, map_name, api_version, list_content_callback_url)



Get the content callback url.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.get_callback_url_parameters import GetCallbackUrlParameters
from openapi_client.models.workflow_trigger_callback_url import WorkflowTriggerCallbackUrl
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
    api_instance = openapi_client.IntegrationAccountMapsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    map_name = 'map_name_example' # str | The integration account map name.
    api_version = 'api_version_example' # str | The API version.
    list_content_callback_url = openapi_client.GetCallbackUrlParameters() # GetCallbackUrlParameters | 

    try:
        api_response = api_instance.integration_account_maps_list_content_callback_url(subscription_id, resource_group_name, integration_account_name, map_name, api_version, list_content_callback_url)
        print("The response of IntegrationAccountMapsApi->integration_account_maps_list_content_callback_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountMapsApi->integration_account_maps_list_content_callback_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **map_name** | **str**| The integration account map name. | 
 **api_version** | **str**| The API version. | 
 **list_content_callback_url** | [**GetCallbackUrlParameters**](GetCallbackUrlParameters.md)|  | 

### Return type

[**WorkflowTriggerCallbackUrl**](WorkflowTriggerCallbackUrl.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

