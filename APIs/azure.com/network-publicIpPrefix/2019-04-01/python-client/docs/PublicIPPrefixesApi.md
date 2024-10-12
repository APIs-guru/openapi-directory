# openapi_client.PublicIPPrefixesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**public_ip_prefixes_create_or_update**](PublicIPPrefixesApi.md#public_ip_prefixes_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName} | 
[**public_ip_prefixes_delete**](PublicIPPrefixesApi.md#public_ip_prefixes_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName} | 
[**public_ip_prefixes_get**](PublicIPPrefixesApi.md#public_ip_prefixes_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName} | 
[**public_ip_prefixes_list**](PublicIPPrefixesApi.md#public_ip_prefixes_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes | 
[**public_ip_prefixes_list_all**](PublicIPPrefixesApi.md#public_ip_prefixes_list_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/publicIPPrefixes | 
[**public_ip_prefixes_update_tags**](PublicIPPrefixesApi.md#public_ip_prefixes_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName} | 


# **public_ip_prefixes_create_or_update**
> PublicIPPrefix public_ip_prefixes_create_or_update(resource_group_name, public_ip_prefix_name, api_version, subscription_id, parameters)



Creates or updates a static or dynamic public IP prefix.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.public_ip_prefix import PublicIPPrefix
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
    api_instance = openapi_client.PublicIPPrefixesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    public_ip_prefix_name = 'public_ip_prefix_name_example' # str | The name of the public IP prefix.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.PublicIPPrefix() # PublicIPPrefix | Parameters supplied to the create or update public IP prefix operation.

    try:
        api_response = api_instance.public_ip_prefixes_create_or_update(resource_group_name, public_ip_prefix_name, api_version, subscription_id, parameters)
        print("The response of PublicIPPrefixesApi->public_ip_prefixes_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicIPPrefixesApi->public_ip_prefixes_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **public_ip_prefix_name** | **str**| The name of the public IP prefix. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**PublicIPPrefix**](PublicIPPrefix.md)| Parameters supplied to the create or update public IP prefix operation. | 

### Return type

[**PublicIPPrefix**](PublicIPPrefix.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting PublicIPPrefix resource. |  -  |
**201** | Create successful. The operation returns the resulting PublicIPPrefix resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_ip_prefixes_delete**
> public_ip_prefixes_delete(resource_group_name, public_ip_prefix_name, api_version, subscription_id)



Deletes the specified public IP prefix.

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
    api_instance = openapi_client.PublicIPPrefixesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    public_ip_prefix_name = 'public_ip_prefix_name_example' # str | The name of the PublicIpPrefix.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.public_ip_prefixes_delete(resource_group_name, public_ip_prefix_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling PublicIPPrefixesApi->public_ip_prefixes_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **public_ip_prefix_name** | **str**| The name of the PublicIpPrefix. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Delete successful. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Request successful. Resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_ip_prefixes_get**
> PublicIPPrefix public_ip_prefixes_get(resource_group_name, public_ip_prefix_name, api_version, subscription_id, expand=expand)



Gets the specified public IP prefix in a specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.public_ip_prefix import PublicIPPrefix
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
    api_instance = openapi_client.PublicIPPrefixesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    public_ip_prefix_name = 'public_ip_prefix_name_example' # str | The name of the public IP prefix.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | Expands referenced resources. (optional)

    try:
        api_response = api_instance.public_ip_prefixes_get(resource_group_name, public_ip_prefix_name, api_version, subscription_id, expand=expand)
        print("The response of PublicIPPrefixesApi->public_ip_prefixes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicIPPrefixesApi->public_ip_prefixes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **public_ip_prefix_name** | **str**| The name of the public IP prefix. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| Expands referenced resources. | [optional] 

### Return type

[**PublicIPPrefix**](PublicIPPrefix.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting PublicIPPrefix resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_ip_prefixes_list**
> PublicIPPrefixListResult public_ip_prefixes_list(resource_group_name, api_version, subscription_id)



Gets all public IP prefixes in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.public_ip_prefix_list_result import PublicIPPrefixListResult
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
    api_instance = openapi_client.PublicIPPrefixesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.public_ip_prefixes_list(resource_group_name, api_version, subscription_id)
        print("The response of PublicIPPrefixesApi->public_ip_prefixes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicIPPrefixesApi->public_ip_prefixes_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PublicIPPrefixListResult**](PublicIPPrefixListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of PublicIPPrefix resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_ip_prefixes_list_all**
> PublicIPPrefixListResult public_ip_prefixes_list_all(api_version, subscription_id)



Gets all the public IP prefixes in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.public_ip_prefix_list_result import PublicIPPrefixListResult
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
    api_instance = openapi_client.PublicIPPrefixesApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.public_ip_prefixes_list_all(api_version, subscription_id)
        print("The response of PublicIPPrefixesApi->public_ip_prefixes_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicIPPrefixesApi->public_ip_prefixes_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PublicIPPrefixListResult**](PublicIPPrefixListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of PublicIPPrefix resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_ip_prefixes_update_tags**
> PublicIPPrefix public_ip_prefixes_update_tags(resource_group_name, public_ip_prefix_name, api_version, subscription_id, parameters)



Updates public IP prefix tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.public_ip_prefix import PublicIPPrefix
from openapi_client.models.public_ip_prefixes_update_tags_request import PublicIPPrefixesUpdateTagsRequest
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
    api_instance = openapi_client.PublicIPPrefixesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    public_ip_prefix_name = 'public_ip_prefix_name_example' # str | The name of the public IP prefix.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.PublicIPPrefixesUpdateTagsRequest() # PublicIPPrefixesUpdateTagsRequest | Parameters supplied to update public IP prefix tags.

    try:
        api_response = api_instance.public_ip_prefixes_update_tags(resource_group_name, public_ip_prefix_name, api_version, subscription_id, parameters)
        print("The response of PublicIPPrefixesApi->public_ip_prefixes_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicIPPrefixesApi->public_ip_prefixes_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **public_ip_prefix_name** | **str**| The name of the public IP prefix. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**PublicIPPrefixesUpdateTagsRequest**](PublicIPPrefixesUpdateTagsRequest.md)| Parameters supplied to update public IP prefix tags. | 

### Return type

[**PublicIPPrefix**](PublicIPPrefix.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting PublicIPPrefix resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

