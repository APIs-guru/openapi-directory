# openapi_client.RegionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**regions_list_by_sku**](RegionsApi.md#regions_list_by_sku) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ServiceBus/sku/{sku}/regions | 


# **regions_list_by_sku**
> PremiumMessagingRegionsListResult regions_list_by_sku(api_version, subscription_id, sku)



Gets the available Regions for a given sku

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.premium_messaging_regions_list_result import PremiumMessagingRegionsListResult
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
    api_instance = openapi_client.RegionsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    sku = 'sku_example' # str | The sku type.

    try:
        api_response = api_instance.regions_list_by_sku(api_version, subscription_id, sku)
        print("The response of RegionsApi->regions_list_by_sku:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegionsApi->regions_list_by_sku: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **sku** | **str**| The sku type. | 

### Return type

[**PremiumMessagingRegionsListResult**](PremiumMessagingRegionsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Regions successfully returned. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

