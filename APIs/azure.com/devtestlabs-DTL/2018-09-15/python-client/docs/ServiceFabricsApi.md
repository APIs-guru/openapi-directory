# openapi_client.ServiceFabricsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_fabrics_create_or_update**](ServiceFabricsApi.md#service_fabrics_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name} | 
[**service_fabrics_delete**](ServiceFabricsApi.md#service_fabrics_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name} | 
[**service_fabrics_get**](ServiceFabricsApi.md#service_fabrics_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name} | 
[**service_fabrics_list**](ServiceFabricsApi.md#service_fabrics_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics | 
[**service_fabrics_list_applicable_schedules**](ServiceFabricsApi.md#service_fabrics_list_applicable_schedules) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}/listApplicableSchedules | 
[**service_fabrics_start**](ServiceFabricsApi.md#service_fabrics_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}/start | 
[**service_fabrics_stop**](ServiceFabricsApi.md#service_fabrics_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}/stop | 
[**service_fabrics_update**](ServiceFabricsApi.md#service_fabrics_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name} | 


# **service_fabrics_create_or_update**
> ServiceFabric service_fabrics_create_or_update(subscription_id, resource_group_name, lab_name, user_name, name, api_version, service_fabric)



Create or replace an existing service fabric. This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_fabric import ServiceFabric
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
    api_instance = openapi_client.ServiceFabricsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the service fabric.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    service_fabric = openapi_client.ServiceFabric() # ServiceFabric | A Service Fabric.

    try:
        api_response = api_instance.service_fabrics_create_or_update(subscription_id, resource_group_name, lab_name, user_name, name, api_version, service_fabric)
        print("The response of ServiceFabricsApi->service_fabrics_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceFabricsApi->service_fabrics_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the service fabric. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **service_fabric** | [**ServiceFabric**](ServiceFabric.md)| A Service Fabric. | 

### Return type

[**ServiceFabric**](ServiceFabric.md)

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

# **service_fabrics_delete**
> service_fabrics_delete(subscription_id, resource_group_name, lab_name, user_name, name, api_version)



Delete service fabric. This operation can take a while to complete.

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
    api_instance = openapi_client.ServiceFabricsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the service fabric.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_instance.service_fabrics_delete(subscription_id, resource_group_name, lab_name, user_name, name, api_version)
    except Exception as e:
        print("Exception when calling ServiceFabricsApi->service_fabrics_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the service fabric. | 
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
**204** | No Content |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_fabrics_get**
> ServiceFabric service_fabrics_get(subscription_id, resource_group_name, lab_name, user_name, name, api_version, expand=expand)



Get service fabric.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_fabric import ServiceFabric
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
    api_instance = openapi_client.ServiceFabricsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the service fabric.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($expand=applicableSchedule)' (optional)

    try:
        api_response = api_instance.service_fabrics_get(subscription_id, resource_group_name, lab_name, user_name, name, api_version, expand=expand)
        print("The response of ServiceFabricsApi->service_fabrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceFabricsApi->service_fabrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the service fabric. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($expand&#x3D;applicableSchedule)&#39; | [optional] 

### Return type

[**ServiceFabric**](ServiceFabric.md)

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

# **service_fabrics_list**
> ServiceFabricList service_fabrics_list(subscription_id, resource_group_name, lab_name, user_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List service fabrics in a given user profile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_fabric_list import ServiceFabricList
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
    api_instance = openapi_client.ServiceFabricsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($expand=applicableSchedule)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. Example: '$filter=contains(name,'myName') (optional)
    top = 56 # int | The maximum number of resources to return from the operation. Example: '$top=10' (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. Example: '$orderby=name desc' (optional)

    try:
        api_response = api_instance.service_fabrics_list(subscription_id, resource_group_name, lab_name, user_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of ServiceFabricsApi->service_fabrics_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceFabricsApi->service_fabrics_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($expand&#x3D;applicableSchedule)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. Example: &#39;$filter&#x3D;contains(name,&#39;myName&#39;) | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. Example: &#39;$top&#x3D;10&#39; | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. Example: &#39;$orderby&#x3D;name desc&#39; | [optional] 

### Return type

[**ServiceFabricList**](ServiceFabricList.md)

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

# **service_fabrics_list_applicable_schedules**
> ApplicableSchedule service_fabrics_list_applicable_schedules(subscription_id, resource_group_name, lab_name, user_name, name, api_version)



Lists the applicable start/stop schedules, if any.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.applicable_schedule import ApplicableSchedule
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
    api_instance = openapi_client.ServiceFabricsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the service fabric.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_response = api_instance.service_fabrics_list_applicable_schedules(subscription_id, resource_group_name, lab_name, user_name, name, api_version)
        print("The response of ServiceFabricsApi->service_fabrics_list_applicable_schedules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceFabricsApi->service_fabrics_list_applicable_schedules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the service fabric. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]

### Return type

[**ApplicableSchedule**](ApplicableSchedule.md)

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

# **service_fabrics_start**
> service_fabrics_start(subscription_id, resource_group_name, lab_name, user_name, name, api_version)



Start a service fabric. This operation can take a while to complete.

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
    api_instance = openapi_client.ServiceFabricsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the service fabric.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_instance.service_fabrics_start(subscription_id, resource_group_name, lab_name, user_name, name, api_version)
    except Exception as e:
        print("Exception when calling ServiceFabricsApi->service_fabrics_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the service fabric. | 
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

# **service_fabrics_stop**
> service_fabrics_stop(subscription_id, resource_group_name, lab_name, user_name, name, api_version)



Stop a service fabric This operation can take a while to complete.

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
    api_instance = openapi_client.ServiceFabricsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the service fabric.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_instance.service_fabrics_stop(subscription_id, resource_group_name, lab_name, user_name, name, api_version)
    except Exception as e:
        print("Exception when calling ServiceFabricsApi->service_fabrics_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the service fabric. | 
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

# **service_fabrics_update**
> ServiceFabric service_fabrics_update(subscription_id, resource_group_name, lab_name, user_name, name, api_version, service_fabric)



Allows modifying tags of service fabrics. All other properties will be ignored.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_fabric import ServiceFabric
from openapi_client.models.service_fabric_fragment import ServiceFabricFragment
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
    api_instance = openapi_client.ServiceFabricsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the service fabric.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    service_fabric = openapi_client.ServiceFabricFragment() # ServiceFabricFragment | A Service Fabric.

    try:
        api_response = api_instance.service_fabrics_update(subscription_id, resource_group_name, lab_name, user_name, name, api_version, service_fabric)
        print("The response of ServiceFabricsApi->service_fabrics_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceFabricsApi->service_fabrics_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the service fabric. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **service_fabric** | [**ServiceFabricFragment**](ServiceFabricFragment.md)| A Service Fabric. | 

### Return type

[**ServiceFabric**](ServiceFabric.md)

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

