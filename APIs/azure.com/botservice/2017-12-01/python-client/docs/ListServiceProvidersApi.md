# openapi_client.ListServiceProvidersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bot_connection_list_service_providers**](ListServiceProvidersApi.md#bot_connection_list_service_providers) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.BotService/listAuthServiceProviders | 


# **bot_connection_list_service_providers**
> ServiceProviderResponseList bot_connection_list_service_providers(api_version, subscription_id)



Lists the available Service Providers for creating Connection Settings

### Example


```python
import openapi_client
from openapi_client.models.service_provider_response_list import ServiceProviderResponseList
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
    api_instance = openapi_client.ListServiceProvidersApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-12-01
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_response = api_instance.bot_connection_list_service_providers(api_version, subscription_id)
        print("The response of ListServiceProvidersApi->bot_connection_list_service_providers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListServiceProvidersApi->bot_connection_list_service_providers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-12-01 | 
 **subscription_id** | **str**| Azure Subscription ID. | 

### Return type

[**ServiceProviderResponseList**](ServiceProviderResponseList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If resource is retrieved successfully, the service should return 200 (OK). |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

