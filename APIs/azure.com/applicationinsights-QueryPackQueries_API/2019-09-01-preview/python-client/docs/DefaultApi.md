# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queries_delete**](DefaultApi.md#queries_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/queryPacks/{queryPackName}/queries/{queryId} | 
[**queries_get**](DefaultApi.md#queries_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/queryPacks/{queryPackName}/queries/{queryId} | 
[**queries_list**](DefaultApi.md#queries_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/queryPacks/{queryPackName}/queries | 
[**queries_put**](DefaultApi.md#queries_put) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/queryPacks/{queryPackName}/queries/{queryId} | 
[**queries_search**](DefaultApi.md#queries_search) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/queryPacks/{queryPackName}/queries/search | 


# **queries_delete**
> queries_delete(subscription_id, resource_group_name, query_pack_name, query_id, api_version)



Deletes a specific Query defined within an Log Analytics QueryPack.

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
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    query_pack_name = 'query_pack_name_example' # str | The name of the Log Analytics QueryPack resource.
    query_id = 'query_id_example' # str | The id of a specific query defined in the Log Analytics QueryPack
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_instance.queries_delete(subscription_id, resource_group_name, query_pack_name, query_id, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->queries_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **query_pack_name** | **str**| The name of the Log Analytics QueryPack resource. | 
 **query_id** | **str**| The id of a specific query defined in the Log Analytics QueryPack | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**200** | The query has been successfully removed from the Log Analytics QueryPack |  -  |
**204** | The specified query or associated QueryPack does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queries_get**
> LogAnalyticsQueryPackQuery queries_get(subscription_id, resource_group_name, query_pack_name, query_id, api_version)



Gets a specific Log Analytics Query defined within a Log Analytics QueryPack.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_analytics_query_pack_query import LogAnalyticsQueryPackQuery
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
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    query_pack_name = 'query_pack_name_example' # str | The name of the Log Analytics QueryPack resource.
    query_id = 'query_id_example' # str | The id of a specific query defined in the Log Analytics QueryPack
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.queries_get(subscription_id, resource_group_name, query_pack_name, query_id, api_version)
        print("The response of DefaultApi->queries_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->queries_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **query_pack_name** | **str**| The name of the Log Analytics QueryPack resource. | 
 **query_id** | **str**| The id of a specific query defined in the Log Analytics QueryPack | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**LogAnalyticsQueryPackQuery**](LogAnalyticsQueryPackQuery.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A single query contained within the Log Analytics QueryPack. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queries_list**
> LogAnalyticsQueryPackQueryListResult queries_list(subscription_id, resource_group_name, query_pack_name, api_version, top=top, include_body=include_body, skip_token=skip_token)



Gets a list of Queries defined within a Log Analytics QueryPack.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_analytics_query_pack_query_list_result import LogAnalyticsQueryPackQueryListResult
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
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    query_pack_name = 'query_pack_name_example' # str | The name of the Log Analytics QueryPack resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    top = 56 # int | Maximum items returned in page. (optional)
    include_body = True # bool | Flag indicating whether or not to return the body of each applicable query. If false, only return the query information. (optional)
    skip_token = 'skip_token_example' # str | Base64 encoded token used to fetch the next page of items. Default is null. (optional)

    try:
        api_response = api_instance.queries_list(subscription_id, resource_group_name, query_pack_name, api_version, top=top, include_body=include_body, skip_token=skip_token)
        print("The response of DefaultApi->queries_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->queries_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **query_pack_name** | **str**| The name of the Log Analytics QueryPack resource. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **top** | **int**| Maximum items returned in page. | [optional] 
 **include_body** | **bool**| Flag indicating whether or not to return the body of each applicable query. If false, only return the query information. | [optional] 
 **skip_token** | **str**| Base64 encoded token used to fetch the next page of items. Default is null. | [optional] 

### Return type

[**LogAnalyticsQueryPackQueryListResult**](LogAnalyticsQueryPackQueryListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more queries contained within the Log Analytics QueryPack. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queries_put**
> LogAnalyticsQueryPackQuery queries_put(subscription_id, resource_group_name, query_pack_name, query_id, api_version, query_payload)



Adds or Updates a specific Query within a Log Analytics QueryPack.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_analytics_query_pack_query import LogAnalyticsQueryPackQuery
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
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    query_pack_name = 'query_pack_name_example' # str | The name of the Log Analytics QueryPack resource.
    query_id = 'query_id_example' # str | The id of a specific query defined in the Log Analytics QueryPack
    api_version = 'api_version_example' # str | The API version to use for this operation.
    query_payload = openapi_client.LogAnalyticsQueryPackQuery() # LogAnalyticsQueryPackQuery | Properties that need to be specified to create a new query and add it to a Log Analytics QueryPack.

    try:
        api_response = api_instance.queries_put(subscription_id, resource_group_name, query_pack_name, query_id, api_version, query_payload)
        print("The response of DefaultApi->queries_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->queries_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **query_pack_name** | **str**| The name of the Log Analytics QueryPack resource. | 
 **query_id** | **str**| The id of a specific query defined in the Log Analytics QueryPack | 
 **api_version** | **str**| The API version to use for this operation. | 
 **query_payload** | [**LogAnalyticsQueryPackQuery**](LogAnalyticsQueryPackQuery.md)| Properties that need to be specified to create a new query and add it to a Log Analytics QueryPack. | 

### Return type

[**LogAnalyticsQueryPackQuery**](LogAnalyticsQueryPackQuery.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The new or updated query contained within the Log Analytics QueryPack. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queries_search**
> LogAnalyticsQueryPackQueryListResult queries_search(subscription_id, resource_group_name, query_pack_name, api_version, query_search_properties, top=top, include_body=include_body, skip_token=skip_token)



Search a list of Queries defined within a Log Analytics QueryPack according to given search properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_analytics_query_pack_query_list_result import LogAnalyticsQueryPackQueryListResult
from openapi_client.models.log_analytics_query_pack_query_search_properties import LogAnalyticsQueryPackQuerySearchProperties
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
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    query_pack_name = 'query_pack_name_example' # str | The name of the Log Analytics QueryPack resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    query_search_properties = openapi_client.LogAnalyticsQueryPackQuerySearchProperties() # LogAnalyticsQueryPackQuerySearchProperties | Properties by which to search queries in the given Log Analytics QueryPack.
    top = 56 # int | Maximum items returned in page. (optional)
    include_body = True # bool | Flag indicating whether or not to return the body of each applicable query. If false, only return the query information. (optional)
    skip_token = 'skip_token_example' # str | Base64 encoded token used to fetch the next page of items. Default is null. (optional)

    try:
        api_response = api_instance.queries_search(subscription_id, resource_group_name, query_pack_name, api_version, query_search_properties, top=top, include_body=include_body, skip_token=skip_token)
        print("The response of DefaultApi->queries_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->queries_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **query_pack_name** | **str**| The name of the Log Analytics QueryPack resource. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **query_search_properties** | [**LogAnalyticsQueryPackQuerySearchProperties**](LogAnalyticsQueryPackQuerySearchProperties.md)| Properties by which to search queries in the given Log Analytics QueryPack. | 
 **top** | **int**| Maximum items returned in page. | [optional] 
 **include_body** | **bool**| Flag indicating whether or not to return the body of each applicable query. If false, only return the query information. | [optional] 
 **skip_token** | **str**| Base64 encoded token used to fetch the next page of items. Default is null. | [optional] 

### Return type

[**LogAnalyticsQueryPackQueryListResult**](LogAnalyticsQueryPackQueryListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more queries contained within the Log Analytics QueryPack. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

