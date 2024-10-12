# openapi_client.ServiceFabricSchedulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_fabric_schedules_create_or_update**](ServiceFabricSchedulesApi.md#service_fabric_schedules_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name} | 
[**service_fabric_schedules_delete**](ServiceFabricSchedulesApi.md#service_fabric_schedules_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name} | 
[**service_fabric_schedules_execute**](ServiceFabricSchedulesApi.md#service_fabric_schedules_execute) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}/execute | 
[**service_fabric_schedules_get**](ServiceFabricSchedulesApi.md#service_fabric_schedules_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name} | 
[**service_fabric_schedules_list**](ServiceFabricSchedulesApi.md#service_fabric_schedules_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules | 
[**service_fabric_schedules_update**](ServiceFabricSchedulesApi.md#service_fabric_schedules_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name} | 


# **service_fabric_schedules_create_or_update**
> Schedule service_fabric_schedules_create_or_update(subscription_id, resource_group_name, lab_name, user_name, service_fabric_name, name, api_version, schedule)



Create or replace an existing schedule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.schedule import Schedule
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
    api_instance = openapi_client.ServiceFabricSchedulesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    service_fabric_name = 'service_fabric_name_example' # str | The name of the service fabric.
    name = 'name_example' # str | The name of the schedule.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    schedule = openapi_client.Schedule() # Schedule | A schedule.

    try:
        api_response = api_instance.service_fabric_schedules_create_or_update(subscription_id, resource_group_name, lab_name, user_name, service_fabric_name, name, api_version, schedule)
        print("The response of ServiceFabricSchedulesApi->service_fabric_schedules_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceFabricSchedulesApi->service_fabric_schedules_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **service_fabric_name** | **str**| The name of the service fabric. | 
 **name** | **str**| The name of the schedule. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **schedule** | [**Schedule**](Schedule.md)| A schedule. | 

### Return type

[**Schedule**](Schedule.md)

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
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_fabric_schedules_delete**
> service_fabric_schedules_delete(subscription_id, resource_group_name, lab_name, user_name, service_fabric_name, name, api_version)



Delete schedule.

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
    api_instance = openapi_client.ServiceFabricSchedulesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    service_fabric_name = 'service_fabric_name_example' # str | The name of the service fabric.
    name = 'name_example' # str | The name of the schedule.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_instance.service_fabric_schedules_delete(subscription_id, resource_group_name, lab_name, user_name, service_fabric_name, name, api_version)
    except Exception as e:
        print("Exception when calling ServiceFabricSchedulesApi->service_fabric_schedules_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **service_fabric_name** | **str**| The name of the service fabric. | 
 **name** | **str**| The name of the schedule. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]

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
**200** | OK |  -  |
**204** | No Content |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_fabric_schedules_execute**
> service_fabric_schedules_execute(subscription_id, resource_group_name, lab_name, user_name, service_fabric_name, name, api_version)



Execute a schedule. This operation can take a while to complete.

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
    api_instance = openapi_client.ServiceFabricSchedulesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    service_fabric_name = 'service_fabric_name_example' # str | The name of the service fabric.
    name = 'name_example' # str | The name of the schedule.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_instance.service_fabric_schedules_execute(subscription_id, resource_group_name, lab_name, user_name, service_fabric_name, name, api_version)
    except Exception as e:
        print("Exception when calling ServiceFabricSchedulesApi->service_fabric_schedules_execute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **service_fabric_name** | **str**| The name of the service fabric. | 
 **name** | **str**| The name of the schedule. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_fabric_schedules_get**
> Schedule service_fabric_schedules_get(subscription_id, resource_group_name, lab_name, user_name, service_fabric_name, name, api_version, expand=expand)



Get schedule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.schedule import Schedule
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
    api_instance = openapi_client.ServiceFabricSchedulesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    service_fabric_name = 'service_fabric_name_example' # str | The name of the service fabric.
    name = 'name_example' # str | The name of the schedule.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=status)' (optional)

    try:
        api_response = api_instance.service_fabric_schedules_get(subscription_id, resource_group_name, lab_name, user_name, service_fabric_name, name, api_version, expand=expand)
        print("The response of ServiceFabricSchedulesApi->service_fabric_schedules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceFabricSchedulesApi->service_fabric_schedules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **service_fabric_name** | **str**| The name of the service fabric. | 
 **name** | **str**| The name of the schedule. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;status)&#39; | [optional] 

### Return type

[**Schedule**](Schedule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_fabric_schedules_list**
> ScheduleList service_fabric_schedules_list(subscription_id, resource_group_name, lab_name, user_name, service_fabric_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List schedules in a given service fabric.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.schedule_list import ScheduleList
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
    api_instance = openapi_client.ServiceFabricSchedulesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    service_fabric_name = 'service_fabric_name_example' # str | The name of the service fabric.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=status)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. Example: '$filter=contains(name,'myName') (optional)
    top = 56 # int | The maximum number of resources to return from the operation. Example: '$top=10' (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. Example: '$orderby=name desc' (optional)

    try:
        api_response = api_instance.service_fabric_schedules_list(subscription_id, resource_group_name, lab_name, user_name, service_fabric_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of ServiceFabricSchedulesApi->service_fabric_schedules_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceFabricSchedulesApi->service_fabric_schedules_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **service_fabric_name** | **str**| The name of the service fabric. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;status)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. Example: &#39;$filter&#x3D;contains(name,&#39;myName&#39;) | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. Example: &#39;$top&#x3D;10&#39; | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. Example: &#39;$orderby&#x3D;name desc&#39; | [optional] 

### Return type

[**ScheduleList**](ScheduleList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_fabric_schedules_update**
> Schedule service_fabric_schedules_update(subscription_id, resource_group_name, lab_name, user_name, service_fabric_name, name, api_version, schedule)



Allows modifying tags of schedules. All other properties will be ignored.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.schedule import Schedule
from openapi_client.models.schedule_fragment import ScheduleFragment
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
    api_instance = openapi_client.ServiceFabricSchedulesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    service_fabric_name = 'service_fabric_name_example' # str | The name of the service fabric.
    name = 'name_example' # str | The name of the schedule.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    schedule = openapi_client.ScheduleFragment() # ScheduleFragment | A schedule.

    try:
        api_response = api_instance.service_fabric_schedules_update(subscription_id, resource_group_name, lab_name, user_name, service_fabric_name, name, api_version, schedule)
        print("The response of ServiceFabricSchedulesApi->service_fabric_schedules_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceFabricSchedulesApi->service_fabric_schedules_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **service_fabric_name** | **str**| The name of the service fabric. | 
 **name** | **str**| The name of the schedule. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **schedule** | [**ScheduleFragment**](ScheduleFragment.md)| A schedule. | 

### Return type

[**Schedule**](Schedule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

