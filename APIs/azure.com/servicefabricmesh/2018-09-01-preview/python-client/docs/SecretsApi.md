# openapi_client.SecretsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secret_create**](SecretsApi.md#secret_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName} | Creates or updates a secret resource.
[**secret_delete**](SecretsApi.md#secret_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName} | Deletes the secret resource.
[**secret_get**](SecretsApi.md#secret_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName} | Gets the secret resource with the given name.
[**secret_list_by_resource_group**](SecretsApi.md#secret_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets | Gets all the secret resources in a given resource group.
[**secret_list_by_subscription**](SecretsApi.md#secret_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabricMesh/secrets | Gets all the secret resources in a given subscription.


# **secret_create**
> SecretResourceDescription secret_create(subscription_id, api_version, resource_group_name, secret_resource_name, secret_resource_description)

Creates or updates a secret resource.

Creates a secret resource with the specified name, description and properties. If a secret resource with the same name exists, then it is updated with the specified description and properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.secret_resource_description import SecretResourceDescription
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
    api_instance = openapi_client.SecretsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.
    secret_resource_description = openapi_client.SecretResourceDescription() # SecretResourceDescription | Description for creating a secret resource.

    try:
        # Creates or updates a secret resource.
        api_response = api_instance.secret_create(subscription_id, api_version, resource_group_name, secret_resource_name, secret_resource_description)
        print("The response of SecretsApi->secret_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->secret_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **secret_resource_name** | **str**| The name of the secret resource. | 
 **secret_resource_description** | [**SecretResourceDescription**](SecretResourceDescription.md)| Description for creating a secret resource. | 

### Return type

[**SecretResourceDescription**](SecretResourceDescription.md)

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
**202** | Accepted |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **secret_delete**
> secret_delete(subscription_id, api_version, resource_group_name, secret_resource_name)

Deletes the secret resource.

Deletes the secret resource identified by the name.

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
    api_instance = openapi_client.SecretsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.

    try:
        # Deletes the secret resource.
        api_instance.secret_delete(subscription_id, api_version, resource_group_name, secret_resource_name)
    except Exception as e:
        print("Exception when calling SecretsApi->secret_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **secret_resource_name** | **str**| The name of the secret resource. | 

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
**202** | Accepted |  -  |
**204** | No Content - the specified secret was not found. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **secret_get**
> SecretResourceDescription secret_get(subscription_id, api_version, resource_group_name, secret_resource_name)

Gets the secret resource with the given name.

Gets the information about the secret resource with the given name. The information include the description and other properties of the secret.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.secret_resource_description import SecretResourceDescription
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
    api_instance = openapi_client.SecretsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.

    try:
        # Gets the secret resource with the given name.
        api_response = api_instance.secret_get(subscription_id, api_version, resource_group_name, secret_resource_name)
        print("The response of SecretsApi->secret_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->secret_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **secret_resource_name** | **str**| The name of the secret resource. | 

### Return type

[**SecretResourceDescription**](SecretResourceDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **secret_list_by_resource_group**
> SecretResourceDescriptionList secret_list_by_resource_group(subscription_id, api_version, resource_group_name)

Gets all the secret resources in a given resource group.

Gets the information about all secret resources in a given resource group. The information include the description and other properties of the Secret.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.secret_resource_description_list import SecretResourceDescriptionList
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
    api_instance = openapi_client.SecretsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name

    try:
        # Gets all the secret resources in a given resource group.
        api_response = api_instance.secret_list_by_resource_group(subscription_id, api_version, resource_group_name)
        print("The response of SecretsApi->secret_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->secret_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 

### Return type

[**SecretResourceDescriptionList**](SecretResourceDescriptionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **secret_list_by_subscription**
> SecretResourceDescriptionList secret_list_by_subscription(subscription_id, api_version)

Gets all the secret resources in a given subscription.

Gets the information about all secret resources in a given resource group. The information include the description and other properties of the secret.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.secret_resource_description_list import SecretResourceDescriptionList
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
    api_instance = openapi_client.SecretsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)

    try:
        # Gets all the secret resources in a given subscription.
        api_response = api_instance.secret_list_by_subscription(subscription_id, api_version)
        print("The response of SecretsApi->secret_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->secret_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]

### Return type

[**SecretResourceDescriptionList**](SecretResourceDescriptionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

