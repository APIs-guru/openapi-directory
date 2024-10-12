# openapi_client.TransactionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transactions_list_by_billing_account_name**](TransactionsApi.md#transactions_list_by_billing_account_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/transactions | 
[**transactions_list_by_billing_profile_name**](TransactionsApi.md#transactions_list_by_billing_profile_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/transactions | 
[**transactions_list_by_customer_name**](TransactionsApi.md#transactions_list_by_customer_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/transactions | 
[**transactions_list_by_invoice_section_name**](TransactionsApi.md#transactions_list_by_invoice_section_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/transactions | 


# **transactions_list_by_billing_account_name**
> TransactionsListResult transactions_list_by_billing_account_name(billing_account_name, api_version, start_date, end_date, filter=filter)



Lists the transactions by billing account name for given start and end date.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transactions_list_result import TransactionsListResult
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
    api_instance = openapi_client.TransactionsApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    start_date = 'start_date_example' # str | Start date
    end_date = 'end_date_example' # str | End date
    filter = 'filter_example' # str | May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)

    try:
        api_response = api_instance.transactions_list_by_billing_account_name(billing_account_name, api_version, start_date, end_date, filter=filter)
        print("The response of TransactionsApi->transactions_list_by_billing_account_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->transactions_list_by_billing_account_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| Billing Account Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **start_date** | **str**| Start date | 
 **end_date** | **str**| End date | 
 **filter** | **str**| May be used to filter by transaction kind. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 

### Return type

[**TransactionsListResult**](TransactionsListResult.md)

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

# **transactions_list_by_billing_profile_name**
> TransactionsListResult transactions_list_by_billing_profile_name(billing_account_name, billing_profile_name, api_version, start_date, end_date, filter=filter)



Lists the transactions by billing profile name for given start date and end date.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transactions_list_result import TransactionsListResult
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
    api_instance = openapi_client.TransactionsApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    start_date = 'start_date_example' # str | Start date
    end_date = 'end_date_example' # str | End date
    filter = 'filter_example' # str | May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)

    try:
        api_response = api_instance.transactions_list_by_billing_profile_name(billing_account_name, billing_profile_name, api_version, start_date, end_date, filter=filter)
        print("The response of TransactionsApi->transactions_list_by_billing_profile_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->transactions_list_by_billing_profile_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| Billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **start_date** | **str**| Start date | 
 **end_date** | **str**| End date | 
 **filter** | **str**| May be used to filter by transaction kind. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 

### Return type

[**TransactionsListResult**](TransactionsListResult.md)

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

# **transactions_list_by_customer_name**
> TransactionsListResult transactions_list_by_customer_name(billing_account_name, customer_name, api_version, start_date, end_date, filter=filter)



Lists the transactions by invoice section name for given start date and end date.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transactions_list_result import TransactionsListResult
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
    api_instance = openapi_client.TransactionsApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    customer_name = 'customer_name_example' # str | Customer Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    start_date = 'start_date_example' # str | Start date
    end_date = 'end_date_example' # str | End date
    filter = 'filter_example' # str | May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)

    try:
        api_response = api_instance.transactions_list_by_customer_name(billing_account_name, customer_name, api_version, start_date, end_date, filter=filter)
        print("The response of TransactionsApi->transactions_list_by_customer_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->transactions_list_by_customer_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| Billing Account Id. | 
 **customer_name** | **str**| Customer Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **start_date** | **str**| Start date | 
 **end_date** | **str**| End date | 
 **filter** | **str**| May be used to filter by transaction kind. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 

### Return type

[**TransactionsListResult**](TransactionsListResult.md)

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

# **transactions_list_by_invoice_section_name**
> TransactionsListResult transactions_list_by_invoice_section_name(billing_account_name, invoice_section_name, api_version, start_date, end_date, filter=filter)



Lists the transactions by invoice section name for given start date and end date.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transactions_list_result import TransactionsListResult
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
    api_instance = openapi_client.TransactionsApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    start_date = 'start_date_example' # str | Start date
    end_date = 'end_date_example' # str | End date
    filter = 'filter_example' # str | May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)

    try:
        api_response = api_instance.transactions_list_by_invoice_section_name(billing_account_name, invoice_section_name, api_version, start_date, end_date, filter=filter)
        print("The response of TransactionsApi->transactions_list_by_invoice_section_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->transactions_list_by_invoice_section_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| Billing Account Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **start_date** | **str**| Start date | 
 **end_date** | **str**| End date | 
 **filter** | **str**| May be used to filter by transaction kind. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 

### Return type

[**TransactionsListResult**](TransactionsListResult.md)

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

