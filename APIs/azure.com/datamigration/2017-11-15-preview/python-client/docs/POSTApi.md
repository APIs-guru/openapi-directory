# openapi_client.POSTApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**services_check_children_name_availability_0**](POSTApi.md#services_check_children_name_availability_0) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/checkNameAvailability | Check nested resource name validity and availability
[**services_check_name_availability_0**](POSTApi.md#services_check_name_availability_0) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/locations/{location}/checkNameAvailability | Check name validity and availability
[**services_check_status_1**](POSTApi.md#services_check_status_1) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/checkStatus | Check service health status
[**services_start_1**](POSTApi.md#services_start_1) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/start | Start service
[**services_stop_1**](POSTApi.md#services_stop_1) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/stop | Stop service
[**tasks_cancel_1**](POSTApi.md#tasks_cancel_1) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}/cancel | Cancel a task


# **services_check_children_name_availability_0**
> ServicesCheckNameAvailability200Response services_check_children_name_availability_0(subscription_id, group_name, api_version, service_name, parameters)

Check nested resource name validity and availability

This method checks whether a proposed nested resource name is valid and available.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_check_name_availability200_response import ServicesCheckNameAvailability200Response
from openapi_client.models.services_check_name_availability_request import ServicesCheckNameAvailabilityRequest
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
    api_instance = openapi_client.POSTApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    api_version = 'api_version_example' # str | Version of the API
    service_name = 'service_name_example' # str | Name of the service
    parameters = openapi_client.ServicesCheckNameAvailabilityRequest() # ServicesCheckNameAvailabilityRequest | Requested name to validate

    try:
        # Check nested resource name validity and availability
        api_response = api_instance.services_check_children_name_availability_0(subscription_id, group_name, api_version, service_name, parameters)
        print("The response of POSTApi->services_check_children_name_availability_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling POSTApi->services_check_children_name_availability_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **api_version** | **str**| Version of the API | 
 **service_name** | **str**| Name of the service | 
 **parameters** | [**ServicesCheckNameAvailabilityRequest**](ServicesCheckNameAvailabilityRequest.md)| Requested name to validate | 

### Return type

[**ServicesCheckNameAvailability200Response**](ServicesCheckNameAvailability200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Name checked |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_check_name_availability_0**
> ServicesCheckNameAvailability200Response services_check_name_availability_0(subscription_id, api_version, location, parameters)

Check name validity and availability

This method checks whether a proposed top-level resource name is valid and available.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_check_name_availability200_response import ServicesCheckNameAvailability200Response
from openapi_client.models.services_check_name_availability_request import ServicesCheckNameAvailabilityRequest
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
    api_instance = openapi_client.POSTApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    api_version = 'api_version_example' # str | Version of the API
    location = 'location_example' # str | The Azure region of the operation
    parameters = openapi_client.ServicesCheckNameAvailabilityRequest() # ServicesCheckNameAvailabilityRequest | Requested name to validate

    try:
        # Check name validity and availability
        api_response = api_instance.services_check_name_availability_0(subscription_id, api_version, location, parameters)
        print("The response of POSTApi->services_check_name_availability_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling POSTApi->services_check_name_availability_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **api_version** | **str**| Version of the API | 
 **location** | **str**| The Azure region of the operation | 
 **parameters** | [**ServicesCheckNameAvailabilityRequest**](ServicesCheckNameAvailabilityRequest.md)| Requested name to validate | 

### Return type

[**ServicesCheckNameAvailability200Response**](ServicesCheckNameAvailability200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Name checked |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_check_status_1**
> ServicesCheckStatus200Response services_check_status_1(subscription_id, group_name, service_name, api_version)

Check service health status

The services resource is the top-level resource that represents the Data Migration Service. This action performs a health check and returns the status of the service and virtual machine size.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_check_status200_response import ServicesCheckStatus200Response
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
    api_instance = openapi_client.POSTApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Check service health status
        api_response = api_instance.services_check_status_1(subscription_id, group_name, service_name, api_version)
        print("The response of POSTApi->services_check_status_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling POSTApi->services_check_status_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 

### Return type

[**ServicesCheckStatus200Response**](ServicesCheckStatus200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Health checked |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_start_1**
> services_start_1(subscription_id, group_name, service_name, api_version)

Start service

The services resource is the top-level resource that represents the Data Migration Service. This action starts the service and the service can be used for data migration.

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
    api_instance = openapi_client.POSTApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Start service
        api_instance.services_start_1(subscription_id, group_name, service_name, api_version)
    except Exception as e:
        print("Exception when calling POSTApi->services_start_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 

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
**200** | The service has already been started. |  -  |
**202** | The request to start service is accepted. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_stop_1**
> services_stop_1(subscription_id, group_name, service_name, api_version)

Stop service

The services resource is the top-level resource that represents the Data Migration Service. This action stops the service and the service cannot be used for data migration. The service owner won't be billed when the service is stopped.

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
    api_instance = openapi_client.POSTApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Stop service
        api_instance.services_stop_1(subscription_id, group_name, service_name, api_version)
    except Exception as e:
        print("Exception when calling POSTApi->services_stop_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 

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
**200** | The service has already been stopped. |  -  |
**202** | The request to stop service is accepted. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasks_cancel_1**
> TasksGet200Response tasks_cancel_1(subscription_id, group_name, service_name, project_name, task_name, api_version)

Cancel a task

The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. This method cancels a task if it's currently queued or running.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tasks_get200_response import TasksGet200Response
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
    api_instance = openapi_client.POSTApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    task_name = 'task_name_example' # str | Name of the Task
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Cancel a task
        api_response = api_instance.tasks_cancel_1(subscription_id, group_name, service_name, project_name, task_name, api_version)
        print("The response of POSTApi->tasks_cancel_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling POSTApi->tasks_cancel_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **project_name** | **str**| Name of the project | 
 **task_name** | **str**| Name of the Task | 
 **api_version** | **str**| Version of the API | 

### Return type

[**TasksGet200Response**](TasksGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task canceled |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

