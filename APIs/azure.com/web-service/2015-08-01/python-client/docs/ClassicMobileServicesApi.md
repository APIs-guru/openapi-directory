# openapi_client.ClassicMobileServicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**classic_mobile_services_delete_classic_mobile_service**](ClassicMobileServicesApi.md#classic_mobile_services_delete_classic_mobile_service) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/classicMobileServices/{name} | Delete a mobile service.
[**classic_mobile_services_get_classic_mobile_service**](ClassicMobileServicesApi.md#classic_mobile_services_get_classic_mobile_service) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/classicMobileServices/{name} | Get a mobile service.
[**classic_mobile_services_get_classic_mobile_services**](ClassicMobileServicesApi.md#classic_mobile_services_get_classic_mobile_services) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/classicMobileServices | Get all mobile services in a resource group.


# **classic_mobile_services_delete_classic_mobile_service**
> object classic_mobile_services_delete_classic_mobile_service(resource_group_name, name, subscription_id, api_version)

Delete a mobile service.

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
    api_instance = openapi_client.ClassicMobileServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of mobile service
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete a mobile service.
        api_response = api_instance.classic_mobile_services_delete_classic_mobile_service(resource_group_name, name, subscription_id, api_version)
        print("The response of ClassicMobileServicesApi->classic_mobile_services_delete_classic_mobile_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassicMobileServicesApi->classic_mobile_services_delete_classic_mobile_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of mobile service | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **classic_mobile_services_get_classic_mobile_service**
> ClassicMobileService classic_mobile_services_get_classic_mobile_service(resource_group_name, name, subscription_id, api_version)

Get a mobile service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.classic_mobile_service import ClassicMobileService
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
    api_instance = openapi_client.ClassicMobileServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of mobile service
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get a mobile service.
        api_response = api_instance.classic_mobile_services_get_classic_mobile_service(resource_group_name, name, subscription_id, api_version)
        print("The response of ClassicMobileServicesApi->classic_mobile_services_get_classic_mobile_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassicMobileServicesApi->classic_mobile_services_get_classic_mobile_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of mobile service | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**ClassicMobileService**](ClassicMobileService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **classic_mobile_services_get_classic_mobile_services**
> ClassicMobileServiceCollection classic_mobile_services_get_classic_mobile_services(resource_group_name, subscription_id, api_version)

Get all mobile services in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.classic_mobile_service_collection import ClassicMobileServiceCollection
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
    api_instance = openapi_client.ClassicMobileServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all mobile services in a resource group.
        api_response = api_instance.classic_mobile_services_get_classic_mobile_services(resource_group_name, subscription_id, api_version)
        print("The response of ClassicMobileServicesApi->classic_mobile_services_get_classic_mobile_services:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassicMobileServicesApi->classic_mobile_services_get_classic_mobile_services: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**ClassicMobileServiceCollection**](ClassicMobileServiceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

