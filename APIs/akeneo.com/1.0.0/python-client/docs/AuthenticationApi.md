# openapi_client.AuthenticationApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**post_token**](AuthenticationApi.md#post_token) | **POST** /api/oauth/v1/token | Get authentication token


# **post_token**
> PostToken200Response post_token(content_type, authorization, body=body)

Get authentication token

This endpoint allows you to get an authentication token. No need to be authenticated to use this endpoint.

### Example


```python
import openapi_client
from openapi_client.models.post_token200_response import PostToken200Response
from openapi_client.models.post_token_request import PostTokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    content_type = 'content_type_example' # str | Equal to 'application/json' or 'application/x-www-form-urlencoded', no other value allowed
    authorization = 'authorization_example' # str | Equal to 'Basic xx', where 'xx' is the base 64 encoding of the client id and secret. Find out how to generate them in the <a href=\"/documentation/authentication.html#client-idsecret-generation\">Client ID/secret generation</a> section.
    body = openapi_client.PostTokenRequest() # PostTokenRequest |  (optional)

    try:
        # Get authentication token
        api_response = api_instance.post_token(content_type, authorization, body=body)
        print("The response of AuthenticationApi->post_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->post_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| Equal to &#39;application/json&#39; or &#39;application/x-www-form-urlencoded&#39;, no other value allowed | 
 **authorization** | **str**| Equal to &#39;Basic xx&#39;, where &#39;xx&#39; is the base 64 encoding of the client id and secret. Find out how to generate them in the &lt;a href&#x3D;\&quot;/documentation/authentication.html#client-idsecret-generation\&quot;&gt;Client ID/secret generation&lt;/a&gt; section. | 
 **body** | [**PostTokenRequest**](PostTokenRequest.md)|  | [optional] 

### Return type

[**PostToken200Response**](PostToken200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, access_token, expires_in, refresh_token, token_type, code, message, _links

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return an authentication token |  -  |
**400** | Bad request |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

