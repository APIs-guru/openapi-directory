# openapi_client.AppsApi

All URIs are relative to *http://mastodon.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_apps_post**](AppsApi.md#api_v1_apps_post) | **POST** /api/v1/apps | 
[**api_v1_apps_verify_credentials_get**](AppsApi.md#api_v1_apps_verify_credentials_get) | **GET** /api/v1/apps/verify_credentials | 


# **api_v1_apps_post**
> ApiV1AppsPost200Response api_v1_apps_post(api_v1_apps_post_request=api_v1_apps_post_request)



Create a new application to obtain OAuth2 credentials.

### Example


```python
import openapi_client
from openapi_client.models.api_v1_apps_post200_response import ApiV1AppsPost200Response
from openapi_client.models.api_v1_apps_post_request import ApiV1AppsPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    api_v1_apps_post_request = openapi_client.ApiV1AppsPostRequest() # ApiV1AppsPostRequest |  (optional)

    try:
        api_response = api_instance.api_v1_apps_post(api_v1_apps_post_request=api_v1_apps_post_request)
        print("The response of AppsApi->api_v1_apps_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->api_v1_apps_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_v1_apps_post_request** | [**ApiV1AppsPostRequest**](ApiV1AppsPostRequest.md)|  | [optional] 

### Return type

[**ApiV1AppsPost200Response**](ApiV1AppsPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**422** | If a required parameter is missing or improperly formatted, the request will fail. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_apps_verify_credentials_get**
> Application api_v1_apps_verify_credentials_get()



Confirm that the app's OAuth2 credentials work.

### Example

* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)

    try:
        api_response = api_instance.api_v1_apps_verify_credentials_get()
        print("The response of AppsApi->api_v1_apps_verify_credentials_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->api_v1_apps_verify_credentials_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Application**](Application.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If the Authorization header was provided with a valid token, you should see your app returned as an Application entity. |  -  |
**401** | If the Authorization header contains an invalid token, is malformed, or is not present, an error will be returned indicating an authorization failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

