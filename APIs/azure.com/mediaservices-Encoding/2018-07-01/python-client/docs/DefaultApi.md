# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobs_cancel_job**](DefaultApi.md#jobs_cancel_job) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName}/jobs/{jobName}/cancelJob | Cancel Job
[**jobs_create**](DefaultApi.md#jobs_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName}/jobs/{jobName} | Create Job
[**jobs_delete**](DefaultApi.md#jobs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName}/jobs/{jobName} | Delete Job
[**jobs_get**](DefaultApi.md#jobs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName}/jobs/{jobName} | Get Job
[**jobs_list**](DefaultApi.md#jobs_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName}/jobs | List Jobs
[**jobs_update**](DefaultApi.md#jobs_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName}/jobs/{jobName} | Update Job
[**transforms_create_or_update**](DefaultApi.md#transforms_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName} | Create or Update Transform
[**transforms_delete**](DefaultApi.md#transforms_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName} | Delete Transform
[**transforms_get**](DefaultApi.md#transforms_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName} | Get Transform
[**transforms_list**](DefaultApi.md#transforms_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms | List Transforms
[**transforms_update**](DefaultApi.md#transforms_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName} | Update Transform


# **jobs_cancel_job**
> jobs_cancel_job(subscription_id, resource_group_name, account_name, transform_name, job_name, api_version)

Cancel Job

Cancel a Job.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    transform_name = 'transform_name_example' # str | The Transform name.
    job_name = 'job_name_example' # str | The Job name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Cancel Job
        api_instance.jobs_cancel_job(subscription_id, resource_group_name, account_name, transform_name, job_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->jobs_cancel_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **transform_name** | **str**| The Transform name. | 
 **job_name** | **str**| The Job name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_create**
> Job jobs_create(subscription_id, resource_group_name, account_name, transform_name, job_name, api_version, parameters)

Create Job

Creates a Job.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    transform_name = 'transform_name_example' # str | The Transform name.
    job_name = 'job_name_example' # str | The Job name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.Job() # Job | The request parameters

    try:
        # Create Job
        api_response = api_instance.jobs_create(subscription_id, resource_group_name, account_name, transform_name, job_name, api_version, parameters)
        print("The response of DefaultApi->jobs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->jobs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **transform_name** | **str**| The Transform name. | 
 **job_name** | **str**| The Job name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**Job**](Job.md)| The request parameters | 

### Return type

[**Job**](Job.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_delete**
> jobs_delete(subscription_id, resource_group_name, account_name, transform_name, job_name, api_version)

Delete Job

Deletes a Job.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    transform_name = 'transform_name_example' # str | The Transform name.
    job_name = 'job_name_example' # str | The Job name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Delete Job
        api_instance.jobs_delete(subscription_id, resource_group_name, account_name, transform_name, job_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->jobs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **transform_name** | **str**| The Transform name. | 
 **job_name** | **str**| The Job name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | NoContent |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_get**
> Job jobs_get(subscription_id, resource_group_name, account_name, transform_name, job_name, api_version)

Get Job

Gets a Job.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    transform_name = 'transform_name_example' # str | The Transform name.
    job_name = 'job_name_example' # str | The Job name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Get Job
        api_response = api_instance.jobs_get(subscription_id, resource_group_name, account_name, transform_name, job_name, api_version)
        print("The response of DefaultApi->jobs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->jobs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **transform_name** | **str**| The Transform name. | 
 **job_name** | **str**| The Job name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**Job**](Job.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NotFound |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list**
> JobCollection jobs_list(subscription_id, resource_group_name, account_name, transform_name, api_version, filter=filter, orderby=orderby)

List Jobs

Lists all of the Jobs for the Transform.

### Example


```python
import openapi_client
from openapi_client.models.job_collection import JobCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    transform_name = 'transform_name_example' # str | The Transform name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    filter = 'filter_example' # str | Restricts the set of items returned. (optional)
    orderby = 'orderby_example' # str | Specifies the by which the result collection should be ordered. (optional)

    try:
        # List Jobs
        api_response = api_instance.jobs_list(subscription_id, resource_group_name, account_name, transform_name, api_version, filter=filter, orderby=orderby)
        print("The response of DefaultApi->jobs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->jobs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **transform_name** | **str**| The Transform name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **filter** | **str**| Restricts the set of items returned. | [optional] 
 **orderby** | **str**| Specifies the by which the result collection should be ordered. | [optional] 

### Return type

[**JobCollection**](JobCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_update**
> Job jobs_update(subscription_id, resource_group_name, account_name, transform_name, job_name, api_version, parameters)

Update Job

Update is only supported for description and priority. Updating Priority will take effect when the Job state is Queued or Scheduled and depending on the timing the priority update may be ignored.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    transform_name = 'transform_name_example' # str | The Transform name.
    job_name = 'job_name_example' # str | The Job name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.Job() # Job | The request parameters

    try:
        # Update Job
        api_response = api_instance.jobs_update(subscription_id, resource_group_name, account_name, transform_name, job_name, api_version, parameters)
        print("The response of DefaultApi->jobs_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->jobs_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **transform_name** | **str**| The Transform name. | 
 **job_name** | **str**| The Job name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**Job**](Job.md)| The request parameters | 

### Return type

[**Job**](Job.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transforms_create_or_update**
> Transform transforms_create_or_update(subscription_id, resource_group_name, account_name, transform_name, api_version, parameters)

Create or Update Transform

Creates or updates a new Transform.

### Example


```python
import openapi_client
from openapi_client.models.transform import Transform
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    transform_name = 'transform_name_example' # str | The Transform name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.Transform() # Transform | The request parameters

    try:
        # Create or Update Transform
        api_response = api_instance.transforms_create_or_update(subscription_id, resource_group_name, account_name, transform_name, api_version, parameters)
        print("The response of DefaultApi->transforms_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->transforms_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **transform_name** | **str**| The Transform name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**Transform**](Transform.md)| The request parameters | 

### Return type

[**Transform**](Transform.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transforms_delete**
> transforms_delete(subscription_id, resource_group_name, account_name, transform_name, api_version)

Delete Transform

Deletes a Transform.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    transform_name = 'transform_name_example' # str | The Transform name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Delete Transform
        api_instance.transforms_delete(subscription_id, resource_group_name, account_name, transform_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->transforms_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **transform_name** | **str**| The Transform name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | NoContent |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transforms_get**
> Transform transforms_get(subscription_id, resource_group_name, account_name, transform_name, api_version)

Get Transform

Gets a Transform.

### Example


```python
import openapi_client
from openapi_client.models.transform import Transform
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    transform_name = 'transform_name_example' # str | The Transform name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Get Transform
        api_response = api_instance.transforms_get(subscription_id, resource_group_name, account_name, transform_name, api_version)
        print("The response of DefaultApi->transforms_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->transforms_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **transform_name** | **str**| The Transform name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**Transform**](Transform.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NotFound |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transforms_list**
> TransformCollection transforms_list(subscription_id, resource_group_name, account_name, api_version, filter=filter, orderby=orderby)

List Transforms

Lists the Transforms in the account.

### Example


```python
import openapi_client
from openapi_client.models.transform_collection import TransformCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    filter = 'filter_example' # str | Restricts the set of items returned. (optional)
    orderby = 'orderby_example' # str | Specifies the key by which the result collection should be ordered. (optional)

    try:
        # List Transforms
        api_response = api_instance.transforms_list(subscription_id, resource_group_name, account_name, api_version, filter=filter, orderby=orderby)
        print("The response of DefaultApi->transforms_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->transforms_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **filter** | **str**| Restricts the set of items returned. | [optional] 
 **orderby** | **str**| Specifies the key by which the result collection should be ordered. | [optional] 

### Return type

[**TransformCollection**](TransformCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transforms_update**
> Transform transforms_update(subscription_id, resource_group_name, account_name, transform_name, api_version, parameters)

Update Transform

Updates a Transform.

### Example


```python
import openapi_client
from openapi_client.models.transform import Transform
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    transform_name = 'transform_name_example' # str | The Transform name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.Transform() # Transform | The request parameters

    try:
        # Update Transform
        api_response = api_instance.transforms_update(subscription_id, resource_group_name, account_name, transform_name, api_version, parameters)
        print("The response of DefaultApi->transforms_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->transforms_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **transform_name** | **str**| The Transform name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**Transform**](Transform.md)| The request parameters | 

### Return type

[**Transform**](Transform.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

