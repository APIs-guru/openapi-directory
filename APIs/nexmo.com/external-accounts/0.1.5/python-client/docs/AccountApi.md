# openapi_client.AccountApi

All URIs are relative to *https://api.nexmo.com/beta/chatapp-accounts*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_all_accounts**](AccountApi.md#get_all_accounts) | **GET** / | Retrieve all accounts you own


# **get_all_accounts**
> GetAllAccounts200Response get_all_accounts(provider=provider, page_number=page_number, page_size=page_size)

Retrieve all accounts you own

### Example

* Basic Authentication (basicAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_all_accounts200_response import GetAllAccounts200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/beta/chatapp-accounts
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/beta/chatapp-accounts"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    provider = 'provider_example' # str | Filter by provider (optional)
    page_number = 1 # int | Page number of the results (optional) (default to 1)
    page_size = 20 # int | Page size of the results (optional) (default to 20)

    try:
        # Retrieve all accounts you own
        api_response = api_instance.get_all_accounts(provider=provider, page_number=page_number, page_size=page_size)
        print("The response of AccountApi->get_all_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_all_accounts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **str**| Filter by provider | [optional] 
 **page_number** | **int**| Page number of the results | [optional] [default to 1]
 **page_size** | **int**| Page size of the results | [optional] [default to 20]

### Return type

[**GetAllAccounts200Response**](GetAllAccounts200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

