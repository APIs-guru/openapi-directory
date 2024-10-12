# openapi_client.ManagementGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**management_group_subscriptions_create**](ManagementGroupsApi.md#management_group_subscriptions_create) | **PUT** /providers/Microsoft.Management/managementGroups/{groupId}/subscriptions/{subscriptionId} | 
[**management_group_subscriptions_delete**](ManagementGroupsApi.md#management_group_subscriptions_delete) | **DELETE** /providers/Microsoft.Management/managementGroups/{groupId}/subscriptions/{subscriptionId} | 
[**management_groups_create_or_update**](ManagementGroupsApi.md#management_groups_create_or_update) | **PUT** /providers/Microsoft.Management/managementGroups/{groupId} | 
[**management_groups_delete**](ManagementGroupsApi.md#management_groups_delete) | **DELETE** /providers/Microsoft.Management/managementGroups/{groupId} | 
[**management_groups_get**](ManagementGroupsApi.md#management_groups_get) | **GET** /providers/Microsoft.Management/managementGroups/{groupId} | 
[**management_groups_list**](ManagementGroupsApi.md#management_groups_list) | **GET** /providers/Microsoft.Management/managementGroups | 
[**management_groups_update**](ManagementGroupsApi.md#management_groups_update) | **PATCH** /providers/Microsoft.Management/managementGroups/{groupId} | 


# **management_group_subscriptions_create**
> management_group_subscriptions_create(group_id, subscription_id, api_version, cache_control=cache_control)



Associates existing subscription with the management group. 

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
    api_instance = openapi_client.ManagementGroupsApi(api_client)
    group_id = 'group_id_example' # str | Management Group ID.
    subscription_id = 'subscription_id_example' # str | Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2017-11-01-preview.
    cache_control = 'no-cache' # str | Indicates that the request shouldn't utilize any caches. (optional) (default to 'no-cache')

    try:
        api_instance.management_group_subscriptions_create(group_id, subscription_id, api_version, cache_control=cache_control)
    except Exception as e:
        print("Exception when calling ManagementGroupsApi->management_group_subscriptions_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| Management Group ID. | 
 **subscription_id** | **str**| Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2017-11-01-preview. | 
 **cache_control** | **str**| Indicates that the request shouldn&#39;t utilize any caches. | [optional] [default to &#39;no-cache&#39;]

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
**204** | No Content |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_group_subscriptions_delete**
> management_group_subscriptions_delete(group_id, subscription_id, api_version, cache_control=cache_control)



De-associates subscription from the management group. 

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
    api_instance = openapi_client.ManagementGroupsApi(api_client)
    group_id = 'group_id_example' # str | Management Group ID.
    subscription_id = 'subscription_id_example' # str | Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2017-11-01-preview.
    cache_control = 'no-cache' # str | Indicates that the request shouldn't utilize any caches. (optional) (default to 'no-cache')

    try:
        api_instance.management_group_subscriptions_delete(group_id, subscription_id, api_version, cache_control=cache_control)
    except Exception as e:
        print("Exception when calling ManagementGroupsApi->management_group_subscriptions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| Management Group ID. | 
 **subscription_id** | **str**| Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2017-11-01-preview. | 
 **cache_control** | **str**| Indicates that the request shouldn&#39;t utilize any caches. | [optional] [default to &#39;no-cache&#39;]

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
**204** | No Content - subscription deleted successfully |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_groups_create_or_update**
> ManagementGroup management_groups_create_or_update(group_id, api_version, create_management_group_request, cache_control=cache_control)



Create or update a management group. If a management group is already created and a subsequent create request is issued with different properties, the management group properties will be updated. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_management_group_request import CreateManagementGroupRequest
from openapi_client.models.management_group import ManagementGroup
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
    api_instance = openapi_client.ManagementGroupsApi(api_client)
    group_id = 'group_id_example' # str | Management Group ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2017-11-01-preview.
    create_management_group_request = openapi_client.CreateManagementGroupRequest() # CreateManagementGroupRequest | Management group creation parameters.
    cache_control = 'no-cache' # str | Indicates that the request shouldn't utilize any caches. (optional) (default to 'no-cache')

    try:
        api_response = api_instance.management_groups_create_or_update(group_id, api_version, create_management_group_request, cache_control=cache_control)
        print("The response of ManagementGroupsApi->management_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementGroupsApi->management_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| Management Group ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2017-11-01-preview. | 
 **create_management_group_request** | [**CreateManagementGroupRequest**](CreateManagementGroupRequest.md)| Management group creation parameters. | 
 **cache_control** | **str**| Indicates that the request shouldn&#39;t utilize any caches. | [optional] [default to &#39;no-cache&#39;]

### Return type

[**ManagementGroup**](ManagementGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_groups_delete**
> management_groups_delete(group_id, api_version, cache_control=cache_control)



Delete management group. If a management group contains child resources, the request will fail. 

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
    api_instance = openapi_client.ManagementGroupsApi(api_client)
    group_id = 'group_id_example' # str | Management Group ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2017-11-01-preview.
    cache_control = 'no-cache' # str | Indicates that the request shouldn't utilize any caches. (optional) (default to 'no-cache')

    try:
        api_instance.management_groups_delete(group_id, api_version, cache_control=cache_control)
    except Exception as e:
        print("Exception when calling ManagementGroupsApi->management_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| Management Group ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2017-11-01-preview. | 
 **cache_control** | **str**| Indicates that the request shouldn&#39;t utilize any caches. | [optional] [default to &#39;no-cache&#39;]

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
**200** | OK - management group deleted successfully |  -  |
**204** | NoContent - management group does not exist |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_groups_get**
> ManagementGroup management_groups_get(group_id, api_version, expand=expand, recurse=recurse, cache_control=cache_control)



Get the details of the management group. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_group import ManagementGroup
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
    api_instance = openapi_client.ManagementGroupsApi(api_client)
    group_id = 'group_id_example' # str | Management Group ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2017-11-01-preview.
    expand = 'expand_example' # str | The $expand=children query string parameter allows clients to request inclusion of children in the response payload. (optional)
    recurse = True # bool | The $recurse=true query string parameter allows clients to request inclusion of entire hierarchy in the response payload. (optional)
    cache_control = 'no-cache' # str | Indicates that the request shouldn't utilize any caches. (optional) (default to 'no-cache')

    try:
        api_response = api_instance.management_groups_get(group_id, api_version, expand=expand, recurse=recurse, cache_control=cache_control)
        print("The response of ManagementGroupsApi->management_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementGroupsApi->management_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| Management Group ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2017-11-01-preview. | 
 **expand** | **str**| The $expand&#x3D;children query string parameter allows clients to request inclusion of children in the response payload. | [optional] 
 **recurse** | **bool**| The $recurse&#x3D;true query string parameter allows clients to request inclusion of entire hierarchy in the response payload. | [optional] 
 **cache_control** | **str**| Indicates that the request shouldn&#39;t utilize any caches. | [optional] [default to &#39;no-cache&#39;]

### Return type

[**ManagementGroup**](ManagementGroup.md)

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

# **management_groups_list**
> ManagementGroupListResult management_groups_list(api_version, cache_control=cache_control, skiptoken=skiptoken)



List management groups for the authenticated user. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_group_list_result import ManagementGroupListResult
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
    api_instance = openapi_client.ManagementGroupsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2017-11-01-preview.
    cache_control = 'no-cache' # str | Indicates that the request shouldn't utilize any caches. (optional) (default to 'no-cache')
    skiptoken = 'skiptoken_example' # str | Page continuation token is only used if a previous operation returned a partial result.  If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.  (optional)

    try:
        api_response = api_instance.management_groups_list(api_version, cache_control=cache_control, skiptoken=skiptoken)
        print("The response of ManagementGroupsApi->management_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementGroupsApi->management_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2017-11-01-preview. | 
 **cache_control** | **str**| Indicates that the request shouldn&#39;t utilize any caches. | [optional] [default to &#39;no-cache&#39;]
 **skiptoken** | **str**| Page continuation token is only used if a previous operation returned a partial result.  If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.  | [optional] 

### Return type

[**ManagementGroupListResult**](ManagementGroupListResult.md)

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

# **management_groups_update**
> ManagementGroup management_groups_update(group_id, api_version, create_management_group_request, cache_control=cache_control)



Update a management group. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_management_group_request import CreateManagementGroupRequest
from openapi_client.models.management_group import ManagementGroup
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
    api_instance = openapi_client.ManagementGroupsApi(api_client)
    group_id = 'group_id_example' # str | Management Group ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2017-11-01-preview.
    create_management_group_request = openapi_client.CreateManagementGroupRequest() # CreateManagementGroupRequest | Management group creation parameters.
    cache_control = 'no-cache' # str | Indicates that the request shouldn't utilize any caches. (optional) (default to 'no-cache')

    try:
        api_response = api_instance.management_groups_update(group_id, api_version, create_management_group_request, cache_control=cache_control)
        print("The response of ManagementGroupsApi->management_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementGroupsApi->management_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| Management Group ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2017-11-01-preview. | 
 **create_management_group_request** | [**CreateManagementGroupRequest**](CreateManagementGroupRequest.md)| Management group creation parameters. | 
 **cache_control** | **str**| Indicates that the request shouldn&#39;t utilize any caches. | [optional] [default to &#39;no-cache&#39;]

### Return type

[**ManagementGroup**](ManagementGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

