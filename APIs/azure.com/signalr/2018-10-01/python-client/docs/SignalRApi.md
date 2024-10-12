# openapi_client.SignalRApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operations_list**](SignalRApi.md#operations_list) | **GET** /providers/Microsoft.SignalRService/operations | 
[**signal_r_check_name_availability**](SignalRApi.md#signal_r_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/locations/{location}/checkNameAvailability | 
[**signal_r_create_or_update**](SignalRApi.md#signal_r_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName} | 
[**signal_r_delete**](SignalRApi.md#signal_r_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName} | 
[**signal_r_get**](SignalRApi.md#signal_r_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName} | 
[**signal_r_list_by_resource_group**](SignalRApi.md#signal_r_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/SignalR | 
[**signal_r_list_by_subscription**](SignalRApi.md#signal_r_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/SignalR | 
[**signal_r_list_keys**](SignalRApi.md#signal_r_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/SignalR/{resourceName}/listKeys | 
[**signal_r_regenerate_key**](SignalRApi.md#signal_r_regenerate_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/SignalR/{resourceName}/regenerateKey | 
[**signal_r_restart**](SignalRApi.md#signal_r_restart) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/restart | 
[**signal_r_update**](SignalRApi.md#signal_r_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName} | 
[**usages_list**](SignalRApi.md#usages_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/locations/{location}/usages | 


# **operations_list**
> OperationList operations_list(api_version)



Lists all of the available REST API operations of the Microsoft.SignalRService provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_list import OperationList
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
    api_instance = openapi_client.SignalRApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.operations_list(api_version)
        print("The response of SignalRApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SignalRApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 

### Return type

[**OperationList**](OperationList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the list of operations. |  -  |
**0** | An unexpected error occurred during the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signal_r_check_name_availability**
> NameAvailability signal_r_check_name_availability(location, api_version, subscription_id, parameters=parameters)



Checks that the SignalR name is valid and is not already in use.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.name_availability import NameAvailability
from openapi_client.models.name_availability_parameters import NameAvailabilityParameters
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
    api_instance = openapi_client.SignalRApi(api_client)
    location = 'location_example' # str | the region
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.NameAvailabilityParameters() # NameAvailabilityParameters | Parameters supplied to the operation. (optional)

    try:
        api_response = api_instance.signal_r_check_name_availability(location, api_version, subscription_id, parameters=parameters)
        print("The response of SignalRApi->signal_r_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SignalRApi->signal_r_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| the region | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**NameAvailabilityParameters**](NameAvailabilityParameters.md)| Parameters supplied to the operation. | [optional] 

### Return type

[**NameAvailability**](NameAvailability.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the name availability. |  -  |
**0** | An unexpected error occurred during the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signal_r_create_or_update**
> SignalRResource signal_r_create_or_update(api_version, subscription_id, resource_group_name, resource_name, parameters=parameters)



Create a new SignalR service and update an exiting SignalR service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.signal_r_create_parameters import SignalRCreateParameters
from openapi_client.models.signal_r_resource import SignalRResource
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
    api_instance = openapi_client.SignalRApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    resource_name = 'resource_name_example' # str | The name of the SignalR resource.
    parameters = openapi_client.SignalRCreateParameters() # SignalRCreateParameters | Parameters for the create or update operation (optional)

    try:
        api_response = api_instance.signal_r_create_or_update(api_version, subscription_id, resource_group_name, resource_name, parameters=parameters)
        print("The response of SignalRApi->signal_r_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SignalRApi->signal_r_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **resource_name** | **str**| The name of the SignalR resource. | 
 **parameters** | [**SignalRCreateParameters**](SignalRCreateParameters.md)| Parameters for the create or update operation | [optional] 

### Return type

[**SignalRResource**](SignalRResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes a SignalR service. |  -  |
**201** | Created. The response describes the new service and contains a Location header to query the operation result. |  -  |
**202** | Accepted. The response indicates the exiting SignalR service is now updating and contains a Location header to query the operation result.. |  -  |
**0** | An unexpected error occurred during the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signal_r_delete**
> signal_r_delete(api_version, subscription_id, resource_group_name, resource_name)



Operation to delete a SignalR service.

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
    api_instance = openapi_client.SignalRApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    resource_name = 'resource_name_example' # str | The name of the SignalR resource.

    try:
        api_instance.signal_r_delete(api_version, subscription_id, resource_group_name, resource_name)
    except Exception as e:
        print("Exception when calling SignalRApi->signal_r_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **resource_name** | **str**| The name of the SignalR resource. | 

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
**202** | Accepted. The response indicates the delete operation is performed in the background. |  -  |
**204** | Success. The response indicates the resource is already deleted. |  -  |
**0** | An unexpected error occurred during the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signal_r_get**
> SignalRResource signal_r_get(api_version, subscription_id, resource_group_name, resource_name)



Get the SignalR service and its properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.signal_r_resource import SignalRResource
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
    api_instance = openapi_client.SignalRApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    resource_name = 'resource_name_example' # str | The name of the SignalR resource.

    try:
        api_response = api_instance.signal_r_get(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of SignalRApi->signal_r_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SignalRApi->signal_r_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **resource_name** | **str**| The name of the SignalR resource. | 

### Return type

[**SignalRResource**](SignalRResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the corresponding SignalR service. |  -  |
**0** | An unexpected error occurred during the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signal_r_list_by_resource_group**
> SignalRResourceList signal_r_list_by_resource_group(api_version, subscription_id, resource_group_name)



Handles requests to list all resources in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.signal_r_resource_list import SignalRResourceList
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
    api_instance = openapi_client.SignalRApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

    try:
        api_response = api_instance.signal_r_list_by_resource_group(api_version, subscription_id, resource_group_name)
        print("The response of SignalRApi->signal_r_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SignalRApi->signal_r_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 

### Return type

[**SignalRResourceList**](SignalRResourceList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the list of SignalR services in a resourceGroup. |  -  |
**0** | An unexpected error occurred during the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signal_r_list_by_subscription**
> SignalRResourceList signal_r_list_by_subscription(api_version, subscription_id)



Handles requests to list all resources in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.signal_r_resource_list import SignalRResourceList
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
    api_instance = openapi_client.SignalRApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.signal_r_list_by_subscription(api_version, subscription_id)
        print("The response of SignalRApi->signal_r_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SignalRApi->signal_r_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SignalRResourceList**](SignalRResourceList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the list of SignalR services in the subscription. |  -  |
**0** | An unexpected error occurred during the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signal_r_list_keys**
> SignalRKeys signal_r_list_keys(api_version, subscription_id, resource_group_name, resource_name)



Get the access keys of the SignalR resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.signal_r_keys import SignalRKeys
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
    api_instance = openapi_client.SignalRApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    resource_name = 'resource_name_example' # str | The name of the SignalR resource.

    try:
        api_response = api_instance.signal_r_list_keys(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of SignalRApi->signal_r_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SignalRApi->signal_r_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **resource_name** | **str**| The name of the SignalR resource. | 

### Return type

[**SignalRKeys**](SignalRKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes SignalR service access keys. |  -  |
**0** | An unexpected error occurred during the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signal_r_regenerate_key**
> SignalRKeys signal_r_regenerate_key(api_version, subscription_id, resource_group_name, resource_name, parameters=parameters)



Regenerate SignalR service access key. PrimaryKey and SecondaryKey cannot be regenerated at the same time.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.regenerate_key_parameters import RegenerateKeyParameters
from openapi_client.models.signal_r_keys import SignalRKeys
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
    api_instance = openapi_client.SignalRApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    resource_name = 'resource_name_example' # str | The name of the SignalR resource.
    parameters = openapi_client.RegenerateKeyParameters() # RegenerateKeyParameters | Parameter that describes the Regenerate Key Operation. (optional)

    try:
        api_response = api_instance.signal_r_regenerate_key(api_version, subscription_id, resource_group_name, resource_name, parameters=parameters)
        print("The response of SignalRApi->signal_r_regenerate_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SignalRApi->signal_r_regenerate_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **resource_name** | **str**| The name of the SignalR resource. | 
 **parameters** | [**RegenerateKeyParameters**](RegenerateKeyParameters.md)| Parameter that describes the Regenerate Key Operation. | [optional] 

### Return type

[**SignalRKeys**](SignalRKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created and an async operation is executing in background to make the new key to take effect. The response contains new keys and a Location header to query the async operation result. |  -  |
**0** | An unexpected error occurred during the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signal_r_restart**
> signal_r_restart(api_version, subscription_id, resource_group_name, resource_name)



Operation to restart a SignalR service.

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
    api_instance = openapi_client.SignalRApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    resource_name = 'resource_name_example' # str | The name of the SignalR resource.

    try:
        api_instance.signal_r_restart(api_version, subscription_id, resource_group_name, resource_name)
    except Exception as e:
        print("Exception when calling SignalRApi->signal_r_restart: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **resource_name** | **str**| The name of the SignalR resource. | 

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
**202** | Accepted. The response indicates the restart operation is performed in the background. |  -  |
**204** | Success. The response indicates the operation is successful and no content will be returned. |  -  |
**0** | An unexpected error occurred during the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signal_r_update**
> SignalRResource signal_r_update(api_version, subscription_id, resource_group_name, resource_name, parameters=parameters)



Operation to update an exiting SignalR service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.signal_r_resource import SignalRResource
from openapi_client.models.signal_r_update_parameters import SignalRUpdateParameters
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
    api_instance = openapi_client.SignalRApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    resource_name = 'resource_name_example' # str | The name of the SignalR resource.
    parameters = openapi_client.SignalRUpdateParameters() # SignalRUpdateParameters | Parameters for the update operation (optional)

    try:
        api_response = api_instance.signal_r_update(api_version, subscription_id, resource_group_name, resource_name, parameters=parameters)
        print("The response of SignalRApi->signal_r_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SignalRApi->signal_r_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **resource_name** | **str**| The name of the SignalR resource. | 
 **parameters** | [**SignalRUpdateParameters**](SignalRUpdateParameters.md)| Parameters for the update operation | [optional] 

### Return type

[**SignalRResource**](SignalRResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes a SignalR service. |  -  |
**202** | Accepted. The response indicates the exiting SignalR service is now updating  and contains a Location header to query the operation result.. |  -  |
**0** | An unexpected error occurred during the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usages_list**
> SignalRUsageList usages_list(location, api_version, subscription_id)



List usage quotas for Azure SignalR service by location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.signal_r_usage_list import SignalRUsageList
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
    api_instance = openapi_client.SignalRApi(api_client)
    location = 'location_example' # str | the location like \"eastus\"
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.usages_list(location, api_version, subscription_id)
        print("The response of SignalRApi->usages_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SignalRApi->usages_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| the location like \&quot;eastus\&quot; | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SignalRUsageList**](SignalRUsageList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describe the usage quotas of a subscription in specified region. |  -  |
**0** | An unexpected error occurred during the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

