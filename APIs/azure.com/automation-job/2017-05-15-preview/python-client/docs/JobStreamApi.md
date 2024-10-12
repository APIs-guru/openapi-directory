# openapi_client.JobStreamApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**job_stream_get**](JobStreamApi.md#job_stream_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/streams/{jobStreamId} | 
[**job_stream_list_by_job**](JobStreamApi.md#job_stream_list_by_job) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/streams | 


# **job_stream_get**
> JobStream job_stream_get(subscription_id, resource_group_name, automation_account_name, job_name, job_stream_id, api_version, client_request_id=client_request_id)



Retrieve the job stream identified by job stream id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_stream import JobStream
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
    api_instance = openapi_client.JobStreamApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    job_name = 'job_name_example' # str | The job name.
    job_stream_id = 'job_stream_id_example' # str | The job stream id.
    api_version = 'api_version_example' # str | Client Api Version.
    client_request_id = 'client_request_id_example' # str | Identifies this specific client request. (optional)

    try:
        api_response = api_instance.job_stream_get(subscription_id, resource_group_name, automation_account_name, job_name, job_stream_id, api_version, client_request_id=client_request_id)
        print("The response of JobStreamApi->job_stream_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobStreamApi->job_stream_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **job_name** | **str**| The job name. | 
 **job_stream_id** | **str**| The job stream id. | 
 **api_version** | **str**| Client Api Version. | 
 **client_request_id** | **str**| Identifies this specific client request. | [optional] 

### Return type

[**JobStream**](JobStream.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_stream_list_by_job**
> JobStreamListResult job_stream_list_by_job(resource_group_name, automation_account_name, job_name, subscription_id, api_version, filter=filter, client_request_id=client_request_id)



Retrieve a list of jobs streams identified by job name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_stream_list_result import JobStreamListResult
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
    api_instance = openapi_client.JobStreamApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    job_name = 'job_name_example' # str | The job name.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    client_request_id = 'client_request_id_example' # str | Identifies this specific client request. (optional)

    try:
        api_response = api_instance.job_stream_list_by_job(resource_group_name, automation_account_name, job_name, subscription_id, api_version, filter=filter, client_request_id=client_request_id)
        print("The response of JobStreamApi->job_stream_list_by_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobStreamApi->job_stream_list_by_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **job_name** | **str**| The job name. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **client_request_id** | **str**| Identifies this specific client request. | [optional] 

### Return type

[**JobStreamListResult**](JobStreamListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

