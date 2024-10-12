# openapi_client.InvoicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoices_get**](InvoicesApi.md#invoices_get) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoices/{invoiceName} | 
[**invoices_get_by_id**](InvoicesApi.md#invoices_get_by_id) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{billingSubscriptionName}/invoices/{invoiceName} | 
[**invoices_list_by_billing_account**](InvoicesApi.md#invoices_list_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices | 
[**invoices_list_by_billing_profile**](InvoicesApi.md#invoices_list_by_billing_profile) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoices | 
[**invoices_list_by_billing_subscription**](InvoicesApi.md#invoices_list_by_billing_subscription) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{billingSubscriptionName}/invoices | 


# **invoices_get**
> Invoice invoices_get(api_version, billing_account_name, billing_profile_name, invoice_name)



Get the invoice by name.

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    invoice_name = 'invoice_name_example' # str | Invoice Id.

    try:
        api_response = api_instance.invoices_get(api_version, billing_account_name, billing_profile_name, invoice_name)
        print("The response of InvoicesApi->invoices_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->invoices_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **invoice_name** | **str**| Invoice Id. | 

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

# **invoices_get_by_id**
> Invoice invoices_get_by_id(billing_account_name, billing_subscription_name, invoice_name, api_version)



Gets the invoice by name.

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
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_subscription_name = 'billing_subscription_name_example' # str | Billing Subscription Id.
    invoice_name = 'invoice_name_example' # str | Invoice Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.

    try:
        api_response = api_instance.invoices_get_by_id(billing_account_name, billing_subscription_name, invoice_name, api_version)
        print("The response of InvoicesApi->invoices_get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->invoices_get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_subscription_name** | **str**| Billing Subscription Id. | 
 **invoice_name** | **str**| Invoice Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 

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

# **invoices_list_by_billing_account**
> InvoiceListResult invoices_list_by_billing_account(api_version, billing_account_name, period_start_date, period_end_date)



List of invoices for a billing account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.invoice_list_result import InvoiceListResult
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    period_start_date = 'period_start_date_example' # str | Invoice period start date.
    period_end_date = 'period_end_date_example' # str | Invoice period end date.

    try:
        api_response = api_instance.invoices_list_by_billing_account(api_version, billing_account_name, period_start_date, period_end_date)
        print("The response of InvoicesApi->invoices_list_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->invoices_list_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **period_start_date** | **str**| Invoice period start date. | 
 **period_end_date** | **str**| Invoice period end date. | 

### Return type

[**InvoiceListResult**](InvoiceListResult.md)

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

# **invoices_list_by_billing_profile**
> InvoiceListResult invoices_list_by_billing_profile(api_version, billing_account_name, billing_profile_name, period_start_date, period_end_date)



List of invoices for a billing profile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.invoice_list_result import InvoiceListResult
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    period_start_date = 'period_start_date_example' # str | Invoice period start date.
    period_end_date = 'period_end_date_example' # str | Invoice period end date.

    try:
        api_response = api_instance.invoices_list_by_billing_profile(api_version, billing_account_name, billing_profile_name, period_start_date, period_end_date)
        print("The response of InvoicesApi->invoices_list_by_billing_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->invoices_list_by_billing_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **period_start_date** | **str**| Invoice period start date. | 
 **period_end_date** | **str**| Invoice period end date. | 

### Return type

[**InvoiceListResult**](InvoiceListResult.md)

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

# **invoices_list_by_billing_subscription**
> InvoiceListResult invoices_list_by_billing_subscription(billing_account_name, billing_subscription_name, period_start_date, period_end_date, api_version)



Lists invoices by billing subscriptions name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.invoice_list_result import InvoiceListResult
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
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_subscription_name = 'billing_subscription_name_example' # str | Billing Subscription Id.
    period_start_date = 'period_start_date_example' # str | Invoice period start date.
    period_end_date = 'period_end_date_example' # str | Invoice period end date.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.

    try:
        api_response = api_instance.invoices_list_by_billing_subscription(billing_account_name, billing_subscription_name, period_start_date, period_end_date, api_version)
        print("The response of InvoicesApi->invoices_list_by_billing_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoicesApi->invoices_list_by_billing_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_subscription_name** | **str**| Billing Subscription Id. | 
 **period_start_date** | **str**| Invoice period start date. | 
 **period_end_date** | **str**| Invoice period end date. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 

### Return type

[**InvoiceListResult**](InvoiceListResult.md)

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

