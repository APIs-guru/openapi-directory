# openapi_client.AvailableBalancesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**available_balances_get_by_billing_profile**](AvailableBalancesApi.md#available_balances_get_by_billing_profile) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/availableBalance/default | 


# **available_balances_get_by_billing_profile**
> AvailableBalance available_balances_get_by_billing_profile(billing_account_name, billing_profile_name, api_version)



The latest available credit balance for a given billingAccountName and billingProfileName.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.available_balance import AvailableBalance
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
    api_instance = openapi_client.AvailableBalancesApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.

    try:
        api_response = api_instance.available_balances_get_by_billing_profile(billing_account_name, billing_profile_name, api_version)
        print("The response of AvailableBalancesApi->available_balances_get_by_billing_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailableBalancesApi->available_balances_get_by_billing_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 

### Return type

[**AvailableBalance**](AvailableBalance.md)

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

