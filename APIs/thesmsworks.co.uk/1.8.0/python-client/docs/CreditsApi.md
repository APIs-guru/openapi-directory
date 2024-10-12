# openapi_client.CreditsApi

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**credits_balance_get**](CreditsApi.md#credits_balance_get) | **GET** /credits/balance | 


# **credits_balance_get**
> CreditsResponse credits_balance_get()



Returns the number of credits currently available on the account

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.credits_response import CreditsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.thesmsworks.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.thesmsworks.co.uk/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CreditsApi(api_client)

    try:
        api_response = api_instance.credits_balance_get()
        print("The response of CreditsApi->credits_balance_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CreditsApi->credits_balance_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CreditsResponse**](CreditsResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

