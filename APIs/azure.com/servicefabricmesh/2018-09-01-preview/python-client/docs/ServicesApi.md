# openapi_client.ServicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_get**](ServicesApi.md#service_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/applications/{applicationResourceName}/services/{serviceResourceName} | Gets the service resource with the given name.
[**service_list**](ServicesApi.md#service_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/applications/{applicationResourceName}/services | Lists all the service resources.


# **service_get**
> ServiceResourceDescription service_get(subscription_id, api_version, resource_group_name, application_resource_name, service_resource_name)

Gets the service resource with the given name.

Gets the information about the service resource with the given name. The information include the description and other properties of the service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_resource_description import ServiceResourceDescription
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
    api_instance = openapi_client.ServicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    application_resource_name = 'application_resource_name_example' # str | The identity of the application.
    service_resource_name = 'service_resource_name_example' # str | The identity of the service.

    try:
        # Gets the service resource with the given name.
        api_response = api_instance.service_get(subscription_id, api_version, resource_group_name, application_resource_name, service_resource_name)
        print("The response of ServicesApi->service_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->service_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **application_resource_name** | **str**| The identity of the application. | 
 **service_resource_name** | **str**| The identity of the service. | 

### Return type

[**ServiceResourceDescription**](ServiceResourceDescription.md)

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

# **service_list**
> ServiceResourceDescriptionList service_list(subscription_id, api_version, resource_group_name, application_resource_name)

Lists all the service resources.

Gets the information about all services of an application resource. The information include the description and other properties of the Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_resource_description_list import ServiceResourceDescriptionList
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
    api_instance = openapi_client.ServicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-09-01-preview # str | The version of the API. This parameter is required and its value must be `2018-09-01-preview`. (default to 2018-09-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    application_resource_name = 'application_resource_name_example' # str | The identity of the application.

    try:
        # Lists all the service resources.
        api_response = api_instance.service_list(subscription_id, api_version, resource_group_name, application_resource_name)
        print("The response of ServicesApi->service_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->service_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-09-01-preview&#x60;. | [default to 2018-09-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **application_resource_name** | **str**| The identity of the application. | 

### Return type

[**ServiceResourceDescriptionList**](ServiceResourceDescriptionList.md)

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

