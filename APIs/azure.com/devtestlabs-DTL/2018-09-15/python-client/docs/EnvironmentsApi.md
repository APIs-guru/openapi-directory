# openapi_client.EnvironmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environments_create_or_update**](EnvironmentsApi.md#environments_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name} | 
[**environments_delete**](EnvironmentsApi.md#environments_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name} | 
[**environments_get**](EnvironmentsApi.md#environments_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name} | 
[**environments_list**](EnvironmentsApi.md#environments_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments | 
[**environments_update**](EnvironmentsApi.md#environments_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name} | 


# **environments_create_or_update**
> DtlEnvironment environments_create_or_update(subscription_id, resource_group_name, lab_name, user_name, name, api_version, dtl_environment)



Create or replace an existing environment. This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dtl_environment import DtlEnvironment
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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the environment.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    dtl_environment = openapi_client.DtlEnvironment() # DtlEnvironment | An environment, which is essentially an ARM template deployment.

    try:
        api_response = api_instance.environments_create_or_update(subscription_id, resource_group_name, lab_name, user_name, name, api_version, dtl_environment)
        print("The response of EnvironmentsApi->environments_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the environment. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **dtl_environment** | [**DtlEnvironment**](DtlEnvironment.md)| An environment, which is essentially an ARM template deployment. | 

### Return type

[**DtlEnvironment**](DtlEnvironment.md)

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

# **environments_delete**
> environments_delete(subscription_id, resource_group_name, lab_name, user_name, name, api_version)



Delete environment. This operation can take a while to complete.

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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the environment.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_instance.environments_delete(subscription_id, resource_group_name, lab_name, user_name, name, api_version)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the environment. | 
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

# **environments_get**
> DtlEnvironment environments_get(subscription_id, resource_group_name, lab_name, user_name, name, api_version, expand=expand)



Get environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dtl_environment import DtlEnvironment
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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the environment.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=deploymentProperties)' (optional)

    try:
        api_response = api_instance.environments_get(subscription_id, resource_group_name, lab_name, user_name, name, api_version, expand=expand)
        print("The response of EnvironmentsApi->environments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the environment. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;deploymentProperties)&#39; | [optional] 

### Return type

[**DtlEnvironment**](DtlEnvironment.md)

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

# **environments_list**
> DtlEnvironmentList environments_list(subscription_id, resource_group_name, lab_name, user_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List environments in a given user profile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dtl_environment_list import DtlEnvironmentList
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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=deploymentProperties)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. Example: '$filter=contains(name,'myName') (optional)
    top = 56 # int | The maximum number of resources to return from the operation. Example: '$top=10' (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. Example: '$orderby=name desc' (optional)

    try:
        api_response = api_instance.environments_list(subscription_id, resource_group_name, lab_name, user_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of EnvironmentsApi->environments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;deploymentProperties)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. Example: &#39;$filter&#x3D;contains(name,&#39;myName&#39;) | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. Example: &#39;$top&#x3D;10&#39; | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. Example: &#39;$orderby&#x3D;name desc&#39; | [optional] 

### Return type

[**DtlEnvironmentList**](DtlEnvironmentList.md)

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

# **environments_update**
> DtlEnvironment environments_update(subscription_id, resource_group_name, lab_name, user_name, name, api_version, dtl_environment)



Allows modifying tags of environments. All other properties will be ignored.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dtl_environment import DtlEnvironment
from openapi_client.models.dtl_environment_fragment import DtlEnvironmentFragment
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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the environment.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    dtl_environment = openapi_client.DtlEnvironmentFragment() # DtlEnvironmentFragment | An environment, which is essentially an ARM template deployment.

    try:
        api_response = api_instance.environments_update(subscription_id, resource_group_name, lab_name, user_name, name, api_version, dtl_environment)
        print("The response of EnvironmentsApi->environments_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the environment. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **dtl_environment** | [**DtlEnvironmentFragment**](DtlEnvironmentFragment.md)| An environment, which is essentially an ARM template deployment. | 

### Return type

[**DtlEnvironment**](DtlEnvironment.md)

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

