# openapi_client.StorageImportExportApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bit_locker_keys_list**](StorageImportExportApi.md#bit_locker_keys_list) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs/{jobName}/listBitLockerKeys | 
[**jobs_create**](StorageImportExportApi.md#jobs_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs/{jobName} | 
[**jobs_delete**](StorageImportExportApi.md#jobs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs/{jobName} | 
[**jobs_get**](StorageImportExportApi.md#jobs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs/{jobName} | 
[**jobs_list_by_resource_group**](StorageImportExportApi.md#jobs_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs | 
[**jobs_list_by_subscription**](StorageImportExportApi.md#jobs_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ImportExport/jobs | 
[**jobs_update**](StorageImportExportApi.md#jobs_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs/{jobName} | 
[**locations_get**](StorageImportExportApi.md#locations_get) | **GET** /providers/Microsoft.ImportExport/locations/{locationName} | 
[**locations_list**](StorageImportExportApi.md#locations_list) | **GET** /providers/Microsoft.ImportExport/locations | 
[**operations_list**](StorageImportExportApi.md#operations_list) | **GET** /providers/Microsoft.ImportExport/operations | 


# **bit_locker_keys_list**
> GetBitLockerKeysResponse bit_locker_keys_list(job_name, subscription_id, resource_group_name, api_version, accept_language=accept_language)



Returns the BitLocker Keys for all drives in the specified job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.get_bit_locker_keys_response import GetBitLockerKeysResponse
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
    api_instance = openapi_client.StorageImportExportApi(api_client)
    job_name = 'job_name_example' # str | The name of the import/export job.
    subscription_id = 'subscription_id_example' # str | The subscription ID for the Azure user.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscription.
    api_version = 'api_version_example' # str | Specifies the API version to use for this request.
    accept_language = 'accept_language_example' # str | Specifies the preferred language for the response. (optional)

    try:
        api_response = api_instance.bit_locker_keys_list(job_name, subscription_id, resource_group_name, api_version, accept_language=accept_language)
        print("The response of StorageImportExportApi->bit_locker_keys_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageImportExportApi->bit_locker_keys_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_name** | **str**| The name of the import/export job. | 
 **subscription_id** | **str**| The subscription ID for the Azure user. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscription. | 
 **api_version** | **str**| Specifies the API version to use for this request. | 
 **accept_language** | **str**| Specifies the preferred language for the response. | [optional] 

### Return type

[**GetBitLockerKeysResponse**](GetBitLockerKeysResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | An error occurs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_create**
> JobResponse jobs_create(job_name, subscription_id, resource_group_name, api_version, body, accept_language=accept_language, x_ms_client_tenant_id=x_ms_client_tenant_id)



Creates a new job or updates an existing job in the specified subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_response import JobResponse
from openapi_client.models.put_job_parameters import PutJobParameters
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
    api_instance = openapi_client.StorageImportExportApi(api_client)
    job_name = 'job_name_example' # str | The name of the import/export job.
    subscription_id = 'subscription_id_example' # str | The subscription ID for the Azure user.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscription.
    api_version = 'api_version_example' # str | Specifies the API version to use for this request.
    body = openapi_client.PutJobParameters() # PutJobParameters | The parameters used for creating the job
    accept_language = 'accept_language_example' # str | Specifies the preferred language for the response. (optional)
    x_ms_client_tenant_id = 'x_ms_client_tenant_id_example' # str | The tenant ID of the client making the request. (optional)

    try:
        api_response = api_instance.jobs_create(job_name, subscription_id, resource_group_name, api_version, body, accept_language=accept_language, x_ms_client_tenant_id=x_ms_client_tenant_id)
        print("The response of StorageImportExportApi->jobs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageImportExportApi->jobs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_name** | **str**| The name of the import/export job. | 
 **subscription_id** | **str**| The subscription ID for the Azure user. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscription. | 
 **api_version** | **str**| Specifies the API version to use for this request. | 
 **body** | [**PutJobParameters**](PutJobParameters.md)| The parameters used for creating the job | 
 **accept_language** | **str**| Specifies the preferred language for the response. | [optional] 
 **x_ms_client_tenant_id** | **str**| The tenant ID of the client making the request. | [optional] 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | An error occurs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_delete**
> jobs_delete(job_name, subscription_id, resource_group_name, api_version, accept_language=accept_language)



Deletes an existing job. Only jobs in the Creating or Completed states can be deleted.

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
    api_instance = openapi_client.StorageImportExportApi(api_client)
    job_name = 'job_name_example' # str | The name of the import/export job.
    subscription_id = 'subscription_id_example' # str | The subscription ID for the Azure user.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscription.
    api_version = 'api_version_example' # str | Specifies the API version to use for this request.
    accept_language = 'accept_language_example' # str | Specifies the preferred language for the response. (optional)

    try:
        api_instance.jobs_delete(job_name, subscription_id, resource_group_name, api_version, accept_language=accept_language)
    except Exception as e:
        print("Exception when calling StorageImportExportApi->jobs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_name** | **str**| The name of the import/export job. | 
 **subscription_id** | **str**| The subscription ID for the Azure user. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscription. | 
 **api_version** | **str**| Specifies the API version to use for this request. | 
 **accept_language** | **str**| Specifies the preferred language for the response. | [optional] 

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
**200** | OK |  -  |
**0** | An error occurs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_get**
> JobResponse jobs_get(job_name, subscription_id, resource_group_name, api_version, accept_language=accept_language)



Gets information about an existing job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_response import JobResponse
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
    api_instance = openapi_client.StorageImportExportApi(api_client)
    job_name = 'job_name_example' # str | The name of the import/export job.
    subscription_id = 'subscription_id_example' # str | The subscription ID for the Azure user.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscription.
    api_version = 'api_version_example' # str | Specifies the API version to use for this request.
    accept_language = 'accept_language_example' # str | Specifies the preferred language for the response. (optional)

    try:
        api_response = api_instance.jobs_get(job_name, subscription_id, resource_group_name, api_version, accept_language=accept_language)
        print("The response of StorageImportExportApi->jobs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageImportExportApi->jobs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_name** | **str**| The name of the import/export job. | 
 **subscription_id** | **str**| The subscription ID for the Azure user. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscription. | 
 **api_version** | **str**| Specifies the API version to use for this request. | 
 **accept_language** | **str**| Specifies the preferred language for the response. | [optional] 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | An error occurs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list_by_resource_group**
> ListJobsResponse jobs_list_by_resource_group(subscription_id, resource_group_name, api_version, top=top, filter=filter, accept_language=accept_language)



Returns all active and completed jobs in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_jobs_response import ListJobsResponse
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
    api_instance = openapi_client.StorageImportExportApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID for the Azure user.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscription.
    api_version = 'api_version_example' # str | Specifies the API version to use for this request.
    top = 56 # int | An integer value that specifies how many jobs at most should be returned. The value cannot exceed 100. (optional)
    filter = 'filter_example' # str | Can be used to restrict the results to certain conditions. (optional)
    accept_language = 'accept_language_example' # str | Specifies the preferred language for the response. (optional)

    try:
        api_response = api_instance.jobs_list_by_resource_group(subscription_id, resource_group_name, api_version, top=top, filter=filter, accept_language=accept_language)
        print("The response of StorageImportExportApi->jobs_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageImportExportApi->jobs_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID for the Azure user. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscription. | 
 **api_version** | **str**| Specifies the API version to use for this request. | 
 **top** | **int**| An integer value that specifies how many jobs at most should be returned. The value cannot exceed 100. | [optional] 
 **filter** | **str**| Can be used to restrict the results to certain conditions. | [optional] 
 **accept_language** | **str**| Specifies the preferred language for the response. | [optional] 

### Return type

[**ListJobsResponse**](ListJobsResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | An error occurs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list_by_subscription**
> ListJobsResponse jobs_list_by_subscription(subscription_id, api_version, top=top, filter=filter, accept_language=accept_language)



Returns all active and completed jobs in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_jobs_response import ListJobsResponse
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
    api_instance = openapi_client.StorageImportExportApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID for the Azure user.
    api_version = 'api_version_example' # str | Specifies the API version to use for this request.
    top = 56 # int | An integer value that specifies how many jobs at most should be returned. The value cannot exceed 100. (optional)
    filter = 'filter_example' # str | Can be used to restrict the results to certain conditions. (optional)
    accept_language = 'accept_language_example' # str | Specifies the preferred language for the response. (optional)

    try:
        api_response = api_instance.jobs_list_by_subscription(subscription_id, api_version, top=top, filter=filter, accept_language=accept_language)
        print("The response of StorageImportExportApi->jobs_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageImportExportApi->jobs_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID for the Azure user. | 
 **api_version** | **str**| Specifies the API version to use for this request. | 
 **top** | **int**| An integer value that specifies how many jobs at most should be returned. The value cannot exceed 100. | [optional] 
 **filter** | **str**| Can be used to restrict the results to certain conditions. | [optional] 
 **accept_language** | **str**| Specifies the preferred language for the response. | [optional] 

### Return type

[**ListJobsResponse**](ListJobsResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | An error occurs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_update**
> JobResponse jobs_update(job_name, subscription_id, resource_group_name, api_version, body, accept_language=accept_language)



Updates specific properties of a job. You can call this operation to notify the Import/Export service that the hard drives comprising the import or export job have been shipped to the Microsoft data center. It can also be used to cancel an existing job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_response import JobResponse
from openapi_client.models.update_job_parameters import UpdateJobParameters
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
    api_instance = openapi_client.StorageImportExportApi(api_client)
    job_name = 'job_name_example' # str | The name of the import/export job.
    subscription_id = 'subscription_id_example' # str | The subscription ID for the Azure user.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscription.
    api_version = 'api_version_example' # str | Specifies the API version to use for this request.
    body = openapi_client.UpdateJobParameters() # UpdateJobParameters | The parameters to update in the job
    accept_language = 'accept_language_example' # str | Specifies the preferred language for the response. (optional)

    try:
        api_response = api_instance.jobs_update(job_name, subscription_id, resource_group_name, api_version, body, accept_language=accept_language)
        print("The response of StorageImportExportApi->jobs_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageImportExportApi->jobs_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_name** | **str**| The name of the import/export job. | 
 **subscription_id** | **str**| The subscription ID for the Azure user. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscription. | 
 **api_version** | **str**| Specifies the API version to use for this request. | 
 **body** | [**UpdateJobParameters**](UpdateJobParameters.md)| The parameters to update in the job | 
 **accept_language** | **str**| Specifies the preferred language for the response. | [optional] 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | An error occurs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **locations_get**
> Location locations_get(location_name, api_version, accept_language=accept_language)



Returns the details about a location to which you can ship the disks associated with an import or export job. A location is an Azure region.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.location import Location
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
    api_instance = openapi_client.StorageImportExportApi(api_client)
    location_name = 'location_name_example' # str | The name of the location. For example, West US or westus.
    api_version = 'api_version_example' # str | Specifies the API version to use for this request.
    accept_language = 'accept_language_example' # str | Specifies the preferred language for the response. (optional)

    try:
        api_response = api_instance.locations_get(location_name, api_version, accept_language=accept_language)
        print("The response of StorageImportExportApi->locations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageImportExportApi->locations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| The name of the location. For example, West US or westus. | 
 **api_version** | **str**| Specifies the API version to use for this request. | 
 **accept_language** | **str**| Specifies the preferred language for the response. | [optional] 

### Return type

[**Location**](Location.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | An error occurs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **locations_list**
> LocationsResponse locations_list(api_version, accept_language=accept_language)



Returns a list of locations to which you can ship the disks associated with an import or export job. A location is a Microsoft data center region.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.locations_response import LocationsResponse
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
    api_instance = openapi_client.StorageImportExportApi(api_client)
    api_version = 'api_version_example' # str | Specifies the API version to use for this request.
    accept_language = 'accept_language_example' # str | Specifies the preferred language for the response. (optional)

    try:
        api_response = api_instance.locations_list(api_version, accept_language=accept_language)
        print("The response of StorageImportExportApi->locations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageImportExportApi->locations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Specifies the API version to use for this request. | 
 **accept_language** | **str**| Specifies the preferred language for the response. | [optional] 

### Return type

[**LocationsResponse**](LocationsResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | An error occurs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operations_list**
> ListOperationsResponse operations_list(api_version, accept_language=accept_language)



Returns the list of operations supported by the import/export resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_operations_response import ListOperationsResponse
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
    api_instance = openapi_client.StorageImportExportApi(api_client)
    api_version = 'api_version_example' # str | Specifies the API version to use for this request.
    accept_language = 'accept_language_example' # str | Specifies the preferred language for the response. (optional)

    try:
        api_response = api_instance.operations_list(api_version, accept_language=accept_language)
        print("The response of StorageImportExportApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageImportExportApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Specifies the API version to use for this request. | 
 **accept_language** | **str**| Specifies the preferred language for the response. | [optional] 

### Return type

[**ListOperationsResponse**](ListOperationsResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | An error occurs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

