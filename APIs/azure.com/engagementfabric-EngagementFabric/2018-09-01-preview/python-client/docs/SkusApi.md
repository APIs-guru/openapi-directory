# openapi_client.SkusApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**s_kus_list**](SkusApi.md#s_kus_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.EngagementFabric/skus | List available SKUs of EngagementFabric resource


# **s_kus_list**
> SkuDescriptionList s_kus_list(subscription_id, api_version)

List available SKUs of EngagementFabric resource

### Example


```python
import openapi_client
from openapi_client.models.sku_description_list import SkuDescriptionList
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
    api_instance = openapi_client.SkusApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID
    api_version = 'api_version_example' # str | API version

    try:
        # List available SKUs of EngagementFabric resource
        api_response = api_instance.s_kus_list(subscription_id, api_version)
        print("The response of SkusApi->s_kus_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkusApi->s_kus_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID | 
 **api_version** | **str**| API version | 

### Return type

[**SkuDescriptionList**](SkuDescriptionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

