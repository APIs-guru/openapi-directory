# openapi_client.JobCredentialsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**job_credentials_create_or_update**](JobCredentialsApi.md#job_credentials_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/credentials/{credentialName} | 
[**job_credentials_delete**](JobCredentialsApi.md#job_credentials_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/credentials/{credentialName} | 
[**job_credentials_get**](JobCredentialsApi.md#job_credentials_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/credentials/{credentialName} | 
[**job_credentials_list_by_agent**](JobCredentialsApi.md#job_credentials_list_by_agent) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/credentials | 


# **job_credentials_create_or_update**
> JobCredential job_credentials_create_or_update(resource_group_name, server_name, job_agent_name, credential_name, subscription_id, api_version, parameters)



Creates or updates a job credential.

### Example


```python
import openapi_client
from openapi_client.models.job_credential import JobCredential
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobCredentialsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    credential_name = 'credential_name_example' # str | The name of the credential.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.JobCredential() # JobCredential | The requested job credential state.

    try:
        api_response = api_instance.job_credentials_create_or_update(resource_group_name, server_name, job_agent_name, credential_name, subscription_id, api_version, parameters)
        print("The response of JobCredentialsApi->job_credentials_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobCredentialsApi->job_credentials_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **credential_name** | **str**| The name of the credential. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**JobCredential**](JobCredential.md)| The requested job credential state. | 

### Return type

[**JobCredential**](JobCredential.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the credential. |  -  |
**201** | Successfully created the credential. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidResourceRequestBody - The resource or resource properties in the request body is empty or invalid.   * 400 InvalidJobCredentialUsername - Invalid credential username.   * 403 JobCredentialPermissionError - Azure Resource Manager does not have permission to use or manage the credential.   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_credentials_delete**
> job_credentials_delete(resource_group_name, server_name, job_agent_name, credential_name, subscription_id, api_version)



Deletes a job credential.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobCredentialsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    credential_name = 'credential_name_example' # str | The name of the credential.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.job_credentials_delete(resource_group_name, server_name, job_agent_name, credential_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling JobCredentialsApi->job_credentials_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **credential_name** | **str**| The name of the credential. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted the credential. |  -  |
**204** | A credential with the specified name does not exist. |  -  |
**0** | *** Error Responses: ***   * 403 JobCredentialPermissionError - Azure Resource Manager does not have permission to use or manage the credential.   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_credentials_get**
> JobCredential job_credentials_get(resource_group_name, server_name, job_agent_name, credential_name, subscription_id, api_version)



Gets a jobs credential.

### Example


```python
import openapi_client
from openapi_client.models.job_credential import JobCredential
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobCredentialsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    credential_name = 'credential_name_example' # str | The name of the credential.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.job_credentials_get(resource_group_name, server_name, job_agent_name, credential_name, subscription_id, api_version)
        print("The response of JobCredentialsApi->job_credentials_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobCredentialsApi->job_credentials_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **credential_name** | **str**| The name of the credential. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**JobCredential**](JobCredential.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the job credential. |  -  |
**0** | *** Error Responses: ***   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_credentials_list_by_agent**
> JobCredentialListResult job_credentials_list_by_agent(resource_group_name, server_name, job_agent_name, subscription_id, api_version)



Gets a list of jobs credentials.

### Example


```python
import openapi_client
from openapi_client.models.job_credential_list_result import JobCredentialListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobCredentialsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.job_credentials_list_by_agent(resource_group_name, server_name, job_agent_name, subscription_id, api_version)
        print("The response of JobCredentialsApi->job_credentials_list_by_agent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobCredentialsApi->job_credentials_list_by_agent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**JobCredentialListResult**](JobCredentialListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of job credentials. |  -  |
**0** | *** Error Responses: ***   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

