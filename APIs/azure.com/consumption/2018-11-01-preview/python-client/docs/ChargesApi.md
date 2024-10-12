# openapi_client.ChargesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**charges_by_billing_account_list**](ChargesApi.md#charges_by_billing_account_list) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Consumption/charges | 
[**charges_by_billing_profile_list**](ChargesApi.md#charges_by_billing_profile_list) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/providers/Microsoft.Consumption/charges | 
[**charges_by_invoice_section_list**](ChargesApi.md#charges_by_invoice_section_list) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}/providers/Microsoft.Consumption/charges | 


# **charges_by_billing_account_list**
> ChargesListByBillingAccount charges_by_billing_account_list(billing_account_id, api_version, start_date, end_date, apply=apply)



Lists the charges by billingAccountId for given start and end date. Start and end date are used to determine the billing period. For current month, the data will be provided from month to date. If there are no charges for a month then that month will show all zeroes.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.charges_list_by_billing_account import ChargesListByBillingAccount
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
    api_instance = openapi_client.ChargesApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    start_date = 'start_date_example' # str | Start date
    end_date = 'end_date_example' # str | End date
    apply = 'apply_example' # str | May be used to group charges by properties/billingProfileId, or properties/invoiceSectionId. (optional)

    try:
        api_response = api_instance.charges_by_billing_account_list(billing_account_id, api_version, start_date, end_date, apply=apply)
        print("The response of ChargesApi->charges_by_billing_account_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChargesApi->charges_by_billing_account_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| BillingAccount ID | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **start_date** | **str**| Start date | 
 **end_date** | **str**| End date | 
 **apply** | **str**| May be used to group charges by properties/billingProfileId, or properties/invoiceSectionId. | [optional] 

### Return type

[**ChargesListByBillingAccount**](ChargesListByBillingAccount.md)

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

# **charges_by_billing_profile_list**
> ChargesListByBillingProfile charges_by_billing_profile_list(billing_account_id, billing_profile_id, api_version, start_date, end_date)



Lists the charges by billing profile id for given start and end date. Start and end date are used to determine the billing period. For current month, the data will be provided from month to date. If there are no charges for a month then that month will show all zeroes.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.charges_list_by_billing_profile import ChargesListByBillingProfile
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
    api_instance = openapi_client.ChargesApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    billing_profile_id = 'billing_profile_id_example' # str | Billing Profile Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    start_date = 'start_date_example' # str | Start date
    end_date = 'end_date_example' # str | End date

    try:
        api_response = api_instance.charges_by_billing_profile_list(billing_account_id, billing_profile_id, api_version, start_date, end_date)
        print("The response of ChargesApi->charges_by_billing_profile_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChargesApi->charges_by_billing_profile_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| BillingAccount ID | 
 **billing_profile_id** | **str**| Billing Profile Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **start_date** | **str**| Start date | 
 **end_date** | **str**| End date | 

### Return type

[**ChargesListByBillingProfile**](ChargesListByBillingProfile.md)

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

# **charges_by_invoice_section_list**
> ChargesListByInvoiceSection charges_by_invoice_section_list(billing_account_id, invoice_section_id, api_version, start_date, end_date, apply=apply)



Lists the charges by invoice section id for given start and end date. Start and end date are used to determine the billing period. For current month, the data will be provided from month to date. If there are no charges for a month then that month will show all zeroes.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.charges_list_by_invoice_section import ChargesListByInvoiceSection
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
    api_instance = openapi_client.ChargesApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    invoice_section_id = 'invoice_section_id_example' # str | Invoice Section Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    start_date = 'start_date_example' # str | Start date
    end_date = 'end_date_example' # str | End date
    apply = 'apply_example' # str | May be used to group charges by properties/productName. (optional)

    try:
        api_response = api_instance.charges_by_invoice_section_list(billing_account_id, invoice_section_id, api_version, start_date, end_date, apply=apply)
        print("The response of ChargesApi->charges_by_invoice_section_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChargesApi->charges_by_invoice_section_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| BillingAccount ID | 
 **invoice_section_id** | **str**| Invoice Section Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **start_date** | **str**| Start date | 
 **end_date** | **str**| End date | 
 **apply** | **str**| May be used to group charges by properties/productName. | [optional] 

### Return type

[**ChargesListByInvoiceSection**](ChargesListByInvoiceSection.md)

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

