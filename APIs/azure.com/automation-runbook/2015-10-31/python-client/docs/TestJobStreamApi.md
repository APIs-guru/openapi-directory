# openapi_client.TestJobStreamApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**test_job_streams_get**](TestJobStreamApi.md#test_job_streams_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/streams/{jobStreamId} | 
[**test_job_streams_list_by_test_job**](TestJobStreamApi.md#test_job_streams_list_by_test_job) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/streams | 


# **test_job_streams_get**
> TestJobStreamsListByTestJob200ResponseValueInner test_job_streams_get(subscription_id, resource_group_name, automation_account_name, runbook_name, job_stream_id, api_version)



Retrieve a test job stream of the test job identified by runbook name and stream id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.test_job_streams_list_by_test_job200_response_value_inner import TestJobStreamsListByTestJob200ResponseValueInner
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
    api_instance = openapi_client.TestJobStreamApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    runbook_name = 'runbook_name_example' # str | The runbook name.
    job_stream_id = 'job_stream_id_example' # str | The job stream id.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.test_job_streams_get(subscription_id, resource_group_name, automation_account_name, runbook_name, job_stream_id, api_version)
        print("The response of TestJobStreamApi->test_job_streams_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestJobStreamApi->test_job_streams_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **runbook_name** | **str**| The runbook name. | 
 **job_stream_id** | **str**| The job stream id. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**TestJobStreamsListByTestJob200ResponseValueInner**](TestJobStreamsListByTestJob200ResponseValueInner.md)

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

# **test_job_streams_list_by_test_job**
> TestJobStreamsListByTestJob200Response test_job_streams_list_by_test_job(subscription_id, resource_group_name, automation_account_name, runbook_name, api_version, filter=filter)



Retrieve a list of test job streams identified by runbook name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.test_job_streams_list_by_test_job200_response import TestJobStreamsListByTestJob200Response
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
    api_instance = openapi_client.TestJobStreamApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    runbook_name = 'runbook_name_example' # str | The runbook name.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.test_job_streams_list_by_test_job(subscription_id, resource_group_name, automation_account_name, runbook_name, api_version, filter=filter)
        print("The response of TestJobStreamApi->test_job_streams_list_by_test_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestJobStreamApi->test_job_streams_list_by_test_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **runbook_name** | **str**| The runbook name. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**TestJobStreamsListByTestJob200Response**](TestJobStreamsListByTestJob200Response.md)

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

