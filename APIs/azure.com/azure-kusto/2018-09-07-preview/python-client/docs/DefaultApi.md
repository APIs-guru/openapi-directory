# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clusters_list_skus**](DefaultApi.md#clusters_list_skus) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Kusto/skus | 


# **clusters_list_skus**
> ListSkusResult clusters_list_skus(api_version, subscription_id)



Lists eligible SKUs for Kusto resource provider.

### Example


```python
import openapi_client
from openapi_client.models.list_skus_result import ListSkusResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.clusters_list_skus(api_version, subscription_id)
        print("The response of DefaultApi->clusters_list_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->clusters_list_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ListSkusResult**](ListSkusResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

