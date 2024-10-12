# openapi_client.ApplicationPackageApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**application_package_activate**](ApplicationPackageApi.md#application_package_activate) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}/activate | 
[**application_package_create**](ApplicationPackageApi.md#application_package_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName} | 
[**application_package_delete**](ApplicationPackageApi.md#application_package_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName} | 
[**application_package_get**](ApplicationPackageApi.md#application_package_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName} | 
[**application_package_list**](ApplicationPackageApi.md#application_package_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions | 


# **application_package_activate**
> ApplicationPackage application_package_activate(resource_group_name, account_name, application_name, version_name, api_version, subscription_id, parameters)



Activates the specified application package.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.activate_application_package_parameters import ActivateApplicationPackageParameters
from openapi_client.models.application_package import ApplicationPackage
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
    api_instance = openapi_client.ApplicationPackageApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    application_name = 'application_name_example' # str | The name of the application. This must be unique within the account.
    version_name = 'version_name_example' # str | The version of the application.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    parameters = openapi_client.ActivateApplicationPackageParameters() # ActivateApplicationPackageParameters | The parameters for the request.

    try:
        api_response = api_instance.application_package_activate(resource_group_name, account_name, application_name, version_name, api_version, subscription_id, parameters)
        print("The response of ApplicationPackageApi->application_package_activate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationPackageApi->application_package_activate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **application_name** | **str**| The name of the application. This must be unique within the account. | 
 **version_name** | **str**| The version of the application. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **parameters** | [**ActivateApplicationPackageParameters**](ActivateApplicationPackageParameters.md)| The parameters for the request. | 

### Return type

[**ApplicationPackage**](ApplicationPackage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the application package entity. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_package_create**
> ApplicationPackage application_package_create(resource_group_name, account_name, application_name, version_name, api_version, subscription_id, parameters=parameters)



Creates an application package record.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_package import ApplicationPackage
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
    api_instance = openapi_client.ApplicationPackageApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    application_name = 'application_name_example' # str | The name of the application. This must be unique within the account.
    version_name = 'version_name_example' # str | The version of the application.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    parameters = openapi_client.ApplicationPackage() # ApplicationPackage | The parameters for the request. (optional)

    try:
        api_response = api_instance.application_package_create(resource_group_name, account_name, application_name, version_name, api_version, subscription_id, parameters=parameters)
        print("The response of ApplicationPackageApi->application_package_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationPackageApi->application_package_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **application_name** | **str**| The name of the application. This must be unique within the account. | 
 **version_name** | **str**| The version of the application. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **parameters** | [**ApplicationPackage**](ApplicationPackage.md)| The parameters for the request. | [optional] 

### Return type

[**ApplicationPackage**](ApplicationPackage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the application package entity. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_package_delete**
> application_package_delete(resource_group_name, account_name, application_name, version_name, api_version, subscription_id)



Deletes an application package record and its associated binary file.

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
    api_instance = openapi_client.ApplicationPackageApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    application_name = 'application_name_example' # str | The name of the application. This must be unique within the account.
    version_name = 'version_name_example' # str | The version of the application.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

    try:
        api_instance.application_package_delete(resource_group_name, account_name, application_name, version_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ApplicationPackageApi->application_package_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **application_name** | **str**| The name of the application. This must be unique within the account. | 
 **version_name** | **str**| The version of the application. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 

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
**204** | The operation was successful. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_package_get**
> ApplicationPackage application_package_get(resource_group_name, account_name, application_name, version_name, api_version, subscription_id)



Gets information about the specified application package.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_package import ApplicationPackage
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
    api_instance = openapi_client.ApplicationPackageApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    application_name = 'application_name_example' # str | The name of the application. This must be unique within the account.
    version_name = 'version_name_example' # str | The version of the application.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

    try:
        api_response = api_instance.application_package_get(resource_group_name, account_name, application_name, version_name, api_version, subscription_id)
        print("The response of ApplicationPackageApi->application_package_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationPackageApi->application_package_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **application_name** | **str**| The name of the application. This must be unique within the account. | 
 **version_name** | **str**| The version of the application. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 

### Return type

[**ApplicationPackage**](ApplicationPackage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the application package entity. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_package_list**
> ListApplicationPackagesResult application_package_list(resource_group_name, account_name, application_name, api_version, subscription_id, maxresults=maxresults)



Lists all of the application packages in the specified application.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_application_packages_result import ListApplicationPackagesResult
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
    api_instance = openapi_client.ApplicationPackageApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    application_name = 'application_name_example' # str | The name of the application. This must be unique within the account.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    maxresults = 56 # int | The maximum number of items to return in the response. (optional)

    try:
        api_response = api_instance.application_package_list(resource_group_name, account_name, application_name, api_version, subscription_id, maxresults=maxresults)
        print("The response of ApplicationPackageApi->application_package_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationPackageApi->application_package_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **application_name** | **str**| The name of the application. This must be unique within the account. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **maxresults** | **int**| The maximum number of items to return in the response. | [optional] 

### Return type

[**ListApplicationPackagesResult**](ListApplicationPackagesResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains a list of the application package entities associated with the specified application. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

