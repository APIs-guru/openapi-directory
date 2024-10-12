# openapi_client.BillingSubscriptionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billing_subscriptions_get**](BillingSubscriptionsApi.md#billing_subscriptions_get) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/billingSubscriptions/{billingSubscriptionName} | 
[**billing_subscriptions_get_by_customer_name**](BillingSubscriptionsApi.md#billing_subscriptions_get_by_customer_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/billingSubscriptions/{billingSubscriptionName} | 
[**billing_subscriptions_list_by_billing_account_name**](BillingSubscriptionsApi.md#billing_subscriptions_list_by_billing_account_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions | 
[**billing_subscriptions_list_by_billing_profile_name**](BillingSubscriptionsApi.md#billing_subscriptions_list_by_billing_profile_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingSubscriptions | 
[**billing_subscriptions_list_by_customer_name**](BillingSubscriptionsApi.md#billing_subscriptions_list_by_customer_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/billingSubscriptions | 
[**billing_subscriptions_list_by_invoice_section_name**](BillingSubscriptionsApi.md#billing_subscriptions_list_by_invoice_section_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/billingSubscriptions | 


# **billing_subscriptions_get**
> BillingSubscriptionSummary billing_subscriptions_get(billing_account_name, invoice_section_name, billing_subscription_name, api_version)



Get a single billing subscription by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_subscription_summary import BillingSubscriptionSummary
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
    api_instance = openapi_client.BillingSubscriptionsApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    billing_subscription_name = 'billing_subscription_name_example' # str | Billing Subscription Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.

    try:
        api_response = api_instance.billing_subscriptions_get(billing_account_name, invoice_section_name, billing_subscription_name, api_version)
        print("The response of BillingSubscriptionsApi->billing_subscriptions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingSubscriptionsApi->billing_subscriptions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| Billing Account Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **billing_subscription_name** | **str**| Billing Subscription Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 

### Return type

[**BillingSubscriptionSummary**](BillingSubscriptionSummary.md)

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

# **billing_subscriptions_get_by_customer_name**
> BillingSubscriptionSummary billing_subscriptions_get_by_customer_name(billing_account_name, customer_name, billing_subscription_name, api_version)



Get a single billing subscription by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_subscription_summary import BillingSubscriptionSummary
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
    api_instance = openapi_client.BillingSubscriptionsApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    customer_name = 'customer_name_example' # str | Customer Id.
    billing_subscription_name = 'billing_subscription_name_example' # str | Billing Subscription Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.

    try:
        api_response = api_instance.billing_subscriptions_get_by_customer_name(billing_account_name, customer_name, billing_subscription_name, api_version)
        print("The response of BillingSubscriptionsApi->billing_subscriptions_get_by_customer_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingSubscriptionsApi->billing_subscriptions_get_by_customer_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| Billing Account Id. | 
 **customer_name** | **str**| Customer Id. | 
 **billing_subscription_name** | **str**| Billing Subscription Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 

### Return type

[**BillingSubscriptionSummary**](BillingSubscriptionSummary.md)

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

# **billing_subscriptions_list_by_billing_account_name**
> BillingSubscriptionsListResult billing_subscriptions_list_by_billing_account_name(billing_account_name, api_version)



Lists billing subscriptions by billing account name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_subscriptions_list_result import BillingSubscriptionsListResult
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
    api_instance = openapi_client.BillingSubscriptionsApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.

    try:
        api_response = api_instance.billing_subscriptions_list_by_billing_account_name(billing_account_name, api_version)
        print("The response of BillingSubscriptionsApi->billing_subscriptions_list_by_billing_account_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingSubscriptionsApi->billing_subscriptions_list_by_billing_account_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| Billing Account Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 

### Return type

[**BillingSubscriptionsListResult**](BillingSubscriptionsListResult.md)

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

# **billing_subscriptions_list_by_billing_profile_name**
> BillingSubscriptionsListResult billing_subscriptions_list_by_billing_profile_name(billing_account_name, billing_profile_name, api_version)



Lists billing subscriptions by billing profile name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_subscriptions_list_result import BillingSubscriptionsListResult
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
    api_instance = openapi_client.BillingSubscriptionsApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.

    try:
        api_response = api_instance.billing_subscriptions_list_by_billing_profile_name(billing_account_name, billing_profile_name, api_version)
        print("The response of BillingSubscriptionsApi->billing_subscriptions_list_by_billing_profile_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingSubscriptionsApi->billing_subscriptions_list_by_billing_profile_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| Billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 

### Return type

[**BillingSubscriptionsListResult**](BillingSubscriptionsListResult.md)

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

# **billing_subscriptions_list_by_customer_name**
> BillingSubscriptionsListResult billing_subscriptions_list_by_customer_name(billing_account_name, customer_name, api_version)



Lists billing subscription by customer name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_subscriptions_list_result import BillingSubscriptionsListResult
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
    api_instance = openapi_client.BillingSubscriptionsApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    customer_name = 'customer_name_example' # str | Customer Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.

    try:
        api_response = api_instance.billing_subscriptions_list_by_customer_name(billing_account_name, customer_name, api_version)
        print("The response of BillingSubscriptionsApi->billing_subscriptions_list_by_customer_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingSubscriptionsApi->billing_subscriptions_list_by_customer_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| Billing Account Id. | 
 **customer_name** | **str**| Customer Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 

### Return type

[**BillingSubscriptionsListResult**](BillingSubscriptionsListResult.md)

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

# **billing_subscriptions_list_by_invoice_section_name**
> BillingSubscriptionsListResult billing_subscriptions_list_by_invoice_section_name(billing_account_name, invoice_section_name, api_version)



Lists billing subscription by invoice section name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_subscriptions_list_result import BillingSubscriptionsListResult
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
    api_instance = openapi_client.BillingSubscriptionsApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.

    try:
        api_response = api_instance.billing_subscriptions_list_by_invoice_section_name(billing_account_name, invoice_section_name, api_version)
        print("The response of BillingSubscriptionsApi->billing_subscriptions_list_by_invoice_section_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingSubscriptionsApi->billing_subscriptions_list_by_invoice_section_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| Billing Account Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 

### Return type

[**BillingSubscriptionsListResult**](BillingSubscriptionsListResult.md)

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

