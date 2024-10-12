# openapi_client.EventsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**events_delete_event**](EventsApi.md#events_delete_event) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/migrateEvents/{eventName} | Delete the migrate event
[**events_enumerate_events**](EventsApi.md#events_enumerate_events) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/migrateEvents | Gets a list of events in the migrate project.
[**events_get_event**](EventsApi.md#events_get_event) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/migrateEvents/{eventName} | Gets an event in the migrate project.


# **events_delete_event**
> events_delete_event(subscription_id, resource_group_name, migrate_project_name, api_version, event_name)

Delete the migrate event

Delete the migrate event. Deleting non-existent migrate event is a no-operation.

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
    api_instance = openapi_client.EventsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which migrate project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that migrate project is part of.
    migrate_project_name = 'migrate_project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    event_name = 'event_name_example' # str | Unique name of an event within a migrate project.

    try:
        # Delete the migrate event
        api_instance.events_delete_event(subscription_id, resource_group_name, migrate_project_name, api_version, event_name)
    except Exception as e:
        print("Exception when calling EventsApi->events_delete_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which migrate project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that migrate project is part of. | 
 **migrate_project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **event_name** | **str**| Unique name of an event within a migrate project. | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **events_enumerate_events**
> EventCollection events_enumerate_events(subscription_id, resource_group_name, migrate_project_name, api_version, continuation_token=continuation_token, page_size=page_size, accept_language=accept_language)

Gets a list of events in the migrate project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.event_collection import EventCollection
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
    api_instance = openapi_client.EventsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which migrate project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that migrate project is part of.
    migrate_project_name = 'migrate_project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    continuation_token = 'continuation_token_example' # str | The continuation token. (optional)
    page_size = 56 # int | The number of items to be returned in a single page. This value is honored only if it is less than the 100. (optional)
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Gets a list of events in the migrate project.
        api_response = api_instance.events_enumerate_events(subscription_id, resource_group_name, migrate_project_name, api_version, continuation_token=continuation_token, page_size=page_size, accept_language=accept_language)
        print("The response of EventsApi->events_enumerate_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->events_enumerate_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which migrate project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that migrate project is part of. | 
 **migrate_project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **continuation_token** | **str**| The continuation token. | [optional] 
 **page_size** | **int**| The number of items to be returned in a single page. This value is honored only if it is less than the 100. | [optional] 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**EventCollection**](EventCollection.md)

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

# **events_get_event**
> MigrateEvent events_get_event(subscription_id, resource_group_name, migrate_project_name, api_version, event_name)

Gets an event in the migrate project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.migrate_event import MigrateEvent
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
    api_instance = openapi_client.EventsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which migrate project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that migrate project is part of.
    migrate_project_name = 'migrate_project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    event_name = 'event_name_example' # str | Unique name of an event within a migrate project.

    try:
        # Gets an event in the migrate project.
        api_response = api_instance.events_get_event(subscription_id, resource_group_name, migrate_project_name, api_version, event_name)
        print("The response of EventsApi->events_get_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->events_get_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which migrate project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that migrate project is part of. | 
 **migrate_project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **event_name** | **str**| Unique name of an event within a migrate project. | 

### Return type

[**MigrateEvent**](MigrateEvent.md)

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

