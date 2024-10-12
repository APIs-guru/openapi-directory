# openapi_client.TokensApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokens_get_ephemeral_token**](TokensApi.md#tokens_get_ephemeral_token) | **POST** /v1/tokens/ephemeral | Get Ephemeral Token


# **tokens_get_ephemeral_token**
> TokensGetEphemeralTokenResponseBodyYaml tokens_get_ephemeral_token(redirect=redirect)

Get Ephemeral Token

This endpoint returns a token that can be passed to an application for authorized access.  The lifetime of this token is 10 seconds.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.redirect import Redirect
from openapi_client.models.tokens_get_ephemeral_token_response_body_yaml import TokensGetEphemeralTokenResponseBodyYaml
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TokensApi(api_client)
    redirect = openapi_client.Redirect() # Redirect | Include a redirect url to the application formatted with the ephemeral token. (optional)

    try:
        # Get Ephemeral Token
        api_response = api_instance.tokens_get_ephemeral_token(redirect=redirect)
        print("The response of TokensApi->tokens_get_ephemeral_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokensApi->tokens_get_ephemeral_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirect** | [**Redirect**](.md)| Include a redirect url to the application formatted with the ephemeral token. | [optional] 

### Return type

[**TokensGetEphemeralTokenResponseBodyYaml**](TokensGetEphemeralTokenResponseBodyYaml.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

