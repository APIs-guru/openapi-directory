# openapi_client.PriceSheetApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**price_sheet_get**](PriceSheetApi.md#price_sheet_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Consumption/pricesheets/default | 
[**price_sheet_get_by_billing_period**](PriceSheetApi.md#price_sheet_get_by_billing_period) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}/providers/Microsoft.Consumption/pricesheets/default | 


# **price_sheet_get**
> PriceSheetResult price_sheet_get(subscription_id, api_version, expand=expand, skiptoken=skiptoken, top=top)



Gets the price sheet for a scope by subscriptionId. Price sheet is available via this API only for May 1, 2014 or later.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.price_sheet_result import PriceSheetResult
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
    api_instance = openapi_client.PriceSheetApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-05-31.
    expand = 'expand_example' # str | May be used to expand the properties/meterDetails within a price sheet. By default, these fields are not included when returning price sheet. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the top N results. (optional)

    try:
        api_response = api_instance.price_sheet_get(subscription_id, api_version, expand=expand, skiptoken=skiptoken, top=top)
        print("The response of PriceSheetApi->price_sheet_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriceSheetApi->price_sheet_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-05-31. | 
 **expand** | **str**| May be used to expand the properties/meterDetails within a price sheet. By default, these fields are not included when returning price sheet. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the top N results. | [optional] 

### Return type

[**PriceSheetResult**](PriceSheetResult.md)

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

# **price_sheet_get_by_billing_period**
> PriceSheetResult price_sheet_get_by_billing_period(subscription_id, api_version, billing_period_name, expand=expand, skiptoken=skiptoken, top=top)



Get the price sheet for a scope by subscriptionId and billing period. Price sheet is available via this API only for May 1, 2014 or later.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.price_sheet_result import PriceSheetResult
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
    api_instance = openapi_client.PriceSheetApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-05-31.
    billing_period_name = 'billing_period_name_example' # str | Billing Period Name.
    expand = 'expand_example' # str | May be used to expand the properties/meterDetails within a price sheet. By default, these fields are not included when returning price sheet. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the top N results. (optional)

    try:
        api_response = api_instance.price_sheet_get_by_billing_period(subscription_id, api_version, billing_period_name, expand=expand, skiptoken=skiptoken, top=top)
        print("The response of PriceSheetApi->price_sheet_get_by_billing_period:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriceSheetApi->price_sheet_get_by_billing_period: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-05-31. | 
 **billing_period_name** | **str**| Billing Period Name. | 
 **expand** | **str**| May be used to expand the properties/meterDetails within a price sheet. By default, these fields are not included when returning price sheet. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the top N results. | [optional] 

### Return type

[**PriceSheetResult**](PriceSheetResult.md)

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

