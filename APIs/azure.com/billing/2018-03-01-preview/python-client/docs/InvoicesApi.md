# openapi_client.InvoicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoices_get**](InvoicesApi.md#invoices_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Billing/invoices/{invoiceName} | 
[**invoices_get_latest**](InvoicesApi.md#invoices_get_latest) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Billing/invoices/latest | 
[**invoices_list**](InvoicesApi.md#invoices_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Billing/invoices | 


# **invoices_get**
> Invoice invoices_get(subscription_id, api_version, invoice_name)



Gets a named invoice resource. When getting a single invoice, the downloadUrl property is expanded automatically.  This is only supported for Azure Web-Direct subscriptions. Other subscription types which were not purchased directly through the Azure web portal are not supported through this preview API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.invoice import Invoice
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
    api_instance = openapi_client.InvoicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-03-01-preview.
    invoice_name = 'invoice_name_example' # str | The name of an invoice resource.

    try:
        api_response = api_instance.invoices_get(subscription_id, api_version, invoice_name)
        print("The response of InvoicesApi->invoices_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->invoices_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-03-01-preview. | 
 **invoice_name** | **str**| The name of an invoice resource. | 

### Return type

[**Invoice**](Invoice.md)

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

# **invoices_get_latest**
> Invoice invoices_get_latest(subscription_id, api_version)



Gets the most recent invoice. When getting a single invoice, the downloadUrl property is expanded automatically.  This is only supported for Azure Web-Direct subscriptions. Other subscription types which were not purchased directly through the Azure web portal are not supported through this preview API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.invoice import Invoice
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
    api_instance = openapi_client.InvoicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-03-01-preview.

    try:
        api_response = api_instance.invoices_get_latest(subscription_id, api_version)
        print("The response of InvoicesApi->invoices_get_latest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->invoices_get_latest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-03-01-preview. | 

### Return type

[**Invoice**](Invoice.md)

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

# **invoices_list**
> InvoicesListResult invoices_list(subscription_id, api_version, expand=expand, filter=filter, skiptoken=skiptoken, top=top)



Lists the available invoices for a subscription in reverse chronological order beginning with the most recent invoice. In preview, invoices are available via this API only for invoice periods which end December 1, 2016 or later.  This is only supported for Azure Web-Direct subscriptions. Other subscription types which were not purchased directly through the Azure web portal are not supported through this preview API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.invoices_list_result import InvoicesListResult
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
    api_instance = openapi_client.InvoicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-03-01-preview.
    expand = 'expand_example' # str | May be used to expand the downloadUrl property within a list of invoices. This enables download links to be generated for multiple invoices at once. By default, downloadURLs are not included when listing invoices. (optional)
    filter = 'filter_example' # str | May be used to filter invoices by invoicePeriodEndDate. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. (optional)
    skiptoken = 'skiptoken_example' # str | Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N invoices. (optional)

    try:
        api_response = api_instance.invoices_list(subscription_id, api_version, expand=expand, filter=filter, skiptoken=skiptoken, top=top)
        print("The response of InvoicesApi->invoices_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->invoices_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-03-01-preview. | 
 **expand** | **str**| May be used to expand the downloadUrl property within a list of invoices. This enables download links to be generated for multiple invoices at once. By default, downloadURLs are not included when listing invoices. | [optional] 
 **filter** | **str**| May be used to filter invoices by invoicePeriodEndDate. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. | [optional] 
 **skiptoken** | **str**| Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N invoices. | [optional] 

### Return type

[**InvoicesListResult**](InvoicesListResult.md)

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

