# openapi_client.DeploymentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployments_calculate_template_hash**](DeploymentsApi.md#deployments_calculate_template_hash) | **POST** /providers/Microsoft.Resources/calculateTemplateHash | 
[**deployments_cancel**](DeploymentsApi.md#deployments_cancel) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/cancel | 
[**deployments_check_existence**](DeploymentsApi.md#deployments_check_existence) | **HEAD** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName} | 
[**deployments_create_or_update**](DeploymentsApi.md#deployments_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName} | 
[**deployments_delete**](DeploymentsApi.md#deployments_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName} | 
[**deployments_export_template**](DeploymentsApi.md#deployments_export_template) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate | 
[**deployments_get**](DeploymentsApi.md#deployments_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName} | 
[**deployments_list**](DeploymentsApi.md#deployments_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/ | 
[**deployments_validate**](DeploymentsApi.md#deployments_validate) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/validate | 


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
    api_version = 'api_version_example' # str | Client Api Version.
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
 **api_version** | **str**| Client Api Version. | 
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



Cancel a currently running template deployment.

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
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.deployments_cancel(resource_group_name, deployment_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_check_existence**
> deployments_check_existence(resource_group_name, deployment_name, api_version, subscription_id)



Checks whether deployment exists.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to check. The name is case insensitive.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.deployments_check_existence(resource_group_name, deployment_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_check_existence: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to check. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**204** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_create_or_update**
> DeploymentExtended deployments_create_or_update(resource_group_name, deployment_name, api_version, subscription_id, parameters)



Create a named template deployment using a template.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.Deployment() # Deployment | Additional parameters supplied to the operation.

    try:
        api_response = api_instance.deployments_create_or_update(resource_group_name, deployment_name, api_version, subscription_id, parameters)
        print("The response of DeploymentsApi->deployments_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
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
**200** |  |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_delete**
> deployments_delete(resource_group_name, deployment_name, api_version, subscription_id)



Delete deployment.

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
    deployment_name = 'deployment_name_example' # str | The name of the deployment to be deleted.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.deployments_delete(resource_group_name, deployment_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment to be deleted. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**202** |  |  -  |
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_export_template**
> DeploymentExportResult deployments_export_template(resource_group_name, deployment_name, api_version, subscription_id)



Exports a deployment template.

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
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_get**
> DeploymentExtended deployments_get(resource_group_name, deployment_name, api_version, subscription_id)



Get a deployment.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_list**
> DeploymentListResult deployments_list(resource_group_name, api_version, subscription_id, filter=filter, top=top)



Get a list of deployments.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to filter by. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int | Query parameters. If null is passed returns all deployments. (optional)

    try:
        api_response = api_instance.deployments_list(resource_group_name, api_version, subscription_id, filter=filter, top=top)
        print("The response of DeploymentsApi->deployments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentsApi->deployments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to filter by. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**| Query parameters. If null is passed returns all deployments. | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_validate**
> DeploymentValidateResult deployments_validate(resource_group_name, deployment_name, api_version, subscription_id, parameters)



Validate a deployment template.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    deployment_name = 'deployment_name_example' # str | The name of the deployment.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.Deployment() # Deployment | Deployment to validate.

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
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **deployment_name** | **str**| The name of the deployment. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**Deployment**](Deployment.md)| Deployment to validate. | 

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
**200** |  |  -  |
**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

