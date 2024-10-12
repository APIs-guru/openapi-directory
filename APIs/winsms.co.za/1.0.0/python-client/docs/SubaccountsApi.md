# openapi_client.SubaccountsApi

All URIs are relative to *https://www.winsms.co.za/api/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_sub_accounts**](SubaccountsApi.md#get_sub_accounts) | **GET** /subaccounts | Get a list of all Sub Accounts.


# **get_sub_accounts**
> SubAccountsResponse get_sub_accounts()

Get a list of all Sub Accounts.

Get a list of all the Sub Accounts owned by the Main Account.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.sub_accounts_response import SubAccountsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.winsms.co.za/api/rest/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.winsms.co.za/api/rest/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SubaccountsApi(api_client)

    try:
        # Get a list of all Sub Accounts.
        api_response = api_instance.get_sub_accounts()
        print("The response of SubaccountsApi->get_sub_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubaccountsApi->get_sub_accounts: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SubAccountsResponse**](SubAccountsResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |
**405** | Method Not Allowed |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

