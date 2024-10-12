# openapi_client.TransactionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transactions_get**](TransactionsApi.md#transactions_get) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/transactions/{transactionName} | 
[**transactions_list_by_billing_account**](TransactionsApi.md#transactions_list_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/transactions | 
[**transactions_list_by_billing_profile**](TransactionsApi.md#transactions_list_by_billing_profile) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/transactions | 
[**transactions_list_by_customer**](TransactionsApi.md#transactions_list_by_customer) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/transactions | 
[**transactions_list_by_invoice_section**](TransactionsApi.md#transactions_list_by_invoice_section) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/transactions | 


# **transactions_get**
> Transaction transactions_get(billing_account_name, billing_profile_name, transaction_name, period_start_date, period_end_date, api_version)



Get the transaction.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transaction import Transaction
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
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    transaction_name = 'transaction_name_example' # str | Transaction name.
    period_start_date = 'period_start_date_example' # str | Start date
    period_end_date = 'period_end_date_example' # str | End date
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.

    try:
        api_response = api_instance.transactions_get(billing_account_name, billing_profile_name, transaction_name, period_start_date, period_end_date, api_version)
        print("The response of TransactionsApi->transactions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->transactions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **transaction_name** | **str**| Transaction name. | 
 **period_start_date** | **str**| Start date | 
 **period_end_date** | **str**| End date | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 

### Return type

[**Transaction**](Transaction.md)

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

# **transactions_list_by_billing_account**
> TransactionListResult transactions_list_by_billing_account(billing_account_name, api_version, period_start_date, period_end_date, filter=filter)



Lists the transactions by billing account name for given start and end date.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transaction_list_result import TransactionListResult
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
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    period_start_date = 'period_start_date_example' # str | Start date
    period_end_date = 'period_end_date_example' # str | End date
    filter = 'filter_example' # str | May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)

    try:
        api_response = api_instance.transactions_list_by_billing_account(billing_account_name, api_version, period_start_date, period_end_date, filter=filter)
        print("The response of TransactionsApi->transactions_list_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->transactions_list_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **period_start_date** | **str**| Start date | 
 **period_end_date** | **str**| End date | 
 **filter** | **str**| May be used to filter by transaction kind. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 

### Return type

[**TransactionListResult**](TransactionListResult.md)

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

# **transactions_list_by_billing_profile**
> TransactionListResult transactions_list_by_billing_profile(billing_account_name, billing_profile_name, api_version, period_start_date, period_end_date, filter=filter)



Lists the transactions by billing profile name for given start date and end date.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transaction_list_result import TransactionListResult
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
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    period_start_date = 'period_start_date_example' # str | Start date
    period_end_date = 'period_end_date_example' # str | End date
    filter = 'filter_example' # str | May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)

    try:
        api_response = api_instance.transactions_list_by_billing_profile(billing_account_name, billing_profile_name, api_version, period_start_date, period_end_date, filter=filter)
        print("The response of TransactionsApi->transactions_list_by_billing_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->transactions_list_by_billing_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **period_start_date** | **str**| Start date | 
 **period_end_date** | **str**| End date | 
 **filter** | **str**| May be used to filter by transaction kind. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 

### Return type

[**TransactionListResult**](TransactionListResult.md)

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

# **transactions_list_by_customer**
> TransactionListResult transactions_list_by_customer(billing_account_name, customer_name, api_version, period_start_date, period_end_date, filter=filter)



Lists the transactions by customer id for given start date and end date.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transaction_list_result import TransactionListResult
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
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    customer_name = 'customer_name_example' # str | Customer name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    period_start_date = 'period_start_date_example' # str | Start date
    period_end_date = 'period_end_date_example' # str | End date
    filter = 'filter_example' # str | May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)

    try:
        api_response = api_instance.transactions_list_by_customer(billing_account_name, customer_name, api_version, period_start_date, period_end_date, filter=filter)
        print("The response of TransactionsApi->transactions_list_by_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->transactions_list_by_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **customer_name** | **str**| Customer name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **period_start_date** | **str**| Start date | 
 **period_end_date** | **str**| End date | 
 **filter** | **str**| May be used to filter by transaction kind. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 

### Return type

[**TransactionListResult**](TransactionListResult.md)

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

# **transactions_list_by_invoice_section**
> TransactionListResult transactions_list_by_invoice_section(billing_account_name, billing_profile_name, invoice_section_name, api_version, period_start_date, period_end_date, filter=filter)



Lists the transactions by invoice section name for given start date and end date.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transaction_list_result import TransactionListResult
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
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    period_start_date = 'period_start_date_example' # str | Start date
    period_end_date = 'period_end_date_example' # str | End date
    filter = 'filter_example' # str | May be used to filter by transaction kind. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). (optional)

    try:
        api_response = api_instance.transactions_list_by_invoice_section(billing_account_name, billing_profile_name, invoice_section_name, api_version, period_start_date, period_end_date, filter=filter)
        print("The response of TransactionsApi->transactions_list_by_invoice_section:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->transactions_list_by_invoice_section: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **period_start_date** | **str**| Start date | 
 **period_end_date** | **str**| End date | 
 **filter** | **str**| May be used to filter by transaction kind. The filter supports &#39;eq&#39;, &#39;lt&#39;, &#39;gt&#39;, &#39;le&#39;, &#39;ge&#39;, and &#39;and&#39;. It does not currently support &#39;ne&#39;, &#39;or&#39;, or &#39;not&#39;. Tag filter is a key value pair string where key and value is separated by a colon (:). | [optional] 

### Return type

[**TransactionListResult**](TransactionListResult.md)

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

