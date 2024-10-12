# openapi_client.DeviceServicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**services_create_or_update**](DeviceServicesApi.md#services_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsIoT/deviceServices/{deviceName} | Create or update the metadata of a Windows IoT Device Service.
[**services_delete**](DeviceServicesApi.md#services_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsIoT/deviceServices/{deviceName} | 
[**services_get**](DeviceServicesApi.md#services_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsIoT/deviceServices/{deviceName} | 
[**services_list**](DeviceServicesApi.md#services_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.WindowsIoT/deviceServices | 
[**services_list_by_resource_group**](DeviceServicesApi.md#services_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsIoT/deviceServices | 
[**services_update**](DeviceServicesApi.md#services_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsIoT/deviceServices/{deviceName} | Updates the metadata of a Windows IoT Device Service.


# **services_create_or_update**
> DeviceService services_create_or_update(api_version, subscription_id, resource_group_name, device_name, device_service, if_match=if_match)

Create or update the metadata of a Windows IoT Device Service.

Create or update the metadata of a Windows IoT Device Service. The usual pattern to modify a property is to retrieve the Windows IoT Device Service metadata and security metadata, and then combine them with the modified values in a new body to update the Windows IoT Device Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.device_service import DeviceService
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
    api_instance = openapi_client.DeviceServicesApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Windows IoT Device Service.
    device_name = 'device_name_example' # str | The name of the Windows IoT Device Service.
    device_service = openapi_client.DeviceService() # DeviceService | The Windows IoT Device Service metadata and security metadata.
    if_match = 'if_match_example' # str | ETag of the Windows IoT Device Service. Do not specify for creating a new Windows IoT Device Service. Required to update an existing Windows IoT Device Service. (optional)

    try:
        # Create or update the metadata of a Windows IoT Device Service.
        api_response = api_instance.services_create_or_update(api_version, subscription_id, resource_group_name, device_name, device_service, if_match=if_match)
        print("The response of DeviceServicesApi->services_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceServicesApi->services_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the Windows IoT Device Service. | 
 **device_name** | **str**| The name of the Windows IoT Device Service. | 
 **device_service** | [**DeviceService**](DeviceService.md)| The Windows IoT Device Service metadata and security metadata. | 
 **if_match** | **str**| ETag of the Windows IoT Device Service. Do not specify for creating a new Windows IoT Device Service. Required to update an existing Windows IoT Device Service. | [optional] 

### Return type

[**DeviceService**](DeviceService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_delete**
> DeviceService services_delete(api_version, subscription_id, resource_group_name, device_name)



Delete a Windows IoT Device Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.device_service import DeviceService
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
    api_instance = openapi_client.DeviceServicesApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Windows IoT Device Service.
    device_name = 'device_name_example' # str | The name of the Windows IoT Device Service.

    try:
        api_response = api_instance.services_delete(api_version, subscription_id, resource_group_name, device_name)
        print("The response of DeviceServicesApi->services_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceServicesApi->services_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the Windows IoT Device Service. | 
 **device_name** | **str**| The name of the Windows IoT Device Service. | 

### Return type

[**DeviceService**](DeviceService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_get**
> DeviceService services_get(api_version, subscription_id, resource_group_name, device_name)



Get the non-security related metadata of a Windows IoT Device Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.device_service import DeviceService
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
    api_instance = openapi_client.DeviceServicesApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Windows IoT Device Service.
    device_name = 'device_name_example' # str | The name of the Windows IoT Device Service.

    try:
        api_response = api_instance.services_get(api_version, subscription_id, resource_group_name, device_name)
        print("The response of DeviceServicesApi->services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceServicesApi->services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the Windows IoT Device Service. | 
 **device_name** | **str**| The name of the Windows IoT Device Service. | 

### Return type

[**DeviceService**](DeviceService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list**
> DeviceServiceDescriptionListResult services_list(api_version, subscription_id)



Get all the IoT hubs in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.device_service_description_list_result import DeviceServiceDescriptionListResult
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
    api_instance = openapi_client.DeviceServicesApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.

    try:
        api_response = api_instance.services_list(api_version, subscription_id)
        print("The response of DeviceServicesApi->services_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceServicesApi->services_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 

### Return type

[**DeviceServiceDescriptionListResult**](DeviceServiceDescriptionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_by_resource_group**
> DeviceServiceDescriptionListResult services_list_by_resource_group(api_version, subscription_id, resource_group_name)



Get all the IoT hubs in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.device_service_description_list_result import DeviceServiceDescriptionListResult
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
    api_instance = openapi_client.DeviceServicesApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Windows IoT Device Service.

    try:
        api_response = api_instance.services_list_by_resource_group(api_version, subscription_id, resource_group_name)
        print("The response of DeviceServicesApi->services_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceServicesApi->services_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the Windows IoT Device Service. | 

### Return type

[**DeviceServiceDescriptionListResult**](DeviceServiceDescriptionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_update**
> DeviceService services_update(api_version, subscription_id, resource_group_name, device_name, device_service, if_match=if_match)

Updates the metadata of a Windows IoT Device Service.

Updates the metadata of a Windows IoT Device Service. The usual pattern to modify a property is to retrieve the Windows IoT Device Service metadata and security metadata, and then combine them with the modified values in a new body to update the Windows IoT Device Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.device_service import DeviceService
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
    api_instance = openapi_client.DeviceServicesApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Windows IoT Device Service.
    device_name = 'device_name_example' # str | The name of the Windows IoT Device Service.
    device_service = openapi_client.DeviceService() # DeviceService | The Windows IoT Device Service metadata and security metadata.
    if_match = 'if_match_example' # str | ETag of the Windows IoT Device Service. Do not specify for creating a brand new Windows IoT Device Service. Required to update an existing Windows IoT Device Service. (optional)

    try:
        # Updates the metadata of a Windows IoT Device Service.
        api_response = api_instance.services_update(api_version, subscription_id, resource_group_name, device_name, device_service, if_match=if_match)
        print("The response of DeviceServicesApi->services_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceServicesApi->services_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the Windows IoT Device Service. | 
 **device_name** | **str**| The name of the Windows IoT Device Service. | 
 **device_service** | [**DeviceService**](DeviceService.md)| The Windows IoT Device Service metadata and security metadata. | 
 **if_match** | **str**| ETag of the Windows IoT Device Service. Do not specify for creating a brand new Windows IoT Device Service. Required to update an existing Windows IoT Device Service. | [optional] 

### Return type

[**DeviceService**](DeviceService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

