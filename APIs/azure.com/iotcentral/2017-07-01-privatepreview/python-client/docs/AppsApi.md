# openapi_client.AppsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apps_check_name_availability**](AppsApi.md#apps_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/checkNameAvailability | 
[**apps_create_or_update**](AppsApi.md#apps_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName} | 
[**apps_delete**](AppsApi.md#apps_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName} | 
[**apps_get**](AppsApi.md#apps_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName} | 
[**apps_list_by_resource_group**](AppsApi.md#apps_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps | 
[**apps_list_by_subscription**](AppsApi.md#apps_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/IoTApps | 
[**apps_update**](AppsApi.md#apps_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName} | 


# **apps_check_name_availability**
> AppNameAvailabilityInfo apps_check_name_availability(api_version, subscription_id, operation_inputs)



Check if an IoT Central application name is available.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_name_availability_info import AppNameAvailabilityInfo
from openapi_client.models.operation_inputs import OperationInputs
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
    api_instance = openapi_client.AppsApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    operation_inputs = openapi_client.OperationInputs() # OperationInputs | Set the name parameter in the OperationInputs structure to the name of the IoT Central application to check.

    try:
        api_response = api_instance.apps_check_name_availability(api_version, subscription_id, operation_inputs)
        print("The response of AppsApi->apps_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **operation_inputs** | [**OperationInputs**](OperationInputs.md)| Set the name parameter in the OperationInputs structure to the name of the IoT Central application to check. | 

### Return type

[**AppNameAvailabilityInfo**](AppNameAvailabilityInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized response that specifies whether the IoT Central application name is available. If the name is not available, the body contains the reason. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_create_or_update**
> App apps_create_or_update(api_version, subscription_id, resource_group_name, resource_name, app)



Create or update the metadata of an IoT Central application. The usual pattern to modify a property is to retrieve the IoT Central application metadata and security metadata, and then combine them with the modified values in a new body to update the IoT Central application.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app import App
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
    api_instance = openapi_client.AppsApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT Central application.
    resource_name = 'resource_name_example' # str | The ARM resource name of the IoT Central application.
    app = openapi_client.App() # App | The IoT Central application metadata and security metadata.

    try:
        api_response = api_instance.apps_create_or_update(api_version, subscription_id, resource_group_name, resource_name, app)
        print("The response of AppsApi->apps_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT Central application. | 
 **resource_name** | **str**| The ARM resource name of the IoT Central application. | 
 **app** | [**App**](App.md)| The IoT Central application metadata and security metadata. | 

### Return type

[**App**](App.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state. |  -  |
**201** | This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state. |  -  |
**202** | Accepted - Put request accepted; the operation will complete asynchronously. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_delete**
> apps_delete(api_version, subscription_id, resource_group_name, resource_name)



Delete an IoT Central application.

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
    api_instance = openapi_client.AppsApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT Central application.
    resource_name = 'resource_name_example' # str | The ARM resource name of the IoT Central application.

    try:
        api_instance.apps_delete(api_version, subscription_id, resource_group_name, resource_name)
    except Exception as e:
        print("Exception when calling AppsApi->apps_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT Central application. | 
 **resource_name** | **str**| The ARM resource name of the IoT Central application. | 

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
**200** | This is returned as a response to the status polling request for the delete operation. The body contains the resource representation that indicates a transitional provisioning state. |  -  |
**202** | Accepted - Delete request accepted; the operation will complete asynchronously. |  -  |
**204** | Once the long running delete operation completes successfully, a 204 No Content status code is returned when the status polling request finds the IoT Central application metadata in the service and the status of the delete operation is set to a completed state. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_get**
> App apps_get(api_version, subscription_id, resource_group_name, resource_name)



Get the metadata of an IoT Central application.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app import App
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
    api_instance = openapi_client.AppsApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT Central application.
    resource_name = 'resource_name_example' # str | The ARM resource name of the IoT Central application.

    try:
        api_response = api_instance.apps_get(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of AppsApi->apps_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT Central application. | 
 **resource_name** | **str**| The ARM resource name of the IoT Central application. | 

### Return type

[**App**](App.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains all the non-security properties of the IoT Central application. Security-related properties are set to null. |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_by_resource_group**
> AppListResult apps_list_by_resource_group(api_version, subscription_id, resource_group_name)



Get all the IoT Central Applications in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_list_result import AppListResult
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
    api_instance = openapi_client.AppsApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT Central application.

    try:
        api_response = api_instance.apps_list_by_resource_group(api_version, subscription_id, resource_group_name)
        print("The response of AppsApi->apps_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT Central application. | 

### Return type

[**AppListResult**](AppListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the IoT Central Applications in the resource group. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_by_subscription**
> AppListResult apps_list_by_subscription(api_version, subscription_id)



Get all IoT Central Applications in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_list_result import AppListResult
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
    api_instance = openapi_client.AppsApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.

    try:
        api_response = api_instance.apps_list_by_subscription(api_version, subscription_id)
        print("The response of AppsApi->apps_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 

### Return type

[**AppListResult**](AppListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the IoT Central Applications in the subscription. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_update**
> App apps_update(api_version, subscription_id, resource_group_name, resource_name, app_patch)



Update the metadata of an IoT Central application.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app import App
from openapi_client.models.app_patch import AppPatch
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
    api_instance = openapi_client.AppsApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT Central application.
    resource_name = 'resource_name_example' # str | The ARM resource name of the IoT Central application.
    app_patch = openapi_client.AppPatch() # AppPatch | The IoT Central application metadata and security metadata.

    try:
        api_response = api_instance.apps_update(api_version, subscription_id, resource_group_name, resource_name, app_patch)
        print("The response of AppsApi->apps_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT Central application. | 
 **resource_name** | **str**| The ARM resource name of the IoT Central application. | 
 **app_patch** | [**AppPatch**](AppPatch.md)| The IoT Central application metadata and security metadata. | 

### Return type

[**App**](App.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state. |  -  |
**202** | Accepted - Put request accepted; the operation will complete asynchronously. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

