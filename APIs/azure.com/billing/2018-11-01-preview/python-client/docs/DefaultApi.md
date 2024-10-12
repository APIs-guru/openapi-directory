# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billing_subscriptions_transfer**](DefaultApi.md#billing_subscriptions_transfer) | **POST** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/billingSubscriptions/{billingSubscriptionName}/transfer | 
[**billing_subscriptions_validate_transfer**](DefaultApi.md#billing_subscriptions_validate_transfer) | **POST** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/billingSubscriptions/{billingSubscriptionName}/validateTransferEligibility | 
[**products_validate_transfer**](DefaultApi.md#products_validate_transfer) | **POST** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/products/{productName}/validateTransferEligibility | 


# **billing_subscriptions_transfer**
> TransferBillingSubscriptionResult billing_subscriptions_transfer(billing_account_name, invoice_section_name, billing_subscription_name, parameters)



Transfers the subscription from one invoice section to another within a billing account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transfer_billing_subscription_request_properties import TransferBillingSubscriptionRequestProperties
from openapi_client.models.transfer_billing_subscription_result import TransferBillingSubscriptionResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    billing_subscription_name = 'billing_subscription_name_example' # str | Billing Subscription Id.
    parameters = openapi_client.TransferBillingSubscriptionRequestProperties() # TransferBillingSubscriptionRequestProperties | Parameters supplied to the Transfer Billing Subscription operation.

    try:
        api_response = api_instance.billing_subscriptions_transfer(billing_account_name, invoice_section_name, billing_subscription_name, parameters)
        print("The response of DefaultApi->billing_subscriptions_transfer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->billing_subscriptions_transfer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| Billing Account Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **billing_subscription_name** | **str**| Billing Subscription Id. | 
 **parameters** | [**TransferBillingSubscriptionRequestProperties**](TransferBillingSubscriptionRequestProperties.md)| Parameters supplied to the Transfer Billing Subscription operation. | 

### Return type

[**TransferBillingSubscriptionResult**](TransferBillingSubscriptionResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. Billing Subscription transfer is in progress. |  * Retry-After - Recommends the retryable time after receiving this. <br>  * Azure-AsyncOperation - URI to poll for the operation status <br>  * Location - Location URI to poll for result. <br>  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billing_subscriptions_validate_transfer**
> ValidateSubscriptionTransferEligibilityResult billing_subscriptions_validate_transfer(billing_account_name, invoice_section_name, billing_subscription_name, parameters)



Validates the transfer of billing subscriptions across invoice sections.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transfer_billing_subscription_request_properties import TransferBillingSubscriptionRequestProperties
from openapi_client.models.validate_subscription_transfer_eligibility_result import ValidateSubscriptionTransferEligibilityResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    billing_subscription_name = 'billing_subscription_name_example' # str | Billing Subscription Id.
    parameters = openapi_client.TransferBillingSubscriptionRequestProperties() # TransferBillingSubscriptionRequestProperties | Parameters supplied to the Transfer Billing Subscription operation.

    try:
        api_response = api_instance.billing_subscriptions_validate_transfer(billing_account_name, invoice_section_name, billing_subscription_name, parameters)
        print("The response of DefaultApi->billing_subscriptions_validate_transfer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->billing_subscriptions_validate_transfer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| Billing Account Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **billing_subscription_name** | **str**| Billing Subscription Id. | 
 **parameters** | [**TransferBillingSubscriptionRequestProperties**](TransferBillingSubscriptionRequestProperties.md)| Parameters supplied to the Transfer Billing Subscription operation. | 

### Return type

[**ValidateSubscriptionTransferEligibilityResult**](ValidateSubscriptionTransferEligibilityResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_validate_transfer**
> ValidateProductTransferEligibilityResult products_validate_transfer(billing_account_name, invoice_section_name, product_name, parameters)



Validates the transfer of products across invoice sections.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transfer_product_request_properties import TransferProductRequestProperties
from openapi_client.models.validate_product_transfer_eligibility_result import ValidateProductTransferEligibilityResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    product_name = 'product_name_example' # str | Invoice Id.
    parameters = openapi_client.TransferProductRequestProperties() # TransferProductRequestProperties | Parameters supplied to the Transfer Products operation.

    try:
        api_response = api_instance.products_validate_transfer(billing_account_name, invoice_section_name, product_name, parameters)
        print("The response of DefaultApi->products_validate_transfer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->products_validate_transfer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| Billing Account Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **product_name** | **str**| Invoice Id. | 
 **parameters** | [**TransferProductRequestProperties**](TransferProductRequestProperties.md)| Parameters supplied to the Transfer Products operation. | 

### Return type

[**ValidateProductTransferEligibilityResult**](ValidateProductTransferEligibilityResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

