# openapi_client.IntegrationAccountAssembliesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integration_account_assemblies_create_or_update**](IntegrationAccountAssembliesApi.md#integration_account_assemblies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/assemblies/{assemblyArtifactName} | 
[**integration_account_assemblies_delete**](IntegrationAccountAssembliesApi.md#integration_account_assemblies_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/assemblies/{assemblyArtifactName} | 
[**integration_account_assemblies_get**](IntegrationAccountAssembliesApi.md#integration_account_assemblies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/assemblies/{assemblyArtifactName} | 
[**integration_account_assemblies_list**](IntegrationAccountAssembliesApi.md#integration_account_assemblies_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/assemblies | 
[**integration_account_assemblies_list_content_callback_url**](IntegrationAccountAssembliesApi.md#integration_account_assemblies_list_content_callback_url) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/assemblies/{assemblyArtifactName}/listContentCallbackUrl | 


# **integration_account_assemblies_create_or_update**
> AssemblyDefinition integration_account_assemblies_create_or_update(subscription_id, resource_group_name, integration_account_name, assembly_artifact_name, api_version, assembly_artifact)



Create or update an assembly for an integration account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assembly_definition import AssemblyDefinition
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
    api_instance = openapi_client.IntegrationAccountAssembliesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    assembly_artifact_name = 'assembly_artifact_name_example' # str | The assembly artifact name.
    api_version = 'api_version_example' # str | The API version.
    assembly_artifact = openapi_client.AssemblyDefinition() # AssemblyDefinition | The assembly artifact.

    try:
        api_response = api_instance.integration_account_assemblies_create_or_update(subscription_id, resource_group_name, integration_account_name, assembly_artifact_name, api_version, assembly_artifact)
        print("The response of IntegrationAccountAssembliesApi->integration_account_assemblies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountAssembliesApi->integration_account_assemblies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **assembly_artifact_name** | **str**| The assembly artifact name. | 
 **api_version** | **str**| The API version. | 
 **assembly_artifact** | [**AssemblyDefinition**](AssemblyDefinition.md)| The assembly artifact. | 

### Return type

[**AssemblyDefinition**](AssemblyDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_assemblies_delete**
> integration_account_assemblies_delete(subscription_id, resource_group_name, integration_account_name, assembly_artifact_name, api_version)



Delete an assembly for an integration account.

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
    api_instance = openapi_client.IntegrationAccountAssembliesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    assembly_artifact_name = 'assembly_artifact_name_example' # str | The assembly artifact name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_account_assemblies_delete(subscription_id, resource_group_name, integration_account_name, assembly_artifact_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationAccountAssembliesApi->integration_account_assemblies_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **assembly_artifact_name** | **str**| The assembly artifact name. | 
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

# **integration_account_assemblies_get**
> AssemblyDefinition integration_account_assemblies_get(subscription_id, resource_group_name, integration_account_name, assembly_artifact_name, api_version)



Get an assembly for an integration account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assembly_definition import AssemblyDefinition
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
    api_instance = openapi_client.IntegrationAccountAssembliesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    assembly_artifact_name = 'assembly_artifact_name_example' # str | The assembly artifact name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_account_assemblies_get(subscription_id, resource_group_name, integration_account_name, assembly_artifact_name, api_version)
        print("The response of IntegrationAccountAssembliesApi->integration_account_assemblies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountAssembliesApi->integration_account_assemblies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **assembly_artifact_name** | **str**| The assembly artifact name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**AssemblyDefinition**](AssemblyDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_assemblies_list**
> AssemblyCollection integration_account_assemblies_list(subscription_id, resource_group_name, integration_account_name, api_version)



List the assemblies for an integration account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assembly_collection import AssemblyCollection
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
    api_instance = openapi_client.IntegrationAccountAssembliesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_account_assemblies_list(subscription_id, resource_group_name, integration_account_name, api_version)
        print("The response of IntegrationAccountAssembliesApi->integration_account_assemblies_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountAssembliesApi->integration_account_assemblies_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**AssemblyCollection**](AssemblyCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_assemblies_list_content_callback_url**
> WorkflowTriggerCallbackUrl integration_account_assemblies_list_content_callback_url(subscription_id, resource_group_name, integration_account_name, assembly_artifact_name, api_version)



Get the content callback url for an integration account assembly.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow_trigger_callback_url import WorkflowTriggerCallbackUrl
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
    api_instance = openapi_client.IntegrationAccountAssembliesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    assembly_artifact_name = 'assembly_artifact_name_example' # str | The assembly artifact name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_account_assemblies_list_content_callback_url(subscription_id, resource_group_name, integration_account_name, assembly_artifact_name, api_version)
        print("The response of IntegrationAccountAssembliesApi->integration_account_assemblies_list_content_callback_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountAssembliesApi->integration_account_assemblies_list_content_callback_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **assembly_artifact_name** | **str**| The assembly artifact name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**WorkflowTriggerCallbackUrl**](WorkflowTriggerCallbackUrl.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

