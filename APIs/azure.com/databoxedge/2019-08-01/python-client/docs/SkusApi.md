# openapi_client.SkusApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**skus_list**](SkusApi.md#skus_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DataBoxEdge/skus | List all the available Skus in the region and information related to them


# **skus_list**
> SkuInformationList skus_list(subscription_id, api_version, filter=filter)

List all the available Skus in the region and information related to them

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sku_information_list import SkuInformationList
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
    api_instance = openapi_client.SkusApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    api_version = 'api_version_example' # str | The API version.
    filter = 'filter_example' # str | Specify $filter='location eq <location>' to filter on location. (optional)

    try:
        # List all the available Skus in the region and information related to them
        api_response = api_instance.skus_list(subscription_id, api_version, filter=filter)
        print("The response of SkusApi->skus_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkusApi->skus_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **api_version** | **str**| The API version. | 
 **filter** | **str**| Specify $filter&#x3D;&#39;location eq &lt;location&gt;&#39; to filter on location. | [optional] 

### Return type

[**SkuInformationList**](SkuInformationList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lists the available Skus and information related to them. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

