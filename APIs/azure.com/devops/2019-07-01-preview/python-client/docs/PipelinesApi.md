# openapi_client.PipelinesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pipelines_create_or_update**](PipelinesApi.md#pipelines_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOps/pipelines/{pipelineName} | 
[**pipelines_delete**](PipelinesApi.md#pipelines_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOps/pipelines/{pipelineName} | 
[**pipelines_get**](PipelinesApi.md#pipelines_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOps/pipelines/{pipelineName} | 
[**pipelines_list_by_resource_group**](PipelinesApi.md#pipelines_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOps/pipelines | 
[**pipelines_list_by_subscription**](PipelinesApi.md#pipelines_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DevOps/pipelines | 
[**pipelines_update**](PipelinesApi.md#pipelines_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOps/pipelines/{pipelineName} | 


# **pipelines_create_or_update**
> Pipeline pipelines_create_or_update(subscription_id, resource_group_name, api_version, pipeline_name, create_operation_parameters)



Creates or updates an Azure Pipeline.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pipeline import Pipeline
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
    subscription_id = 'subscription_id_example' # str | Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    api_version = 'api_version_example' # str | API version to be used with the HTTP request.
    pipeline_name = 'pipeline_name_example' # str | The name of the Azure Pipeline resource in ARM.
    create_operation_parameters = openapi_client.Pipeline() # Pipeline | The request payload to create the Azure Pipeline.

    try:
        api_response = api_instance.pipelines_create_or_update(subscription_id, resource_group_name, api_version, pipeline_name, create_operation_parameters)
        print("The response of PipelinesApi->pipelines_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->pipelines_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **api_version** | **str**| API version to be used with the HTTP request. | 
 **pipeline_name** | **str**| The name of the Azure Pipeline resource in ARM. | 
 **create_operation_parameters** | [**Pipeline**](Pipeline.md)| The request payload to create the Azure Pipeline. | 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Azure Pipeline has been configured successfully. |  -  |
**202** | The request has been accepted for processing and the Azure Pipeline will be configured asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pipelines_delete**
> pipelines_delete(subscription_id, resource_group_name, api_version, pipeline_name)



Deletes an Azure Pipeline.

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
    subscription_id = 'subscription_id_example' # str | Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    api_version = 'api_version_example' # str | API version to be used with the HTTP request.
    pipeline_name = 'pipeline_name_example' # str | The name of the Azure Pipeline resource.

    try:
        api_instance.pipelines_delete(subscription_id, resource_group_name, api_version, pipeline_name)
    except Exception as e:
        print("Exception when calling PipelinesApi->pipelines_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **api_version** | **str**| API version to be used with the HTTP request. | 
 **pipeline_name** | **str**| The name of the Azure Pipeline resource. | 

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
**200** | The Azure Pipeline has been deleted successfully. |  -  |
**204** | The Azure Pipeline is not found or has been deleted already. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pipelines_get**
> Pipeline pipelines_get(subscription_id, resource_group_name, api_version, pipeline_name)



Gets an existing Azure Pipeline.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pipeline import Pipeline
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
    subscription_id = 'subscription_id_example' # str | Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    api_version = 'api_version_example' # str | API version to be used with the HTTP request.
    pipeline_name = 'pipeline_name_example' # str | The name of the Azure Pipeline resource in ARM.

    try:
        api_response = api_instance.pipelines_get(subscription_id, resource_group_name, api_version, pipeline_name)
        print("The response of PipelinesApi->pipelines_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->pipelines_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **api_version** | **str**| API version to be used with the HTTP request. | 
 **pipeline_name** | **str**| The name of the Azure Pipeline resource in ARM. | 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Azure Pipeline has been fetched successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pipelines_list_by_resource_group**
> PipelineListResult pipelines_list_by_resource_group(subscription_id, resource_group_name, api_version)



Lists all Azure Pipelines under the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pipeline_list_result import PipelineListResult
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
    subscription_id = 'subscription_id_example' # str | Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    api_version = 'api_version_example' # str | API version to be used with the HTTP request.

    try:
        api_response = api_instance.pipelines_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of PipelinesApi->pipelines_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->pipelines_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **api_version** | **str**| API version to be used with the HTTP request. | 

### Return type

[**PipelineListResult**](PipelineListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Azure Pipelines have been fetched successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pipelines_list_by_subscription**
> PipelineListResult pipelines_list_by_subscription(subscription_id, api_version)



Lists all Azure Pipelines under the specified subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pipeline_list_result import PipelineListResult
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
    subscription_id = 'subscription_id_example' # str | Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API version to be used with the HTTP request.

    try:
        api_response = api_instance.pipelines_list_by_subscription(subscription_id, api_version)
        print("The response of PipelinesApi->pipelines_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->pipelines_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API version to be used with the HTTP request. | 

### Return type

[**PipelineListResult**](PipelineListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Azure Pipelines have been fetched successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pipelines_update**
> Pipeline pipelines_update(subscription_id, resource_group_name, api_version, pipeline_name, update_operation_parameters)



Updates the properties of an Azure Pipeline. Currently, only tags can be updated.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pipeline import Pipeline
from openapi_client.models.pipeline_update_parameters import PipelineUpdateParameters
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
    subscription_id = 'subscription_id_example' # str | Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    api_version = 'api_version_example' # str | API version to be used with the HTTP request.
    pipeline_name = 'pipeline_name_example' # str | The name of the Azure Pipeline resource.
    update_operation_parameters = openapi_client.PipelineUpdateParameters() # PipelineUpdateParameters | The request payload containing the properties to update in the Azure Pipeline.

    try:
        api_response = api_instance.pipelines_update(subscription_id, resource_group_name, api_version, pipeline_name, update_operation_parameters)
        print("The response of PipelinesApi->pipelines_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->pipelines_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **api_version** | **str**| API version to be used with the HTTP request. | 
 **pipeline_name** | **str**| The name of the Azure Pipeline resource. | 
 **update_operation_parameters** | [**PipelineUpdateParameters**](PipelineUpdateParameters.md)| The request payload containing the properties to update in the Azure Pipeline. | 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Azure Pipeline has been updated successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

