# openapi_client.ExperimentApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**experiments_create**](ExperimentApi.md#experiments_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName} | 
[**experiments_delete**](ExperimentApi.md#experiments_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName} | 
[**experiments_get**](ExperimentApi.md#experiments_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName} | 
[**experiments_list_by_workspace**](ExperimentApi.md#experiments_list_by_workspace) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments | 


# **experiments_create**
> Experiment experiments_create(resource_group_name, workspace_name, experiment_name, api_version, subscription_id)



Creates an Experiment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.experiment import Experiment
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
    api_instance = openapi_client.ExperimentApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    workspace_name = 'workspace_name_example' # str | The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    experiment_name = 'experiment_name_example' # str | The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.

    try:
        api_response = api_instance.experiments_create(resource_group_name, workspace_name, experiment_name, api_version, subscription_id)
        print("The response of ExperimentApi->experiments_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentApi->experiments_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **workspace_name** | **str**| The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **experiment_name** | **str**| The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 

### Return type

[**Experiment**](Experiment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the experiment entity. |  -  |
**202** | The operation will be completed asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experiments_delete**
> experiments_delete(resource_group_name, workspace_name, experiment_name, api_version, subscription_id)



Deletes an Experiment.

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
    api_instance = openapi_client.ExperimentApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    workspace_name = 'workspace_name_example' # str | The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    experiment_name = 'experiment_name_example' # str | The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.

    try:
        api_instance.experiments_delete(resource_group_name, workspace_name, experiment_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ExperimentApi->experiments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **workspace_name** | **str**| The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **experiment_name** | **str**| The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 

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
**200** | The operation was successful. |  -  |
**202** | The operation will be completed asynchronously. |  -  |
**204** | No content. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experiments_get**
> Experiment experiments_get(resource_group_name, workspace_name, experiment_name, api_version, subscription_id)



Gets information about an Experiment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.experiment import Experiment
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
    api_instance = openapi_client.ExperimentApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    workspace_name = 'workspace_name_example' # str | The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    experiment_name = 'experiment_name_example' # str | The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.

    try:
        api_response = api_instance.experiments_get(resource_group_name, workspace_name, experiment_name, api_version, subscription_id)
        print("The response of ExperimentApi->experiments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentApi->experiments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **workspace_name** | **str**| The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **experiment_name** | **str**| The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 

### Return type

[**Experiment**](Experiment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains information about the experiment. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experiments_list_by_workspace**
> ExperimentListResult experiments_list_by_workspace(resource_group_name, workspace_name, api_version, subscription_id, maxresults=maxresults)



Gets a list of Experiments within the specified Workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.experiment_list_result import ExperimentListResult
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
    api_instance = openapi_client.ExperimentApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    workspace_name = 'workspace_name_example' # str | The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.
    maxresults = 1000 # int | The maximum number of items to return in the response. A maximum of 1000 files can be returned. (optional) (default to 1000)

    try:
        api_response = api_instance.experiments_list_by_workspace(resource_group_name, workspace_name, api_version, subscription_id, maxresults=maxresults)
        print("The response of ExperimentApi->experiments_list_by_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentApi->experiments_list_by_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **workspace_name** | **str**| The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 
 **maxresults** | **int**| The maximum number of items to return in the response. A maximum of 1000 files can be returned. | [optional] [default to 1000]

### Return type

[**ExperimentListResult**](ExperimentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains a list of experiments within the workspace. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

