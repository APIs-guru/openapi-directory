# openapi_client.DeploymentOperationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployment_operations_get**](DeploymentOperationsApi.md#deployment_operations_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations/{operationId} | 
[**deployment_operations_get_at_management_group_scope**](DeploymentOperationsApi.md#deployment_operations_get_at_management_group_scope) | **GET** /providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId} | 
[**deployment_operations_get_at_scope**](DeploymentOperationsApi.md#deployment_operations_get_at_scope) | **GET** /{scope}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId} | 
[**deployment_operations_get_at_subscription_scope**](DeploymentOperationsApi.md#deployment_operations_get_at_subscription_scope) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId} | 
[**deployment_operations_get_at_tenant_scope**](DeploymentOperationsApi.md#deployment_operations_get_at_tenant_scope) | **GET** /providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId} | 
[**deployment_operations_list**](DeploymentOperationsApi.md#deployment_operations_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations | 
[**deployment_operations_list_at_management_group_scope**](DeploymentOperationsApi.md#deployment_operations_list_at_management_group_scope) | **GET** /providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations | 
[**deployment_operations_list_at_scope**](DeploymentOperationsApi.md#deployment_operations_list_at_scope) | **GET** /{scope}/providers/Microsoft.Resources/deployments/{deploymentName}/operations | 
[**deployment_operations_list_at_subscription_scope**](DeploymentOperationsApi.md#deployment_operations_list_at_subscription_scope) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations | 
[**deployment_operations_list_at_tenant_scope**](DeploymentOperationsApi.md#deployment_operations_list_at_tenant_scope) | **GET** /providers/Microsoft.Resources/deployments/{deploymentName}/operations | 


# **deployment_operations_get**
> DeploymentOperation deployment_operations_get(resource_group_name, deployment_name, operation_id, api_version, subscription_id)



Gets a deployments operation.

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
    operation_id = 'operation_id_example' # str | The ID of the operation to get.
    api_version = 'api_version_example' # str | The API version to use for this operation.
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
 **operation_id** | **str**| The ID of the operation to get. | 
 **api_version** | **str**| The API version to use for this operation. | 
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
**200** | OK - Returns information about the deployment operation. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_operations_get_at_management_group_scope**
> DeploymentOperation deployment_operations_get_at_management_group_scope(group_id, deployment_name, operation_id, api_version)



Gets a deployments operation.

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
    group_id = 'group_id_example' # str | The management group ID.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    operation_id = 'operation_id_example' # str | The ID of the operation to get.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.deployment_operations_get_at_management_group_scope(group_id, deployment_name, operation_id, api_version)
        print("The response of DeploymentOperationsApi->deployment_operations_get_at_management_group_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentOperationsApi->deployment_operations_get_at_management_group_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The management group ID. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **operation_id** | **str**| The ID of the operation to get. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**200** | OK - Returns information about the deployment operation. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_operations_get_at_scope**
> DeploymentOperation deployment_operations_get_at_scope(scope, deployment_name, operation_id, api_version)



Gets a deployments operation.

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
    scope = 'scope_example' # str | The scope of a deployment.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    operation_id = 'operation_id_example' # str | The ID of the operation to get.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.deployment_operations_get_at_scope(scope, deployment_name, operation_id, api_version)
        print("The response of DeploymentOperationsApi->deployment_operations_get_at_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentOperationsApi->deployment_operations_get_at_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of a deployment. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **operation_id** | **str**| The ID of the operation to get. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**200** | OK - Returns information about the deployment operation. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_operations_get_at_subscription_scope**
> DeploymentOperation deployment_operations_get_at_subscription_scope(deployment_name, operation_id, api_version, subscription_id)



Gets a deployments operation.

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
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    operation_id = 'operation_id_example' # str | The ID of the operation to get.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.deployment_operations_get_at_subscription_scope(deployment_name, operation_id, api_version, subscription_id)
        print("The response of DeploymentOperationsApi->deployment_operations_get_at_subscription_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentOperationsApi->deployment_operations_get_at_subscription_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **operation_id** | **str**| The ID of the operation to get. | 
 **api_version** | **str**| The API version to use for this operation. | 
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
**200** | OK - Returns information about the deployment operation. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_operations_get_at_tenant_scope**
> DeploymentOperation deployment_operations_get_at_tenant_scope(deployment_name, operation_id, api_version)



Gets a deployments operation.

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
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    operation_id = 'operation_id_example' # str | The ID of the operation to get.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.deployment_operations_get_at_tenant_scope(deployment_name, operation_id, api_version)
        print("The response of DeploymentOperationsApi->deployment_operations_get_at_tenant_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentOperationsApi->deployment_operations_get_at_tenant_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **operation_id** | **str**| The ID of the operation to get. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**200** | OK - Returns information about the deployment operation. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_operations_list**
> DeploymentOperationsListResult deployment_operations_list(resource_group_name, deployment_name, api_version, subscription_id, top=top)



Gets all deployments operations for a deployment.

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
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    top = 56 # int | The number of results to return. (optional)

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
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **top** | **int**| The number of results to return. | [optional] 

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
**200** | OK - Return an array of deployment operations. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_operations_list_at_management_group_scope**
> DeploymentOperationsListResult deployment_operations_list_at_management_group_scope(group_id, deployment_name, api_version, top=top)



Gets all deployments operations for a deployment.

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
    group_id = 'group_id_example' # str | The management group ID.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    top = 56 # int | The number of results to return. (optional)

    try:
        api_response = api_instance.deployment_operations_list_at_management_group_scope(group_id, deployment_name, api_version, top=top)
        print("The response of DeploymentOperationsApi->deployment_operations_list_at_management_group_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentOperationsApi->deployment_operations_list_at_management_group_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The management group ID. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **top** | **int**| The number of results to return. | [optional] 

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
**200** | OK - Return an array of deployment operations. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_operations_list_at_scope**
> DeploymentOperationsListResult deployment_operations_list_at_scope(scope, deployment_name, api_version, top=top)



Gets all deployments operations for a deployment.

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
    scope = 'scope_example' # str | The scope of a deployment.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    top = 56 # int | The number of results to return. (optional)

    try:
        api_response = api_instance.deployment_operations_list_at_scope(scope, deployment_name, api_version, top=top)
        print("The response of DeploymentOperationsApi->deployment_operations_list_at_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentOperationsApi->deployment_operations_list_at_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of a deployment. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **top** | **int**| The number of results to return. | [optional] 

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
**200** | OK - Return an array of deployment operations. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_operations_list_at_subscription_scope**
> DeploymentOperationsListResult deployment_operations_list_at_subscription_scope(deployment_name, api_version, subscription_id, top=top)



Gets all deployments operations for a deployment.

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
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    top = 56 # int | The number of results to return. (optional)

    try:
        api_response = api_instance.deployment_operations_list_at_subscription_scope(deployment_name, api_version, subscription_id, top=top)
        print("The response of DeploymentOperationsApi->deployment_operations_list_at_subscription_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentOperationsApi->deployment_operations_list_at_subscription_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **top** | **int**| The number of results to return. | [optional] 

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
**200** | OK - Return an array of deployment operations. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_operations_list_at_tenant_scope**
> DeploymentOperationsListResult deployment_operations_list_at_tenant_scope(deployment_name, api_version, top=top)



Gets all deployments operations for a deployment.

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
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    top = 56 # int | The number of results to return. (optional)

    try:
        api_response = api_instance.deployment_operations_list_at_tenant_scope(deployment_name, api_version, top=top)
        print("The response of DeploymentOperationsApi->deployment_operations_list_at_tenant_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentOperationsApi->deployment_operations_list_at_tenant_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **top** | **int**| The number of results to return. | [optional] 

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
**200** | OK - Return an array of deployment operations. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

