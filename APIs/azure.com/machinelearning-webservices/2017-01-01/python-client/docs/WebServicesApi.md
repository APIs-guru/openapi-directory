# openapi_client.WebServicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**web_services_create_or_update**](WebServicesApi.md#web_services_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices/{webServiceName} | 
[**web_services_create_regional_properties**](WebServicesApi.md#web_services_create_regional_properties) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices/{webServiceName}/CreateRegionalBlob | 
[**web_services_get**](WebServicesApi.md#web_services_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices/{webServiceName} | 
[**web_services_list_by_resource_group**](WebServicesApi.md#web_services_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices | 
[**web_services_list_by_subscription_id**](WebServicesApi.md#web_services_list_by_subscription_id) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.MachineLearning/webServices | 
[**web_services_list_keys**](WebServicesApi.md#web_services_list_keys) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices/{webServiceName}/listKeys | 
[**web_services_patch**](WebServicesApi.md#web_services_patch) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices/{webServiceName} | 
[**web_services_remove**](WebServicesApi.md#web_services_remove) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices/{webServiceName} | 


# **web_services_create_or_update**
> WebService web_services_create_or_update(resource_group_name, web_service_name, api_version, subscription_id, create_or_update_payload)



Create or update a web service. This call will overwrite an existing web service. Note that there is no warning or confirmation. This is a nonrecoverable operation. If your intent is to create a new web service, call the Get operation first to verify that it does not exist.

### Example


```python
import openapi_client
from openapi_client.models.web_service import WebService
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
    api_instance = openapi_client.WebServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which the web service is located.
    web_service_name = 'web_service_name_example' # str | The name of the web service.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    create_or_update_payload = openapi_client.WebService() # WebService | The payload that is used to create or update the web service.

    try:
        api_response = api_instance.web_services_create_or_update(resource_group_name, web_service_name, api_version, subscription_id, create_or_update_payload)
        print("The response of WebServicesApi->web_services_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebServicesApi->web_services_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group in which the web service is located. | 
 **web_service_name** | **str**| The name of the web service. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **create_or_update_payload** | [**WebService**](WebService.md)| The payload that is used to create or update the web service. | 

### Return type

[**WebService**](WebService.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. This response is returned for an update web service operation. The response payload is identical to the response payload that is returned by the GET operation. The response includes the Provisioning State and the Azure-AsyncOperation header. To get the progress of the operation, call GET operation on the URL in Azure-AsyncOperation header field. For more information about Asynchronous Operations, see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-async-operations. |  -  |
**201** | Created. This response is returned for a create web service operation. The response includes the Provisioning State and the Azure-AsyncOperation header. To get the progress of the operation, call GET operation on the URL in Azure-AsyncOperation header field. For more information about Asynchronous Operations, see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-async-operations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_services_create_regional_properties**
> AsyncOperationStatus web_services_create_regional_properties(resource_group_name, web_service_name, region, api_version, subscription_id)



Creates an encrypted credentials parameter blob for the specified region. To get the web service from a region other than the region in which it has been created, you must first call Create Regional Web Services Properties to create a copy of the encrypted credential parameter blob in that region. You only need to do this before the first time that you get the web service in the new region.

### Example


```python
import openapi_client
from openapi_client.models.async_operation_status import AsyncOperationStatus
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
    api_instance = openapi_client.WebServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which the web service is located.
    web_service_name = 'web_service_name_example' # str | The name of the web service.
    region = 'region_example' # str | The region for which encrypted credential parameters are created.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.

    try:
        api_response = api_instance.web_services_create_regional_properties(resource_group_name, web_service_name, region, api_version, subscription_id)
        print("The response of WebServicesApi->web_services_create_regional_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebServicesApi->web_services_create_regional_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group in which the web service is located. | 
 **web_service_name** | **str**| The name of the web service. | 
 **region** | **str**| The region for which encrypted credential parameters are created. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 

### Return type

[**AsyncOperationStatus**](AsyncOperationStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Internal use only. Used for SDK return values. |  -  |
**202** | Accepted.  The response includes the Azure-AsyncOperation header. To get the progress of the operation, call the GET operation on the URL in the Azure-AsyncOperation header field. For more information about Asynchronous Operations, see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-async-operations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_services_get**
> WebService web_services_get(resource_group_name, web_service_name, api_version, subscription_id, region=region)



Gets the Web Service Definition as specified by a subscription, resource group, and name. Note that the storage credentials and web service keys are not returned by this call. To get the web service access keys, call List Keys.

### Example


```python
import openapi_client
from openapi_client.models.web_service import WebService
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
    api_instance = openapi_client.WebServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which the web service is located.
    web_service_name = 'web_service_name_example' # str | The name of the web service.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    region = 'region_example' # str | The region for which encrypted credential parameters are valid. (optional)

    try:
        api_response = api_instance.web_services_get(resource_group_name, web_service_name, api_version, subscription_id, region=region)
        print("The response of WebServicesApi->web_services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebServicesApi->web_services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group in which the web service is located. | 
 **web_service_name** | **str**| The name of the web service. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **region** | **str**| The region for which encrypted credential parameters are valid. | [optional] 

### Return type

[**WebService**](WebService.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success.  The response includes the Provisioning State and the Azure-AsyncOperation header. To get the progress of the operation, call GET operation on the URL in Azure-AsyncOperation header field. For more informationFor more information about Asynchronous Operations, see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-async-operations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_services_list_by_resource_group**
> PaginatedWebServicesList web_services_list_by_resource_group(resource_group_name, api_version, subscription_id, skiptoken=skiptoken)



Gets the web services in the specified resource group.

### Example


```python
import openapi_client
from openapi_client.models.paginated_web_services_list import PaginatedWebServicesList
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
    api_instance = openapi_client.WebServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which the web service is located.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    skiptoken = 'skiptoken_example' # str | Continuation token for pagination. (optional)

    try:
        api_response = api_instance.web_services_list_by_resource_group(resource_group_name, api_version, subscription_id, skiptoken=skiptoken)
        print("The response of WebServicesApi->web_services_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebServicesApi->web_services_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group in which the web service is located. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **skiptoken** | **str**| Continuation token for pagination. | [optional] 

### Return type

[**PaginatedWebServicesList**](PaginatedWebServicesList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response includes a paginated array of web service objects and a URI to the next set of results, if any. For the more information the limits of the number of items in a resource group, see https://azure.microsoft.com/en-us/documentation/articles/azure-subscription-service-limits/. Note that the web service objects are sparsely populated to conserve space in the response content. To get the full web service object, call the GET operation on the web service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_services_list_by_subscription_id**
> PaginatedWebServicesList web_services_list_by_subscription_id(api_version, subscription_id, skiptoken=skiptoken)



Gets the web services in the specified subscription.

### Example


```python
import openapi_client
from openapi_client.models.paginated_web_services_list import PaginatedWebServicesList
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
    api_instance = openapi_client.WebServicesApi(api_client)
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    skiptoken = 'skiptoken_example' # str | Continuation token for pagination. (optional)

    try:
        api_response = api_instance.web_services_list_by_subscription_id(api_version, subscription_id, skiptoken=skiptoken)
        print("The response of WebServicesApi->web_services_list_by_subscription_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebServicesApi->web_services_list_by_subscription_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **skiptoken** | **str**| Continuation token for pagination. | [optional] 

### Return type

[**PaginatedWebServicesList**](PaginatedWebServicesList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response includes a paginated array of web service objects and a URI to the next set of results, if any. Note that the web service objects are sparsely populated to conserve space in the response content. To get the full web service object, call the GET operation on the web service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_services_list_keys**
> WebServiceKeys web_services_list_keys(resource_group_name, web_service_name, api_version, subscription_id)



Gets the access keys for the specified web service.

### Example


```python
import openapi_client
from openapi_client.models.web_service_keys import WebServiceKeys
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
    api_instance = openapi_client.WebServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which the web service is located.
    web_service_name = 'web_service_name_example' # str | The name of the web service.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.

    try:
        api_response = api_instance.web_services_list_keys(resource_group_name, web_service_name, api_version, subscription_id)
        print("The response of WebServicesApi->web_services_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebServicesApi->web_services_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group in which the web service is located. | 
 **web_service_name** | **str**| The name of the web service. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 

### Return type

[**WebServiceKeys**](WebServiceKeys.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_services_patch**
> WebService web_services_patch(resource_group_name, web_service_name, api_version, subscription_id, patch_payload)



Modifies an existing web service resource. The PATCH API call is an asynchronous operation. To determine whether it has completed successfully, you must perform a Get operation.

### Example


```python
import openapi_client
from openapi_client.models.patched_web_service import PatchedWebService
from openapi_client.models.web_service import WebService
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
    api_instance = openapi_client.WebServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which the web service is located.
    web_service_name = 'web_service_name_example' # str | The name of the web service.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    patch_payload = openapi_client.PatchedWebService() # PatchedWebService | The payload to use to patch the web service.

    try:
        api_response = api_instance.web_services_patch(resource_group_name, web_service_name, api_version, subscription_id, patch_payload)
        print("The response of WebServicesApi->web_services_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebServicesApi->web_services_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group in which the web service is located. | 
 **web_service_name** | **str**| The name of the web service. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **patch_payload** | [**PatchedWebService**](PatchedWebService.md)| The payload to use to patch the web service. | 

### Return type

[**WebService**](WebService.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response payload is identical to the response payload that is returned by the GET operation. The response includes the Provisioning State and the Azure-AsyncOperation header. To get the progress of the operation, call GET operation on the URL in Azure-AsyncOperation header field. For more information about Asynchronous Operations, see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-async-operations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_services_remove**
> web_services_remove(resource_group_name, web_service_name, api_version, subscription_id)



Deletes the specified web service.

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
    api_instance = openapi_client.WebServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which the web service is located.
    web_service_name = 'web_service_name_example' # str | The name of the web service.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.

    try:
        api_instance.web_services_remove(resource_group_name, web_service_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling WebServicesApi->web_services_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group in which the web service is located. | 
 **web_service_name** | **str**| The name of the web service. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted. Note that a 202 status is returned even if the service did not exist. |  -  |
**204** | No Content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

