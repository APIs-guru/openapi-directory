# openapi_client.PipelinesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pipelines_create_or_update**](PipelinesApi.md#pipelines_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName} | 
[**pipelines_create_run**](PipelinesApi.md#pipelines_create_run) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName}/createRun | 
[**pipelines_delete**](PipelinesApi.md#pipelines_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName} | 
[**pipelines_get**](PipelinesApi.md#pipelines_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName} | 
[**pipelines_list_by_factory**](PipelinesApi.md#pipelines_list_by_factory) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines | 


# **pipelines_create_or_update**
> PipelineResource pipelines_create_or_update(subscription_id, resource_group_name, factory_name, pipeline_name, api_version, pipeline, if_match=if_match)



Creates or updates a pipeline.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pipeline_resource import PipelineResource
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
    api_instance = openapi_client.PipelinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    pipeline_name = 'pipeline_name_example' # str | The pipeline name.
    api_version = 'api_version_example' # str | The API version.
    pipeline = openapi_client.PipelineResource() # PipelineResource | Pipeline resource definition.
    if_match = 'if_match_example' # str | ETag of the pipeline entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. (optional)

    try:
        api_response = api_instance.pipelines_create_or_update(subscription_id, resource_group_name, factory_name, pipeline_name, api_version, pipeline, if_match=if_match)
        print("The response of PipelinesApi->pipelines_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->pipelines_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **pipeline_name** | **str**| The pipeline name. | 
 **api_version** | **str**| The API version. | 
 **pipeline** | [**PipelineResource**](PipelineResource.md)| Pipeline resource definition. | 
 **if_match** | **str**| ETag of the pipeline entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. | [optional] 

### Return type

[**PipelineResource**](PipelineResource.md)

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

# **pipelines_create_run**
> CreateRunResponse pipelines_create_run(subscription_id, resource_group_name, factory_name, pipeline_name, api_version, parameters=parameters)



Creates a run of a pipeline.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_run_response import CreateRunResponse
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
    api_instance = openapi_client.PipelinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    pipeline_name = 'pipeline_name_example' # str | The pipeline name.
    api_version = 'api_version_example' # str | The API version.
    parameters = None # Dict[str, object] | Parameters of the pipeline run. (optional)

    try:
        api_response = api_instance.pipelines_create_run(subscription_id, resource_group_name, factory_name, pipeline_name, api_version, parameters=parameters)
        print("The response of PipelinesApi->pipelines_create_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->pipelines_create_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **pipeline_name** | **str**| The pipeline name. | 
 **api_version** | **str**| The API version. | 
 **parameters** | [**Dict[str, object]**](object.md)| Parameters of the pipeline run. | [optional] 

### Return type

[**CreateRunResponse**](CreateRunResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pipelines_delete**
> pipelines_delete(subscription_id, resource_group_name, factory_name, pipeline_name, api_version)



Deletes a pipeline.

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
    api_instance = openapi_client.PipelinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    pipeline_name = 'pipeline_name_example' # str | The pipeline name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.pipelines_delete(subscription_id, resource_group_name, factory_name, pipeline_name, api_version)
    except Exception as e:
        print("Exception when calling PipelinesApi->pipelines_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **pipeline_name** | **str**| The pipeline name. | 
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

# **pipelines_get**
> PipelineResource pipelines_get(subscription_id, resource_group_name, factory_name, pipeline_name, api_version)



Gets a pipeline.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pipeline_resource import PipelineResource
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
    api_instance = openapi_client.PipelinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    pipeline_name = 'pipeline_name_example' # str | The pipeline name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.pipelines_get(subscription_id, resource_group_name, factory_name, pipeline_name, api_version)
        print("The response of PipelinesApi->pipelines_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->pipelines_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **pipeline_name** | **str**| The pipeline name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**PipelineResource**](PipelineResource.md)

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

# **pipelines_list_by_factory**
> PipelineListResponse pipelines_list_by_factory(subscription_id, resource_group_name, factory_name, api_version)



Lists pipelines.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pipeline_list_response import PipelineListResponse
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
    api_instance = openapi_client.PipelinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.pipelines_list_by_factory(subscription_id, resource_group_name, factory_name, api_version)
        print("The response of PipelinesApi->pipelines_list_by_factory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->pipelines_list_by_factory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**PipelineListResponse**](PipelineListResponse.md)

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

