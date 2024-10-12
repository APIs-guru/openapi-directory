# openapi_client.MultipleActivationKeysApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**multiple_activation_keys_create**](MultipleActivationKeysApi.md#multiple_activation_keys_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsESU/multipleActivationKeys/{multipleActivationKeyName} | 
[**multiple_activation_keys_delete**](MultipleActivationKeysApi.md#multiple_activation_keys_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsESU/multipleActivationKeys/{multipleActivationKeyName} | 
[**multiple_activation_keys_get**](MultipleActivationKeysApi.md#multiple_activation_keys_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsESU/multipleActivationKeys/{multipleActivationKeyName} | 
[**multiple_activation_keys_list**](MultipleActivationKeysApi.md#multiple_activation_keys_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.WindowsESU/multipleActivationKeys | 
[**multiple_activation_keys_list_by_resource_group**](MultipleActivationKeysApi.md#multiple_activation_keys_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsESU/multipleActivationKeys | 
[**multiple_activation_keys_update**](MultipleActivationKeysApi.md#multiple_activation_keys_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsESU/multipleActivationKeys/{multipleActivationKeyName} | 


# **multiple_activation_keys_create**
> MultipleActivationKey multiple_activation_keys_create(subscription_id, resource_group_name, api_version, multiple_activation_key_name, multiple_activation_key)



Create a MAK key.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.multiple_activation_key import MultipleActivationKey
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
    api_instance = openapi_client.MultipleActivationKeysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    multiple_activation_key_name = 'multiple_activation_key_name_example' # str | The name of the MAK key.
    multiple_activation_key = openapi_client.MultipleActivationKey() # MultipleActivationKey | Details of the MAK key.

    try:
        api_response = api_instance.multiple_activation_keys_create(subscription_id, resource_group_name, api_version, multiple_activation_key_name, multiple_activation_key)
        print("The response of MultipleActivationKeysApi->multiple_activation_keys_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MultipleActivationKeysApi->multiple_activation_keys_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **multiple_activation_key_name** | **str**| The name of the MAK key. | 
 **multiple_activation_key** | [**MultipleActivationKey**](MultipleActivationKey.md)| Details of the MAK key. | 

### Return type

[**MultipleActivationKey**](MultipleActivationKey.md)

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
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **multiple_activation_keys_delete**
> multiple_activation_keys_delete(subscription_id, resource_group_name, api_version, multiple_activation_key_name)



Delete a MAK key.

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
    api_instance = openapi_client.MultipleActivationKeysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    multiple_activation_key_name = 'multiple_activation_key_name_example' # str | The name of the MAK key.

    try:
        api_instance.multiple_activation_keys_delete(subscription_id, resource_group_name, api_version, multiple_activation_key_name)
    except Exception as e:
        print("Exception when calling MultipleActivationKeysApi->multiple_activation_keys_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **multiple_activation_key_name** | **str**| The name of the MAK key. | 

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
**200** | OK |  -  |
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **multiple_activation_keys_get**
> MultipleActivationKey multiple_activation_keys_get(subscription_id, resource_group_name, api_version, multiple_activation_key_name)



Get a MAK key.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.multiple_activation_key import MultipleActivationKey
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
    api_instance = openapi_client.MultipleActivationKeysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    multiple_activation_key_name = 'multiple_activation_key_name_example' # str | The name of the MAK key.

    try:
        api_response = api_instance.multiple_activation_keys_get(subscription_id, resource_group_name, api_version, multiple_activation_key_name)
        print("The response of MultipleActivationKeysApi->multiple_activation_keys_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MultipleActivationKeysApi->multiple_activation_keys_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **multiple_activation_key_name** | **str**| The name of the MAK key. | 

### Return type

[**MultipleActivationKey**](MultipleActivationKey.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **multiple_activation_keys_list**
> MultipleActivationKeyList multiple_activation_keys_list(subscription_id, api_version)



List all Multiple Activation Keys (MAK) created for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.multiple_activation_key_list import MultipleActivationKeyList
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
    api_instance = openapi_client.MultipleActivationKeysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.multiple_activation_keys_list(subscription_id, api_version)
        print("The response of MultipleActivationKeysApi->multiple_activation_keys_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MultipleActivationKeysApi->multiple_activation_keys_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**MultipleActivationKeyList**](MultipleActivationKeyList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **multiple_activation_keys_list_by_resource_group**
> MultipleActivationKeyList multiple_activation_keys_list_by_resource_group(subscription_id, resource_group_name, api_version)



List all Multiple Activation Keys (MAK) in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.multiple_activation_key_list import MultipleActivationKeyList
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
    api_instance = openapi_client.MultipleActivationKeysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.multiple_activation_keys_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of MultipleActivationKeysApi->multiple_activation_keys_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MultipleActivationKeysApi->multiple_activation_keys_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**MultipleActivationKeyList**](MultipleActivationKeyList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **multiple_activation_keys_update**
> MultipleActivationKey multiple_activation_keys_update(subscription_id, resource_group_name, api_version, multiple_activation_key_name, multiple_activation_key)



Update a MAK key.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.multiple_activation_key import MultipleActivationKey
from openapi_client.models.multiple_activation_key_update import MultipleActivationKeyUpdate
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
    api_instance = openapi_client.MultipleActivationKeysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    multiple_activation_key_name = 'multiple_activation_key_name_example' # str | The name of the MAK key.
    multiple_activation_key = openapi_client.MultipleActivationKeyUpdate() # MultipleActivationKeyUpdate | Details of the MAK key.

    try:
        api_response = api_instance.multiple_activation_keys_update(subscription_id, resource_group_name, api_version, multiple_activation_key_name, multiple_activation_key)
        print("The response of MultipleActivationKeysApi->multiple_activation_keys_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MultipleActivationKeysApi->multiple_activation_keys_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **multiple_activation_key_name** | **str**| The name of the MAK key. | 
 **multiple_activation_key** | [**MultipleActivationKeyUpdate**](MultipleActivationKeyUpdate.md)| Details of the MAK key. | 

### Return type

[**MultipleActivationKey**](MultipleActivationKey.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

