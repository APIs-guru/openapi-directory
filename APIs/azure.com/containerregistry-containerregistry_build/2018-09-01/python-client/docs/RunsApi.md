# openapi_client.RunsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runs_cancel**](RunsApi.md#runs_cancel) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}/cancel | 
[**runs_get**](RunsApi.md#runs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId} | 
[**runs_get_log_sas_url**](RunsApi.md#runs_get_log_sas_url) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}/listLogSasUrl | 
[**runs_list**](RunsApi.md#runs_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs | 
[**runs_update**](RunsApi.md#runs_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId} | 


# **runs_cancel**
> runs_cancel(subscription_id, resource_group_name, registry_name, api_version, run_id)



Cancel an existing run.

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
    api_instance = openapi_client.RunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    run_id = 'run_id_example' # str | The run ID.

    try:
        api_instance.runs_cancel(subscription_id, resource_group_name, registry_name, api_version, run_id)
    except Exception as e:
        print("Exception when calling RunsApi->runs_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **run_id** | **str**| The run ID. | 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**202** | The request was successfully accepted; the operation will complete asynchronously. |  -  |
**0** | Error response describing why the operation failed. If the registry/run doesn&#39;t exist, 404 (Not found) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runs_get**
> Run runs_get(subscription_id, resource_group_name, registry_name, api_version, run_id)



Gets the detailed information for a given run.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run import Run
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
    api_instance = openapi_client.RunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    run_id = 'run_id_example' # str | The run ID.

    try:
        api_response = api_instance.runs_get(subscription_id, resource_group_name, registry_name, api_version, run_id)
        print("The response of RunsApi->runs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunsApi->runs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **run_id** | **str**| The run ID. | 

### Return type

[**Run**](Run.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed. If the registry/run doesn&#39;t exist, 404 (Not found) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runs_get_log_sas_url**
> RunGetLogResult runs_get_log_sas_url(subscription_id, resource_group_name, registry_name, api_version, run_id)



Gets a link to download the run logs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run_get_log_result import RunGetLogResult
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
    api_instance = openapi_client.RunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    run_id = 'run_id_example' # str | The run ID.

    try:
        api_response = api_instance.runs_get_log_sas_url(subscription_id, resource_group_name, registry_name, api_version, run_id)
        print("The response of RunsApi->runs_get_log_sas_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunsApi->runs_get_log_sas_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **run_id** | **str**| The run ID. | 

### Return type

[**RunGetLogResult**](RunGetLogResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed. If the registry/run doesn&#39;t exist, 404 (Not found) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runs_list**
> RunListResult runs_list(subscription_id, resource_group_name, registry_name, api_version, filter=filter, top=top)



Gets all the runs for a registry.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run_list_result import RunListResult
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
    api_instance = openapi_client.RunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    filter = 'filter_example' # str | The runs filter to apply on the operation. Arithmetic operators are not supported. The allowed string function is 'contains'. All logical operators except 'Not', 'Has', 'All' are allowed. (optional)
    top = 56 # int | $top is supported for get list of runs, which limits the maximum number of runs to return. (optional)

    try:
        api_response = api_instance.runs_list(subscription_id, resource_group_name, registry_name, api_version, filter=filter, top=top)
        print("The response of RunsApi->runs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunsApi->runs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **filter** | **str**| The runs filter to apply on the operation. Arithmetic operators are not supported. The allowed string function is &#39;contains&#39;. All logical operators except &#39;Not&#39;, &#39;Has&#39;, &#39;All&#39; are allowed. | [optional] 
 **top** | **int**| $top is supported for get list of runs, which limits the maximum number of runs to return. | [optional] 

### Return type

[**RunListResult**](RunListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runs_update**
> Run runs_update(subscription_id, resource_group_name, registry_name, api_version, run_id, run_update_parameters)



Patch the run properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run import Run
from openapi_client.models.run_update_parameters import RunUpdateParameters
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
    api_instance = openapi_client.RunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    api_version = 'api_version_example' # str | The client API version.
    run_id = 'run_id_example' # str | The run ID.
    run_update_parameters = openapi_client.RunUpdateParameters() # RunUpdateParameters | The run update properties.

    try:
        api_response = api_instance.runs_update(subscription_id, resource_group_name, registry_name, api_version, run_id, run_update_parameters)
        print("The response of RunsApi->runs_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunsApi->runs_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **api_version** | **str**| The client API version. | 
 **run_id** | **str**| The run ID. | 
 **run_update_parameters** | [**RunUpdateParameters**](RunUpdateParameters.md)| The run update properties. | 

### Return type

[**Run**](Run.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**201** | The request was successfully accepted; the operation will complete asynchronously. The provisioning state of the resource should indicate the current state of the resource. |  -  |
**0** | Error response describing why the operation failed. If the registry/build doesn&#39;t exist, 404 (Not found) is returned. If any of the input parameters is wrong, 400(Bad Request) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

