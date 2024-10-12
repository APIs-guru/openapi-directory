# openapi_client.PrivateAtlasesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_atlases_create_or_update**](PrivateAtlasesApi.md#private_atlases_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/privateAtlases/{privateAtlasName} | 
[**private_atlases_delete**](PrivateAtlasesApi.md#private_atlases_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/privateAtlases/{privateAtlasName} | 
[**private_atlases_get**](PrivateAtlasesApi.md#private_atlases_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/privateAtlases/{privateAtlasName} | 
[**private_atlases_list_by_account**](PrivateAtlasesApi.md#private_atlases_list_by_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/privateAtlases | 
[**private_atlases_update**](PrivateAtlasesApi.md#private_atlases_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/privateAtlases/{privateAtlasName} | 


# **private_atlases_create_or_update**
> PrivateAtlas private_atlases_create_or_update(api_version, subscription_id, resource_group_name, account_name, private_atlas_name, private_atlas_create_parameters)



Create or update a Private Atlas resource. Private Atlas resource will enable the usage of Azure resources to build a custom set of mapping data. It requires an account to exist before it can be created.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_atlas import PrivateAtlas
from openapi_client.models.private_atlas_create_parameters import PrivateAtlasCreateParameters
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
    api_instance = openapi_client.PrivateAtlasesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the Maps Account.
    private_atlas_name = 'private_atlas_name_example' # str | The name of the Private Atlas instance.
    private_atlas_create_parameters = openapi_client.PrivateAtlasCreateParameters() # PrivateAtlasCreateParameters | The new or updated parameters for the Private Atlas resource.

    try:
        api_response = api_instance.private_atlases_create_or_update(api_version, subscription_id, resource_group_name, account_name, private_atlas_name, private_atlas_create_parameters)
        print("The response of PrivateAtlasesApi->private_atlases_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateAtlasesApi->private_atlases_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **account_name** | **str**| The name of the Maps Account. | 
 **private_atlas_name** | **str**| The name of the Private Atlas instance. | 
 **private_atlas_create_parameters** | [**PrivateAtlasCreateParameters**](PrivateAtlasCreateParameters.md)| The new or updated parameters for the Private Atlas resource. | 

### Return type

[**PrivateAtlas**](PrivateAtlas.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Private Atlas was successfully updated. |  -  |
**201** | The Private Atlas was successfully created. |  -  |
**0** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_atlases_delete**
> private_atlases_delete(api_version, subscription_id, resource_group_name, account_name, private_atlas_name)



Delete a Private Atlas resource.

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
    api_instance = openapi_client.PrivateAtlasesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the Maps Account.
    private_atlas_name = 'private_atlas_name_example' # str | The name of the Private Atlas instance.

    try:
        api_instance.private_atlases_delete(api_version, subscription_id, resource_group_name, account_name, private_atlas_name)
    except Exception as e:
        print("Exception when calling PrivateAtlasesApi->private_atlases_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **account_name** | **str**| The name of the Maps Account. | 
 **private_atlas_name** | **str**| The name of the Private Atlas instance. | 

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
**200** | The Private Atlas was deleted successfully. |  -  |
**204** | The specified Private Atlas was not found. Nothing was deleted. |  -  |
**0** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_atlases_get**
> PrivateAtlas private_atlases_get(api_version, subscription_id, resource_group_name, account_name, private_atlas_name)



Get a Private Atlas resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_atlas import PrivateAtlas
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
    api_instance = openapi_client.PrivateAtlasesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the Maps Account.
    private_atlas_name = 'private_atlas_name_example' # str | The name of the Private Atlas instance.

    try:
        api_response = api_instance.private_atlases_get(api_version, subscription_id, resource_group_name, account_name, private_atlas_name)
        print("The response of PrivateAtlasesApi->private_atlases_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateAtlasesApi->private_atlases_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **account_name** | **str**| The name of the Maps Account. | 
 **private_atlas_name** | **str**| The name of the Private Atlas instance. | 

### Return type

[**PrivateAtlas**](PrivateAtlas.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |
**0** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_atlases_list_by_account**
> PrivateAtlasList private_atlases_list_by_account(api_version, subscription_id, resource_group_name, account_name)



Get all Private Atlas instances for an Azure Map Account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_atlas_list import PrivateAtlasList
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
    api_instance = openapi_client.PrivateAtlasesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the Maps Account.

    try:
        api_response = api_instance.private_atlases_list_by_account(api_version, subscription_id, resource_group_name, account_name)
        print("The response of PrivateAtlasesApi->private_atlases_list_by_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateAtlasesApi->private_atlases_list_by_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **account_name** | **str**| The name of the Maps Account. | 

### Return type

[**PrivateAtlasList**](PrivateAtlasList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |
**0** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_atlases_update**
> PrivateAtlas private_atlases_update(api_version, subscription_id, resource_group_name, account_name, private_atlas_name, private_atlas_update_parameters)



Updates the Private Atlas resource. Only a subset of the parameters may be updated after creation, such as Tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_atlas import PrivateAtlas
from openapi_client.models.private_atlas_update_parameters import PrivateAtlasUpdateParameters
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
    api_instance = openapi_client.PrivateAtlasesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    account_name = 'account_name_example' # str | The name of the Maps Account.
    private_atlas_name = 'private_atlas_name_example' # str | The name of the Private Atlas instance.
    private_atlas_update_parameters = openapi_client.PrivateAtlasUpdateParameters() # PrivateAtlasUpdateParameters | The updated parameters for the Private Atlas.

    try:
        api_response = api_instance.private_atlases_update(api_version, subscription_id, resource_group_name, account_name, private_atlas_name, private_atlas_update_parameters)
        print("The response of PrivateAtlasesApi->private_atlases_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateAtlasesApi->private_atlases_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **account_name** | **str**| The name of the Maps Account. | 
 **private_atlas_name** | **str**| The name of the Private Atlas instance. | 
 **private_atlas_update_parameters** | [**PrivateAtlasUpdateParameters**](PrivateAtlasUpdateParameters.md)| The updated parameters for the Private Atlas. | 

### Return type

[**PrivateAtlas**](PrivateAtlas.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Private Atlas was successfully updated. |  -  |
**0** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

