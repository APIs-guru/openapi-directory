# openapi_client.SessionManagementApi

All URIs are relative to *https://connect.authentiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorize_iframe**](SessionManagementApi.md#authorize_iframe) | **GET** /{client_id}/iframe | Include a session iframe


# **authorize_iframe**
> authorize_iframe(client_id)

Include a session iframe

An OpenID Connect Session Management iframe to facilitate e.g. single sign-on or remote logouts.  The iframe implements the OIDC postMessage-based [change notification protocol](http://openid.net/specs/openid-connect-session-1_0.html#ChangeNotification) via which a client can receive notifications about session state changes. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.authentiq.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.authentiq.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionManagementApi(api_client)
    client_id = 'client_id_example' # str | Client identifier

    try:
        # Include a session iframe
        api_instance.authorize_iframe(client_id)
    except Exception as e:
        print("Exception when calling SessionManagementApi->authorize_iframe: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| Client identifier | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Cache-Control - public, max-age&#x3D;7200 <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

