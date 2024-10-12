# openapi_client.DiskMigrationJobsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**disk_migration_jobs_cancel**](DiskMigrationJobsApi.md#disk_migration_jobs_cancel) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/diskmigrationjobs/{migrationId}/Cancel | 
[**disk_migration_jobs_create**](DiskMigrationJobsApi.md#disk_migration_jobs_create) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/diskmigrationjobs/{migrationId} | 
[**disk_migration_jobs_get**](DiskMigrationJobsApi.md#disk_migration_jobs_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/diskmigrationjobs/{migrationId} | 
[**disk_migration_jobs_list**](DiskMigrationJobsApi.md#disk_migration_jobs_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/diskmigrationjobs | 


# **disk_migration_jobs_cancel**
> DiskMigrationJobsGet200Response disk_migration_jobs_cancel(subscription_id, location, migration_id, api_version)



Cancel a disk migration job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.disk_migration_jobs_get200_response import DiskMigrationJobsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DiskMigrationJobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    migration_id = 'migration_id_example' # str | The migration job guid name.
    api_version = '2018-07-30-preview' # str | Client API Version. (default to '2018-07-30-preview')

    try:
        api_response = api_instance.disk_migration_jobs_cancel(subscription_id, location, migration_id, api_version)
        print("The response of DiskMigrationJobsApi->disk_migration_jobs_cancel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiskMigrationJobsApi->disk_migration_jobs_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **migration_id** | **str**| The migration job guid name. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2018-07-30-preview&#39;]

### Return type

[**DiskMigrationJobsGet200Response**](DiskMigrationJobsGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK --  Disk migration job cancellation is called. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disk_migration_jobs_create**
> DiskMigrationJobsGet200Response disk_migration_jobs_create(subscription_id, location, migration_id, target_share, api_version, disks)



Create a disk migration job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.disk_migration_jobs_create_request_inner import DiskMigrationJobsCreateRequestInner
from openapi_client.models.disk_migration_jobs_get200_response import DiskMigrationJobsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DiskMigrationJobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    migration_id = 'migration_id_example' # str | The migration job guid name.
    target_share = 'target_share_example' # str | The target share name.
    api_version = '2018-07-30-preview' # str | Client API Version. (default to '2018-07-30-preview')
    disks = [openapi_client.DiskMigrationJobsCreateRequestInner()] # List[DiskMigrationJobsCreateRequestInner] | The parameters of disk list.

    try:
        api_response = api_instance.disk_migration_jobs_create(subscription_id, location, migration_id, target_share, api_version, disks)
        print("The response of DiskMigrationJobsApi->disk_migration_jobs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiskMigrationJobsApi->disk_migration_jobs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **migration_id** | **str**| The migration job guid name. | 
 **target_share** | **str**| The target share name. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2018-07-30-preview&#39;]
 **disks** | [**List[DiskMigrationJobsCreateRequestInner]**](DiskMigrationJobsCreateRequestInner.md)| The parameters of disk list. | 

### Return type

[**DiskMigrationJobsGet200Response**](DiskMigrationJobsGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK --  Disk migration job is created successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disk_migration_jobs_get**
> DiskMigrationJobsGet200Response disk_migration_jobs_get(subscription_id, location, migration_id, api_version)



Returns the requested disk migration job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.disk_migration_jobs_get200_response import DiskMigrationJobsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DiskMigrationJobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    migration_id = 'migration_id_example' # str | The migration job guid name.
    api_version = '2018-07-30-preview' # str | Client API Version. (default to '2018-07-30-preview')

    try:
        api_response = api_instance.disk_migration_jobs_get(subscription_id, location, migration_id, api_version)
        print("The response of DiskMigrationJobsApi->disk_migration_jobs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiskMigrationJobsApi->disk_migration_jobs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **migration_id** | **str**| The migration job guid name. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2018-07-30-preview&#39;]

### Return type

[**DiskMigrationJobsGet200Response**](DiskMigrationJobsGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The disk migration job has been returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disk_migration_jobs_list**
> DiskMigrationJobsList200Response disk_migration_jobs_list(subscription_id, location, api_version, status=status)



Returns a list of disk migration jobs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.disk_migration_jobs_list200_response import DiskMigrationJobsList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DiskMigrationJobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    api_version = '2018-07-30-preview' # str | Client API Version. (default to '2018-07-30-preview')
    status = 'status_example' # str | The parameters of disk migration job status. (optional)

    try:
        api_response = api_instance.disk_migration_jobs_list(subscription_id, location, api_version, status=status)
        print("The response of DiskMigrationJobsApi->disk_migration_jobs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiskMigrationJobsApi->disk_migration_jobs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2018-07-30-preview&#39;]
 **status** | **str**| The parameters of disk migration job status. | [optional] 

### Return type

[**DiskMigrationJobsList200Response**](DiskMigrationJobsList200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The list of disk migration jobs has been returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

