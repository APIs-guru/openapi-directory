# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**query_packs_create_or_update**](DefaultApi.md#query_packs_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/queryPacks/{queryPackName} | 
[**query_packs_delete**](DefaultApi.md#query_packs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/queryPacks/{queryPackName} | 
[**query_packs_get**](DefaultApi.md#query_packs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/queryPacks/{queryPackName} | 
[**query_packs_list**](DefaultApi.md#query_packs_list) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.insights/queryPacks | 
[**query_packs_list_by_resource_group**](DefaultApi.md#query_packs_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/queryPacks | 
[**query_packs_update_tags**](DefaultApi.md#query_packs_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/queryPacks/{queryPackName} | 


# **query_packs_create_or_update**
> LogAnalyticsQueryPack query_packs_create_or_update(resource_group_name, api_version, subscription_id, query_pack_name, log_analytics_query_pack_payload)



Creates (or updates) a Log Analytics QueryPack. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_analytics_query_pack import LogAnalyticsQueryPack
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    query_pack_name = 'query_pack_name_example' # str | The name of the Log Analytics QueryPack resource.
    log_analytics_query_pack_payload = openapi_client.LogAnalyticsQueryPack() # LogAnalyticsQueryPack | Properties that need to be specified to create or update a Log Analytics QueryPack.

    try:
        api_response = api_instance.query_packs_create_or_update(resource_group_name, api_version, subscription_id, query_pack_name, log_analytics_query_pack_payload)
        print("The response of DefaultApi->query_packs_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->query_packs_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **query_pack_name** | **str**| The name of the Log Analytics QueryPack resource. | 
 **log_analytics_query_pack_payload** | [**LogAnalyticsQueryPack**](LogAnalyticsQueryPack.md)| Properties that need to be specified to create or update a Log Analytics QueryPack. | 

### Return type

[**LogAnalyticsQueryPack**](LogAnalyticsQueryPack.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request when creating or updating a Log Analytics QueryPack. The updated QueryPack is returned. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_packs_delete**
> query_packs_delete(resource_group_name, api_version, subscription_id, query_pack_name)



Deletes a Log Analytics QueryPack.

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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    query_pack_name = 'query_pack_name_example' # str | The name of the Log Analytics QueryPack resource.

    try:
        api_instance.query_packs_delete(resource_group_name, api_version, subscription_id, query_pack_name)
    except Exception as e:
        print("Exception when calling DefaultApi->query_packs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **query_pack_name** | **str**| The name of the Log Analytics QueryPack resource. | 

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
**200** | Successful request when deleting a Log Analytics QueryPack. |  -  |
**204** | The specified QueryPack does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_packs_get**
> LogAnalyticsQueryPack query_packs_get(resource_group_name, api_version, subscription_id, query_pack_name)



Returns a Log Analytics QueryPack.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_analytics_query_pack import LogAnalyticsQueryPack
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    query_pack_name = 'query_pack_name_example' # str | The name of the Log Analytics QueryPack resource.

    try:
        api_response = api_instance.query_packs_get(resource_group_name, api_version, subscription_id, query_pack_name)
        print("The response of DefaultApi->query_packs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->query_packs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **query_pack_name** | **str**| The name of the Log Analytics QueryPack resource. | 

### Return type

[**LogAnalyticsQueryPack**](LogAnalyticsQueryPack.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Log Analytics QueryPack definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_packs_list**
> LogAnalyticsQueryPackListResult query_packs_list(api_version, subscription_id)



Gets a list of all Log Analytics QueryPacks within a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_analytics_query_pack_list_result import LogAnalyticsQueryPackListResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.query_packs_list(api_version, subscription_id)
        print("The response of DefaultApi->query_packs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->query_packs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**LogAnalyticsQueryPackListResult**](LogAnalyticsQueryPackListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more Log Analytics QueryPack definitions. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_packs_list_by_resource_group**
> LogAnalyticsQueryPackListResult query_packs_list_by_resource_group(resource_group_name, api_version, subscription_id)



Gets a list of Log Analytics QueryPacks within a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_analytics_query_pack_list_result import LogAnalyticsQueryPackListResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.query_packs_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of DefaultApi->query_packs_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->query_packs_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**LogAnalyticsQueryPackListResult**](LogAnalyticsQueryPackListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more Log Analytics QueryPack definitions. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_packs_update_tags**
> LogAnalyticsQueryPack query_packs_update_tags(resource_group_name, api_version, subscription_id, query_pack_name, query_pack_tags)



Updates an existing QueryPack's tags. To update other fields use the CreateOrUpdate method.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_analytics_query_pack import LogAnalyticsQueryPack
from openapi_client.models.tags_resource import TagsResource
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    query_pack_name = 'query_pack_name_example' # str | The name of the Log Analytics QueryPack resource.
    query_pack_tags = openapi_client.TagsResource() # TagsResource | Updated tag information to set into the QueryPack instance.

    try:
        api_response = api_instance.query_packs_update_tags(resource_group_name, api_version, subscription_id, query_pack_name, query_pack_tags)
        print("The response of DefaultApi->query_packs_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->query_packs_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **query_pack_name** | **str**| The name of the Log Analytics QueryPack resource. | 
 **query_pack_tags** | [**TagsResource**](TagsResource.md)| Updated tag information to set into the QueryPack instance. | 

### Return type

[**LogAnalyticsQueryPack**](LogAnalyticsQueryPack.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updating the Log Analytics QueryPack&#39;s tags was successful. QueryPack tags are updated and returned with the rest of the QueryPack&#39;s object properties. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

