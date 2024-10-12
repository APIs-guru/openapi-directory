# openapi_client.DeploymentOperationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployment_operations_get**](DeploymentOperationsApi.md#deployment_operations_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations/{operationId} | 
[**deployment_operations_list**](DeploymentOperationsApi.md#deployment_operations_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations | 


# **deployment_operations_get**
> DeploymentOperation deployment_operations_get(resource_group_name, deployment_name, operation_id, api_version, subscription_id)



Get a list of deployments operations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_operation import DeploymentOperation
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
    api_instance = openapi_client.DeploymentOperationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    operation_id = 'operation_id_example' # str | Operation Id.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.deployment_operations_get(resource_group_name, deployment_name, operation_id, api_version, subscription_id)
        print("The response of DeploymentOperationsApi->deployment_operations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentOperationsApi->deployment_operations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **operation_id** | **str**| Operation Id. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**DeploymentOperation**](DeploymentOperation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_operations_list**
> DeploymentOperationsListResult deployment_operations_list(resource_group_name, deployment_name, api_version, subscription_id, top=top)



Gets a list of deployments operations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_operations_list_result import DeploymentOperationsListResult
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
    api_instance = openapi_client.DeploymentOperationsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    top = 56 # int | Query parameters. (optional)

    try:
        api_response = api_instance.deployment_operations_list(resource_group_name, deployment_name, api_version, subscription_id, top=top)
        print("The response of DeploymentOperationsApi->deployment_operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentOperationsApi->deployment_operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **top** | **int**| Query parameters. | [optional] 

### Return type

[**DeploymentOperationsListResult**](DeploymentOperationsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

