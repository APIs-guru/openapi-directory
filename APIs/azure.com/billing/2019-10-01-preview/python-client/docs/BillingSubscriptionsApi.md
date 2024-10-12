# openapi_client.BillingSubscriptionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billing_subscriptions_get**](BillingSubscriptionsApi.md#billing_subscriptions_get) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingSubscriptions/{billingSubscriptionName} | 
[**billing_subscriptions_get_by_customer**](BillingSubscriptionsApi.md#billing_subscriptions_get_by_customer) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/billingSubscriptions/{billingSubscriptionName} | 
[**billing_subscriptions_list_by_billing_account**](BillingSubscriptionsApi.md#billing_subscriptions_list_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions | 
[**billing_subscriptions_list_by_billing_profile**](BillingSubscriptionsApi.md#billing_subscriptions_list_by_billing_profile) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingSubscriptions | 
[**billing_subscriptions_list_by_customer**](BillingSubscriptionsApi.md#billing_subscriptions_list_by_customer) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/billingSubscriptions | 
[**billing_subscriptions_list_by_invoice_section**](BillingSubscriptionsApi.md#billing_subscriptions_list_by_invoice_section) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingSubscriptions | 


# **billing_subscriptions_get**
> BillingSubscription billing_subscriptions_get(billing_account_name, billing_profile_name, invoice_section_name, billing_subscription_name, api_version)



Get a single billing subscription by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_subscription import BillingSubscription
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
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    billing_subscription_name = 'billing_subscription_name_example' # str | Billing Subscription Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.

    try:
        api_response = api_instance.billing_subscriptions_get(billing_account_name, billing_profile_name, invoice_section_name, billing_subscription_name, api_version)
        print("The response of BillingSubscriptionsApi->billing_subscriptions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingSubscriptionsApi->billing_subscriptions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **billing_subscription_name** | **str**| Billing Subscription Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 

### Return type

[**BillingSubscription**](BillingSubscription.md)

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

# **billing_subscriptions_get_by_customer**
> BillingSubscription billing_subscriptions_get_by_customer(billing_account_name, customer_name, billing_subscription_name, api_version)



Get a single billing subscription by id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_subscription import BillingSubscription
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
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    customer_name = 'customer_name_example' # str | Customer name.
    billing_subscription_name = 'billing_subscription_name_example' # str | Billing Subscription Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.

    try:
        api_response = api_instance.billing_subscriptions_get_by_customer(billing_account_name, customer_name, billing_subscription_name, api_version)
        print("The response of BillingSubscriptionsApi->billing_subscriptions_get_by_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingSubscriptionsApi->billing_subscriptions_get_by_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **customer_name** | **str**| Customer name. | 
 **billing_subscription_name** | **str**| Billing Subscription Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 

### Return type

[**BillingSubscription**](BillingSubscription.md)

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

# **billing_subscriptions_list_by_billing_account**
> BillingSubscriptionsListResult billing_subscriptions_list_by_billing_account(billing_account_name, api_version)



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
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.

    try:
        api_response = api_instance.billing_subscriptions_list_by_billing_account(billing_account_name, api_version)
        print("The response of BillingSubscriptionsApi->billing_subscriptions_list_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingSubscriptionsApi->billing_subscriptions_list_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 

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

# **billing_subscriptions_list_by_billing_profile**
> BillingSubscriptionsListResult billing_subscriptions_list_by_billing_profile(billing_account_name, billing_profile_name, api_version)



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
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.

    try:
        api_response = api_instance.billing_subscriptions_list_by_billing_profile(billing_account_name, billing_profile_name, api_version)
        print("The response of BillingSubscriptionsApi->billing_subscriptions_list_by_billing_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingSubscriptionsApi->billing_subscriptions_list_by_billing_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 

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

# **billing_subscriptions_list_by_customer**
> BillingSubscriptionsListResult billing_subscriptions_list_by_customer(billing_account_name, customer_name, api_version)



Lists billing subscription by customer id.

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
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    customer_name = 'customer_name_example' # str | Customer name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.

    try:
        api_response = api_instance.billing_subscriptions_list_by_customer(billing_account_name, customer_name, api_version)
        print("The response of BillingSubscriptionsApi->billing_subscriptions_list_by_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingSubscriptionsApi->billing_subscriptions_list_by_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **customer_name** | **str**| Customer name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 

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

# **billing_subscriptions_list_by_invoice_section**
> BillingSubscriptionsListResult billing_subscriptions_list_by_invoice_section(billing_account_name, billing_profile_name, invoice_section_name, api_version)



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
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.

    try:
        api_response = api_instance.billing_subscriptions_list_by_invoice_section(billing_account_name, billing_profile_name, invoice_section_name, api_version)
        print("The response of BillingSubscriptionsApi->billing_subscriptions_list_by_invoice_section:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingSubscriptionsApi->billing_subscriptions_list_by_invoice_section: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 

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

