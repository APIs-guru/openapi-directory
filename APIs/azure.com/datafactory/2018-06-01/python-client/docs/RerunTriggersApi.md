# openapi_client.RerunTriggersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rerun_triggers_cancel**](RerunTriggersApi.md#rerun_triggers_cancel) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/rerunTriggers/{rerunTriggerName}/cancel | 
[**rerun_triggers_create**](RerunTriggersApi.md#rerun_triggers_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/rerunTriggers/{rerunTriggerName} | 
[**rerun_triggers_list_by_trigger**](RerunTriggersApi.md#rerun_triggers_list_by_trigger) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/rerunTriggers | 
[**rerun_triggers_start**](RerunTriggersApi.md#rerun_triggers_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/rerunTriggers/{rerunTriggerName}/start | 
[**rerun_triggers_stop**](RerunTriggersApi.md#rerun_triggers_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/rerunTriggers/{rerunTriggerName}/stop | 


# **rerun_triggers_cancel**
> rerun_triggers_cancel(subscription_id, resource_group_name, factory_name, trigger_name, rerun_trigger_name, api_version)



Cancels a trigger.

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
    api_instance = openapi_client.RerunTriggersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    trigger_name = 'trigger_name_example' # str | The trigger name.
    rerun_trigger_name = 'rerun_trigger_name_example' # str | The rerun trigger name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.rerun_triggers_cancel(subscription_id, resource_group_name, factory_name, trigger_name, rerun_trigger_name, api_version)
    except Exception as e:
        print("Exception when calling RerunTriggersApi->rerun_triggers_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **trigger_name** | **str**| The trigger name. | 
 **rerun_trigger_name** | **str**| The rerun trigger name. | 
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
**200** | Trigger has been canceled successfully. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rerun_triggers_create**
> TriggerResource rerun_triggers_create(subscription_id, resource_group_name, factory_name, trigger_name, rerun_trigger_name, api_version, rerun_tumbling_window_trigger_action_parameters)



Creates a rerun trigger.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.rerun_tumbling_window_trigger_action_parameters import RerunTumblingWindowTriggerActionParameters
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
    api_instance = openapi_client.RerunTriggersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    trigger_name = 'trigger_name_example' # str | The trigger name.
    rerun_trigger_name = 'rerun_trigger_name_example' # str | The rerun trigger name.
    api_version = 'api_version_example' # str | The API version.
    rerun_tumbling_window_trigger_action_parameters = openapi_client.RerunTumblingWindowTriggerActionParameters() # RerunTumblingWindowTriggerActionParameters | Rerun tumbling window trigger action parameters.

    try:
        api_response = api_instance.rerun_triggers_create(subscription_id, resource_group_name, factory_name, trigger_name, rerun_trigger_name, api_version, rerun_tumbling_window_trigger_action_parameters)
        print("The response of RerunTriggersApi->rerun_triggers_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RerunTriggersApi->rerun_triggers_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **trigger_name** | **str**| The trigger name. | 
 **rerun_trigger_name** | **str**| The rerun trigger name. | 
 **api_version** | **str**| The API version. | 
 **rerun_tumbling_window_trigger_action_parameters** | [**RerunTumblingWindowTriggerActionParameters**](RerunTumblingWindowTriggerActionParameters.md)| Rerun tumbling window trigger action parameters. | 

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

# **rerun_triggers_list_by_trigger**
> RerunTriggerListResponse rerun_triggers_list_by_trigger(subscription_id, resource_group_name, factory_name, trigger_name, api_version)



Lists rerun triggers by an original trigger name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.rerun_trigger_list_response import RerunTriggerListResponse
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
    api_instance = openapi_client.RerunTriggersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    trigger_name = 'trigger_name_example' # str | The trigger name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.rerun_triggers_list_by_trigger(subscription_id, resource_group_name, factory_name, trigger_name, api_version)
        print("The response of RerunTriggersApi->rerun_triggers_list_by_trigger:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RerunTriggersApi->rerun_triggers_list_by_trigger: %s\n" % e)
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

[**RerunTriggerListResponse**](RerunTriggerListResponse.md)

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

# **rerun_triggers_start**
> rerun_triggers_start(subscription_id, resource_group_name, factory_name, trigger_name, rerun_trigger_name, api_version)



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
    api_instance = openapi_client.RerunTriggersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    trigger_name = 'trigger_name_example' # str | The trigger name.
    rerun_trigger_name = 'rerun_trigger_name_example' # str | The rerun trigger name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.rerun_triggers_start(subscription_id, resource_group_name, factory_name, trigger_name, rerun_trigger_name, api_version)
    except Exception as e:
        print("Exception when calling RerunTriggersApi->rerun_triggers_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **trigger_name** | **str**| The trigger name. | 
 **rerun_trigger_name** | **str**| The rerun trigger name. | 
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

# **rerun_triggers_stop**
> rerun_triggers_stop(subscription_id, resource_group_name, factory_name, trigger_name, rerun_trigger_name, api_version)



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
    api_instance = openapi_client.RerunTriggersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    trigger_name = 'trigger_name_example' # str | The trigger name.
    rerun_trigger_name = 'rerun_trigger_name_example' # str | The rerun trigger name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.rerun_triggers_stop(subscription_id, resource_group_name, factory_name, trigger_name, rerun_trigger_name, api_version)
    except Exception as e:
        print("Exception when calling RerunTriggersApi->rerun_triggers_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **trigger_name** | **str**| The trigger name. | 
 **rerun_trigger_name** | **str**| The rerun trigger name. | 
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

