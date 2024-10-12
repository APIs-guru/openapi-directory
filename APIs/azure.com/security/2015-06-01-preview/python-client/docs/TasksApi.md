# openapi_client.TasksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasks_get_resource_group_level_task**](TasksApi.md#tasks_get_resource_group_level_task) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/tasks/{taskName} | 
[**tasks_get_subscription_level_task**](TasksApi.md#tasks_get_subscription_level_task) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/tasks/{taskName} | 
[**tasks_list**](TasksApi.md#tasks_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/tasks | 
[**tasks_list_by_home_region**](TasksApi.md#tasks_list_by_home_region) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/tasks | 
[**tasks_list_by_resource_group**](TasksApi.md#tasks_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/tasks | 
[**tasks_update_resource_group_level_task_state**](TasksApi.md#tasks_update_resource_group_level_task_state) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/tasks/{taskName}/{taskUpdateActionType} | 
[**tasks_update_subscription_level_task_state**](TasksApi.md#tasks_update_subscription_level_task_state) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/tasks/{taskName}/{taskUpdateActionType} | 


# **tasks_get_resource_group_level_task**
> SecurityTask tasks_get_resource_group_level_task(api_version, subscription_id, resource_group_name, asc_location, task_name)



Recommended tasks that will help improve the security of the subscription proactively

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_task import SecurityTask
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
    api_instance = openapi_client.TasksApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    task_name = 'task_name_example' # str | Name of the task object, will be a GUID

    try:
        api_response = api_instance.tasks_get_resource_group_level_task(api_version, subscription_id, resource_group_name, asc_location, task_name)
        print("The response of TasksApi->tasks_get_resource_group_level_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->tasks_get_resource_group_level_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **task_name** | **str**| Name of the task object, will be a GUID | 

### Return type

[**SecurityTask**](SecurityTask.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasks_get_subscription_level_task**
> SecurityTask tasks_get_subscription_level_task(api_version, subscription_id, asc_location, task_name)



Recommended tasks that will help improve the security of the subscription proactively

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_task import SecurityTask
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
    api_instance = openapi_client.TasksApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    task_name = 'task_name_example' # str | Name of the task object, will be a GUID

    try:
        api_response = api_instance.tasks_get_subscription_level_task(api_version, subscription_id, asc_location, task_name)
        print("The response of TasksApi->tasks_get_subscription_level_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->tasks_get_subscription_level_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **task_name** | **str**| Name of the task object, will be a GUID | 

### Return type

[**SecurityTask**](SecurityTask.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasks_list**
> SecurityTaskList tasks_list(api_version, subscription_id, filter=filter)



Recommended tasks that will help improve the security of the subscription proactively

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_task_list import SecurityTaskList
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
    api_instance = openapi_client.TasksApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    filter = 'filter_example' # str | OData filter. Optional. (optional)

    try:
        api_response = api_instance.tasks_list(api_version, subscription_id, filter=filter)
        print("The response of TasksApi->tasks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->tasks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **filter** | **str**| OData filter. Optional. | [optional] 

### Return type

[**SecurityTaskList**](SecurityTaskList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasks_list_by_home_region**
> SecurityTaskList tasks_list_by_home_region(api_version, subscription_id, asc_location, filter=filter)



Recommended tasks that will help improve the security of the subscription proactively

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_task_list import SecurityTaskList
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
    api_instance = openapi_client.TasksApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    filter = 'filter_example' # str | OData filter. Optional. (optional)

    try:
        api_response = api_instance.tasks_list_by_home_region(api_version, subscription_id, asc_location, filter=filter)
        print("The response of TasksApi->tasks_list_by_home_region:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->tasks_list_by_home_region: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **filter** | **str**| OData filter. Optional. | [optional] 

### Return type

[**SecurityTaskList**](SecurityTaskList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasks_list_by_resource_group**
> SecurityTaskList tasks_list_by_resource_group(api_version, subscription_id, resource_group_name, asc_location, filter=filter)



Recommended tasks that will help improve the security of the subscription proactively

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_task_list import SecurityTaskList
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
    api_instance = openapi_client.TasksApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    filter = 'filter_example' # str | OData filter. Optional. (optional)

    try:
        api_response = api_instance.tasks_list_by_resource_group(api_version, subscription_id, resource_group_name, asc_location, filter=filter)
        print("The response of TasksApi->tasks_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->tasks_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **filter** | **str**| OData filter. Optional. | [optional] 

### Return type

[**SecurityTaskList**](SecurityTaskList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasks_update_resource_group_level_task_state**
> tasks_update_resource_group_level_task_state(api_version, subscription_id, resource_group_name, asc_location, task_name, task_update_action_type)



Recommended tasks that will help improve the security of the subscription proactively

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
    api_instance = openapi_client.TasksApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    task_name = 'task_name_example' # str | Name of the task object, will be a GUID
    task_update_action_type = 'task_update_action_type_example' # str | Type of the action to do on the task

    try:
        api_instance.tasks_update_resource_group_level_task_state(api_version, subscription_id, resource_group_name, asc_location, task_name, task_update_action_type)
    except Exception as e:
        print("Exception when calling TasksApi->tasks_update_resource_group_level_task_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **task_name** | **str**| Name of the task object, will be a GUID | 
 **task_update_action_type** | **str**| Type of the action to do on the task | 

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
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasks_update_subscription_level_task_state**
> tasks_update_subscription_level_task_state(api_version, subscription_id, asc_location, task_name, task_update_action_type)



Recommended tasks that will help improve the security of the subscription proactively

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
    api_instance = openapi_client.TasksApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    task_name = 'task_name_example' # str | Name of the task object, will be a GUID
    task_update_action_type = 'task_update_action_type_example' # str | Type of the action to do on the task

    try:
        api_instance.tasks_update_subscription_level_task_state(api_version, subscription_id, asc_location, task_name, task_update_action_type)
    except Exception as e:
        print("Exception when calling TasksApi->tasks_update_subscription_level_task_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **task_name** | **str**| Name of the task object, will be a GUID | 
 **task_update_action_type** | **str**| Type of the action to do on the task | 

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
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

