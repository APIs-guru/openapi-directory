# openapi_client.ReservationTransactionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reservation_transactions_list**](ReservationTransactionsApi.md#reservation_transactions_list) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Consumption/reservationTransactions | 


# **reservation_transactions_list**
> ReservationTransactionsListResult reservation_transactions_list(api_version, billing_account_id, filter=filter)



List of transactions for reserved instances on billing account scope

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.reservation_transactions_list_result import ReservationTransactionsListResult
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
    api_instance = openapi_client.ReservationTransactionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    filter = 'filter_example' # str | Filter reservation transactions by date range. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge'  (optional)

    try:
        api_response = api_instance.reservation_transactions_list(api_version, billing_account_id, filter=filter)
        print("The response of ReservationTransactionsApi->reservation_transactions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationTransactionsApi->reservation_transactions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **filter** | **str**| Filter reservation transactions by date range. The properties/UsageDate for start date and end date. The filter supports &#39;le&#39; and  &#39;ge&#39;  | [optional] 

### Return type

[**ReservationTransactionsListResult**](ReservationTransactionsListResult.md)

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

