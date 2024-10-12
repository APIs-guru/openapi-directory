# openapi_client.EventSourcesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**event_sources_create_or_update**](EventSourcesApi.md#event_sources_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/eventSources/{eventSourceName} | 
[**event_sources_delete**](EventSourcesApi.md#event_sources_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/eventSources/{eventSourceName} | 
[**event_sources_get**](EventSourcesApi.md#event_sources_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/eventSources/{eventSourceName} | 
[**event_sources_list_by_environment**](EventSourcesApi.md#event_sources_list_by_environment) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/eventSources | 
[**event_sources_update**](EventSourcesApi.md#event_sources_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/eventSources/{eventSourceName} | 


# **event_sources_create_or_update**
> EventSourceResource event_sources_create_or_update(subscription_id, resource_group_name, environment_name, event_source_name, api_version, parameters)



Create or update an event source under the specified environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.event_source_create_or_update_parameters import EventSourceCreateOrUpdateParameters
from openapi_client.models.event_source_resource import EventSourceResource
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
    api_instance = openapi_client.EventSourcesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    event_source_name = 'event_source_name_example' # str | Name of the event source.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    parameters = openapi_client.EventSourceCreateOrUpdateParameters() # EventSourceCreateOrUpdateParameters | Parameters for creating an event source resource.

    try:
        api_response = api_instance.event_sources_create_or_update(subscription_id, resource_group_name, environment_name, event_source_name, api_version, parameters)
        print("The response of EventSourcesApi->event_sources_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSourcesApi->event_sources_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **event_source_name** | **str**| Name of the event source. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **parameters** | [**EventSourceCreateOrUpdateParameters**](EventSourceCreateOrUpdateParameters.md)| Parameters for creating an event source resource. | 

### Return type

[**EventSourceResource**](EventSourceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The existing event source definition was successfully updated. |  -  |
**201** | The event source was successfully created. |  -  |
**0** | HTTP 400 (Bad Request): The given event source request body is invalid; See the error code and message in the response for details. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_sources_delete**
> event_sources_delete(subscription_id, resource_group_name, environment_name, event_source_name, api_version)



Deletes the event source with the specified name in the specified subscription, resource group, and environment

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
    api_instance = openapi_client.EventSourcesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    event_source_name = 'event_source_name_example' # str | The name of the Time Series Insights event source associated with the specified environment.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_instance.event_sources_delete(subscription_id, resource_group_name, environment_name, event_source_name, api_version)
    except Exception as e:
        print("Exception when calling EventSourcesApi->event_sources_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **event_source_name** | **str**| The name of the Time Series Insights event source associated with the specified environment. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The event source was successfully deleted. |  -  |
**204** | The event source was successfully deleted. |  -  |
**0** | HTTP 404 (Not Found): The subscription, resource group, environment, or event source could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_sources_get**
> EventSourceResource event_sources_get(subscription_id, resource_group_name, environment_name, event_source_name, api_version)



Gets the event source with the specified name in the specified environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.event_source_resource import EventSourceResource
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
    api_instance = openapi_client.EventSourcesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    event_source_name = 'event_source_name_example' # str | The name of the Time Series Insights event source associated with the specified environment.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.event_sources_get(subscription_id, resource_group_name, environment_name, event_source_name, api_version)
        print("The response of EventSourcesApi->event_sources_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSourcesApi->event_sources_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **event_source_name** | **str**| The name of the Time Series Insights event source associated with the specified environment. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**EventSourceResource**](EventSourceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The event source definition was successfully retrieved and is in the response. |  -  |
**0** | HTTP 404 (Not Found): The subscription, resource group, environment, or event source could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_sources_list_by_environment**
> EventSourceListResponse event_sources_list_by_environment(subscription_id, resource_group_name, environment_name, api_version)



Lists all the available event sources associated with the subscription and within the specified resource group and environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.event_source_list_response import EventSourceListResponse
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
    api_instance = openapi_client.EventSourcesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.event_sources_list_by_environment(subscription_id, resource_group_name, environment_name, api_version)
        print("The response of EventSourcesApi->event_sources_list_by_environment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSourcesApi->event_sources_list_by_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**EventSourceListResponse**](EventSourceListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Environments returned successfully. |  -  |
**0** | HTTP 404 (Not Found): The subscription, resource group, or environment could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_sources_update**
> EventSourceResource event_sources_update(subscription_id, resource_group_name, environment_name, event_source_name, api_version, event_source_update_parameters)



Updates the event source with the specified name in the specified subscription, resource group, and environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.event_source_resource import EventSourceResource
from openapi_client.models.event_source_update_parameters import EventSourceUpdateParameters
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
    api_instance = openapi_client.EventSourcesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    environment_name = 'environment_name_example' # str | The name of the Time Series Insights environment associated with the specified resource group.
    event_source_name = 'event_source_name_example' # str | The name of the Time Series Insights event source associated with the specified environment.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    event_source_update_parameters = openapi_client.EventSourceUpdateParameters() # EventSourceUpdateParameters | Request object that contains the updated information for the event source.

    try:
        api_response = api_instance.event_sources_update(subscription_id, resource_group_name, environment_name, event_source_name, api_version, event_source_update_parameters)
        print("The response of EventSourcesApi->event_sources_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSourcesApi->event_sources_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **environment_name** | **str**| The name of the Time Series Insights environment associated with the specified resource group. | 
 **event_source_name** | **str**| The name of the Time Series Insights event source associated with the specified environment. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **event_source_update_parameters** | [**EventSourceUpdateParameters**](EventSourceUpdateParameters.md)| Request object that contains the updated information for the event source. | 

### Return type

[**EventSourceResource**](EventSourceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The event source definition was successfully updated and is in the response. |  -  |
**0** | HTTP 404 (Not Found): The subscription, resource group, environment, or event source could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

