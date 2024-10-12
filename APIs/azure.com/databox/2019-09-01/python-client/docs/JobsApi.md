# openapi_client.JobsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobs_book_shipment_pick_up**](JobsApi.md#jobs_book_shipment_pick_up) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/bookShipmentPickUp | 
[**jobs_cancel**](JobsApi.md#jobs_cancel) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/cancel | 
[**jobs_create**](JobsApi.md#jobs_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName} | 
[**jobs_delete**](JobsApi.md#jobs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName} | 
[**jobs_get**](JobsApi.md#jobs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName} | 
[**jobs_list**](JobsApi.md#jobs_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DataBox/jobs | 
[**jobs_list_by_resource_group**](JobsApi.md#jobs_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs | 
[**jobs_list_credentials**](JobsApi.md#jobs_list_credentials) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/listCredentials | 
[**jobs_update**](JobsApi.md#jobs_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName} | 


# **jobs_book_shipment_pick_up**
> ShipmentPickUpResponse jobs_book_shipment_pick_up(subscription_id, resource_group_name, job_name, api_version, shipment_pick_up_request)



Book shipment pick up.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.shipment_pick_up_request import ShipmentPickUpRequest
from openapi_client.models.shipment_pick_up_response import ShipmentPickUpResponse
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
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    job_name = 'job_name_example' # str | The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version
    shipment_pick_up_request = openapi_client.ShipmentPickUpRequest() # ShipmentPickUpRequest | Details of shipment pick up request.

    try:
        api_response = api_instance.jobs_book_shipment_pick_up(subscription_id, resource_group_name, job_name, api_version, shipment_pick_up_request)
        print("The response of JobsApi->jobs_book_shipment_pick_up:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_book_shipment_pick_up: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **job_name** | **str**| The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 
 **shipment_pick_up_request** | [**ShipmentPickUpRequest**](ShipmentPickUpRequest.md)| Details of shipment pick up request. | 

### Return type

[**ShipmentPickUpResponse**](ShipmentPickUpResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Booked shipment pick up successfully. |  -  |
**0** | Error response describing reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_cancel**
> jobs_cancel(subscription_id, resource_group_name, job_name, api_version, cancellation_reason)



CancelJob.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cancellation_reason import CancellationReason
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
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    job_name = 'job_name_example' # str | The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version
    cancellation_reason = openapi_client.CancellationReason() # CancellationReason | Reason for cancellation.

    try:
        api_instance.jobs_cancel(subscription_id, resource_group_name, job_name, api_version, cancellation_reason)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **job_name** | **str**| The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 
 **cancellation_reason** | [**CancellationReason**](CancellationReason.md)| Reason for cancellation. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Job cancelled. |  -  |
**0** | Error response describing reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_create**
> JobResource jobs_create(subscription_id, resource_group_name, job_name, api_version, job_resource)



Creates a new job with the specified parameters. Existing job cannot be updated with this API and should instead be updated with the Update job API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_resource import JobResource
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
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    job_name = 'job_name_example' # str | The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version
    job_resource = openapi_client.JobResource() # JobResource | Job details from request body.

    try:
        api_response = api_instance.jobs_create(subscription_id, resource_group_name, job_name, api_version, job_resource)
        print("The response of JobsApi->jobs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **job_name** | **str**| The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 
 **job_resource** | [**JobResource**](JobResource.md)| Job details from request body. | 

### Return type

[**JobResource**](JobResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Job object. |  -  |
**202** | Accepted request for create Job. |  -  |
**0** | Error response describing reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_delete**
> jobs_delete(subscription_id, resource_group_name, job_name, api_version)



Deletes a job.

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
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    job_name = 'job_name_example' # str | The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version

    try:
        api_instance.jobs_delete(subscription_id, resource_group_name, job_name, api_version)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **job_name** | **str**| The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 

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
**202** | Accepted request for delete Job. |  -  |
**204** | Job deleted. |  -  |
**0** | Error response describing reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_get**
> JobResource jobs_get(subscription_id, resource_group_name, job_name, api_version, expand=expand)



Gets information about the specified job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_resource import JobResource
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
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    job_name = 'job_name_example' # str | The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version
    expand = 'expand_example' # str | $expand is supported on details parameter for job, which provides details on the job stages. (optional)

    try:
        api_response = api_instance.jobs_get(subscription_id, resource_group_name, job_name, api_version, expand=expand)
        print("The response of JobsApi->jobs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **job_name** | **str**| The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 
 **expand** | **str**| $expand is supported on details parameter for job, which provides details on the job stages. | [optional] 

### Return type

[**JobResource**](JobResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Job object. |  -  |
**0** | Error response describing reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list**
> JobResourceList jobs_list(subscription_id, api_version, skip_token=skip_token)



Lists all the jobs available under the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_resource_list import JobResourceList
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
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    api_version = 'api_version_example' # str | The API Version
    skip_token = 'skip_token_example' # str | $skipToken is supported on Get list of jobs, which provides the next page in the list of jobs. (optional)

    try:
        api_response = api_instance.jobs_list(subscription_id, api_version, skip_token=skip_token)
        print("The response of JobsApi->jobs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **api_version** | **str**| The API Version | 
 **skip_token** | **str**| $skipToken is supported on Get list of jobs, which provides the next page in the list of jobs. | [optional] 

### Return type

[**JobResourceList**](JobResourceList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of jobs available under the subscription. |  -  |
**0** | Error response describing reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list_by_resource_group**
> JobResourceList jobs_list_by_resource_group(subscription_id, resource_group_name, api_version, skip_token=skip_token)



Lists all the jobs available under the given resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_resource_list import JobResourceList
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
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    api_version = 'api_version_example' # str | The API Version
    skip_token = 'skip_token_example' # str | $skipToken is supported on Get list of jobs, which provides the next page in the list of jobs. (optional)

    try:
        api_response = api_instance.jobs_list_by_resource_group(subscription_id, resource_group_name, api_version, skip_token=skip_token)
        print("The response of JobsApi->jobs_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **api_version** | **str**| The API Version | 
 **skip_token** | **str**| $skipToken is supported on Get list of jobs, which provides the next page in the list of jobs. | [optional] 

### Return type

[**JobResourceList**](JobResourceList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of jobs by resource group. |  -  |
**0** | Error response describing reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list_credentials**
> UnencryptedCredentialsList jobs_list_credentials(subscription_id, resource_group_name, job_name, api_version)



This method gets the unencrypted secrets related to the job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.unencrypted_credentials_list import UnencryptedCredentialsList
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
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    job_name = 'job_name_example' # str | The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version

    try:
        api_response = api_instance.jobs_list_credentials(subscription_id, resource_group_name, job_name, api_version)
        print("The response of JobsApi->jobs_list_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_list_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **job_name** | **str**| The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 

### Return type

[**UnencryptedCredentialsList**](UnencryptedCredentialsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of unencrypted credentials of the job. |  -  |
**0** | Error response describing reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_update**
> JobResource jobs_update(subscription_id, resource_group_name, job_name, api_version, job_resource_update_parameter, if_match=if_match)



Updates the properties of an existing job.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_resource import JobResource
from openapi_client.models.job_resource_update_parameter import JobResourceUpdateParameter
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
    api_instance = openapi_client.JobsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The Resource Group Name
    job_name = 'job_name_example' # str | The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
    api_version = 'api_version_example' # str | The API Version
    job_resource_update_parameter = openapi_client.JobResourceUpdateParameter() # JobResourceUpdateParameter | Job update parameters from request body.
    if_match = 'if_match_example' # str | Defines the If-Match condition. The patch will be performed only if the ETag of the job on the server matches this value. (optional)

    try:
        api_response = api_instance.jobs_update(subscription_id, resource_group_name, job_name, api_version, job_resource_update_parameter, if_match=if_match)
        print("The response of JobsApi->jobs_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **resource_group_name** | **str**| The Resource Group Name | 
 **job_name** | **str**| The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only | 
 **api_version** | **str**| The API Version | 
 **job_resource_update_parameter** | [**JobResourceUpdateParameter**](JobResourceUpdateParameter.md)| Job update parameters from request body. | 
 **if_match** | **str**| Defines the If-Match condition. The patch will be performed only if the ETag of the job on the server matches this value. | [optional] 

### Return type

[**JobResource**](JobResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Job object. |  -  |
**202** | Accepted request for job updated. |  -  |
**0** | Error response describing reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

