# openapi_client.ConfigurationStoresApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configuration_stores_create**](ConfigurationStoresApi.md#configuration_stores_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName} | 
[**configuration_stores_delete**](ConfigurationStoresApi.md#configuration_stores_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName} | 
[**configuration_stores_get**](ConfigurationStoresApi.md#configuration_stores_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName} | 
[**configuration_stores_list**](ConfigurationStoresApi.md#configuration_stores_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/configurationStores | 
[**configuration_stores_list_by_resource_group**](ConfigurationStoresApi.md#configuration_stores_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores | 
[**configuration_stores_list_key_value**](ConfigurationStoresApi.md#configuration_stores_list_key_value) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/listKeyValue | 
[**configuration_stores_list_keys**](ConfigurationStoresApi.md#configuration_stores_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/ListKeys | 
[**configuration_stores_regenerate_key**](ConfigurationStoresApi.md#configuration_stores_regenerate_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/RegenerateKey | 
[**configuration_stores_update**](ConfigurationStoresApi.md#configuration_stores_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName} | 


# **configuration_stores_create**
> ConfigurationStore configuration_stores_create(subscription_id, resource_group_name, config_store_name, api_version, config_store_creation_parameters)



Creates a configuration store with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.configuration_store import ConfigurationStore
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
    api_instance = openapi_client.ConfigurationStoresApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    config_store_name = 'config_store_name_example' # str | The name of the configuration store.
    api_version = 'api_version_example' # str | The client API version.
    config_store_creation_parameters = openapi_client.ConfigurationStore() # ConfigurationStore | The parameters for creating a configuration store.

    try:
        api_response = api_instance.configuration_stores_create(subscription_id, resource_group_name, config_store_name, api_version, config_store_creation_parameters)
        print("The response of ConfigurationStoresApi->configuration_stores_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationStoresApi->configuration_stores_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **config_store_name** | **str**| The name of the configuration store. | 
 **api_version** | **str**| The client API version. | 
 **config_store_creation_parameters** | [**ConfigurationStore**](ConfigurationStore.md)| The parameters for creating a configuration store. | 

### Return type

[**ConfigurationStore**](ConfigurationStore.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**201** | The request was successfully accepted; the operation will complete asynchronously. The provisioning state of the resource should indicate the current state of the resource. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_stores_delete**
> configuration_stores_delete(subscription_id, resource_group_name, config_store_name, api_version)



Deletes a configuration store.

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
    api_instance = openapi_client.ConfigurationStoresApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    config_store_name = 'config_store_name_example' # str | The name of the configuration store.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_instance.configuration_stores_delete(subscription_id, resource_group_name, config_store_name, api_version)
    except Exception as e:
        print("Exception when calling ConfigurationStoresApi->configuration_stores_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **config_store_name** | **str**| The name of the configuration store. | 
 **api_version** | **str**| The client API version. | 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**202** | The request was successful; the operation will complete asynchronously. |  -  |
**204** | No Content - the specified resource was not found. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_stores_get**
> ConfigurationStore configuration_stores_get(subscription_id, resource_group_name, config_store_name, api_version)



Gets the properties of the specified configuration store.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.configuration_store import ConfigurationStore
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
    api_instance = openapi_client.ConfigurationStoresApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    config_store_name = 'config_store_name_example' # str | The name of the configuration store.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.configuration_stores_get(subscription_id, resource_group_name, config_store_name, api_version)
        print("The response of ConfigurationStoresApi->configuration_stores_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationStoresApi->configuration_stores_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **config_store_name** | **str**| The name of the configuration store. | 
 **api_version** | **str**| The client API version. | 

### Return type

[**ConfigurationStore**](ConfigurationStore.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_stores_list**
> ConfigurationStoreListResult configuration_stores_list(subscription_id, api_version, skip_token=skip_token)



Lists the configuration stores for a given subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.configuration_store_list_result import ConfigurationStoreListResult
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
    api_instance = openapi_client.ConfigurationStoresApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.
    skip_token = 'skip_token_example' # str | A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls. (optional)

    try:
        api_response = api_instance.configuration_stores_list(subscription_id, api_version, skip_token=skip_token)
        print("The response of ConfigurationStoresApi->configuration_stores_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationStoresApi->configuration_stores_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 
 **skip_token** | **str**| A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls. | [optional] 

### Return type

[**ConfigurationStoreListResult**](ConfigurationStoreListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_stores_list_by_resource_group**
> ConfigurationStoreListResult configuration_stores_list_by_resource_group(subscription_id, resource_group_name, api_version, skip_token=skip_token)



Lists the configuration stores for a given resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.configuration_store_list_result import ConfigurationStoreListResult
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
    api_instance = openapi_client.ConfigurationStoresApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    api_version = 'api_version_example' # str | The client API version.
    skip_token = 'skip_token_example' # str | A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls. (optional)

    try:
        api_response = api_instance.configuration_stores_list_by_resource_group(subscription_id, resource_group_name, api_version, skip_token=skip_token)
        print("The response of ConfigurationStoresApi->configuration_stores_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationStoresApi->configuration_stores_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **api_version** | **str**| The client API version. | 
 **skip_token** | **str**| A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls. | [optional] 

### Return type

[**ConfigurationStoreListResult**](ConfigurationStoreListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_stores_list_key_value**
> KeyValue configuration_stores_list_key_value(subscription_id, resource_group_name, config_store_name, api_version, list_key_value_parameters)



Lists a configuration store key-value.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.key_value import KeyValue
from openapi_client.models.list_key_value_parameters import ListKeyValueParameters
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
    api_instance = openapi_client.ConfigurationStoresApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    config_store_name = 'config_store_name_example' # str | The name of the configuration store.
    api_version = 'api_version_example' # str | The client API version.
    list_key_value_parameters = openapi_client.ListKeyValueParameters() # ListKeyValueParameters | The parameters for retrieving a key-value.

    try:
        api_response = api_instance.configuration_stores_list_key_value(subscription_id, resource_group_name, config_store_name, api_version, list_key_value_parameters)
        print("The response of ConfigurationStoresApi->configuration_stores_list_key_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationStoresApi->configuration_stores_list_key_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **config_store_name** | **str**| The name of the configuration store. | 
 **api_version** | **str**| The client API version. | 
 **list_key_value_parameters** | [**ListKeyValueParameters**](ListKeyValueParameters.md)| The parameters for retrieving a key-value. | 

### Return type

[**KeyValue**](KeyValue.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_stores_list_keys**
> ApiKeyListResult configuration_stores_list_keys(subscription_id, resource_group_name, config_store_name, api_version, skip_token=skip_token)



Lists the access key for the specified configuration store.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_key_list_result import ApiKeyListResult
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
    api_instance = openapi_client.ConfigurationStoresApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    config_store_name = 'config_store_name_example' # str | The name of the configuration store.
    api_version = 'api_version_example' # str | The client API version.
    skip_token = 'skip_token_example' # str | A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls. (optional)

    try:
        api_response = api_instance.configuration_stores_list_keys(subscription_id, resource_group_name, config_store_name, api_version, skip_token=skip_token)
        print("The response of ConfigurationStoresApi->configuration_stores_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationStoresApi->configuration_stores_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **config_store_name** | **str**| The name of the configuration store. | 
 **api_version** | **str**| The client API version. | 
 **skip_token** | **str**| A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls. | [optional] 

### Return type

[**ApiKeyListResult**](ApiKeyListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_stores_regenerate_key**
> ApiKey configuration_stores_regenerate_key(subscription_id, resource_group_name, config_store_name, api_version, regenerate_key_parameters)



Regenerates an access key for the specified configuration store.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_key import ApiKey
from openapi_client.models.regenerate_key_parameters import RegenerateKeyParameters
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
    api_instance = openapi_client.ConfigurationStoresApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    config_store_name = 'config_store_name_example' # str | The name of the configuration store.
    api_version = 'api_version_example' # str | The client API version.
    regenerate_key_parameters = openapi_client.RegenerateKeyParameters() # RegenerateKeyParameters | The parameters for regenerating an access key.

    try:
        api_response = api_instance.configuration_stores_regenerate_key(subscription_id, resource_group_name, config_store_name, api_version, regenerate_key_parameters)
        print("The response of ConfigurationStoresApi->configuration_stores_regenerate_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationStoresApi->configuration_stores_regenerate_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **config_store_name** | **str**| The name of the configuration store. | 
 **api_version** | **str**| The client API version. | 
 **regenerate_key_parameters** | [**RegenerateKeyParameters**](RegenerateKeyParameters.md)| The parameters for regenerating an access key. | 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_stores_update**
> ConfigurationStore configuration_stores_update(subscription_id, resource_group_name, config_store_name, api_version, config_store_update_parameters)



Updates a configuration store with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.configuration_store import ConfigurationStore
from openapi_client.models.configuration_store_update_parameters import ConfigurationStoreUpdateParameters
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
    api_instance = openapi_client.ConfigurationStoresApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    config_store_name = 'config_store_name_example' # str | The name of the configuration store.
    api_version = 'api_version_example' # str | The client API version.
    config_store_update_parameters = openapi_client.ConfigurationStoreUpdateParameters() # ConfigurationStoreUpdateParameters | The parameters for updating a configuration store.

    try:
        api_response = api_instance.configuration_stores_update(subscription_id, resource_group_name, config_store_name, api_version, config_store_update_parameters)
        print("The response of ConfigurationStoresApi->configuration_stores_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationStoresApi->configuration_stores_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **config_store_name** | **str**| The name of the configuration store. | 
 **api_version** | **str**| The client API version. | 
 **config_store_update_parameters** | [**ConfigurationStoreUpdateParameters**](ConfigurationStoreUpdateParameters.md)| The parameters for updating a configuration store. | 

### Return type

[**ConfigurationStore**](ConfigurationStore.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**201** | The request was successfully accepted; the operation will complete asynchronously. The provisioning state of the resource should indicate the current state of the resource. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

