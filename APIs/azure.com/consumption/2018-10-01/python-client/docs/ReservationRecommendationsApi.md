# openapi_client.ReservationRecommendationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reservation_recommendations_list**](ReservationRecommendationsApi.md#reservation_recommendations_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Consumption/reservationRecommendations | 


# **reservation_recommendations_list**
> ReservationRecommendationsListResult reservation_recommendations_list(api_version, subscription_id, filter=filter)



List of recommendations for purchasing reserved instances.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.reservation_recommendations_list_result import ReservationRecommendationsListResult
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
    api_instance = openapi_client.ReservationRecommendationsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-10-01.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    filter = 'filter_example' # str | May be used to filter reservationRecommendations by properties/scope and properties/lookBackPeriod. (optional)

    try:
        api_response = api_instance.reservation_recommendations_list(api_version, subscription_id, filter=filter)
        print("The response of ReservationRecommendationsApi->reservation_recommendations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationRecommendationsApi->reservation_recommendations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-10-01. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **filter** | **str**| May be used to filter reservationRecommendations by properties/scope and properties/lookBackPeriod. | [optional] 

### Return type

[**ReservationRecommendationsListResult**](ReservationRecommendationsListResult.md)

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

