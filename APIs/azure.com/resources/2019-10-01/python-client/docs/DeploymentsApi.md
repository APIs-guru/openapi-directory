# openapi_client.DeploymentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployments_calculate_template_hash**](DeploymentsApi.md#deployments_calculate_template_hash) | **POST** /providers/Microsoft.Resources/calculateTemplateHash | 
[**deployments_cancel**](DeploymentsApi.md#deployments_cancel) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/cancel | Cancels a currently running template deployment.
[**deployments_cancel_at_management_group_scope**](DeploymentsApi.md#deployments_cancel_at_management_group_scope) | **POST** /providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/cancel | Cancels a currently running template deployment.
[**deployments_cancel_at_scope**](DeploymentsApi.md#deployments_cancel_at_scope) | **POST** /{scope}/providers/Microsoft.Resources/deployments/{deploymentName}/cancel | Cancels a currently running template deployment.
[**deployments_cancel_at_subscription_scope**](DeploymentsApi.md#deployments_cancel_at_subscription_scope) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/cancel | Cancels a currently running template deployment.
[**deployments_cancel_at_tenant_scope**](DeploymentsApi.md#deployments_cancel_at_tenant_scope) | **POST** /providers/Microsoft.Resources/deployments/{deploymentName}/cancel | Cancels a currently running template deployment.
[**deployments_check_existence**](DeploymentsApi.md#deployments_check_existence) | **HEAD** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName} | 
[**deployments_check_existence_at_management_group_scope**](DeploymentsApi.md#deployments_check_existence_at_management_group_scope) | **HEAD** /providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName} | 
[**deployments_check_existence_at_scope**](DeploymentsApi.md#deployments_check_existence_at_scope) | **HEAD** /{scope}/providers/Microsoft.Resources/deployments/{deploymentName} | 
[**deployments_check_existence_at_subscription_scope**](DeploymentsApi.md#deployments_check_existence_at_subscription_scope) | **HEAD** /subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName} | 
[**deployments_check_existence_at_tenant_scope**](DeploymentsApi.md#deployments_check_existence_at_tenant_scope) | **HEAD** /providers/Microsoft.Resources/deployments/{deploymentName} | 
[**deployments_create_or_update**](DeploymentsApi.md#deployments_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName} | Deploys resources to a resource group.
[**deployments_create_or_update_at_management_group_scope**](DeploymentsApi.md#deployments_create_or_update_at_management_group_scope) | **PUT** /providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName} | Deploys resources at management group scope.
[**deployments_create_or_update_at_scope**](DeploymentsApi.md#deployments_create_or_update_at_scope) | **PUT** /{scope}/providers/Microsoft.Resources/deployments/{deploymentName} | Deploys resources at a given scope.
[**deployments_create_or_update_at_subscription_scope**](DeploymentsApi.md#deployments_create_or_update_at_subscription_scope) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName} | Deploys resources at subscription scope.
[**deployments_create_or_update_at_tenant_scope**](DeploymentsApi.md#deployments_create_or_update_at_tenant_scope) | **PUT** /providers/Microsoft.Resources/deployments/{deploymentName} | Deploys resources at tenant scope.
[**deployments_delete**](DeploymentsApi.md#deployments_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName} | Deletes a deployment from the deployment history.
[**deployments_delete_at_management_group_scope**](DeploymentsApi.md#deployments_delete_at_management_group_scope) | **DELETE** /providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName} | Deletes a deployment from the deployment history.
[**deployments_delete_at_scope**](DeploymentsApi.md#deployments_delete_at_scope) | **DELETE** /{scope}/providers/Microsoft.Resources/deployments/{deploymentName} | Deletes a deployment from the deployment history.
[**deployments_delete_at_subscription_scope**](DeploymentsApi.md#deployments_delete_at_subscription_scope) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName} | Deletes a deployment from the deployment history.
[**deployments_delete_at_tenant_scope**](DeploymentsApi.md#deployments_delete_at_tenant_scope) | **DELETE** /providers/Microsoft.Resources/deployments/{deploymentName} | Deletes a deployment from the deployment history.
[**deployments_export_template**](DeploymentsApi.md#deployments_export_template) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate | 
[**deployments_export_template_at_management_group_scope**](DeploymentsApi.md#deployments_export_template_at_management_group_scope) | **POST** /providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate | 
[**deployments_export_template_at_scope**](DeploymentsApi.md#deployments_export_template_at_scope) | **POST** /{scope}/providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate | 
[**deployments_export_template_at_subscription_scope**](DeploymentsApi.md#deployments_export_template_at_subscription_scope) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate | 
[**deployments_export_template_at_tenant_scope**](DeploymentsApi.md#deployments_export_template_at_tenant_scope) | **POST** /providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate | 
[**deployments_get**](DeploymentsApi.md#deployments_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName} | 
[**deployments_get_at_management_group_scope**](DeploymentsApi.md#deployments_get_at_management_group_scope) | **GET** /providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName} | 
[**deployments_get_at_scope**](DeploymentsApi.md#deployments_get_at_scope) | **GET** /{scope}/providers/Microsoft.Resources/deployments/{deploymentName} | 
[**deployments_get_at_subscription_scope**](DeploymentsApi.md#deployments_get_at_subscription_scope) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName} | 
[**deployments_get_at_tenant_scope**](DeploymentsApi.md#deployments_get_at_tenant_scope) | **GET** /providers/Microsoft.Resources/deployments/{deploymentName} | 
[**deployments_list_at_management_group_scope**](DeploymentsApi.md#deployments_list_at_management_group_scope) | **GET** /providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/ | 
[**deployments_list_at_scope**](DeploymentsApi.md#deployments_list_at_scope) | **GET** /{scope}/providers/Microsoft.Resources/deployments/ | 
[**deployments_list_at_subscription_scope**](DeploymentsApi.md#deployments_list_at_subscription_scope) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/ | 
[**deployments_list_at_tenant_scope**](DeploymentsApi.md#deployments_list_at_tenant_scope) | **GET** /providers/Microsoft.Resources/deployments/ | 
[**deployments_list_by_resource_group**](DeploymentsApi.md#deployments_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/ | 
[**deployments_validate**](DeploymentsApi.md#deployments_validate) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/validate | 
[**deployments_validate_at_management_group_scope**](DeploymentsApi.md#deployments_validate_at_management_group_scope) | **POST** /providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/validate | 
[**deployments_validate_at_scope**](DeploymentsApi.md#deployments_validate_at_scope) | **POST** /{scope}/providers/Microsoft.Resources/deployments/{deploymentName}/validate | 
[**deployments_validate_at_subscription_scope**](DeploymentsApi.md#deployments_validate_at_subscription_scope) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/validate | 
[**deployments_validate_at_tenant_scope**](DeploymentsApi.md#deployments_validate_at_tenant_scope) | **POST** /providers/Microsoft.Resources/deployments/{deploymentName}/validate | 
[**deployments_what_if**](DeploymentsApi.md#deployments_what_if) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/whatIf | 
[**deployments_what_if_at_subscription_scope**](DeploymentsApi.md#deployments_what_if_at_subscription_scope) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/whatIf | 


# **deployments_calculate_template_hash**
> TemplateHashResult deployments_calculate_template_hash(api_version, template)



Calculate the hash of the given template.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.template_hash_result import TemplateHashResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    template = None # object | The template provided to calculate hash.

    try:
        api_response = api_instance.deployments_calculate_template_hash(api_version, template)
        print("The response of DeploymentsApi->deployments_calculate_template_hash:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_calculate_template_hash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **template** | **object**| The template provided to calculate hash. | 

### Return type

[**TemplateHashResult**](TemplateHashResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the hash. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_cancel**
> deployments_cancel(resource_group_name, deployment_name, api_version, subscription_id)

Cancels a currently running template deployment.

You can cancel a deployment only if the provisioningState is Accepted or Running. After the deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment stops the currently running template deployment and leaves the resource group partially deployed.

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
    api_instance = openapi_client.DeploymentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        # Cancels a currently running template deployment.
        api_instance.deployments_cancel(resource_group_name, deployment_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

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
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_cancel_at_management_group_scope**
> deployments_cancel_at_management_group_scope(group_id, deployment_name, api_version)

Cancels a currently running template deployment.

You can cancel a deployment only if the provisioningState is Accepted or Running. After the deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment stops the currently running template deployment and leaves the resources partially deployed.

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
    api_instance = openapi_client.DeploymentsApi(api_client)
    group_id = 'group_id_example' # str | The management group ID.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        # Cancels a currently running template deployment.
        api_instance.deployments_cancel_at_management_group_scope(group_id, deployment_name, api_version)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_cancel_at_management_group_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The management group ID. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_cancel_at_scope**
> deployments_cancel_at_scope(scope, deployment_name, api_version)

Cancels a currently running template deployment.

You can cancel a deployment only if the provisioningState is Accepted or Running. After the deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment stops the currently running template deployment and leaves the resources partially deployed.

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
    api_instance = openapi_client.DeploymentsApi(api_client)
    scope = 'scope_example' # str | The resource scope.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        # Cancels a currently running template deployment.
        api_instance.deployments_cancel_at_scope(scope, deployment_name, api_version)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_cancel_at_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The resource scope. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_cancel_at_subscription_scope**
> deployments_cancel_at_subscription_scope(deployment_name, api_version, subscription_id)

Cancels a currently running template deployment.

You can cancel a deployment only if the provisioningState is Accepted or Running. After the deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment stops the currently running template deployment and leaves the resources partially deployed.

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
    api_instance = openapi_client.DeploymentsApi(api_client)
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        # Cancels a currently running template deployment.
        api_instance.deployments_cancel_at_subscription_scope(deployment_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_cancel_at_subscription_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

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
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_cancel_at_tenant_scope**
> deployments_cancel_at_tenant_scope(deployment_name, api_version)

Cancels a currently running template deployment.

You can cancel a deployment only if the provisioningState is Accepted or Running. After the deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment stops the currently running template deployment and leaves the resources partially deployed.

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
    api_instance = openapi_client.DeploymentsApi(api_client)
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        # Cancels a currently running template deployment.
        api_instance.deployments_cancel_at_tenant_scope(deployment_name, api_version)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_cancel_at_tenant_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_check_existence**
> deployments_check_existence(resource_group_name, deployment_name, api_version, subscription_id)



Checks whether the deployment exists.

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
    api_instance = openapi_client.DeploymentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group with the deployment to check. The name is case insensitive.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_instance.deployments_check_existence(resource_group_name, deployment_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_check_existence: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group with the deployment to check. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

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
**204** | No Content |  -  |
**404** | Not Found |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_check_existence_at_management_group_scope**
> deployments_check_existence_at_management_group_scope(group_id, deployment_name, api_version)



Checks whether the deployment exists.

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
    api_instance = openapi_client.DeploymentsApi(api_client)
    group_id = 'group_id_example' # str | The management group ID.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_instance.deployments_check_existence_at_management_group_scope(group_id, deployment_name, api_version)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_check_existence_at_management_group_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The management group ID. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**204** | No Content |  -  |
**404** | Not Found |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_check_existence_at_scope**
> deployments_check_existence_at_scope(scope, deployment_name, api_version)



Checks whether the deployment exists.

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
    api_instance = openapi_client.DeploymentsApi(api_client)
    scope = 'scope_example' # str | The resource scope.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_instance.deployments_check_existence_at_scope(scope, deployment_name, api_version)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_check_existence_at_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The resource scope. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**204** | No Content |  -  |
**404** | Not Found |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_check_existence_at_subscription_scope**
> deployments_check_existence_at_subscription_scope(deployment_name, api_version, subscription_id)



Checks whether the deployment exists.

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
    api_instance = openapi_client.DeploymentsApi(api_client)
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_instance.deployments_check_existence_at_subscription_scope(deployment_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_check_existence_at_subscription_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

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
**204** | No Content |  -  |
**404** | Not Found |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_check_existence_at_tenant_scope**
> deployments_check_existence_at_tenant_scope(deployment_name, api_version)



Checks whether the deployment exists.

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
    api_instance = openapi_client.DeploymentsApi(api_client)
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_instance.deployments_check_existence_at_tenant_scope(deployment_name, api_version)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_check_existence_at_tenant_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**204** | No Content |  -  |
**404** | Not Found |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_create_or_update**
> DeploymentExtended deployments_create_or_update(resource_group_name, deployment_name, api_version, subscription_id, parameters)

Deploys resources to a resource group.

You can provide the template and parameters directly in the request or link to JSON files.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.models.deployment_extended import DeploymentExtended
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to deploy the resources to. The name is case insensitive. The resource group must already exist.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.Deployment() # Deployment | Additional parameters supplied to the operation.

    try:
        # Deploys resources to a resource group.
        api_response = api_instance.deployments_create_or_update(resource_group_name, deployment_name, api_version, subscription_id, parameters)
        print("The response of DeploymentsApi->deployments_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to deploy the resources to. The name is case insensitive. The resource group must already exist. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**Deployment**](Deployment.md)| Additional parameters supplied to the operation. | 

### Return type

[**DeploymentExtended**](DeploymentExtended.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the deployment, including provisioning status. |  -  |
**201** | Created - Returns information about the deployment, including provisioning status. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_create_or_update_at_management_group_scope**
> DeploymentExtended deployments_create_or_update_at_management_group_scope(group_id, deployment_name, api_version, parameters)

Deploys resources at management group scope.

You can provide the template and parameters directly in the request or link to JSON files.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_extended import DeploymentExtended
from openapi_client.models.scoped_deployment import ScopedDeployment
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    group_id = 'group_id_example' # str | The management group ID.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    parameters = openapi_client.ScopedDeployment() # ScopedDeployment | Additional parameters supplied to the operation.

    try:
        # Deploys resources at management group scope.
        api_response = api_instance.deployments_create_or_update_at_management_group_scope(group_id, deployment_name, api_version, parameters)
        print("The response of DeploymentsApi->deployments_create_or_update_at_management_group_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_create_or_update_at_management_group_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The management group ID. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **parameters** | [**ScopedDeployment**](ScopedDeployment.md)| Additional parameters supplied to the operation. | 

### Return type

[**DeploymentExtended**](DeploymentExtended.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the deployment, including provisioning status. |  -  |
**201** | Created - Returns information about the deployment, including provisioning status. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_create_or_update_at_scope**
> DeploymentExtended deployments_create_or_update_at_scope(scope, deployment_name, api_version, parameters)

Deploys resources at a given scope.

You can provide the template and parameters directly in the request or link to JSON files.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.models.deployment_extended import DeploymentExtended
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    scope = 'scope_example' # str | The resource scope.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    parameters = openapi_client.Deployment() # Deployment | Additional parameters supplied to the operation.

    try:
        # Deploys resources at a given scope.
        api_response = api_instance.deployments_create_or_update_at_scope(scope, deployment_name, api_version, parameters)
        print("The response of DeploymentsApi->deployments_create_or_update_at_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_create_or_update_at_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The resource scope. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **parameters** | [**Deployment**](Deployment.md)| Additional parameters supplied to the operation. | 

### Return type

[**DeploymentExtended**](DeploymentExtended.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the deployment, including provisioning status. |  -  |
**201** | Created - Returns information about the deployment, including provisioning status. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_create_or_update_at_subscription_scope**
> DeploymentExtended deployments_create_or_update_at_subscription_scope(deployment_name, api_version, subscription_id, parameters)

Deploys resources at subscription scope.

You can provide the template and parameters directly in the request or link to JSON files.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.models.deployment_extended import DeploymentExtended
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.Deployment() # Deployment | Additional parameters supplied to the operation.

    try:
        # Deploys resources at subscription scope.
        api_response = api_instance.deployments_create_or_update_at_subscription_scope(deployment_name, api_version, subscription_id, parameters)
        print("The response of DeploymentsApi->deployments_create_or_update_at_subscription_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_create_or_update_at_subscription_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**Deployment**](Deployment.md)| Additional parameters supplied to the operation. | 

### Return type

[**DeploymentExtended**](DeploymentExtended.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the deployment, including provisioning status. |  -  |
**201** | Created - Returns information about the deployment, including provisioning status. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_create_or_update_at_tenant_scope**
> DeploymentExtended deployments_create_or_update_at_tenant_scope(deployment_name, api_version, parameters)

Deploys resources at tenant scope.

You can provide the template and parameters directly in the request or link to JSON files.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_extended import DeploymentExtended
from openapi_client.models.scoped_deployment import ScopedDeployment
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    parameters = openapi_client.ScopedDeployment() # ScopedDeployment | Additional parameters supplied to the operation.

    try:
        # Deploys resources at tenant scope.
        api_response = api_instance.deployments_create_or_update_at_tenant_scope(deployment_name, api_version, parameters)
        print("The response of DeploymentsApi->deployments_create_or_update_at_tenant_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_create_or_update_at_tenant_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **parameters** | [**ScopedDeployment**](ScopedDeployment.md)| Additional parameters supplied to the operation. | 

### Return type

[**DeploymentExtended**](DeploymentExtended.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the deployment, including provisioning status. |  -  |
**201** | Created - Returns information about the deployment, including provisioning status. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_delete**
> deployments_delete(resource_group_name, deployment_name, api_version, subscription_id)

Deletes a deployment from the deployment history.

A template deployment that is currently running cannot be deleted. Deleting a template deployment removes the associated deployment operations. Deleting a template deployment does not affect the state of the resource group. This is an asynchronous operation that returns a status of 202 until the template deployment is successfully deleted. The Location response header contains the URI that is used to obtain the status of the process. While the process is running, a call to the URI in the Location header returns a status of 202. When the process finishes, the URI in the Location header returns a status of 204 on success. If the asynchronous request failed, the URI in the Location header returns an error-level status code.

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
    api_instance = openapi_client.DeploymentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group with the deployment to delete. The name is case insensitive.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        # Deletes a deployment from the deployment history.
        api_instance.deployments_delete(resource_group_name, deployment_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group with the deployment to delete. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

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
**202** | Accepted - Returns this status until the asynchronous operation has completed. |  -  |
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_delete_at_management_group_scope**
> deployments_delete_at_management_group_scope(group_id, deployment_name, api_version)

Deletes a deployment from the deployment history.

A template deployment that is currently running cannot be deleted. Deleting a template deployment removes the associated deployment operations. This is an asynchronous operation that returns a status of 202 until the template deployment is successfully deleted. The Location response header contains the URI that is used to obtain the status of the process. While the process is running, a call to the URI in the Location header returns a status of 202. When the process finishes, the URI in the Location header returns a status of 204 on success. If the asynchronous request failed, the URI in the Location header returns an error-level status code.

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
    api_instance = openapi_client.DeploymentsApi(api_client)
    group_id = 'group_id_example' # str | The management group ID.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        # Deletes a deployment from the deployment history.
        api_instance.deployments_delete_at_management_group_scope(group_id, deployment_name, api_version)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_delete_at_management_group_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The management group ID. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**202** | Accepted - Returns this status until the asynchronous operation has completed. |  -  |
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_delete_at_scope**
> deployments_delete_at_scope(scope, deployment_name, api_version)

Deletes a deployment from the deployment history.

A template deployment that is currently running cannot be deleted. Deleting a template deployment removes the associated deployment operations. This is an asynchronous operation that returns a status of 202 until the template deployment is successfully deleted. The Location response header contains the URI that is used to obtain the status of the process. While the process is running, a call to the URI in the Location header returns a status of 202. When the process finishes, the URI in the Location header returns a status of 204 on success. If the asynchronous request failed, the URI in the Location header returns an error-level status code.

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
    api_instance = openapi_client.DeploymentsApi(api_client)
    scope = 'scope_example' # str | The resource scope.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        # Deletes a deployment from the deployment history.
        api_instance.deployments_delete_at_scope(scope, deployment_name, api_version)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_delete_at_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The resource scope. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**202** | Accepted - Returns this status until the asynchronous operation has completed. |  -  |
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_delete_at_subscription_scope**
> deployments_delete_at_subscription_scope(deployment_name, api_version, subscription_id)

Deletes a deployment from the deployment history.

A template deployment that is currently running cannot be deleted. Deleting a template deployment removes the associated deployment operations. This is an asynchronous operation that returns a status of 202 until the template deployment is successfully deleted. The Location response header contains the URI that is used to obtain the status of the process. While the process is running, a call to the URI in the Location header returns a status of 202. When the process finishes, the URI in the Location header returns a status of 204 on success. If the asynchronous request failed, the URI in the Location header returns an error-level status code.

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
    api_instance = openapi_client.DeploymentsApi(api_client)
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        # Deletes a deployment from the deployment history.
        api_instance.deployments_delete_at_subscription_scope(deployment_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_delete_at_subscription_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

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
**202** | Accepted - Returns this status until the asynchronous operation has completed. |  -  |
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_delete_at_tenant_scope**
> deployments_delete_at_tenant_scope(deployment_name, api_version)

Deletes a deployment from the deployment history.

A template deployment that is currently running cannot be deleted. Deleting a template deployment removes the associated deployment operations. This is an asynchronous operation that returns a status of 202 until the template deployment is successfully deleted. The Location response header contains the URI that is used to obtain the status of the process. While the process is running, a call to the URI in the Location header returns a status of 202. When the process finishes, the URI in the Location header returns a status of 204 on success. If the asynchronous request failed, the URI in the Location header returns an error-level status code.

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
    api_instance = openapi_client.DeploymentsApi(api_client)
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        # Deletes a deployment from the deployment history.
        api_instance.deployments_delete_at_tenant_scope(deployment_name, api_version)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_delete_at_tenant_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**202** | Accepted - Returns this status until the asynchronous operation has completed. |  -  |
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_export_template**
> DeploymentExportResult deployments_export_template(resource_group_name, deployment_name, api_version, subscription_id)



Exports the template used for specified deployment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_export_result import DeploymentExportResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.deployments_export_template(resource_group_name, deployment_name, api_version, subscription_id)
        print("The response of DeploymentsApi->deployments_export_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_export_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**DeploymentExportResult**](DeploymentExportResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the template. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_export_template_at_management_group_scope**
> DeploymentExportResult deployments_export_template_at_management_group_scope(group_id, deployment_name, api_version)



Exports the template used for specified deployment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_export_result import DeploymentExportResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    group_id = 'group_id_example' # str | The management group ID.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.deployments_export_template_at_management_group_scope(group_id, deployment_name, api_version)
        print("The response of DeploymentsApi->deployments_export_template_at_management_group_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_export_template_at_management_group_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The management group ID. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**DeploymentExportResult**](DeploymentExportResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the template. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_export_template_at_scope**
> DeploymentExportResult deployments_export_template_at_scope(scope, deployment_name, api_version)



Exports the template used for specified deployment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_export_result import DeploymentExportResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    scope = 'scope_example' # str | The resource scope.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.deployments_export_template_at_scope(scope, deployment_name, api_version)
        print("The response of DeploymentsApi->deployments_export_template_at_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_export_template_at_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The resource scope. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**DeploymentExportResult**](DeploymentExportResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the template. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_export_template_at_subscription_scope**
> DeploymentExportResult deployments_export_template_at_subscription_scope(deployment_name, api_version, subscription_id)



Exports the template used for specified deployment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_export_result import DeploymentExportResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.deployments_export_template_at_subscription_scope(deployment_name, api_version, subscription_id)
        print("The response of DeploymentsApi->deployments_export_template_at_subscription_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_export_template_at_subscription_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**DeploymentExportResult**](DeploymentExportResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the template. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_export_template_at_tenant_scope**
> DeploymentExportResult deployments_export_template_at_tenant_scope(deployment_name, api_version)



Exports the template used for specified deployment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_export_result import DeploymentExportResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.deployments_export_template_at_tenant_scope(deployment_name, api_version)
        print("The response of DeploymentsApi->deployments_export_template_at_tenant_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_export_template_at_tenant_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**DeploymentExportResult**](DeploymentExportResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the template. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_get**
> DeploymentExtended deployments_get(resource_group_name, deployment_name, api_version, subscription_id)



Gets a deployment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_extended import DeploymentExtended
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.deployments_get(resource_group_name, deployment_name, api_version, subscription_id)
        print("The response of DeploymentsApi->deployments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**DeploymentExtended**](DeploymentExtended.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the deployment, including provisioning status. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_get_at_management_group_scope**
> DeploymentExtended deployments_get_at_management_group_scope(group_id, deployment_name, api_version)



Gets a deployment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_extended import DeploymentExtended
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    group_id = 'group_id_example' # str | The management group ID.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.deployments_get_at_management_group_scope(group_id, deployment_name, api_version)
        print("The response of DeploymentsApi->deployments_get_at_management_group_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_get_at_management_group_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The management group ID. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**DeploymentExtended**](DeploymentExtended.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the deployment, including provisioning status. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_get_at_scope**
> DeploymentExtended deployments_get_at_scope(scope, deployment_name, api_version)



Gets a deployment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_extended import DeploymentExtended
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    scope = 'scope_example' # str | The resource scope.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.deployments_get_at_scope(scope, deployment_name, api_version)
        print("The response of DeploymentsApi->deployments_get_at_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_get_at_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The resource scope. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**DeploymentExtended**](DeploymentExtended.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the deployment, including provisioning status. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_get_at_subscription_scope**
> DeploymentExtended deployments_get_at_subscription_scope(deployment_name, api_version, subscription_id)



Gets a deployment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_extended import DeploymentExtended
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.deployments_get_at_subscription_scope(deployment_name, api_version, subscription_id)
        print("The response of DeploymentsApi->deployments_get_at_subscription_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_get_at_subscription_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**DeploymentExtended**](DeploymentExtended.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the deployment, including provisioning status. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_get_at_tenant_scope**
> DeploymentExtended deployments_get_at_tenant_scope(deployment_name, api_version)



Gets a deployment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_extended import DeploymentExtended
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.deployments_get_at_tenant_scope(deployment_name, api_version)
        print("The response of DeploymentsApi->deployments_get_at_tenant_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_get_at_tenant_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**DeploymentExtended**](DeploymentExtended.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the deployment, including provisioning status. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_list_at_management_group_scope**
> DeploymentListResult deployments_list_at_management_group_scope(group_id, api_version, filter=filter, top=top)



Get all the deployments for a management group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_list_result import DeploymentListResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    group_id = 'group_id_example' # str | The management group ID.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    filter = 'filter_example' # str | The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. (optional)
    top = 56 # int | The number of results to get. If null is passed, returns all deployments. (optional)

    try:
        api_response = api_instance.deployments_list_at_management_group_scope(group_id, api_version, filter=filter, top=top)
        print("The response of DeploymentsApi->deployments_list_at_management_group_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_list_at_management_group_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The management group ID. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **filter** | **str**| The filter to apply on the operation. For example, you can use $filter&#x3D;provisioningState eq &#39;{state}&#39;. | [optional] 
 **top** | **int**| The number of results to get. If null is passed, returns all deployments. | [optional] 

### Return type

[**DeploymentListResult**](DeploymentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of deployments. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_list_at_scope**
> DeploymentListResult deployments_list_at_scope(scope, api_version, filter=filter, top=top)



Get all the deployments at the given scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_list_result import DeploymentListResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    scope = 'scope_example' # str | The resource scope.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    filter = 'filter_example' # str | The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. (optional)
    top = 56 # int | The number of results to get. If null is passed, returns all deployments. (optional)

    try:
        api_response = api_instance.deployments_list_at_scope(scope, api_version, filter=filter, top=top)
        print("The response of DeploymentsApi->deployments_list_at_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_list_at_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The resource scope. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **filter** | **str**| The filter to apply on the operation. For example, you can use $filter&#x3D;provisioningState eq &#39;{state}&#39;. | [optional] 
 **top** | **int**| The number of results to get. If null is passed, returns all deployments. | [optional] 

### Return type

[**DeploymentListResult**](DeploymentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of deployments. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_list_at_subscription_scope**
> DeploymentListResult deployments_list_at_subscription_scope(api_version, subscription_id, filter=filter, top=top)



Get all the deployments for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_list_result import DeploymentListResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    filter = 'filter_example' # str | The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. (optional)
    top = 56 # int | The number of results to get. If null is passed, returns all deployments. (optional)

    try:
        api_response = api_instance.deployments_list_at_subscription_scope(api_version, subscription_id, filter=filter, top=top)
        print("The response of DeploymentsApi->deployments_list_at_subscription_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_list_at_subscription_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **filter** | **str**| The filter to apply on the operation. For example, you can use $filter&#x3D;provisioningState eq &#39;{state}&#39;. | [optional] 
 **top** | **int**| The number of results to get. If null is passed, returns all deployments. | [optional] 

### Return type

[**DeploymentListResult**](DeploymentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of deployments. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_list_at_tenant_scope**
> DeploymentListResult deployments_list_at_tenant_scope(api_version, filter=filter, top=top)



Get all the deployments at the tenant scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_list_result import DeploymentListResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    filter = 'filter_example' # str | The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. (optional)
    top = 56 # int | The number of results to get. If null is passed, returns all deployments. (optional)

    try:
        api_response = api_instance.deployments_list_at_tenant_scope(api_version, filter=filter, top=top)
        print("The response of DeploymentsApi->deployments_list_at_tenant_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_list_at_tenant_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **filter** | **str**| The filter to apply on the operation. For example, you can use $filter&#x3D;provisioningState eq &#39;{state}&#39;. | [optional] 
 **top** | **int**| The number of results to get. If null is passed, returns all deployments. | [optional] 

### Return type

[**DeploymentListResult**](DeploymentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of deployments. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_list_by_resource_group**
> DeploymentListResult deployments_list_by_resource_group(resource_group_name, api_version, subscription_id, filter=filter, top=top)



Get all the deployments for a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_list_result import DeploymentListResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group with the deployments to get. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    filter = 'filter_example' # str | The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. (optional)
    top = 56 # int | The number of results to get. If null is passed, returns all deployments. (optional)

    try:
        api_response = api_instance.deployments_list_by_resource_group(resource_group_name, api_version, subscription_id, filter=filter, top=top)
        print("The response of DeploymentsApi->deployments_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group with the deployments to get. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **filter** | **str**| The filter to apply on the operation. For example, you can use $filter&#x3D;provisioningState eq &#39;{state}&#39;. | [optional] 
 **top** | **int**| The number of results to get. If null is passed, returns all deployments. | [optional] 

### Return type

[**DeploymentListResult**](DeploymentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of deployments. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_validate**
> DeploymentValidateResult deployments_validate(resource_group_name, deployment_name, api_version, subscription_id, parameters)



Validates whether the specified template is syntactically correct and will be accepted by Azure Resource Manager..

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.models.deployment_validate_result import DeploymentValidateResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group the template will be deployed to. The name is case insensitive.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.Deployment() # Deployment | Parameters to validate.

    try:
        api_response = api_instance.deployments_validate(resource_group_name, deployment_name, api_version, subscription_id, parameters)
        print("The response of DeploymentsApi->deployments_validate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group the template will be deployed to. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**Deployment**](Deployment.md)| Parameters to validate. | 

### Return type

[**DeploymentValidateResult**](DeploymentValidateResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the validation result. |  -  |
**400** | Returns the validation result. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_validate_at_management_group_scope**
> DeploymentValidateResult deployments_validate_at_management_group_scope(group_id, deployment_name, api_version, parameters)



Validates whether the specified template is syntactically correct and will be accepted by Azure Resource Manager..

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_validate_result import DeploymentValidateResult
from openapi_client.models.scoped_deployment import ScopedDeployment
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    group_id = 'group_id_example' # str | The management group ID.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    parameters = openapi_client.ScopedDeployment() # ScopedDeployment | Parameters to validate.

    try:
        api_response = api_instance.deployments_validate_at_management_group_scope(group_id, deployment_name, api_version, parameters)
        print("The response of DeploymentsApi->deployments_validate_at_management_group_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_validate_at_management_group_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The management group ID. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **parameters** | [**ScopedDeployment**](ScopedDeployment.md)| Parameters to validate. | 

### Return type

[**DeploymentValidateResult**](DeploymentValidateResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the validation result. |  -  |
**400** | Returns the validation result. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_validate_at_scope**
> DeploymentValidateResult deployments_validate_at_scope(scope, deployment_name, api_version, parameters)



Validates whether the specified template is syntactically correct and will be accepted by Azure Resource Manager..

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.models.deployment_validate_result import DeploymentValidateResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    scope = 'scope_example' # str | The resource scope.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    parameters = openapi_client.Deployment() # Deployment | Parameters to validate.

    try:
        api_response = api_instance.deployments_validate_at_scope(scope, deployment_name, api_version, parameters)
        print("The response of DeploymentsApi->deployments_validate_at_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_validate_at_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The resource scope. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **parameters** | [**Deployment**](Deployment.md)| Parameters to validate. | 

### Return type

[**DeploymentValidateResult**](DeploymentValidateResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the validation result. |  -  |
**400** | Returns the validation result. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_validate_at_subscription_scope**
> DeploymentValidateResult deployments_validate_at_subscription_scope(deployment_name, api_version, subscription_id, parameters)



Validates whether the specified template is syntactically correct and will be accepted by Azure Resource Manager..

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.models.deployment_validate_result import DeploymentValidateResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.Deployment() # Deployment | Parameters to validate.

    try:
        api_response = api_instance.deployments_validate_at_subscription_scope(deployment_name, api_version, subscription_id, parameters)
        print("The response of DeploymentsApi->deployments_validate_at_subscription_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_validate_at_subscription_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**Deployment**](Deployment.md)| Parameters to validate. | 

### Return type

[**DeploymentValidateResult**](DeploymentValidateResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the validation result. |  -  |
**400** | Returns the validation result. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_validate_at_tenant_scope**
> DeploymentValidateResult deployments_validate_at_tenant_scope(deployment_name, api_version, parameters)



Validates whether the specified template is syntactically correct and will be accepted by Azure Resource Manager..

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_validate_result import DeploymentValidateResult
from openapi_client.models.scoped_deployment import ScopedDeployment
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    parameters = openapi_client.ScopedDeployment() # ScopedDeployment | Parameters to validate.

    try:
        api_response = api_instance.deployments_validate_at_tenant_scope(deployment_name, api_version, parameters)
        print("The response of DeploymentsApi->deployments_validate_at_tenant_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_validate_at_tenant_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **parameters** | [**ScopedDeployment**](ScopedDeployment.md)| Parameters to validate. | 

### Return type

[**DeploymentValidateResult**](DeploymentValidateResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the validation result. |  -  |
**400** | Returns the validation result. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_what_if**
> WhatIfOperationResult deployments_what_if(resource_group_name, deployment_name, api_version, subscription_id, parameters)



Returns changes that will be made by the deployment if executed at the scope of the resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_what_if import DeploymentWhatIf
from openapi_client.models.what_if_operation_result import WhatIfOperationResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group the template will be deployed to. The name is case insensitive.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.DeploymentWhatIf() # DeploymentWhatIf | Parameters to validate.

    try:
        api_response = api_instance.deployments_what_if(resource_group_name, deployment_name, api_version, subscription_id, parameters)
        print("The response of DeploymentsApi->deployments_what_if:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_what_if: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group the template will be deployed to. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**DeploymentWhatIf**](DeploymentWhatIf.md)| Parameters to validate. | 

### Return type

[**WhatIfOperationResult**](WhatIfOperationResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns What-If operation status |  -  |
**202** | Accepted - Returns URL in Location header to query for long-running operation status. |  * Retry-After - Number of seconds to wait before polling for status. <br>  * Location - URL to get status of this long-running operation. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_what_if_at_subscription_scope**
> WhatIfOperationResult deployments_what_if_at_subscription_scope(deployment_name, api_version, subscription_id, parameters)



Returns changes that will be made by the deployment if executed at the scope of the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_what_if import DeploymentWhatIf
from openapi_client.models.what_if_operation_result import WhatIfOperationResult
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
    api_instance = openapi_client.DeploymentsApi(api_client)
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.DeploymentWhatIf() # DeploymentWhatIf | Parameters to What If.

    try:
        api_response = api_instance.deployments_what_if_at_subscription_scope(deployment_name, api_version, subscription_id, parameters)
        print("The response of DeploymentsApi->deployments_what_if_at_subscription_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_what_if_at_subscription_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**DeploymentWhatIf**](DeploymentWhatIf.md)| Parameters to What If. | 

### Return type

[**WhatIfOperationResult**](WhatIfOperationResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns What-If operation status |  -  |
**202** | Accepted - Returns URL in Location header to query for long-running operation status. |  * Retry-After - Number of seconds to wait before polling for status. <br>  * Location - URL to get status of this long-running operation. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

