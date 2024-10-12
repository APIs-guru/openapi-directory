# openapi_client.ApplicationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**application_create**](ApplicationsApi.md#application_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/applications/{applicationResourceName} | Creates or updates an application resource.
[**application_delete**](ApplicationsApi.md#application_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/applications/{applicationResourceName} | Deletes the application resource.
[**application_get**](ApplicationsApi.md#application_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/applications/{applicationResourceName} | Gets the application resource with the given name.
[**application_list_by_resource_group**](ApplicationsApi.md#application_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/applications | Gets all the application resources in a given resource group.
[**application_list_by_subscription**](ApplicationsApi.md#application_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabricMesh/applications | Gets all the application resources in a given subscription.


# **application_create**
> ApplicationResourceDescription application_create(subscription_id, api_version, resource_group_name, application_resource_name, application_resource_description)

Creates or updates an application resource.

Creates an application resource with the specified name, description and properties. If an application resource with the same name exists, then it is updated with the specified description and properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_resource_description import ApplicationResourceDescription
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
    api_instance = openapi_client.ApplicationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    application_resource_name = 'application_resource_name_example' # str | The identity of the application.
    application_resource_description = openapi_client.ApplicationResourceDescription() # ApplicationResourceDescription | Description for creating a Application resource.

    try:
        # Creates or updates an application resource.
        api_response = api_instance.application_create(subscription_id, api_version, resource_group_name, application_resource_name, application_resource_description)
        print("The response of ApplicationsApi->application_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->application_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **application_resource_name** | **str**| The identity of the application. | 
 **application_resource_description** | [**ApplicationResourceDescription**](ApplicationResourceDescription.md)| Description for creating a Application resource. | 

### Return type

[**ApplicationResourceDescription**](ApplicationResourceDescription.md)

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
**202** | Accepted |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_delete**
> application_delete(subscription_id, api_version, resource_group_name, application_resource_name)

Deletes the application resource.

Deletes the application resource identified by the name.

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
    api_instance = openapi_client.ApplicationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    application_resource_name = 'application_resource_name_example' # str | The identity of the application.

    try:
        # Deletes the application resource.
        api_instance.application_delete(subscription_id, api_version, resource_group_name, application_resource_name)
    except Exception as e:
        print("Exception when calling ApplicationsApi->application_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **application_resource_name** | **str**| The identity of the application. | 

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
**202** | Accepted |  -  |
**204** | No Content - the specified application was not found. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_get**
> ApplicationResourceDescription application_get(subscription_id, api_version, resource_group_name, application_resource_name)

Gets the application resource with the given name.

Gets the information about the application resource with the given name. The information include the description and other properties of the application.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_resource_description import ApplicationResourceDescription
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
    api_instance = openapi_client.ApplicationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    application_resource_name = 'application_resource_name_example' # str | The identity of the application.

    try:
        # Gets the application resource with the given name.
        api_response = api_instance.application_get(subscription_id, api_version, resource_group_name, application_resource_name)
        print("The response of ApplicationsApi->application_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->application_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **application_resource_name** | **str**| The identity of the application. | 

### Return type

[**ApplicationResourceDescription**](ApplicationResourceDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_list_by_resource_group**
> ApplicationResourceDescriptionList application_list_by_resource_group(subscription_id, api_version, resource_group_name)

Gets all the application resources in a given resource group.

Gets the information about all application resources in a given resource group. The information include the description and other properties of the Application.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_resource_description_list import ApplicationResourceDescriptionList
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
    api_instance = openapi_client.ApplicationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name

    try:
        # Gets all the application resources in a given resource group.
        api_response = api_instance.application_list_by_resource_group(subscription_id, api_version, resource_group_name)
        print("The response of ApplicationsApi->application_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->application_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 

### Return type

[**ApplicationResourceDescriptionList**](ApplicationResourceDescriptionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_list_by_subscription**
> ApplicationResourceDescriptionList application_list_by_subscription(subscription_id, api_version)

Gets all the application resources in a given subscription.

Gets the information about all application resources in a given resource group. The information include the description and other properties of the application.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_resource_description_list import ApplicationResourceDescriptionList
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
    api_instance = openapi_client.ApplicationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)

    try:
        # Gets all the application resources in a given subscription.
        api_response = api_instance.application_list_by_subscription(subscription_id, api_version)
        print("The response of ApplicationsApi->application_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->application_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]

### Return type

[**ApplicationResourceDescriptionList**](ApplicationResourceDescriptionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

