# openapi_client.DeploymentScriptsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployment_scripts_create**](DeploymentScriptsApi.md#deployment_scripts_create) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName} | 
[**deployment_scripts_delete**](DeploymentScriptsApi.md#deployment_scripts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName} | 
[**deployment_scripts_get**](DeploymentScriptsApi.md#deployment_scripts_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName} | 
[**deployment_scripts_get_logs**](DeploymentScriptsApi.md#deployment_scripts_get_logs) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}/logs | 
[**deployment_scripts_get_logs_default**](DeploymentScriptsApi.md#deployment_scripts_get_logs_default) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}/logs/default | 
[**deployment_scripts_list_by_resource_group**](DeploymentScriptsApi.md#deployment_scripts_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts | 
[**deployment_scripts_list_by_subscription**](DeploymentScriptsApi.md#deployment_scripts_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Resources/deploymentScripts | 
[**deployment_scripts_update**](DeploymentScriptsApi.md#deployment_scripts_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName} | 


# **deployment_scripts_create**
> DeploymentScript deployment_scripts_create(subscription_id, resource_group_name, script_name, api_version, deployment_script)



Creates a deployment script.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_script import DeploymentScript
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
    api_instance = openapi_client.DeploymentScriptsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id which forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    script_name = 'script_name_example' # str | Name of the deployment script.
    api_version = 'api_version_example' # str | Client Api version.
    deployment_script = openapi_client.DeploymentScript() # DeploymentScript | Deployment script supplied to the operation.

    try:
        api_response = api_instance.deployment_scripts_create(subscription_id, resource_group_name, script_name, api_version, deployment_script)
        print("The response of DeploymentScriptsApi->deployment_scripts_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentScriptsApi->deployment_scripts_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id which forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **script_name** | **str**| Name of the deployment script. | 
 **api_version** | **str**| Client Api version. | 
 **deployment_script** | [**DeploymentScript**](DeploymentScript.md)| Deployment script supplied to the operation. | 

### Return type

[**DeploymentScript**](DeploymentScript.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Deployment script is updated. |  -  |
**201** | Created -- Deployment script created. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_scripts_delete**
> deployment_scripts_delete(subscription_id, resource_group_name, script_name, api_version)



Deletes a deployment script. When operation completes, status code 200 returned without content.

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
    api_instance = openapi_client.DeploymentScriptsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id which forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    script_name = 'script_name_example' # str | Name of the deployment script.
    api_version = 'api_version_example' # str | Client Api version.

    try:
        api_instance.deployment_scripts_delete(subscription_id, resource_group_name, script_name, api_version)
    except Exception as e:
        print("Exception when calling DeploymentScriptsApi->deployment_scripts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id which forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **script_name** | **str**| Name of the deployment script. | 
 **api_version** | **str**| Client Api version. | 

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
**200** | OK -- Deployment script deleted. |  -  |
**204** | Deployment script does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_scripts_get**
> DeploymentScript deployment_scripts_get(subscription_id, resource_group_name, script_name, api_version)



Gets a deployment script with a given name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_script import DeploymentScript
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
    api_instance = openapi_client.DeploymentScriptsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id which forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    script_name = 'script_name_example' # str | Name of the deployment script.
    api_version = 'api_version_example' # str | Client Api version.

    try:
        api_response = api_instance.deployment_scripts_get(subscription_id, resource_group_name, script_name, api_version)
        print("The response of DeploymentScriptsApi->deployment_scripts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentScriptsApi->deployment_scripts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id which forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **script_name** | **str**| Name of the deployment script. | 
 **api_version** | **str**| Client Api version. | 

### Return type

[**DeploymentScript**](DeploymentScript.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Returns information about the deployment script. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_scripts_get_logs**
> ScriptLogsList deployment_scripts_get_logs(subscription_id, resource_group_name, script_name, api_version)



Gets deployment script logs for a given deployment script name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.script_logs_list import ScriptLogsList
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
    api_instance = openapi_client.DeploymentScriptsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id which forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    script_name = 'script_name_example' # str | Name of the deployment script.
    api_version = 'api_version_example' # str | Client Api version.

    try:
        api_response = api_instance.deployment_scripts_get_logs(subscription_id, resource_group_name, script_name, api_version)
        print("The response of DeploymentScriptsApi->deployment_scripts_get_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentScriptsApi->deployment_scripts_get_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id which forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **script_name** | **str**| Name of the deployment script. | 
 **api_version** | **str**| Client Api version. | 

### Return type

[**ScriptLogsList**](ScriptLogsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Returns deployment script logs if available. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_scripts_get_logs_default**
> ScriptLog deployment_scripts_get_logs_default(subscription_id, resource_group_name, script_name, api_version)



Gets deployment script logs for a given deployment script name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.script_log import ScriptLog
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
    api_instance = openapi_client.DeploymentScriptsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id which forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    script_name = 'script_name_example' # str | Name of the deployment script.
    api_version = 'api_version_example' # str | Client Api version.

    try:
        api_response = api_instance.deployment_scripts_get_logs_default(subscription_id, resource_group_name, script_name, api_version)
        print("The response of DeploymentScriptsApi->deployment_scripts_get_logs_default:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentScriptsApi->deployment_scripts_get_logs_default: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id which forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **script_name** | **str**| Name of the deployment script. | 
 **api_version** | **str**| Client Api version. | 

### Return type

[**ScriptLog**](ScriptLog.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Returns deployment script logs if available. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_scripts_list_by_resource_group**
> DeploymentScriptListResult deployment_scripts_list_by_resource_group(subscription_id, resource_group_name, api_version)



Lists deployments scripts.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_script_list_result import DeploymentScriptListResult
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
    api_instance = openapi_client.DeploymentScriptsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id which forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api version.

    try:
        api_response = api_instance.deployment_scripts_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of DeploymentScriptsApi->deployment_scripts_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentScriptsApi->deployment_scripts_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id which forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| Client Api version. | 

### Return type

[**DeploymentScriptListResult**](DeploymentScriptListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Returns a list of deployment scripts. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_scripts_list_by_subscription**
> DeploymentScriptListResult deployment_scripts_list_by_subscription(subscription_id, api_version)



Lists all deployment scripts for a given subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_script_list_result import DeploymentScriptListResult
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
    api_instance = openapi_client.DeploymentScriptsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id which forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api version.

    try:
        api_response = api_instance.deployment_scripts_list_by_subscription(subscription_id, api_version)
        print("The response of DeploymentScriptsApi->deployment_scripts_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentScriptsApi->deployment_scripts_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id which forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api version. | 

### Return type

[**DeploymentScriptListResult**](DeploymentScriptListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Returns a list of deployment scripts. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployment_scripts_update**
> DeploymentScript deployment_scripts_update(subscription_id, resource_group_name, script_name, api_version, deployment_script=deployment_script)



Updates deployment script tags with specified values.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_script import DeploymentScript
from openapi_client.models.deployment_script_update_parameter import DeploymentScriptUpdateParameter
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
    api_instance = openapi_client.DeploymentScriptsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id which forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    script_name = 'script_name_example' # str | Name of the deployment script.
    api_version = 'api_version_example' # str | Client Api version.
    deployment_script = openapi_client.DeploymentScriptUpdateParameter() # DeploymentScriptUpdateParameter | Deployment script resource with the tags to be updated. (optional)

    try:
        api_response = api_instance.deployment_scripts_update(subscription_id, resource_group_name, script_name, api_version, deployment_script=deployment_script)
        print("The response of DeploymentScriptsApi->deployment_scripts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeploymentScriptsApi->deployment_scripts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id which forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **script_name** | **str**| Name of the deployment script. | 
 **api_version** | **str**| Client Api version. | 
 **deployment_script** | [**DeploymentScriptUpdateParameter**](DeploymentScriptUpdateParameter.md)| Deployment script resource with the tags to be updated. | [optional] 

### Return type

[**DeploymentScript**](DeploymentScript.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Deployment script tags are updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

