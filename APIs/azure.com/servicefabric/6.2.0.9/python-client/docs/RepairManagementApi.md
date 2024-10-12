# openapi_client.RepairManagementApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_repair_task**](RepairManagementApi.md#cancel_repair_task) | **POST** /$/CancelRepairTask | Requests the cancellation of the given repair task.
[**create_repair_task**](RepairManagementApi.md#create_repair_task) | **POST** /$/CreateRepairTask | Creates a new repair task.
[**delete_repair_task**](RepairManagementApi.md#delete_repair_task) | **POST** /$/DeleteRepairTask | Deletes a completed repair task.
[**force_approve_repair_task**](RepairManagementApi.md#force_approve_repair_task) | **POST** /$/ForceApproveRepairTask | Forces the approval of the given repair task.
[**get_repair_task_list**](RepairManagementApi.md#get_repair_task_list) | **GET** /$/GetRepairTaskList | Gets a list of repair tasks matching the given filters.
[**update_repair_execution_state**](RepairManagementApi.md#update_repair_execution_state) | **POST** /$/UpdateRepairExecutionState | Updates the execution state of a repair task.
[**update_repair_task_health_policy**](RepairManagementApi.md#update_repair_task_health_policy) | **POST** /$/UpdateRepairTaskHealthPolicy | Updates the health policy of the given repair task.


# **cancel_repair_task**
> RepairTaskUpdateInfo cancel_repair_task(api_version, repair_task_cancel_description)

Requests the cancellation of the given repair task.

This API supports the Service Fabric platform; it is not meant to be used directly from your code.

### Example


```python
import openapi_client
from openapi_client.models.repair_task_cancel_description import RepairTaskCancelDescription
from openapi_client.models.repair_task_update_info import RepairTaskUpdateInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RepairManagementApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    repair_task_cancel_description = openapi_client.RepairTaskCancelDescription() # RepairTaskCancelDescription | Describes the repair task to be cancelled.

    try:
        # Requests the cancellation of the given repair task.
        api_response = api_instance.cancel_repair_task(api_version, repair_task_cancel_description)
        print("The response of RepairManagementApi->cancel_repair_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RepairManagementApi->cancel_repair_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **repair_task_cancel_description** | [**RepairTaskCancelDescription**](RepairTaskCancelDescription.md)| Describes the repair task to be cancelled. | 

### Return type

[**RepairTaskUpdateInfo**](RepairTaskUpdateInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code. The response body provides information about the updated repair task. Success indicates that the cancellation request was recorded, but does not guarantee that the repair task will be cancelled. Clients may use the State property of the repair task to determine the current state of the repair task. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_repair_task**
> RepairTaskUpdateInfo create_repair_task(api_version, repair_task)

Creates a new repair task.

For clusters that have the Repair Manager Service configured, this API provides a way to create repair tasks that run automatically or manually. For repair tasks that run automatically, an appropriate repair executor must be running for each repair action to run automatically. These are currently only available in specially-configured Azure Cloud Services.  To create a manual repair task, provide the set of impacted node names and the expected impact. When the state of the created repair task changes to approved, you can safely perform repair actions on those nodes.  This API supports the Service Fabric platform; it is not meant to be used directly from your code.

### Example


```python
import openapi_client
from openapi_client.models.repair_task import RepairTask
from openapi_client.models.repair_task_update_info import RepairTaskUpdateInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RepairManagementApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    repair_task = openapi_client.RepairTask() # RepairTask | Describes the repair task to be created or updated.

    try:
        # Creates a new repair task.
        api_response = api_instance.create_repair_task(api_version, repair_task)
        print("The response of RepairManagementApi->create_repair_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RepairManagementApi->create_repair_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **repair_task** | [**RepairTask**](RepairTask.md)| Describes the repair task to be created or updated. | 

### Return type

[**RepairTaskUpdateInfo**](RepairTaskUpdateInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code. The response body provides information about the created repair task. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_repair_task**
> delete_repair_task(api_version, repair_task_delete_description)

Deletes a completed repair task.

This API supports the Service Fabric platform; it is not meant to be used directly from your code.

### Example


```python
import openapi_client
from openapi_client.models.repair_task_delete_description import RepairTaskDeleteDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RepairManagementApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    repair_task_delete_description = openapi_client.RepairTaskDeleteDescription() # RepairTaskDeleteDescription | Describes the repair task to be deleted.

    try:
        # Deletes a completed repair task.
        api_instance.delete_repair_task(api_version, repair_task_delete_description)
    except Exception as e:
        print("Exception when calling RepairManagementApi->delete_repair_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **repair_task_delete_description** | [**RepairTaskDeleteDescription**](RepairTaskDeleteDescription.md)| Describes the repair task to be deleted. | 

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
**200** | A successful operation will return 200 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **force_approve_repair_task**
> RepairTaskUpdateInfo force_approve_repair_task(api_version, repair_task_approve_description)

Forces the approval of the given repair task.

This API supports the Service Fabric platform; it is not meant to be used directly from your code.

### Example


```python
import openapi_client
from openapi_client.models.repair_task_approve_description import RepairTaskApproveDescription
from openapi_client.models.repair_task_update_info import RepairTaskUpdateInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RepairManagementApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    repair_task_approve_description = openapi_client.RepairTaskApproveDescription() # RepairTaskApproveDescription | Describes the repair task to be approved.

    try:
        # Forces the approval of the given repair task.
        api_response = api_instance.force_approve_repair_task(api_version, repair_task_approve_description)
        print("The response of RepairManagementApi->force_approve_repair_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RepairManagementApi->force_approve_repair_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **repair_task_approve_description** | [**RepairTaskApproveDescription**](RepairTaskApproveDescription.md)| Describes the repair task to be approved. | 

### Return type

[**RepairTaskUpdateInfo**](RepairTaskUpdateInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code. The response body provides information about the updated repair task. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_repair_task_list**
> List[RepairTask] get_repair_task_list(api_version, task_id_filter=task_id_filter, state_filter=state_filter, executor_filter=executor_filter)

Gets a list of repair tasks matching the given filters.

This API supports the Service Fabric platform; it is not meant to be used directly from your code.

### Example


```python
import openapi_client
from openapi_client.models.repair_task import RepairTask
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RepairManagementApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    task_id_filter = 'task_id_filter_example' # str | The repair task ID prefix to be matched. (optional)
    state_filter = 56 # int | A bitwise-OR of the following values, specifying which task states should be included in the result list. - 1 - Created - 2 - Claimed - 4 - Preparing - 8 - Approved - 16 - Executing - 32 - Restoring - 64 - Completed (optional)
    executor_filter = 'executor_filter_example' # str | The name of the repair executor whose claimed tasks should be included in the list. (optional)

    try:
        # Gets a list of repair tasks matching the given filters.
        api_response = api_instance.get_repair_task_list(api_version, task_id_filter=task_id_filter, state_filter=state_filter, executor_filter=executor_filter)
        print("The response of RepairManagementApi->get_repair_task_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RepairManagementApi->get_repair_task_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **task_id_filter** | **str**| The repair task ID prefix to be matched. | [optional] 
 **state_filter** | **int**| A bitwise-OR of the following values, specifying which task states should be included in the result list. - 1 - Created - 2 - Claimed - 4 - Preparing - 8 - Approved - 16 - Executing - 32 - Restoring - 64 - Completed | [optional] 
 **executor_filter** | **str**| The name of the repair executor whose claimed tasks should be included in the list. | [optional] 

### Return type

[**List[RepairTask]**](RepairTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code. The response body provides a list of repair tasks matching all of the given filters. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_repair_execution_state**
> RepairTaskUpdateInfo update_repair_execution_state(api_version, repair_task)

Updates the execution state of a repair task.

This API supports the Service Fabric platform; it is not meant to be used directly from your code.

### Example


```python
import openapi_client
from openapi_client.models.repair_task import RepairTask
from openapi_client.models.repair_task_update_info import RepairTaskUpdateInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RepairManagementApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    repair_task = openapi_client.RepairTask() # RepairTask | Describes the repair task to be created or updated.

    try:
        # Updates the execution state of a repair task.
        api_response = api_instance.update_repair_execution_state(api_version, repair_task)
        print("The response of RepairManagementApi->update_repair_execution_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RepairManagementApi->update_repair_execution_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **repair_task** | [**RepairTask**](RepairTask.md)| Describes the repair task to be created or updated. | 

### Return type

[**RepairTaskUpdateInfo**](RepairTaskUpdateInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code. The response body provides information about the updated repair task. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_repair_task_health_policy**
> RepairTaskUpdateInfo update_repair_task_health_policy(api_version, repair_task_update_health_policy_description)

Updates the health policy of the given repair task.

This API supports the Service Fabric platform; it is not meant to be used directly from your code.

### Example


```python
import openapi_client
from openapi_client.models.repair_task_update_health_policy_description import RepairTaskUpdateHealthPolicyDescription
from openapi_client.models.repair_task_update_info import RepairTaskUpdateInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RepairManagementApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    repair_task_update_health_policy_description = openapi_client.RepairTaskUpdateHealthPolicyDescription() # RepairTaskUpdateHealthPolicyDescription | Describes the repair task healthy policy to be updated.

    try:
        # Updates the health policy of the given repair task.
        api_response = api_instance.update_repair_task_health_policy(api_version, repair_task_update_health_policy_description)
        print("The response of RepairManagementApi->update_repair_task_health_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RepairManagementApi->update_repair_task_health_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **repair_task_update_health_policy_description** | [**RepairTaskUpdateHealthPolicyDescription**](RepairTaskUpdateHealthPolicyDescription.md)| Describes the repair task healthy policy to be updated. | 

### Return type

[**RepairTaskUpdateInfo**](RepairTaskUpdateInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code. The response body provides information about the updated repair task. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

