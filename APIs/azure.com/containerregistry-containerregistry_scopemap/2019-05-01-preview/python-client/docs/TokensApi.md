# openapi_client.TokensApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokens_create**](TokensApi.md#tokens_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName} | 
[**tokens_delete**](TokensApi.md#tokens_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName} | 
[**tokens_get**](TokensApi.md#tokens_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName} | 
[**tokens_list**](TokensApi.md#tokens_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens | 
[**tokens_update**](TokensApi.md#tokens_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName} | 


# **tokens_create**
> Token tokens_create(api_version, subscription_id, resource_group_name, registry_name, token_name, token_create_parameters)



Creates a token for a container registry with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.token import Token
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
    api_instance = openapi_client.TokensApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    token_name = 'token_name_example' # str | The name of the token.
    token_create_parameters = openapi_client.Token() # Token | The parameters for creating a token.

    try:
        api_response = api_instance.tokens_create(api_version, subscription_id, resource_group_name, registry_name, token_name, token_create_parameters)
        print("The response of TokensApi->tokens_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokensApi->tokens_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **token_name** | **str**| The name of the token. | 
 **token_create_parameters** | [**Token**](Token.md)| The parameters for creating a token. | 

### Return type

[**Token**](Token.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**201** | The request was successful; the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokens_delete**
> tokens_delete(api_version, subscription_id, resource_group_name, registry_name, token_name)



Deletes a token from a container registry.

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
    api_instance = openapi_client.TokensApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    token_name = 'token_name_example' # str | The name of the token.

    try:
        api_instance.tokens_delete(api_version, subscription_id, resource_group_name, registry_name, token_name)
    except Exception as e:
        print("Exception when calling TokensApi->tokens_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **token_name** | **str**| The name of the token. | 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**202** | The request was successful; the operation will complete asynchronously. |  -  |
**204** | The token does not exist in the subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokens_get**
> Token tokens_get(api_version, subscription_id, resource_group_name, registry_name, token_name)



Gets the properties of the specified token.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.token import Token
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
    api_instance = openapi_client.TokensApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    token_name = 'token_name_example' # str | The name of the token.

    try:
        api_response = api_instance.tokens_get(api_version, subscription_id, resource_group_name, registry_name, token_name)
        print("The response of TokensApi->tokens_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokensApi->tokens_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **token_name** | **str**| The name of the token. | 

### Return type

[**Token**](Token.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokens_list**
> TokenListResult tokens_list(api_version, subscription_id, resource_group_name, registry_name)



Lists all the tokens for the specified container registry.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.token_list_result import TokenListResult
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
    api_instance = openapi_client.TokensApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.

    try:
        api_response = api_instance.tokens_list(api_version, subscription_id, resource_group_name, registry_name)
        print("The response of TokensApi->tokens_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokensApi->tokens_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 

### Return type

[**TokenListResult**](TokenListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokens_update**
> Token tokens_update(api_version, subscription_id, resource_group_name, registry_name, token_name, token_update_parameters)



Updates a token with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.token import Token
from openapi_client.models.token_update_parameters import TokenUpdateParameters
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
    api_instance = openapi_client.TokensApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    registry_name = 'registry_name_example' # str | The name of the container registry.
    token_name = 'token_name_example' # str | The name of the token.
    token_update_parameters = openapi_client.TokenUpdateParameters() # TokenUpdateParameters | The parameters for updating a token.

    try:
        api_response = api_instance.tokens_update(api_version, subscription_id, resource_group_name, registry_name, token_name, token_update_parameters)
        print("The response of TokensApi->tokens_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokensApi->tokens_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **registry_name** | **str**| The name of the container registry. | 
 **token_name** | **str**| The name of the token. | 
 **token_update_parameters** | [**TokenUpdateParameters**](TokenUpdateParameters.md)| The parameters for updating a token. | 

### Return type

[**Token**](Token.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**201** | The request was successful; the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

