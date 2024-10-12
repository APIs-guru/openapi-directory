# openapi_client.OperationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registries_check_name_availability**](OperationApi.md#registries_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.ContainerRegistry/checkNameAvailability | 


# **registries_check_name_availability**
> RegistryNameStatus registries_check_name_availability(api_version, subscription_id, registry_name_check_request)



Checks whether the container registry name is available for use. The name must contain only alphanumeric characters, be globally unique, and between 5 and 60 characters in length.

### Example


```python
import openapi_client
from openapi_client.models.registry_name_check_request import RegistryNameCheckRequest
from openapi_client.models.registry_name_status import RegistryNameStatus
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
    api_instance = openapi_client.OperationApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    registry_name_check_request = openapi_client.RegistryNameCheckRequest() # RegistryNameCheckRequest | The object containing information for the availability request.

    try:
        api_response = api_instance.registries_check_name_availability(api_version, subscription_id, registry_name_check_request)
        print("The response of OperationApi->registries_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationApi->registries_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **registry_name_check_request** | [**RegistryNameCheckRequest**](RegistryNameCheckRequest.md)| The object containing information for the availability request. | 

### Return type

[**RegistryNameStatus**](RegistryNameStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

