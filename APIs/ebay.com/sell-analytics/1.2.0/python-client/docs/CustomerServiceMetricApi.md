# openapi_client.CustomerServiceMetricApi

All URIs are relative to *https://api.ebay.com/sell/analytics/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_customer_service_metric**](CustomerServiceMetricApi.md#get_customer_service_metric) | **GET** /customer_service_metric/{customer_service_metric_type}/{evaluation_type} | 


# **get_customer_service_metric**
> GetCustomerServiceMetricResponse get_customer_service_metric(customer_service_metric_type, evaluation_marketplace_id, evaluation_type)



Use this method to retrieve a seller's performance and rating for the customer service metric. Control the response from the getCustomerServiceMetric method using the following path and query parameters: customer_service_metric_type controls the type of customer service transactions evaluated for the metric rating. evaluation_type controls the period you want to review. evaluation_marketplace_id specifies the target marketplace for the evaluation. Currently, metric data is returned for only peer benchmarking. For more detail on the workings of peer benchmarking, see Service metrics policy.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.get_customer_service_metric_response import GetCustomerServiceMetricResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/analytics/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/analytics/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomerServiceMetricApi(api_client)
    customer_service_metric_type = 'customer_service_metric_type_example' # str | Use this path parameter to specify the type of customer service metrics and benchmark data you want returned for the seller. Supported types are: ITEM_NOT_AS_DESCRIBED ITEM_NOT_RECEIVED
    evaluation_marketplace_id = 'evaluation_marketplace_id_example' # str | Use this query parameter to specify the Marketplace ID to evaluate for the customer service metrics and benchmark data. For the list of supported marketplaces, see Analytics API requirements and restrictions. For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/analytics/types/MarketplaceIdEnum.html
    evaluation_type = 'evaluation_type_example' # str | Use this path parameter to specify the type of the seller evaluation you want returned, either: CURRENT &ndash; A monthly evaluation that occurs on the 20th of every month. PROJECTED &ndash; A daily evaluation that provides a projection of how the seller is currently performing with regards to the upcoming evaluation period.

    try:
        api_response = api_instance.get_customer_service_metric(customer_service_metric_type, evaluation_marketplace_id, evaluation_type)
        print("The response of CustomerServiceMetricApi->get_customer_service_metric:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerServiceMetricApi->get_customer_service_metric: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_service_metric_type** | **str**| Use this path parameter to specify the type of customer service metrics and benchmark data you want returned for the seller. Supported types are: ITEM_NOT_AS_DESCRIBED ITEM_NOT_RECEIVED | 
 **evaluation_marketplace_id** | **str**| Use this query parameter to specify the Marketplace ID to evaluate for the customer service metrics and benchmark data. For the list of supported marketplaces, see Analytics API requirements and restrictions. For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/analytics/types/MarketplaceIdEnum.html | 
 **evaluation_type** | **str**| Use this path parameter to specify the type of the seller evaluation you want returned, either: CURRENT &amp;ndash; A monthly evaluation that occurs on the 20th of every month. PROJECTED &amp;ndash; A daily evaluation that provides a projection of how the seller is currently performing with regards to the upcoming evaluation period. | 

### Return type

[**GetCustomerServiceMetricResponse**](GetCustomerServiceMetricResponse.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Resource not found. Invalid path parameters.  |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

