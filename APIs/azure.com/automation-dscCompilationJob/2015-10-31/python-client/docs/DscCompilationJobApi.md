# openapi_client.DscCompilationJobApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dsc_compilation_job_create**](DscCompilationJobApi.md#dsc_compilation_job_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/compilationjobs/{compilationJobId} | 
[**dsc_compilation_job_get**](DscCompilationJobApi.md#dsc_compilation_job_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/compilationjobs/{compilationJobId} | 
[**dsc_compilation_job_get_stream**](DscCompilationJobApi.md#dsc_compilation_job_get_stream) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/compilationjobs/{jobId}/streams/{jobStreamId} | 
[**dsc_compilation_job_list_by_automation_account**](DscCompilationJobApi.md#dsc_compilation_job_list_by_automation_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/compilationjobs | 
[**dsc_compilation_job_stream_list_by_job**](DscCompilationJobApi.md#dsc_compilation_job_stream_list_by_job) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/compilationjobs/{jobId}/streams/ | 


# **dsc_compilation_job_create**
> DscCompilationJob dsc_compilation_job_create(resource_group_name, automation_account_name, compilation_job_id, subscription_id, api_version, parameters)



Creates the Dsc compilation job of the configuration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dsc_compilation_job import DscCompilationJob
from openapi_client.models.dsc_compilation_job_create_parameters import DscCompilationJobCreateParameters
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
    api_instance = openapi_client.DscCompilationJobApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    compilation_job_id = 'compilation_job_id_example' # str | The DSC configuration Id.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.DscCompilationJobCreateParameters() # DscCompilationJobCreateParameters | The parameters supplied to the create compilation job operation.

    try:
        api_response = api_instance.dsc_compilation_job_create(resource_group_name, automation_account_name, compilation_job_id, subscription_id, api_version, parameters)
        print("The response of DscCompilationJobApi->dsc_compilation_job_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DscCompilationJobApi->dsc_compilation_job_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **compilation_job_id** | **str**| The DSC configuration Id. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**DscCompilationJobCreateParameters**](DscCompilationJobCreateParameters.md)| The parameters supplied to the create compilation job operation. | 

### Return type

[**DscCompilationJob**](DscCompilationJob.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dsc_compilation_job_get**
> DscCompilationJob dsc_compilation_job_get(resource_group_name, automation_account_name, compilation_job_id, subscription_id, api_version)



Retrieve the Dsc configuration compilation job identified by job id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dsc_compilation_job import DscCompilationJob
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
    api_instance = openapi_client.DscCompilationJobApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    compilation_job_id = 'compilation_job_id_example' # str | The Dsc configuration compilation job id.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.dsc_compilation_job_get(resource_group_name, automation_account_name, compilation_job_id, subscription_id, api_version)
        print("The response of DscCompilationJobApi->dsc_compilation_job_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DscCompilationJobApi->dsc_compilation_job_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **compilation_job_id** | **str**| The Dsc configuration compilation job id. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DscCompilationJob**](DscCompilationJob.md)

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

# **dsc_compilation_job_get_stream**
> DscCompilationJobStreamListByJob200ResponseValueInner dsc_compilation_job_get_stream(resource_group_name, automation_account_name, job_id, job_stream_id, subscription_id, api_version)



Retrieve the job stream identified by job stream id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dsc_compilation_job_stream_list_by_job200_response_value_inner import DscCompilationJobStreamListByJob200ResponseValueInner
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
    api_instance = openapi_client.DscCompilationJobApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    job_id = 'job_id_example' # str | The job id.
    job_stream_id = 'job_stream_id_example' # str | The job stream id.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.dsc_compilation_job_get_stream(resource_group_name, automation_account_name, job_id, job_stream_id, subscription_id, api_version)
        print("The response of DscCompilationJobApi->dsc_compilation_job_get_stream:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DscCompilationJobApi->dsc_compilation_job_get_stream: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **job_id** | **str**| The job id. | 
 **job_stream_id** | **str**| The job stream id. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DscCompilationJobStreamListByJob200ResponseValueInner**](DscCompilationJobStreamListByJob200ResponseValueInner.md)

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

# **dsc_compilation_job_list_by_automation_account**
> DscCompilationJobListResult dsc_compilation_job_list_by_automation_account(resource_group_name, automation_account_name, subscription_id, api_version, filter=filter)



Retrieve a list of dsc compilation jobs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dsc_compilation_job_list_result import DscCompilationJobListResult
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
    api_instance = openapi_client.DscCompilationJobApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.dsc_compilation_job_list_by_automation_account(resource_group_name, automation_account_name, subscription_id, api_version, filter=filter)
        print("The response of DscCompilationJobApi->dsc_compilation_job_list_by_automation_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DscCompilationJobApi->dsc_compilation_job_list_by_automation_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**DscCompilationJobListResult**](DscCompilationJobListResult.md)

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

# **dsc_compilation_job_stream_list_by_job**
> DscCompilationJobStreamListByJob200Response dsc_compilation_job_stream_list_by_job(resource_group_name, automation_account_name, job_id, subscription_id, api_version)



Retrieve all the job streams for the compilation Job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dsc_compilation_job_stream_list_by_job200_response import DscCompilationJobStreamListByJob200Response
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
    api_instance = openapi_client.DscCompilationJobApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    job_id = 'job_id_example' # str | The job id.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.dsc_compilation_job_stream_list_by_job(resource_group_name, automation_account_name, job_id, subscription_id, api_version)
        print("The response of DscCompilationJobApi->dsc_compilation_job_stream_list_by_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DscCompilationJobApi->dsc_compilation_job_stream_list_by_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **job_id** | **str**| The job id. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DscCompilationJobStreamListByJob200Response**](DscCompilationJobStreamListByJob200Response.md)

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

