# openapi_client.OAuthApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_oauth_authorize_post**](OAuthApi.md#api_oauth_authorize_post) | **POST** /api/oauth/authorize | 
[**o_auth_authorize**](OAuthApi.md#o_auth_authorize) | **GET** /api/oauth/authorize | 


# **api_oauth_authorize_post**
> object api_oauth_authorize_post(client_id, redirect_uri, state, scope=scope, client_secret=client_secret)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OAuthApi(api_client)
    client_id = 'client_id_example' # str | 
    redirect_uri = 'redirect_uri_example' # str | 
    state = 'state_example' # str | 
    scope = 'scope_example' # str |  (optional)
    client_secret = 'client_secret_example' # str |  (optional)

    try:
        api_response = api_instance.api_oauth_authorize_post(client_id, redirect_uri, state, scope=scope, client_secret=client_secret)
        print("The response of OAuthApi->api_oauth_authorize_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OAuthApi->api_oauth_authorize_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**|  | 
 **redirect_uri** | **str**|  | 
 **state** | **str**|  | 
 **scope** | **str**|  | [optional] 
 **client_secret** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **o_auth_authorize**
> object o_auth_authorize(client_id, redirect_uri, state, scope=scope, client_secret=client_secret)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OAuthApi(api_client)
    client_id = 'client_id_example' # str | 
    redirect_uri = 'redirect_uri_example' # str | 
    state = 'state_example' # str | 
    scope = 'scope_example' # str |  (optional)
    client_secret = 'client_secret_example' # str |  (optional)

    try:
        api_response = api_instance.o_auth_authorize(client_id, redirect_uri, state, scope=scope, client_secret=client_secret)
        print("The response of OAuthApi->o_auth_authorize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OAuthApi->o_auth_authorize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**|  | 
 **redirect_uri** | **str**|  | 
 **state** | **str**|  | 
 **scope** | **str**|  | [optional] 
 **client_secret** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

