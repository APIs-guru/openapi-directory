# openapi_client.UsageDetailsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usage_details_list**](UsageDetailsApi.md#usage_details_list) | **GET** /{scope}/providers/Microsoft.Consumption/usageDetails | 


# **usage_details_list**
> UsageDetailsListResult usage_details_list(scope, api_version, expand=expand, filter=filter, skiptoken=skiptoken, top=top)



Lists the usage details for a scope in reverse chronological order by billing period. Usage details are available via this API only for January 1, 2017 or later.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_details_list_result import UsageDetailsListResult
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
    api_instance = openapi_client.UsageDetailsApi(api_client)
    scope = 'scope_example' # str | The scope of the usage details. The scope can be '/subscriptions/{subscriptionId}' for a subscription, or '/subscriptions/{subscriptionId}/providers/Microsoft.Billing/invoices/{invoiceName}' for an invoice or '/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}' for a billing period.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2017-02-27-preview.
    expand = 'expand_example' # str | May be used to expand the additionalProperties or meterDetails property within a list of usage details. By default, these fields are not included when listing usage details. (optional)
    filter = 'filter_example' # str | May be used to filter usageDetails by usageEnd (Utc time). The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N usageDetails. (optional)

    try:
        api_response = api_instance.usage_details_list(scope, api_version, expand=expand, filter=filter, skiptoken=skiptoken, top=top)
        print("The response of UsageDetailsApi->usage_details_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageDetailsApi->usage_details_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the usage details. The scope can be &#39;/subscriptions/{subscriptionId}&#39; for a subscription, or &#39;/subscriptions/{subscriptionId}/providers/Microsoft.Billing/invoices/{invoiceName}&#39; for an invoice or &#39;/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}&#39; for a billing period. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2017-02-27-preview. | 
 **expand** | **str**| May be used to expand the additionalProperties or meterDetails property within a list of usage details. By default, these fields are not included when listing usage details. | [optional] 
 **filter** | **str**| May be used to filter usageDetails by usageEnd (Utc time). The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N usageDetails. | [optional] 

### Return type

[**UsageDetailsListResult**](UsageDetailsListResult.md)

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

