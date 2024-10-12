# openapi_client.LotsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lots_by_billing_profile_list**](LotsApi.md#lots_by_billing_profile_list) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/providers/Microsoft.Consumption/lots | 


# **lots_by_billing_profile_list**
> Lots lots_by_billing_profile_list(billing_account_id, billing_profile_id, api_version)



Lists the lots by billingAccountId and billingProfileId for given start and end date.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lots import Lots
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
    api_instance = openapi_client.LotsApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    billing_profile_id = 'billing_profile_id_example' # str | Billing Profile Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.

    try:
        api_response = api_instance.lots_by_billing_profile_list(billing_account_id, billing_profile_id, api_version)
        print("The response of LotsApi->lots_by_billing_profile_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LotsApi->lots_by_billing_profile_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| BillingAccount ID | 
 **billing_profile_id** | **str**| Billing Profile Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 

### Return type

[**Lots**](Lots.md)

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

