# openapi_client.SkusApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resource_skus_list**](SkusApi.md#resource_skus_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/skus | 


# **resource_skus_list**
> ResourceSkusResult resource_skus_list(api_version, subscription_id)



Gets the list of Microsoft.CognitiveServices SKUs available for your Subscription.

### Example


```python
import openapi_client
from openapi_client.models.resource_skus_result import ResourceSkusResult
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-18
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_response = api_instance.resource_skus_list(api_version, subscription_id)
        print("The response of SkusApi->resource_skus_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkusApi->resource_skus_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-18 | 
 **subscription_id** | **str**| Azure Subscription ID. | 

### Return type

[**ResourceSkusResult**](ResourceSkusResult.md)

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

