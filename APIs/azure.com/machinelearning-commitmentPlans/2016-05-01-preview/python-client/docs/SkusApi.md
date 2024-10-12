# openapi_client.SkusApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**skus_list**](SkusApi.md#skus_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.MachineLearning/skus | 


# **skus_list**
> SkuListResult skus_list(subscription_id, api_version)



Lists the available commitment plan SKUs.

### Example


```python
import openapi_client
from openapi_client.models.sku_list_result import SkuListResult
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
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearning resource provider API to use.

    try:
        api_response = api_instance.skus_list(subscription_id, api_version)
        print("The response of SkusApi->skus_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkusApi->skus_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| The version of the Microsoft.MachineLearning resource provider API to use. | 

### Return type

[**SkuListResult**](SkuListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

