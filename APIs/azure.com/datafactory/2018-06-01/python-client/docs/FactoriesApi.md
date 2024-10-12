# openapi_client.FactoriesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**factories_configure_factory_repo**](FactoriesApi.md#factories_configure_factory_repo) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DataFactory/locations/{locationId}/configureFactoryRepo | 
[**factories_create_or_update**](FactoriesApi.md#factories_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName} | 
[**factories_delete**](FactoriesApi.md#factories_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName} | 
[**factories_get**](FactoriesApi.md#factories_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName} | 
[**factories_get_data_plane_access**](FactoriesApi.md#factories_get_data_plane_access) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/getDataPlaneAccess | 
[**factories_get_git_hub_access_token**](FactoriesApi.md#factories_get_git_hub_access_token) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/getGitHubAccessToken | 
[**factories_list**](FactoriesApi.md#factories_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DataFactory/factories | 
[**factories_list_by_resource_group**](FactoriesApi.md#factories_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories | 
[**factories_update**](FactoriesApi.md#factories_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName} | 


# **factories_configure_factory_repo**
> Factory factories_configure_factory_repo(subscription_id, location_id, api_version, factory_repo_update)



Updates a factory's repo information.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.factory import Factory
from openapi_client.models.factory_repo_update import FactoryRepoUpdate
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
    api_instance = openapi_client.FactoriesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    location_id = 'location_id_example' # str | The location identifier.
    api_version = 'api_version_example' # str | The API version.
    factory_repo_update = openapi_client.FactoryRepoUpdate() # FactoryRepoUpdate | Update factory repo request definition.

    try:
        api_response = api_instance.factories_configure_factory_repo(subscription_id, location_id, api_version, factory_repo_update)
        print("The response of FactoriesApi->factories_configure_factory_repo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FactoriesApi->factories_configure_factory_repo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **location_id** | **str**| The location identifier. | 
 **api_version** | **str**| The API version. | 
 **factory_repo_update** | [**FactoryRepoUpdate**](FactoryRepoUpdate.md)| Update factory repo request definition. | 

### Return type

[**Factory**](Factory.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **factories_create_or_update**
> Factory factories_create_or_update(subscription_id, resource_group_name, factory_name, api_version, factory, if_match=if_match)



Creates or updates a factory.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.factory import Factory
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
    api_instance = openapi_client.FactoriesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.
    factory = openapi_client.Factory() # Factory | Factory resource definition.
    if_match = 'if_match_example' # str | ETag of the factory entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update. (optional)

    try:
        api_response = api_instance.factories_create_or_update(subscription_id, resource_group_name, factory_name, api_version, factory, if_match=if_match)
        print("The response of FactoriesApi->factories_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FactoriesApi->factories_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 
 **factory** | [**Factory**](Factory.md)| Factory resource definition. | 
 **if_match** | **str**| ETag of the factory entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update. | [optional] 

### Return type

[**Factory**](Factory.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **factories_delete**
> factories_delete(subscription_id, resource_group_name, factory_name, api_version)



Deletes a factory.

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
    api_instance = openapi_client.FactoriesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.factories_delete(subscription_id, resource_group_name, factory_name, api_version)
    except Exception as e:
        print("Exception when calling FactoriesApi->factories_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 

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
**200** | OK. |  -  |
**204** | No Content. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **factories_get**
> Factory factories_get(subscription_id, resource_group_name, factory_name, api_version, if_none_match=if_none_match)



Gets a factory.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.factory import Factory
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
    api_instance = openapi_client.FactoriesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.
    if_none_match = 'if_none_match_example' # str | ETag of the factory entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. (optional)

    try:
        api_response = api_instance.factories_get(subscription_id, resource_group_name, factory_name, api_version, if_none_match=if_none_match)
        print("The response of FactoriesApi->factories_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FactoriesApi->factories_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 
 **if_none_match** | **str**| ETag of the factory entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. | [optional] 

### Return type

[**Factory**](Factory.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**304** | Not modified. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **factories_get_data_plane_access**
> AccessPolicyResponse factories_get_data_plane_access(subscription_id, resource_group_name, factory_name, api_version, policy)



Get Data Plane access.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.access_policy_response import AccessPolicyResponse
from openapi_client.models.user_access_policy import UserAccessPolicy
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
    api_instance = openapi_client.FactoriesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.
    policy = openapi_client.UserAccessPolicy() # UserAccessPolicy | Data Plane user access policy definition.

    try:
        api_response = api_instance.factories_get_data_plane_access(subscription_id, resource_group_name, factory_name, api_version, policy)
        print("The response of FactoriesApi->factories_get_data_plane_access:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FactoriesApi->factories_get_data_plane_access: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 
 **policy** | [**UserAccessPolicy**](UserAccessPolicy.md)| Data Plane user access policy definition. | 

### Return type

[**AccessPolicyResponse**](AccessPolicyResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **factories_get_git_hub_access_token**
> GitHubAccessTokenResponse factories_get_git_hub_access_token(subscription_id, resource_group_name, factory_name, api_version, git_hub_access_token_request)



Get GitHub Access Token.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.git_hub_access_token_request import GitHubAccessTokenRequest
from openapi_client.models.git_hub_access_token_response import GitHubAccessTokenResponse
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
    api_instance = openapi_client.FactoriesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.
    git_hub_access_token_request = openapi_client.GitHubAccessTokenRequest() # GitHubAccessTokenRequest | Get GitHub access token request definition.

    try:
        api_response = api_instance.factories_get_git_hub_access_token(subscription_id, resource_group_name, factory_name, api_version, git_hub_access_token_request)
        print("The response of FactoriesApi->factories_get_git_hub_access_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FactoriesApi->factories_get_git_hub_access_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 
 **git_hub_access_token_request** | [**GitHubAccessTokenRequest**](GitHubAccessTokenRequest.md)| Get GitHub access token request definition. | 

### Return type

[**GitHubAccessTokenResponse**](GitHubAccessTokenResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **factories_list**
> FactoryListResponse factories_list(subscription_id, api_version)



Lists factories under the specified subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.factory_list_response import FactoryListResponse
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
    api_instance = openapi_client.FactoriesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.factories_list(subscription_id, api_version)
        print("The response of FactoriesApi->factories_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FactoriesApi->factories_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **api_version** | **str**| The API version. | 

### Return type

[**FactoryListResponse**](FactoryListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **factories_list_by_resource_group**
> FactoryListResponse factories_list_by_resource_group(subscription_id, resource_group_name, api_version)



Lists factories.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.factory_list_response import FactoryListResponse
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
    api_instance = openapi_client.FactoriesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.factories_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of FactoriesApi->factories_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FactoriesApi->factories_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**FactoryListResponse**](FactoryListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **factories_update**
> Factory factories_update(subscription_id, resource_group_name, factory_name, api_version, factory_update_parameters)



Updates a factory.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.factory import Factory
from openapi_client.models.factory_update_parameters import FactoryUpdateParameters
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
    api_instance = openapi_client.FactoriesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.
    factory_update_parameters = openapi_client.FactoryUpdateParameters() # FactoryUpdateParameters | The parameters for updating a factory.

    try:
        api_response = api_instance.factories_update(subscription_id, resource_group_name, factory_name, api_version, factory_update_parameters)
        print("The response of FactoriesApi->factories_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FactoriesApi->factories_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 
 **factory_update_parameters** | [**FactoryUpdateParameters**](FactoryUpdateParameters.md)| The parameters for updating a factory. | 

### Return type

[**Factory**](Factory.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

