# openapi_client.JobApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobs_create**](JobApi.md#jobs_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/jobs/{jobName} | 
[**jobs_delete**](JobApi.md#jobs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/jobs/{jobName} | 
[**jobs_get**](JobApi.md#jobs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/jobs/{jobName} | 
[**jobs_list**](JobApi.md#jobs_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.BatchAI/jobs | 
[**jobs_list_by_resource_group**](JobApi.md#jobs_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/jobs | 
[**jobs_list_output_files**](JobApi.md#jobs_list_output_files) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/jobs/{jobName}/listOutputFiles | 
[**jobs_list_remote_login_information**](JobApi.md#jobs_list_remote_login_information) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/jobs/{jobName}/listRemoteLoginInformation | 
[**jobs_terminate**](JobApi.md#jobs_terminate) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/jobs/{jobName}/terminate | 


# **jobs_create**
> Job jobs_create(resource_group_name, job_name, api_version, subscription_id, parameters)



Adds a Job that gets executed on a cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job import Job
from openapi_client.models.job_create_parameters import JobCreateParameters
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
    api_instance = openapi_client.JobApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    job_name = 'job_name_example' # str | The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.
    parameters = openapi_client.JobCreateParameters() # JobCreateParameters | The parameters to provide for job creation.

    try:
        api_response = api_instance.jobs_create(resource_group_name, job_name, api_version, subscription_id, parameters)
        print("The response of JobApi->jobs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->jobs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **job_name** | **str**| The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 
 **parameters** | [**JobCreateParameters**](JobCreateParameters.md)| The parameters to provide for job creation. | 

### Return type

[**Job**](Job.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the job entity. |  -  |
**202** | The operation will be completed asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_delete**
> jobs_delete(resource_group_name, job_name, api_version, subscription_id)



Deletes the specified Batch AI job.

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
    api_instance = openapi_client.JobApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    job_name = 'job_name_example' # str | The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.

    try:
        api_instance.jobs_delete(resource_group_name, job_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling JobApi->jobs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **job_name** | **str**| The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 

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
**200** | The operation was successful. |  -  |
**202** | The operation will be completed asynchronously. |  -  |
**204** | No content. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_get**
> Job jobs_get(resource_group_name, job_name, api_version, subscription_id)



Gets information about the specified Batch AI job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job import Job
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
    api_instance = openapi_client.JobApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    job_name = 'job_name_example' # str | The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.

    try:
        api_response = api_instance.jobs_get(resource_group_name, job_name, api_version, subscription_id)
        print("The response of JobApi->jobs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->jobs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **job_name** | **str**| The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 

### Return type

[**Job**](Job.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the Batch AI job entity. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list**
> JobListResult jobs_list(api_version, subscription_id, filter=filter, select=select, maxresults=maxresults)



Gets information about the jobs associated with the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_list_result import JobListResult
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
    api_instance = openapi_client.JobApi(api_client)
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.
    filter = 'filter_example' # str | An OData $filter clause. Used to filter results that are returned in the GET response. (optional)
    select = 'select_example' # str | An OData $select clause. Used to select the properties to be returned in the GET response. (optional)
    maxresults = 1000 # int | The maximum number of items to return in the response. A maximum of 1000 files can be returned. (optional) (default to 1000)

    try:
        api_response = api_instance.jobs_list(api_version, subscription_id, filter=filter, select=select, maxresults=maxresults)
        print("The response of JobApi->jobs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->jobs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 
 **filter** | **str**| An OData $filter clause. Used to filter results that are returned in the GET response. | [optional] 
 **select** | **str**| An OData $select clause. Used to select the properties to be returned in the GET response. | [optional] 
 **maxresults** | **int**| The maximum number of items to return in the response. A maximum of 1000 files can be returned. | [optional] [default to 1000]

### Return type

[**JobListResult**](JobListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains a list of Batch AI job entities associated with the subscription. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list_by_resource_group**
> JobListResult jobs_list_by_resource_group(resource_group_name, api_version, subscription_id, filter=filter, select=select, maxresults=maxresults)



Gets information about the Batch AI jobs associated within the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_list_result import JobListResult
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
    api_instance = openapi_client.JobApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.
    filter = 'filter_example' # str | An OData $filter clause. Used to filter results that are returned in the GET response. (optional)
    select = 'select_example' # str | An OData $select clause. Used to select the properties to be returned in the GET response. (optional)
    maxresults = 1000 # int | The maximum number of items to return in the response. A maximum of 1000 files can be returned. (optional) (default to 1000)

    try:
        api_response = api_instance.jobs_list_by_resource_group(resource_group_name, api_version, subscription_id, filter=filter, select=select, maxresults=maxresults)
        print("The response of JobApi->jobs_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->jobs_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 
 **filter** | **str**| An OData $filter clause. Used to filter results that are returned in the GET response. | [optional] 
 **select** | **str**| An OData $select clause. Used to select the properties to be returned in the GET response. | [optional] 
 **maxresults** | **int**| The maximum number of items to return in the response. A maximum of 1000 files can be returned. | [optional] [default to 1000]

### Return type

[**JobListResult**](JobListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains a list of Job entities associated with the resource group. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list_output_files**
> FileListResult jobs_list_output_files(resource_group_name, job_name, outputdirectoryid, api_version, subscription_id, linkexpiryinminutes=linkexpiryinminutes, maxresults=maxresults)



List all files inside the given output directory (Only if the output directory is on Azure File Share or Azure Storage container).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.file_list_result import FileListResult
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
    api_instance = openapi_client.JobApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    job_name = 'job_name_example' # str | The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    outputdirectoryid = 'outputdirectoryid_example' # str | Id of the job output directory. This is the OutputDirectory-->id parameter that is given by the user during Create Job.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.
    linkexpiryinminutes = 60 # int | The number of minutes after which the download link will expire. (optional) (default to 60)
    maxresults = 1000 # int | The maximum number of items to return in the response. A maximum of 1000 files can be returned. (optional) (default to 1000)

    try:
        api_response = api_instance.jobs_list_output_files(resource_group_name, job_name, outputdirectoryid, api_version, subscription_id, linkexpiryinminutes=linkexpiryinminutes, maxresults=maxresults)
        print("The response of JobApi->jobs_list_output_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->jobs_list_output_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **job_name** | **str**| The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **outputdirectoryid** | **str**| Id of the job output directory. This is the OutputDirectory--&gt;id parameter that is given by the user during Create Job. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 
 **linkexpiryinminutes** | **int**| The number of minutes after which the download link will expire. | [optional] [default to 60]
 **maxresults** | **int**| The maximum number of items to return in the response. A maximum of 1000 files can be returned. | [optional] [default to 1000]

### Return type

[**FileListResult**](FileListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the list of job files. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list_remote_login_information**
> RemoteLoginInformationListResult jobs_list_remote_login_information(resource_group_name, job_name, api_version, subscription_id)



Gets the IP address and port information of all the compute nodes which are used for job execution.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remote_login_information_list_result import RemoteLoginInformationListResult
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
    api_instance = openapi_client.JobApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    job_name = 'job_name_example' # str | The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.

    try:
        api_response = api_instance.jobs_list_remote_login_information(resource_group_name, job_name, api_version, subscription_id)
        print("The response of JobApi->jobs_list_remote_login_information:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobApi->jobs_list_remote_login_information: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **job_name** | **str**| The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 

### Return type

[**RemoteLoginInformationListResult**](RemoteLoginInformationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains compute node remote login information. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_terminate**
> jobs_terminate(resource_group_name, job_name, api_version, subscription_id)



Terminates a job.

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
    api_instance = openapi_client.JobApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    job_name = 'job_name_example' # str | The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
    api_version = 'api_version_example' # str | Specifies the version of API used for this request.
    subscription_id = 'subscription_id_example' # str | The subscriptionID for the Azure user.

    try:
        api_instance.jobs_terminate(resource_group_name, job_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling JobApi->jobs_terminate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **job_name** | **str**| The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long. | 
 **api_version** | **str**| Specifies the version of API used for this request. | 
 **subscription_id** | **str**| The subscriptionID for the Azure user. | 

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
**200** | The operation was successful. |  -  |
**202** | The operation will be completed asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

