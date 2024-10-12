# openapi_client.ApplicationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**application_create**](ApplicationApi.md#application_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationId} | 
[**application_delete**](ApplicationApi.md#application_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationId} | 
[**application_get**](ApplicationApi.md#application_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationId} | 
[**application_list**](ApplicationApi.md#application_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications | 
[**application_update**](ApplicationApi.md#application_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationId} | 


# **application_create**
> Application application_create(resource_group_name, account_name, application_id, api_version, subscription_id, parameters=parameters)



Adds an application to the specified Batch account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.add_application_parameters import AddApplicationParameters
from openapi_client.models.application import Application
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
    api_instance = openapi_client.ApplicationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    application_id = 'application_id_example' # str | The ID of the application.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.AddApplicationParameters() # AddApplicationParameters | The parameters for the request. (optional)

    try:
        api_response = api_instance.application_create(resource_group_name, account_name, application_id, api_version, subscription_id, parameters=parameters)
        print("The response of ApplicationApi->application_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->application_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **application_id** | **str**| The ID of the application. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**AddApplicationParameters**](AddApplicationParameters.md)| The parameters for the request. | [optional] 

### Return type

[**Application**](Application.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The operation was successful. The response contains the application entity. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_delete**
> application_delete(resource_group_name, account_name, application_id, api_version, subscription_id)



Deletes an application.

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
    api_instance = openapi_client.ApplicationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    application_id = 'application_id_example' # str | The ID of the application.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.application_delete(resource_group_name, account_name, application_id, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ApplicationApi->application_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **application_id** | **str**| The ID of the application. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**204** | The operation was successful. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_get**
> Application application_get(resource_group_name, account_name, application_id, api_version, subscription_id)



Gets information about the specified application.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application import Application
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
    api_instance = openapi_client.ApplicationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    application_id = 'application_id_example' # str | The ID of the application.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.application_get(resource_group_name, account_name, application_id, api_version, subscription_id)
        print("The response of ApplicationApi->application_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->application_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **application_id** | **str**| The ID of the application. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**Application**](Application.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the application entity. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_list**
> ListApplicationsResult application_list(resource_group_name, account_name, api_version, subscription_id, maxresults=maxresults)



Lists all of the applications in the specified account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_applications_result import ListApplicationsResult
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
    api_instance = openapi_client.ApplicationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    maxresults = 56 # int | The maximum number of items to return in the response. (optional)

    try:
        api_response = api_instance.application_list(resource_group_name, account_name, api_version, subscription_id, maxresults=maxresults)
        print("The response of ApplicationApi->application_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->application_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **maxresults** | **int**| The maximum number of items to return in the response. | [optional] 

### Return type

[**ListApplicationsResult**](ListApplicationsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains a list of the application entities associated with the specified account. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_update**
> application_update(resource_group_name, account_name, application_id, api_version, subscription_id, parameters)



Updates settings for the specified application.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.update_application_parameters import UpdateApplicationParameters
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
    api_instance = openapi_client.ApplicationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    application_id = 'application_id_example' # str | The ID of the application.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.UpdateApplicationParameters() # UpdateApplicationParameters | The parameters for the request.

    try:
        api_instance.application_update(resource_group_name, account_name, application_id, api_version, subscription_id, parameters)
    except Exception as e:
        print("Exception when calling ApplicationApi->application_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **application_id** | **str**| The ID of the application. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**UpdateApplicationParameters**](UpdateApplicationParameters.md)| The parameters for the request. | 

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
**204** | The operation was successful. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

