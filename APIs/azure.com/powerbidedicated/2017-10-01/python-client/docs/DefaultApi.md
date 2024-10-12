# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**capacities_list_skus**](DefaultApi.md#capacities_list_skus) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.PowerBIDedicated/skus | 


# **capacities_list_skus**
> SkuEnumerationForNewResourceResult capacities_list_skus(api_version, subscription_id)



Lists eligible SKUs for PowerBI Dedicated resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sku_enumeration_for_new_resource_result import SkuEnumerationForNewResourceResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.capacities_list_skus(api_version, subscription_id)
        print("The response of DefaultApi->capacities_list_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->capacities_list_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SkuEnumerationForNewResourceResult**](SkuEnumerationForNewResourceResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

