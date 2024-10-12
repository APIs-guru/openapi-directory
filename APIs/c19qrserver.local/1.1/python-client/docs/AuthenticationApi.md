# openapi_client.AuthenticationApi

All URIs are relative to *http://c19qrserver.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login_post**](AuthenticationApi.md#login_post) | **POST** /login | Log in to get an API token
[**logout_post**](AuthenticationApi.md#logout_post) | **POST** /logout | Log out


# **login_post**
> LoginResponse login_post(sample1)

Log in to get an API token

Submit your email and password to get an API token

### Example


```python
import openapi_client
from openapi_client.models.login_response import LoginResponse
from openapi_client.models.sample1 import Sample1
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://c19qrserver.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://c19qrserver.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    sample1 = openapi_client.Sample1() # Sample1 | The login payload

    try:
        # Log in to get an API token
        api_response = api_instance.login_post(sample1)
        print("The response of AuthenticationApi->login_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->login_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sample1** | [**Sample1**](Sample1.md)| The login payload | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logout_post**
> logout_post()

Log out

Log out by deleting your token off the server.

### Example

* Api Key Authentication (TokenHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://c19qrserver.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://c19qrserver.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenHeader
configuration.api_key['TokenHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)

    try:
        # Log out
        api_instance.logout_post()
    except Exception as e:
        print("Exception when calling AuthenticationApi->logout_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[TokenHeader](../README.md#TokenHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

