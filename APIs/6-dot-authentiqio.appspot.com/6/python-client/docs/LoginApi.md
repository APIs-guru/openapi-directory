# openapi_client.LoginApi

All URIs are relative to *https://6-dot-authentiqio.appspot.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**push_login_request**](LoginApi.md#push_login_request) | **POST** /login | 


# **push_login_request**
> PushLoginRequest200Response push_login_request(param_callback, push_token)



push sign-in request See: https://github.com/skion/authentiq/wiki/JWT-Examples 

### Example


```python
import openapi_client
from openapi_client.models.push_login_request200_response import PushLoginRequest200Response
from openapi_client.models.push_token import PushToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://6-dot-authentiqio.appspot.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://6-dot-authentiqio.appspot.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LoginApi(api_client)
    param_callback = 'param_callback_example' # str | URI App will connect to
    push_token = openapi_client.PushToken() # PushToken | Push Token.

    try:
        api_response = api_instance.push_login_request(param_callback, push_token)
        print("The response of LoginApi->push_login_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LoginApi->push_login_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param_callback** | **str**| URI App will connect to | 
 **push_token** | [**PushToken**](PushToken.md)| Push Token. | 

### Return type

[**PushLoginRequest200Response**](PushLoginRequest200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/jwt
 - **Accept**: application/json, */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized for this callback audience &#x60;aud-error&#x60; or JWT should be self-signed &#x60;auth-error&#x60; |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

