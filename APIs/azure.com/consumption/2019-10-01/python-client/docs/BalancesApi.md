# openapi_client.BalancesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**balances_get_by_billing_account**](BalancesApi.md#balances_get_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Consumption/balances | 
[**balances_get_for_billing_period_by_billing_account**](BalancesApi.md#balances_get_for_billing_period_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}/providers/Microsoft.Consumption/balances | 


# **balances_get_by_billing_account**
> Balance balances_get_by_billing_account(api_version, billing_account_id)



Gets the balances for a scope by billingAccountId. Balances are available via this API only for May 1, 2014 or later.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.balance import Balance
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
    api_instance = openapi_client.BalancesApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID

    try:
        api_response = api_instance.balances_get_by_billing_account(api_version, billing_account_id)
        print("The response of BalancesApi->balances_get_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BalancesApi->balances_get_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01. | 
 **billing_account_id** | **str**| BillingAccount ID | 

### Return type

[**Balance**](Balance.md)

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

# **balances_get_for_billing_period_by_billing_account**
> Balance balances_get_for_billing_period_by_billing_account(api_version, billing_account_id, billing_period_name)



Gets the balances for a scope by billing period and billingAccountId. Balances are available via this API only for May 1, 2014 or later.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.balance import Balance
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
    api_instance = openapi_client.BalancesApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    billing_period_name = 'billing_period_name_example' # str | Billing Period Name.

    try:
        api_response = api_instance.balances_get_for_billing_period_by_billing_account(api_version, billing_account_id, billing_period_name)
        print("The response of BalancesApi->balances_get_for_billing_period_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BalancesApi->balances_get_for_billing_period_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **billing_period_name** | **str**| Billing Period Name. | 

### Return type

[**Balance**](Balance.md)

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

