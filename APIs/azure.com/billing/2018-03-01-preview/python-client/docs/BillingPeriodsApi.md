# openapi_client.BillingPeriodsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billing_periods_get**](BillingPeriodsApi.md#billing_periods_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName} | 
[**billing_periods_list**](BillingPeriodsApi.md#billing_periods_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingPeriods | 


# **billing_periods_get**
> BillingPeriod billing_periods_get(subscription_id, api_version, billing_period_name)



Gets a named billing period.  This is only supported for Azure Web-Direct subscriptions. Other subscription types which were not purchased directly through the Azure web portal are not supported through this preview API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_period import BillingPeriod
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
    api_instance = openapi_client.BillingPeriodsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-03-01-preview.
    billing_period_name = 'billing_period_name_example' # str | The name of a BillingPeriod resource.

    try:
        api_response = api_instance.billing_periods_get(subscription_id, api_version, billing_period_name)
        print("The response of BillingPeriodsApi->billing_periods_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingPeriodsApi->billing_periods_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-03-01-preview. | 
 **billing_period_name** | **str**| The name of a BillingPeriod resource. | 

### Return type

[**BillingPeriod**](BillingPeriod.md)

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

# **billing_periods_list**
> BillingPeriodsListResult billing_periods_list(subscription_id, api_version, filter=filter, skiptoken=skiptoken, top=top)



Lists the available billing periods for a subscription in reverse chronological order. This is only supported for Azure Web-Direct subscriptions. Other subscription types which were not purchased directly through the Azure web portal are not supported through this preview API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_periods_list_result import BillingPeriodsListResult
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
    api_instance = openapi_client.BillingPeriodsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-03-01-preview.
    filter = 'filter_example' # str | May be used to filter billing periods by billingPeriodEndDate. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N billing periods. (optional)

    try:
        api_response = api_instance.billing_periods_list(subscription_id, api_version, filter=filter, skiptoken=skiptoken, top=top)
        print("The response of BillingPeriodsApi->billing_periods_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingPeriodsApi->billing_periods_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-03-01-preview. | 
 **filter** | **str**| May be used to filter billing periods by billingPeriodEndDate. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N billing periods. | [optional] 

### Return type

[**BillingPeriodsListResult**](BillingPeriodsListResult.md)

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

