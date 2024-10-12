# openapi_client.PricesheetsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billing_profile_pricesheet_download**](PricesheetsApi.md#billing_profile_pricesheet_download) | **POST** /providers/Microsoft.Consumption/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/pricesheet/default/download | 
[**invoice_pricesheet_download**](PricesheetsApi.md#invoice_pricesheet_download) | **POST** /providers/Microsoft.Consumption/billingAccounts/{billingAccountId}/invoices/{invoiceName}/pricesheet/default/download | 


# **billing_profile_pricesheet_download**
> PricesheetDownloadResponse billing_profile_pricesheet_download(api_version, billing_account_id, billing_profile_id)



Get pricesheet data for invoice id (invoiceName).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pricesheet_download_response import PricesheetDownloadResponse
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
    api_instance = openapi_client.PricesheetsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_id = 'billing_account_id_example' # str | Azure Billing Account Id.
    billing_profile_id = 'billing_profile_id_example' # str | Azure Billing Profile Id.

    try:
        api_response = api_instance.billing_profile_pricesheet_download(api_version, billing_account_id, billing_profile_id)
        print("The response of PricesheetsApi->billing_profile_pricesheet_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesheetsApi->billing_profile_pricesheet_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_id** | **str**| Azure Billing Account Id. | 
 **billing_profile_id** | **str**| Azure Billing Profile Id. | 

### Return type

[**PricesheetDownloadResponse**](PricesheetDownloadResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. |  * Retry-After - The amount of delay to use while the status of the operation is checked. The value is expressed in seconds. <br>  * OData-EntityId - The operation entity Id GUID. <br>  * Azure-AsyncOperation - To get the progress of the operation, call GET operation on the URL in Azure-AsyncOperation header field. <br>  * Location - GET this URL to retrieve the status of the asynchronous operation. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invoice_pricesheet_download**
> PricesheetDownloadResponse invoice_pricesheet_download(api_version, billing_account_id, invoice_name)



Get pricesheet data for invoice id (invoiceName).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pricesheet_download_response import PricesheetDownloadResponse
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
    api_instance = openapi_client.PricesheetsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_id = 'billing_account_id_example' # str | Azure Billing Account Id.
    invoice_name = 'invoice_name_example' # str | The name of an invoice resource.

    try:
        api_response = api_instance.invoice_pricesheet_download(api_version, billing_account_id, invoice_name)
        print("The response of PricesheetsApi->invoice_pricesheet_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesheetsApi->invoice_pricesheet_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_id** | **str**| Azure Billing Account Id. | 
 **invoice_name** | **str**| The name of an invoice resource. | 

### Return type

[**PricesheetDownloadResponse**](PricesheetDownloadResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. |  * Retry-After - The amount of delay to use while the status of the operation is checked. The value is expressed in seconds. <br>  * OData-EntityId - The operation entity Id GUID. <br>  * Azure-AsyncOperation - To get the progress of the operation, call GET operation on the URL in Azure-AsyncOperation header field. <br>  * Location - GET this URL to retrieve the status of the asynchronous operation. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

