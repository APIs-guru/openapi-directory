# openapi_client.StreamingJobsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**streaming_jobs_create_or_replace**](StreamingJobsApi.md#streaming_jobs_create_or_replace) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName} | 
[**streaming_jobs_delete**](StreamingJobsApi.md#streaming_jobs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName} | 
[**streaming_jobs_get**](StreamingJobsApi.md#streaming_jobs_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName} | 
[**streaming_jobs_list**](StreamingJobsApi.md#streaming_jobs_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/streamingjobs | 
[**streaming_jobs_list_by_resource_group**](StreamingJobsApi.md#streaming_jobs_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs | 
[**streaming_jobs_start**](StreamingJobsApi.md#streaming_jobs_start) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/start | 
[**streaming_jobs_stop**](StreamingJobsApi.md#streaming_jobs_stop) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/stop | 
[**streaming_jobs_update**](StreamingJobsApi.md#streaming_jobs_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName} | 


# **streaming_jobs_create_or_replace**
> StreamingJob streaming_jobs_create_or_replace(api_version, subscription_id, resource_group_name, job_name, streaming_job, if_match=if_match, if_none_match=if_none_match)



Creates a streaming job or replaces an already existing streaming job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.streaming_job import StreamingJob
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
    api_instance = openapi_client.StreamingJobsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    streaming_job = openapi_client.StreamingJob() # StreamingJob | The definition of the streaming job that will be used to create a new streaming job or replace the existing one.
    if_match = 'if_match_example' # str | The ETag of the streaming job. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. (optional)
    if_none_match = 'if_none_match_example' # str | Set to '*' to allow a new streaming job to be created, but to prevent updating an existing record set. Other values will result in a 412 Pre-condition Failed response. (optional)

    try:
        api_response = api_instance.streaming_jobs_create_or_replace(api_version, subscription_id, resource_group_name, job_name, streaming_job, if_match=if_match, if_none_match=if_none_match)
        print("The response of StreamingJobsApi->streaming_jobs_create_or_replace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamingJobsApi->streaming_jobs_create_or_replace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **streaming_job** | [**StreamingJob**](StreamingJob.md)| The definition of the streaming job that will be used to create a new streaming job or replace the existing one. | 
 **if_match** | **str**| The ETag of the streaming job. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. | [optional] 
 **if_none_match** | **str**| Set to &#39;*&#39; to allow a new streaming job to be created, but to prevent updating an existing record set. Other values will result in a 412 Pre-condition Failed response. | [optional] 

### Return type

[**StreamingJob**](StreamingJob.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The streaming job was successfully created or replaced. |  * ETag - The current entity tag for the streaming job. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |
**201** | The streaming job was successfully created or replaced. |  * ETag - The current entity tag for the streaming job. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_jobs_delete**
> streaming_jobs_delete(api_version, subscription_id, resource_group_name, job_name)



Deletes a streaming job.

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
    api_instance = openapi_client.StreamingJobsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.

    try:
        api_instance.streaming_jobs_delete(api_version, subscription_id, resource_group_name, job_name)
    except Exception as e:
        print("Exception when calling StreamingJobsApi->streaming_jobs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 

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
**200** | The streaming job was successfully deleted. |  -  |
**202** | The delete request was successfully initiated. |  -  |
**204** | The streaming job does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_jobs_get**
> StreamingJob streaming_jobs_get(api_version, subscription_id, resource_group_name, job_name, expand=expand)



Gets details about the specified streaming job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.streaming_job import StreamingJob
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
    api_instance = openapi_client.StreamingJobsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    expand = 'expand_example' # str | The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'. (optional)

    try:
        api_response = api_instance.streaming_jobs_get(api_version, subscription_id, resource_group_name, job_name, expand=expand)
        print("The response of StreamingJobsApi->streaming_jobs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamingJobsApi->streaming_jobs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **expand** | **str**| The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than &#39;inputs&#39;, &#39;transformation&#39;, &#39;outputs&#39;, and &#39;functions&#39;. | [optional] 

### Return type

[**StreamingJob**](StreamingJob.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified streaming job. |  * ETag - The current entity tag for the streaming job. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_jobs_list**
> StreamingJobListResult streaming_jobs_list(api_version, subscription_id, expand=expand)



Lists all of the streaming jobs in the given subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.streaming_job_list_result import StreamingJobListResult
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
    api_instance = openapi_client.StreamingJobsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'. (optional)

    try:
        api_response = api_instance.streaming_jobs_list(api_version, subscription_id, expand=expand)
        print("The response of StreamingJobsApi->streaming_jobs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamingJobsApi->streaming_jobs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than &#39;inputs&#39;, &#39;transformation&#39;, &#39;outputs&#39;, and &#39;functions&#39;. | [optional] 

### Return type

[**StreamingJobListResult**](StreamingJobListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully listed the streaming jobs under the given subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_jobs_list_by_resource_group**
> StreamingJobListResult streaming_jobs_list_by_resource_group(api_version, subscription_id, resource_group_name, expand=expand)



Lists all of the streaming jobs in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.streaming_job_list_result import StreamingJobListResult
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
    api_instance = openapi_client.StreamingJobsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    expand = 'expand_example' # str | The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'. (optional)

    try:
        api_response = api_instance.streaming_jobs_list_by_resource_group(api_version, subscription_id, resource_group_name, expand=expand)
        print("The response of StreamingJobsApi->streaming_jobs_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamingJobsApi->streaming_jobs_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **expand** | **str**| The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than &#39;inputs&#39;, &#39;transformation&#39;, &#39;outputs&#39;, and &#39;functions&#39;. | [optional] 

### Return type

[**StreamingJobListResult**](StreamingJobListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully listed the streaming jobs under the specified resource group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_jobs_start**
> streaming_jobs_start(api_version, subscription_id, resource_group_name, job_name, start_job_parameters=start_job_parameters)



Starts a streaming job. Once a job is started it will start processing input events and produce output.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.start_streaming_job_parameters import StartStreamingJobParameters
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
    api_instance = openapi_client.StreamingJobsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    start_job_parameters = openapi_client.StartStreamingJobParameters() # StartStreamingJobParameters | Parameters applicable to a start streaming job operation. (optional)

    try:
        api_instance.streaming_jobs_start(api_version, subscription_id, resource_group_name, job_name, start_job_parameters=start_job_parameters)
    except Exception as e:
        print("Exception when calling StreamingJobsApi->streaming_jobs_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **start_job_parameters** | [**StartStreamingJobParameters**](StartStreamingJobParameters.md)| Parameters applicable to a start streaming job operation. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The streaming job was successfully started. |  -  |
**202** | The start streaming job request was successfully initiated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_jobs_stop**
> streaming_jobs_stop(api_version, subscription_id, resource_group_name, job_name)



Stops a running streaming job. This will cause a running streaming job to stop processing input events and producing output.

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
    api_instance = openapi_client.StreamingJobsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.

    try:
        api_instance.streaming_jobs_stop(api_version, subscription_id, resource_group_name, job_name)
    except Exception as e:
        print("Exception when calling StreamingJobsApi->streaming_jobs_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 

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
**200** | The streaming job was successfully stopped. |  -  |
**202** | The stop streaming job request was successfully initiated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_jobs_update**
> StreamingJob streaming_jobs_update(api_version, subscription_id, resource_group_name, job_name, streaming_job, if_match=if_match)



Updates an existing streaming job. This can be used to partially update (ie. update one or two properties) a streaming job without affecting the rest the job definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.streaming_job import StreamingJob
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
    api_instance = openapi_client.StreamingJobsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    job_name = 'job_name_example' # str | The name of the streaming job.
    streaming_job = openapi_client.StreamingJob() # StreamingJob | A streaming job object. The properties specified here will overwrite the corresponding properties in the existing streaming job (ie. Those properties will be updated). Any properties that are set to null here will mean that the corresponding property in the existing input will remain the same and not change as a result of this PATCH operation.
    if_match = 'if_match_example' # str | The ETag of the streaming job. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. (optional)

    try:
        api_response = api_instance.streaming_jobs_update(api_version, subscription_id, resource_group_name, job_name, streaming_job, if_match=if_match)
        print("The response of StreamingJobsApi->streaming_jobs_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamingJobsApi->streaming_jobs_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **job_name** | **str**| The name of the streaming job. | 
 **streaming_job** | [**StreamingJob**](StreamingJob.md)| A streaming job object. The properties specified here will overwrite the corresponding properties in the existing streaming job (ie. Those properties will be updated). Any properties that are set to null here will mean that the corresponding property in the existing input will remain the same and not change as a result of this PATCH operation. | 
 **if_match** | **str**| The ETag of the streaming job. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. | [optional] 

### Return type

[**StreamingJob**](StreamingJob.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The streaming job was successfully updated. |  * ETag - The current entity tag for the streaming job. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

