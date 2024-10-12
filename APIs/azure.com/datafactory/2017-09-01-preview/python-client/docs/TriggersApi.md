# openapi_client.TriggersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**triggers_create_or_update**](TriggersApi.md#triggers_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName} | 
[**triggers_delete**](TriggersApi.md#triggers_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName} | 
[**triggers_list_by_factory**](TriggersApi.md#triggers_list_by_factory) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers | 
[**triggers_list_runs**](TriggersApi.md#triggers_list_runs) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/triggerruns | 
[**triggers_start**](TriggersApi.md#triggers_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/start | 
[**triggers_stop**](TriggersApi.md#triggers_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/stop | 


# **triggers_create_or_update**
> TriggerResource triggers_create_or_update(subscription_id, resource_group_name, factory_name, trigger_name, api_version, trigger, if_match=if_match)



Creates or updates a trigger.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.trigger_resource import TriggerResource
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
    api_instance = openapi_client.TriggersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    trigger_name = 'trigger_name_example' # str | The trigger name.
    api_version = 'api_version_example' # str | The API version.
    trigger = openapi_client.TriggerResource() # TriggerResource | Trigger resource definition.
    if_match = 'if_match_example' # str | ETag of the trigger entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. (optional)

    try:
        api_response = api_instance.triggers_create_or_update(subscription_id, resource_group_name, factory_name, trigger_name, api_version, trigger, if_match=if_match)
        print("The response of TriggersApi->triggers_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TriggersApi->triggers_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **trigger_name** | **str**| The trigger name. | 
 **api_version** | **str**| The API version. | 
 **trigger** | [**TriggerResource**](TriggerResource.md)| Trigger resource definition. | 
 **if_match** | **str**| ETag of the trigger entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. | [optional] 

### Return type

[**TriggerResource**](TriggerResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggers_delete**
> triggers_delete(subscription_id, resource_group_name, factory_name, trigger_name, api_version)



Deletes a trigger.

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
    api_instance = openapi_client.TriggersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    trigger_name = 'trigger_name_example' # str | The trigger name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.triggers_delete(subscription_id, resource_group_name, factory_name, trigger_name, api_version)
    except Exception as e:
        print("Exception when calling TriggersApi->triggers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **trigger_name** | **str**| The trigger name. | 
 **api_version** | **str**| The API version. | 

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
**200** | OK. |  -  |
**204** | No Content. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggers_list_by_factory**
> TriggerListResponse triggers_list_by_factory(subscription_id, resource_group_name, factory_name, api_version)



Lists triggers.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.trigger_list_response import TriggerListResponse
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
    api_instance = openapi_client.TriggersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.triggers_list_by_factory(subscription_id, resource_group_name, factory_name, api_version)
        print("The response of TriggersApi->triggers_list_by_factory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TriggersApi->triggers_list_by_factory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**TriggerListResponse**](TriggerListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggers_list_runs**
> TriggerRunListResponse triggers_list_runs(subscription_id, resource_group_name, factory_name, trigger_name, api_version, start_time, end_time)



List trigger runs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.trigger_run_list_response import TriggerRunListResponse
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
    api_instance = openapi_client.TriggersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    trigger_name = 'trigger_name_example' # str | The trigger name.
    api_version = 'api_version_example' # str | The API version.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | Start time for trigger runs.
    end_time = '2013-10-20T19:20:30+01:00' # datetime | End time for trigger runs.

    try:
        api_response = api_instance.triggers_list_runs(subscription_id, resource_group_name, factory_name, trigger_name, api_version, start_time, end_time)
        print("The response of TriggersApi->triggers_list_runs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TriggersApi->triggers_list_runs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **trigger_name** | **str**| The trigger name. | 
 **api_version** | **str**| The API version. | 
 **start_time** | **datetime**| Start time for trigger runs. | 
 **end_time** | **datetime**| End time for trigger runs. | 

### Return type

[**TriggerRunListResponse**](TriggerRunListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggers_start**
> triggers_start(subscription_id, resource_group_name, factory_name, trigger_name, api_version)



Starts a trigger.

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
    api_instance = openapi_client.TriggersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    trigger_name = 'trigger_name_example' # str | The trigger name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.triggers_start(subscription_id, resource_group_name, factory_name, trigger_name, api_version)
    except Exception as e:
        print("Exception when calling TriggersApi->triggers_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **trigger_name** | **str**| The trigger name. | 
 **api_version** | **str**| The API version. | 

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
**200** | Trigger has been started successfully. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggers_stop**
> triggers_stop(subscription_id, resource_group_name, factory_name, trigger_name, api_version)



Stops a trigger.

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
    api_instance = openapi_client.TriggersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    trigger_name = 'trigger_name_example' # str | The trigger name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.triggers_stop(subscription_id, resource_group_name, factory_name, trigger_name, api_version)
    except Exception as e:
        print("Exception when calling TriggersApi->triggers_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **trigger_name** | **str**| The trigger name. | 
 **api_version** | **str**| The API version. | 

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
**200** | Trigger has been stopped successfully. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

