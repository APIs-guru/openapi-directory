# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**graph_query_create_or_update**](DefaultApi.md#graph_query_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName} | 
[**graph_query_delete**](DefaultApi.md#graph_query_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName} | 
[**graph_query_get**](DefaultApi.md#graph_query_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName} | 
[**graph_query_list**](DefaultApi.md#graph_query_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries | 
[**graph_query_update**](DefaultApi.md#graph_query_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName} | 


# **graph_query_create_or_update**
> GraphQueryResource graph_query_create_or_update(subscription_id, resource_group_name, resource_name, api_version, properties)



Create a new graph query.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.graph_query_resource import GraphQueryResource
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
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the Graph Query resource.
    api_version = 'api_version_example' # str | Client Api Version.
    properties = openapi_client.GraphQueryResource() # GraphQueryResource | Properties that need to be specified to create a new graph query.

    try:
        api_response = api_instance.graph_query_create_or_update(subscription_id, resource_group_name, resource_name, api_version, properties)
        print("The response of DefaultApi->graph_query_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->graph_query_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the Graph Query resource. | 
 **api_version** | **str**| Client Api Version. | 
 **properties** | [**GraphQueryResource**](GraphQueryResource.md)| Properties that need to be specified to create a new graph query. | 

### Return type

[**GraphQueryResource**](GraphQueryResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The newly created graph query. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **graph_query_delete**
> graph_query_delete(subscription_id, resource_group_name, resource_name, api_version)



Delete a graph query.

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
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the Graph Query resource.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.graph_query_delete(subscription_id, resource_group_name, resource_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->graph_query_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the Graph Query resource. | 
 **api_version** | **str**| Client Api Version. | 

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
**200** | The graph query has been successfully deleted. |  -  |
**204** | The resource doesn&#39;t exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **graph_query_get**
> GraphQueryResource graph_query_get(subscription_id, resource_group_name, resource_name, api_version)



Get a single graph query by its resourceName.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.graph_query_resource import GraphQueryResource
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
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the Graph Query resource.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.graph_query_get(subscription_id, resource_group_name, resource_name, api_version)
        print("The response of DefaultApi->graph_query_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->graph_query_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the Graph Query resource. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**GraphQueryResource**](GraphQueryResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A graph query definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **graph_query_list**
> GraphQueryListResult graph_query_list(subscription_id, resource_group_name, api_version)



Get all graph queries defined within a specified subscription and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.graph_query_list_result import GraphQueryListResult
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
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.graph_query_list(subscription_id, resource_group_name, api_version)
        print("The response of DefaultApi->graph_query_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->graph_query_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**GraphQueryListResult**](GraphQueryListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more graph queries. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **graph_query_update**
> GraphQueryResource graph_query_update(subscription_id, resource_group_name, resource_name, api_version, body)



Updates a graph query that has already been added.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.graph_query_resource import GraphQueryResource
from openapi_client.models.graph_query_update_parameters import GraphQueryUpdateParameters
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
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the Graph Query resource.
    api_version = 'api_version_example' # str | Client Api Version.
    body = openapi_client.GraphQueryUpdateParameters() # GraphQueryUpdateParameters | Properties that need to be specified to create a new graph query.

    try:
        api_response = api_instance.graph_query_update(subscription_id, resource_group_name, resource_name, api_version, body)
        print("The response of DefaultApi->graph_query_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->graph_query_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the Graph Query resource. | 
 **api_version** | **str**| Client Api Version. | 
 **body** | [**GraphQueryUpdateParameters**](GraphQueryUpdateParameters.md)| Properties that need to be specified to create a new graph query. | 

### Return type

[**GraphQueryResource**](GraphQueryResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The graph query definition updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

