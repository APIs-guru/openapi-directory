# openapi_client.ForecastsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**forecasts_list**](ForecastsApi.md#forecasts_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Consumption/forecasts | 


# **forecasts_list**
> ForecastsListResult forecasts_list(api_version, subscription_id, filter=filter)



Lists the forecast charges by subscriptionId.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.forecasts_list_result import ForecastsListResult
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
    api_instance = openapi_client.ForecastsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    filter = 'filter_example' # str | May be used to filter forecasts by properties/usageDate (Utc time), properties/chargeType or properties/grain. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. (optional)

    try:
        api_response = api_instance.forecasts_list(api_version, subscription_id, filter=filter)
        print("The response of ForecastsApi->forecasts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ForecastsApi->forecasts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **filter** | **str**| May be used to filter forecasts by properties/usageDate (Utc time), properties/chargeType or properties/grain. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. | [optional] 

### Return type

[**ForecastsListResult**](ForecastsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

