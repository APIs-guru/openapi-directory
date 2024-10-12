# openapi_client.SubscriptionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptions_list_quotas**](SubscriptionsApi.md#subscriptions_list_quotas) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/locations/{location}/quotas | 


# **subscriptions_list_quotas**
> SubscriptionQuotasListResult subscriptions_list_quotas(location, api_version, subscription_id)



Retrieves the subscription's current quota information in a particular region.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription_quotas_list_result import SubscriptionQuotasListResult
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    location = 'location_example' # str | The region in which to retrieve the subscription's quota information. You can find out which regions Azure Stream Analytics is supported in here: https://azure.microsoft.com/en-us/regions/
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.subscriptions_list_quotas(location, api_version, subscription_id)
        print("The response of SubscriptionsApi->subscriptions_list_quotas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_list_quotas: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The region in which to retrieve the subscription&#39;s quota information. You can find out which regions Azure Stream Analytics is supported in here: https://azure.microsoft.com/en-us/regions/ | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SubscriptionQuotasListResult**](SubscriptionQuotasListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the subscription&#39;s quota information in the specified region. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

