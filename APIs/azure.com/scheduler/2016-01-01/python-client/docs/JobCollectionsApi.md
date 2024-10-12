# openapi_client.JobCollectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**job_collections_create_or_update**](JobCollectionsApi.md#job_collections_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName} | 
[**job_collections_delete**](JobCollectionsApi.md#job_collections_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName} | 
[**job_collections_disable**](JobCollectionsApi.md#job_collections_disable) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/disable | 
[**job_collections_enable**](JobCollectionsApi.md#job_collections_enable) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/enable | 
[**job_collections_get**](JobCollectionsApi.md#job_collections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName} | 
[**job_collections_list_by_resource_group**](JobCollectionsApi.md#job_collections_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections | 
[**job_collections_list_by_subscription**](JobCollectionsApi.md#job_collections_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Scheduler/jobCollections | 
[**job_collections_patch**](JobCollectionsApi.md#job_collections_patch) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName} | 


# **job_collections_create_or_update**
> JobCollectionDefinition job_collections_create_or_update(subscription_id, resource_group_name, job_collection_name, api_version, job_collection)



Provisions a new job collection or updates an existing job collection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_collection_definition import JobCollectionDefinition
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
    api_instance = openapi_client.JobCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    job_collection_name = 'job_collection_name_example' # str | The job collection name.
    api_version = 'api_version_example' # str | The API version.
    job_collection = openapi_client.JobCollectionDefinition() # JobCollectionDefinition | The job collection definition.

    try:
        api_response = api_instance.job_collections_create_or_update(subscription_id, resource_group_name, job_collection_name, api_version, job_collection)
        print("The response of JobCollectionsApi->job_collections_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobCollectionsApi->job_collections_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **job_collection_name** | **str**| The job collection name. | 
 **api_version** | **str**| The API version. | 
 **job_collection** | [**JobCollectionDefinition**](JobCollectionDefinition.md)| The job collection definition. | 

### Return type

[**JobCollectionDefinition**](JobCollectionDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The job collection has been successfully updated. |  -  |
**201** | The job collection has been successfully created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_collections_delete**
> job_collections_delete(subscription_id, resource_group_name, job_collection_name, api_version)



Deletes a job collection.

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
    api_instance = openapi_client.JobCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    job_collection_name = 'job_collection_name_example' # str | The job collection name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.job_collections_delete(subscription_id, resource_group_name, job_collection_name, api_version)
    except Exception as e:
        print("Exception when calling JobCollectionsApi->job_collections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **job_collection_name** | **str**| The job collection name. | 
 **api_version** | **str**| The API version. | 

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
**200** | The job collection has been successfully deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_collections_disable**
> job_collections_disable(subscription_id, resource_group_name, job_collection_name, api_version)



Disables all of the jobs in the job collection.

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
    api_instance = openapi_client.JobCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    job_collection_name = 'job_collection_name_example' # str | The job collection name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.job_collections_disable(subscription_id, resource_group_name, job_collection_name, api_version)
    except Exception as e:
        print("Exception when calling JobCollectionsApi->job_collections_disable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **job_collection_name** | **str**| The job collection name. | 
 **api_version** | **str**| The API version. | 

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
**200** | All of the jobs in the job collection have been successfully disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_collections_enable**
> job_collections_enable(subscription_id, resource_group_name, job_collection_name, api_version)



Enables all of the jobs in the job collection.

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
    api_instance = openapi_client.JobCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    job_collection_name = 'job_collection_name_example' # str | The job collection name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.job_collections_enable(subscription_id, resource_group_name, job_collection_name, api_version)
    except Exception as e:
        print("Exception when calling JobCollectionsApi->job_collections_enable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **job_collection_name** | **str**| The job collection name. | 
 **api_version** | **str**| The API version. | 

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
**200** | All of the jobs in the job collection have been successfully enabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_collections_get**
> JobCollectionDefinition job_collections_get(subscription_id, resource_group_name, job_collection_name, api_version)



Gets a job collection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_collection_definition import JobCollectionDefinition
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
    api_instance = openapi_client.JobCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    job_collection_name = 'job_collection_name_example' # str | The job collection name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.job_collections_get(subscription_id, resource_group_name, job_collection_name, api_version)
        print("The response of JobCollectionsApi->job_collections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobCollectionsApi->job_collections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **job_collection_name** | **str**| The job collection name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**JobCollectionDefinition**](JobCollectionDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The job collection has been successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_collections_list_by_resource_group**
> JobCollectionListResult job_collections_list_by_resource_group(subscription_id, resource_group_name, api_version)



Gets all job collections under specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_collection_list_result import JobCollectionListResult
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
    api_instance = openapi_client.JobCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.job_collections_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of JobCollectionsApi->job_collections_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobCollectionsApi->job_collections_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**JobCollectionListResult**](JobCollectionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The job collections have been successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_collections_list_by_subscription**
> JobCollectionListResult job_collections_list_by_subscription(subscription_id, api_version)



Gets all job collections under specified subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_collection_list_result import JobCollectionListResult
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
    api_instance = openapi_client.JobCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.job_collections_list_by_subscription(subscription_id, api_version)
        print("The response of JobCollectionsApi->job_collections_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobCollectionsApi->job_collections_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **api_version** | **str**| The API version. | 

### Return type

[**JobCollectionListResult**](JobCollectionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The job collections have been successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_collections_patch**
> JobCollectionDefinition job_collections_patch(subscription_id, resource_group_name, job_collection_name, api_version, job_collection)



Patches an existing job collection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_collection_definition import JobCollectionDefinition
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
    api_instance = openapi_client.JobCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    job_collection_name = 'job_collection_name_example' # str | The job collection name.
    api_version = 'api_version_example' # str | The API version.
    job_collection = openapi_client.JobCollectionDefinition() # JobCollectionDefinition | The job collection definition.

    try:
        api_response = api_instance.job_collections_patch(subscription_id, resource_group_name, job_collection_name, api_version, job_collection)
        print("The response of JobCollectionsApi->job_collections_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobCollectionsApi->job_collections_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **job_collection_name** | **str**| The job collection name. | 
 **api_version** | **str**| The API version. | 
 **job_collection** | [**JobCollectionDefinition**](JobCollectionDefinition.md)| The job collection definition. | 

### Return type

[**JobCollectionDefinition**](JobCollectionDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The job collection has been successfully patched. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

