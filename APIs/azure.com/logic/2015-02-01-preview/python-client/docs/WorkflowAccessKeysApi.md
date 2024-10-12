# openapi_client.WorkflowAccessKeysApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflow_access_keys_create_or_update**](WorkflowAccessKeysApi.md#workflow_access_keys_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/accessKeys/{accessKeyName} | 
[**workflow_access_keys_delete**](WorkflowAccessKeysApi.md#workflow_access_keys_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/accessKeys/{accessKeyName} | 
[**workflow_access_keys_get**](WorkflowAccessKeysApi.md#workflow_access_keys_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/accessKeys/{accessKeyName} | 
[**workflow_access_keys_list**](WorkflowAccessKeysApi.md#workflow_access_keys_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/accessKeys | 
[**workflow_access_keys_list_secret_keys**](WorkflowAccessKeysApi.md#workflow_access_keys_list_secret_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/accessKeys/{accessKeyName}/list | 
[**workflow_access_keys_regenerate_secret_key**](WorkflowAccessKeysApi.md#workflow_access_keys_regenerate_secret_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/accessKeys/{accessKeyName}/regenerate | 


# **workflow_access_keys_create_or_update**
> WorkflowAccessKey workflow_access_keys_create_or_update(subscription_id, resource_group_name, workflow_name, access_key_name, api_version, workflow_accesskey)



Creates or updates a workflow access key.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_access_key import WorkflowAccessKey
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
    api_instance = openapi_client.WorkflowAccessKeysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    access_key_name = 'access_key_name_example' # str | The workflow access key name.
    api_version = 'api_version_example' # str | The API version.
    workflow_accesskey = openapi_client.WorkflowAccessKey() # WorkflowAccessKey | The workflow access key.

    try:
        api_response = api_instance.workflow_access_keys_create_or_update(subscription_id, resource_group_name, workflow_name, access_key_name, api_version, workflow_accesskey)
        print("The response of WorkflowAccessKeysApi->workflow_access_keys_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowAccessKeysApi->workflow_access_keys_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **access_key_name** | **str**| The workflow access key name. | 
 **api_version** | **str**| The API version. | 
 **workflow_accesskey** | [**WorkflowAccessKey**](WorkflowAccessKey.md)| The workflow access key. | 

### Return type

[**WorkflowAccessKey**](WorkflowAccessKey.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflow_access_keys_delete**
> workflow_access_keys_delete(subscription_id, resource_group_name, workflow_name, access_key_name, api_version)



Deletes a workflow access key.

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
    api_instance = openapi_client.WorkflowAccessKeysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    access_key_name = 'access_key_name_example' # str | The workflow access key name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.workflow_access_keys_delete(subscription_id, resource_group_name, workflow_name, access_key_name, api_version)
    except Exception as e:
        print("Exception when calling WorkflowAccessKeysApi->workflow_access_keys_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **access_key_name** | **str**| The workflow access key name. | 
 **api_version** | **str**| The API version. | 

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
**200** | OK |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflow_access_keys_get**
> WorkflowAccessKey workflow_access_keys_get(subscription_id, resource_group_name, workflow_name, access_key_name, api_version)



Gets a workflow access key.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_access_key import WorkflowAccessKey
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
    api_instance = openapi_client.WorkflowAccessKeysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    access_key_name = 'access_key_name_example' # str | The workflow access key name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflow_access_keys_get(subscription_id, resource_group_name, workflow_name, access_key_name, api_version)
        print("The response of WorkflowAccessKeysApi->workflow_access_keys_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowAccessKeysApi->workflow_access_keys_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **access_key_name** | **str**| The workflow access key name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**WorkflowAccessKey**](WorkflowAccessKey.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflow_access_keys_list**
> WorkflowAccessKeyListResult workflow_access_keys_list(subscription_id, resource_group_name, workflow_name, api_version, top=top)



Gets a list of workflow access keys.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_access_key_list_result import WorkflowAccessKeyListResult
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
    api_instance = openapi_client.WorkflowAccessKeysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)

    try:
        api_response = api_instance.workflow_access_keys_list(subscription_id, resource_group_name, workflow_name, api_version, top=top)
        print("The response of WorkflowAccessKeysApi->workflow_access_keys_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowAccessKeysApi->workflow_access_keys_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| The number of items to be included in the result. | [optional] 

### Return type

[**WorkflowAccessKeyListResult**](WorkflowAccessKeyListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflow_access_keys_list_secret_keys**
> WorkflowSecretKeys workflow_access_keys_list_secret_keys(subscription_id, resource_group_name, workflow_name, access_key_name, api_version)



Lists secret keys.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_secret_keys import WorkflowSecretKeys
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
    api_instance = openapi_client.WorkflowAccessKeysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    access_key_name = 'access_key_name_example' # str | The workflow access key name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.workflow_access_keys_list_secret_keys(subscription_id, resource_group_name, workflow_name, access_key_name, api_version)
        print("The response of WorkflowAccessKeysApi->workflow_access_keys_list_secret_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowAccessKeysApi->workflow_access_keys_list_secret_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **access_key_name** | **str**| The workflow access key name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**WorkflowSecretKeys**](WorkflowSecretKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflow_access_keys_regenerate_secret_key**
> WorkflowSecretKeys workflow_access_keys_regenerate_secret_key(subscription_id, resource_group_name, workflow_name, access_key_name, api_version, parameters)



Regenerates secret key.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.regenerate_secret_key_parameters import RegenerateSecretKeyParameters
from openapi_client.models.workflow_secret_keys import WorkflowSecretKeys
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
    api_instance = openapi_client.WorkflowAccessKeysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    workflow_name = 'workflow_name_example' # str | The workflow name.
    access_key_name = 'access_key_name_example' # str | The workflow access key name.
    api_version = 'api_version_example' # str | The API version.
    parameters = openapi_client.RegenerateSecretKeyParameters() # RegenerateSecretKeyParameters | The parameters.

    try:
        api_response = api_instance.workflow_access_keys_regenerate_secret_key(subscription_id, resource_group_name, workflow_name, access_key_name, api_version, parameters)
        print("The response of WorkflowAccessKeysApi->workflow_access_keys_regenerate_secret_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowAccessKeysApi->workflow_access_keys_regenerate_secret_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **workflow_name** | **str**| The workflow name. | 
 **access_key_name** | **str**| The workflow access key name. | 
 **api_version** | **str**| The API version. | 
 **parameters** | [**RegenerateSecretKeyParameters**](RegenerateSecretKeyParameters.md)| The parameters. | 

### Return type

[**WorkflowSecretKeys**](WorkflowSecretKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

