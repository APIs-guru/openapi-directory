# openapi_client.TransfersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**partner_transfers_cancel**](TransfersApi.md#partner_transfers_cancel) | **DELETE** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/transfers/{transferName} | 
[**partner_transfers_get**](TransfersApi.md#partner_transfers_get) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/transfers/{transferName} | 
[**partner_transfers_initiate**](TransfersApi.md#partner_transfers_initiate) | **POST** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/initiateTransfer | 
[**partner_transfers_list**](TransfersApi.md#partner_transfers_list) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/transfers | 
[**transfers_cancel**](TransfersApi.md#transfers_cancel) | **DELETE** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/transfers/{transferName} | 
[**transfers_get**](TransfersApi.md#transfers_get) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/transfers/{transferName} | 
[**transfers_initiate**](TransfersApi.md#transfers_initiate) | **POST** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/initiateTransfer | 
[**transfers_list**](TransfersApi.md#transfers_list) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/transfers | 


# **partner_transfers_cancel**
> TransferDetails partner_transfers_cancel(billing_account_name, billing_profile_name, customer_name, transfer_name)



Cancels the transfer for given transfer Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transfer_details import TransferDetails
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
    api_instance = openapi_client.TransfersApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    customer_name = 'customer_name_example' # str | Customer name.
    transfer_name = 'transfer_name_example' # str | Transfer Name.

    try:
        api_response = api_instance.partner_transfers_cancel(billing_account_name, billing_profile_name, customer_name, transfer_name)
        print("The response of TransfersApi->partner_transfers_cancel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransfersApi->partner_transfers_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **customer_name** | **str**| Customer name. | 
 **transfer_name** | **str**| Transfer Name. | 

### Return type

[**TransferDetails**](TransferDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details of canceled transfer. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partner_transfers_get**
> TransferDetails partner_transfers_get(billing_account_name, billing_profile_name, customer_name, transfer_name)



Gets the transfer details for given transfer Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transfer_details import TransferDetails
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
    api_instance = openapi_client.TransfersApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    customer_name = 'customer_name_example' # str | Customer name.
    transfer_name = 'transfer_name_example' # str | Transfer Name.

    try:
        api_response = api_instance.partner_transfers_get(billing_account_name, billing_profile_name, customer_name, transfer_name)
        print("The response of TransfersApi->partner_transfers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransfersApi->partner_transfers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **customer_name** | **str**| Customer name. | 
 **transfer_name** | **str**| Transfer Name. | 

### Return type

[**TransferDetails**](TransferDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details of transfer. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partner_transfers_initiate**
> TransferDetails partner_transfers_initiate(billing_account_name, billing_profile_name, customer_name, parameters)



Initiates the request to transfer the legacy subscriptions or RIs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.initiate_transfer_request import InitiateTransferRequest
from openapi_client.models.transfer_details import TransferDetails
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
    api_instance = openapi_client.TransfersApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    customer_name = 'customer_name_example' # str | Customer name.
    parameters = openapi_client.InitiateTransferRequest() # InitiateTransferRequest | Parameters supplied to initiate the transfer.

    try:
        api_response = api_instance.partner_transfers_initiate(billing_account_name, billing_profile_name, customer_name, parameters)
        print("The response of TransfersApi->partner_transfers_initiate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransfersApi->partner_transfers_initiate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **customer_name** | **str**| Customer name. | 
 **parameters** | [**InitiateTransferRequest**](InitiateTransferRequest.md)| Parameters supplied to initiate the transfer. | 

### Return type

[**TransferDetails**](TransferDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Initiated transfer details. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partner_transfers_list**
> TransferDetailsListResult partner_transfers_list(billing_account_name, billing_profile_name, customer_name)



Lists all transfer's details initiated from given invoice section.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transfer_details_list_result import TransferDetailsListResult
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
    api_instance = openapi_client.TransfersApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    customer_name = 'customer_name_example' # str | Customer name.

    try:
        api_response = api_instance.partner_transfers_list(billing_account_name, billing_profile_name, customer_name)
        print("The response of TransfersApi->partner_transfers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransfersApi->partner_transfers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **customer_name** | **str**| Customer name. | 

### Return type

[**TransferDetailsListResult**](TransferDetailsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of transfers initiated from this invoice section. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transfers_cancel**
> TransferDetails transfers_cancel(billing_account_name, billing_profile_name, invoice_section_name, transfer_name)



Cancels the transfer for given transfer Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transfer_details import TransferDetails
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
    api_instance = openapi_client.TransfersApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    transfer_name = 'transfer_name_example' # str | Transfer Name.

    try:
        api_response = api_instance.transfers_cancel(billing_account_name, billing_profile_name, invoice_section_name, transfer_name)
        print("The response of TransfersApi->transfers_cancel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransfersApi->transfers_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **transfer_name** | **str**| Transfer Name. | 

### Return type

[**TransferDetails**](TransferDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details of canceled transfer. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transfers_get**
> TransferDetails transfers_get(billing_account_name, billing_profile_name, invoice_section_name, transfer_name)



Gets the transfer details for given transfer Id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transfer_details import TransferDetails
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
    api_instance = openapi_client.TransfersApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    transfer_name = 'transfer_name_example' # str | Transfer Name.

    try:
        api_response = api_instance.transfers_get(billing_account_name, billing_profile_name, invoice_section_name, transfer_name)
        print("The response of TransfersApi->transfers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransfersApi->transfers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **transfer_name** | **str**| Transfer Name. | 

### Return type

[**TransferDetails**](TransferDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details of transfer. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transfers_initiate**
> TransferDetails transfers_initiate(billing_account_name, billing_profile_name, invoice_section_name, parameters)



Initiates the request to transfer the legacy subscriptions or RIs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.initiate_transfer_request import InitiateTransferRequest
from openapi_client.models.transfer_details import TransferDetails
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
    api_instance = openapi_client.TransfersApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    parameters = openapi_client.InitiateTransferRequest() # InitiateTransferRequest | Parameters supplied to initiate the transfer.

    try:
        api_response = api_instance.transfers_initiate(billing_account_name, billing_profile_name, invoice_section_name, parameters)
        print("The response of TransfersApi->transfers_initiate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransfersApi->transfers_initiate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **parameters** | [**InitiateTransferRequest**](InitiateTransferRequest.md)| Parameters supplied to initiate the transfer. | 

### Return type

[**TransferDetails**](TransferDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Initiated transfer details. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transfers_list**
> TransferDetailsListResult transfers_list(billing_account_name, billing_profile_name, invoice_section_name)



Lists all transfer's details initiated from given invoice section.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.transfer_details_list_result import TransferDetailsListResult
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
    api_instance = openapi_client.TransfersApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.

    try:
        api_response = api_instance.transfers_list(billing_account_name, billing_profile_name, invoice_section_name)
        print("The response of TransfersApi->transfers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransfersApi->transfers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 

### Return type

[**TransferDetailsListResult**](TransferDetailsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of transfers initiated from this invoice section. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

